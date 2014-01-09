# node-fs-reader
```
                         /$$                 /$$
                        |__/                | $$
  /$$$$$$$ /$$$$$$/$$$$  /$$ /$$$$$$$   /$$$$$$$
 /$$_____/| $$_  $$_  $$| $$| $$__  $$ /$$__  $$
| $$      | $$ \ $$ \ $$| $$| $$  \ $$| $$  | $$
| $$      | $$ | $$ | $$| $$| $$  | $$| $$  | $$
|  $$$$$$$| $$ | $$ | $$| $$| $$  | $$|  $$$$$$$
 \_______/|__/ |__/ |__/|__/|__/  |__/ \_______/
```
## How to deploy app on Windows [Works 100%]

```
Download and install http://nodejs.org/
```

```
Download and install http://deployd.com/download.html
```

```
npm install bower -g
```

```
cd node-fs-reader
```
```
bower install
```

```
dpd -d
```

## How to deploy app on Ubuntu

```
apt-get update && apt-get upgrade
```

```
sudo apt-get install python-software-properties python g++ make
```

```
sudo add-apt-repository ppa:chris-lea/node.js
```

```
sudo apt-get update
```

```
sudo apt-get install nodejs
```

Check that you have the $NODE_PATH

```
echo $NODE_PATH
```

If there is no - Add this line to your ~/.bashrc or ~/.profile

```
export NODE_PATH=$NODE_PATH:/usr/lib/node_modules/
```

```
git clone https://beforeadream@bitbucket.org/beforeadream/node-fs-reader.git
```

```
npm install deployd -g
```

```
npm install bower -g
```

```
cd node-fs-reader
```

```
bower install
```

```
dpd -d
```

It should automatically open `dashboard` on `http://localhost:2403`