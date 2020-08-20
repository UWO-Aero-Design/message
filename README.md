# Western Aero Design Team - Messaging Protocol

The following is the Protocol Buffer definition used by Western Aero designs uplink and downlink communications for telemetry/commands on the main aircraft and supporting gliders.


## Running

Make sure you have [Protocol Buffers](https://developers.google.com/protocol-buffers) and [Make](https://www.gnu.org/software/make/) installed.

```sh
git clone https://github.com/UWO-Aero-Design/message
cd message/proto
make
```
The resulting libraries are available in `dist/`. Use `make clean` to remove.