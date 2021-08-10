/* eslint no-console: 0 */
const streams = require('memory-streams');

const fetchUrl = require('../helpers/fetch');
const readJson = require('../helpers/read-json');
const { fetchGraphic, parseRegions, writeRegions } = require('./get-regions');

jest.mock(('../helpers/fetch'));

const parsedRegions = [
  { name: 'disorder', start: 983, end: 985 },
  { name: 'disorder', start: 1034, end: 1037 },
  { name: 'disorder', start: 1061, end: 1064 },
  { name: 'disorder', start: 1068, end: 1085 },
  { name: 'disorder', start: 1087, end: 1139 },
  { name: 'disorder', start: 1143, end: 1145 },
  { name: 'disorder', start: 1150, end: 1154 },
  { name: 'disorder', start: 1157, end: 1185 },
  { name: 'disorder', start: 1187, end: 1195 },
  { name: 'disorder', start: 1198, end: 1201 },
  { name: 'sig_p', start: 1, end: 24 },
  { name: 'transmembrane', start: 646, end: 667 },
  { name: 'low_complexity', start: 6, end: 24 },
  { name: 'low_complexity', start: 650, end: 665 },
  { name: 'low_complexity', start: 674, end: 691 },
  { name: 'low_complexity', start: 1001, end: 1014 },
  { name: 'low_complexity', start: 1024, end: 1045 },
];

let json;
beforeAll(async () => {
  json = await readJson(`${__dirname}/../files/example/pfam-graphic.json`)
});

describe('Parse regions', () => {
  it('should parse regions from json', () => {
    const regions = parseRegions(json[0]);
    expect(regions).toEqual(parsedRegions);
  });
});

describe('Fetch graphic', () => {
  describe('successful fetch', () => {
    let regions;

    beforeAll(async () => {
      fetchUrl.mockResolvedValueOnce(json);
      regions = await fetchGraphic('P00533');
    });

    it('should call fetchUrl', () => {
      expect(fetchUrl).toHaveBeenCalledWith('http://pfam.xfam.org/protein/P00533/graphic');
    });

    it('should resolve with regions', () => {
      expect(regions).toEqual(parsedRegions);
    });
  });

  describe('unsuccessful fetch', () => {
    let regions;

    beforeAll(async () => {
      fetchUrl.mockRejectedValueOnce(new Error());
      regions = await fetchGraphic('P00533');
    });

    it('should return empty array', () => {
      expect(regions).toEqual([]);
    });
  });
});

describe('Write regions', () => {
  let stream;

  beforeAll(() => {
    stream = new streams.WritableStream();
    writeRegions('P00533', parsedRegions, stream);
  });

  it('should write regions to file', () => {
    const expected = 'P00533\tdisorder\t983\t985\nP00533\tdisorder\t1034\t1037\nP00533\tdisorder\t1061\t1064\nP00533\tdisorder\t1068\t1085\nP00533\tdisorder\t1087\t1139\nP00533\tdisorder\t1143\t1145\nP00533\tdisorder\t1150\t1154\nP00533\tdisorder\t1157\t1185\nP00533\tdisorder\t1187\t1195\nP00533\tdisorder\t1198\t1201\nP00533\tsig_p\t1\t24\nP00533\ttransmembrane\t646\t667\nP00533\tlow_complexity\t6\t24\nP00533\tlow_complexity\t650\t665\nP00533\tlow_complexity\t674\t691\nP00533\tlow_complexity\t1001\t1014\nP00533\tlow_complexity\t1024\t1045\n';
    expect(stream.toString()).toBe(expected);
  });
});
