# Western Aero Design Team - Messaging Protocol

The following is the Protocol Buffer definition used by Western Aero designs uplink and downlink communications for telemetry/commands on the main aircraft and supporting gliders.


## Running

Make sure you have [Protocol Buffers](https://developers.google.com/protocol-buffers), [Nanopb](https://github.com/nanopb/nanopb), and [Make](https://www.gnu.org/software/make/) installed.

```sh
git clone https://github.com/UWO-Aero-Design/message
cd message/proto
make
```
The resulting libraries are available in `message/dist/`. Use `make clean` to remove.

Note: if there are any issues with the `sed` command in the makefile, you can manually replace the angled bracket includes for `pb.h` in the `message.pb.h` file. Tested on OSX but not Linux or Windows.