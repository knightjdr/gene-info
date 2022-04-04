# Appendix

## Installation

### AWS CDK

Requires Node.js and AWS CLI.

```
npm install -g aws-cdk
cdk --version
```

### AWS CLI V2

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
```

### Nodejs without sudo

```
mkdir -p ~/local/node
mkdir ~/node-latest-stable
cd ~/node-latest-stable
wget -c https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64.tar.xz
tar xvf node-v16.14.0-linux-x64.tar.xz --directory ~/local/node --strip-components=1
echo 'export PATH=$HOME/local/node/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

Confirm version number
```
node -v
npm -v
```

### Python dependencies to user account

```
pip3 install --user numpy pandas
```
