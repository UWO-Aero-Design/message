// source: telemetry.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var header_pb = require('./header_pb.js');
goog.object.extend(proto, header_pb);
var sensors_pb = require('./sensors_pb.js');
goog.object.extend(proto, sensors_pb);
goog.exportSymbol('proto.Telemetry', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Telemetry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Telemetry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Telemetry.displayName = 'proto.Telemetry';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Telemetry.prototype.toObject = function(opt_includeInstance) {
  return proto.Telemetry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Telemetry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Telemetry.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && header_pb.Header.toObject(includeInstance, f),
    imu: (f = msg.getImu()) && sensors_pb.ImuData.toObject(includeInstance, f),
    gps: (f = msg.getGps()) && sensors_pb.GpsData.toObject(includeInstance, f),
    enviro: (f = msg.getEnviro()) && sensors_pb.EnviroData.toObject(includeInstance, f),
    battery: (f = msg.getBattery()) && sensors_pb.BatteryData.toObject(includeInstance, f),
    planeRadio: (f = msg.getPlaneRadio()) && sensors_pb.RadioData.toObject(includeInstance, f),
    gndRadio: (f = msg.getGndRadio()) && sensors_pb.RadioData.toObject(includeInstance, f),
    responseTo: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Telemetry}
 */
proto.Telemetry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Telemetry;
  return proto.Telemetry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Telemetry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Telemetry}
 */
proto.Telemetry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new header_pb.Header;
      reader.readMessage(value,header_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new sensors_pb.ImuData;
      reader.readMessage(value,sensors_pb.ImuData.deserializeBinaryFromReader);
      msg.setImu(value);
      break;
    case 3:
      var value = new sensors_pb.GpsData;
      reader.readMessage(value,sensors_pb.GpsData.deserializeBinaryFromReader);
      msg.setGps(value);
      break;
    case 4:
      var value = new sensors_pb.EnviroData;
      reader.readMessage(value,sensors_pb.EnviroData.deserializeBinaryFromReader);
      msg.setEnviro(value);
      break;
    case 5:
      var value = new sensors_pb.BatteryData;
      reader.readMessage(value,sensors_pb.BatteryData.deserializeBinaryFromReader);
      msg.setBattery(value);
      break;
    case 6:
      var value = new sensors_pb.RadioData;
      reader.readMessage(value,sensors_pb.RadioData.deserializeBinaryFromReader);
      msg.setPlaneRadio(value);
      break;
    case 7:
      var value = new sensors_pb.RadioData;
      reader.readMessage(value,sensors_pb.RadioData.deserializeBinaryFromReader);
      msg.setGndRadio(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResponseTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Telemetry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Telemetry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Telemetry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Telemetry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      header_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getImu();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sensors_pb.ImuData.serializeBinaryToWriter
    );
  }
  f = message.getGps();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      sensors_pb.GpsData.serializeBinaryToWriter
    );
  }
  f = message.getEnviro();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      sensors_pb.EnviroData.serializeBinaryToWriter
    );
  }
  f = message.getBattery();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sensors_pb.BatteryData.serializeBinaryToWriter
    );
  }
  f = message.getPlaneRadio();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      sensors_pb.RadioData.serializeBinaryToWriter
    );
  }
  f = message.getGndRadio();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      sensors_pb.RadioData.serializeBinaryToWriter
    );
  }
  f = message.getResponseTo();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.Header}
 */
proto.Telemetry.prototype.getHeader = function() {
  return /** @type{?proto.Header} */ (
    jspb.Message.getWrapperField(this, header_pb.Header, 1));
};


/**
 * @param {?proto.Header|undefined} value
 * @return {!proto.Telemetry} returns this
*/
proto.Telemetry.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Telemetry} returns this
 */
proto.Telemetry.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Telemetry.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ImuData imu = 2;
 * @return {?proto.ImuData}
 */
proto.Telemetry.prototype.getImu = function() {
  return /** @type{?proto.ImuData} */ (
    jspb.Message.getWrapperField(this, sensors_pb.ImuData, 2));
};


/**
 * @param {?proto.ImuData|undefined} value
 * @return {!proto.Telemetry} returns this
*/
proto.Telemetry.prototype.setImu = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Telemetry} returns this
 */
proto.Telemetry.prototype.clearImu = function() {
  return this.setImu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Telemetry.prototype.hasImu = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GpsData gps = 3;
 * @return {?proto.GpsData}
 */
proto.Telemetry.prototype.getGps = function() {
  return /** @type{?proto.GpsData} */ (
    jspb.Message.getWrapperField(this, sensors_pb.GpsData, 3));
};


/**
 * @param {?proto.GpsData|undefined} value
 * @return {!proto.Telemetry} returns this
*/
proto.Telemetry.prototype.setGps = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Telemetry} returns this
 */
proto.Telemetry.prototype.clearGps = function() {
  return this.setGps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Telemetry.prototype.hasGps = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EnviroData enviro = 4;
 * @return {?proto.EnviroData}
 */
proto.Telemetry.prototype.getEnviro = function() {
  return /** @type{?proto.EnviroData} */ (
    jspb.Message.getWrapperField(this, sensors_pb.EnviroData, 4));
};


/**
 * @param {?proto.EnviroData|undefined} value
 * @return {!proto.Telemetry} returns this
*/
proto.Telemetry.prototype.setEnviro = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Telemetry} returns this
 */
proto.Telemetry.prototype.clearEnviro = function() {
  return this.setEnviro(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Telemetry.prototype.hasEnviro = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BatteryData battery = 5;
 * @return {?proto.BatteryData}
 */
proto.Telemetry.prototype.getBattery = function() {
  return /** @type{?proto.BatteryData} */ (
    jspb.Message.getWrapperField(this, sensors_pb.BatteryData, 5));
};


/**
 * @param {?proto.BatteryData|undefined} value
 * @return {!proto.Telemetry} returns this
*/
proto.Telemetry.prototype.setBattery = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Telemetry} returns this
 */
proto.Telemetry.prototype.clearBattery = function() {
  return this.setBattery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Telemetry.prototype.hasBattery = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RadioData plane_radio = 6;
 * @return {?proto.RadioData}
 */
proto.Telemetry.prototype.getPlaneRadio = function() {
  return /** @type{?proto.RadioData} */ (
    jspb.Message.getWrapperField(this, sensors_pb.RadioData, 6));
};


/**
 * @param {?proto.RadioData|undefined} value
 * @return {!proto.Telemetry} returns this
*/
proto.Telemetry.prototype.setPlaneRadio = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Telemetry} returns this
 */
proto.Telemetry.prototype.clearPlaneRadio = function() {
  return this.setPlaneRadio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Telemetry.prototype.hasPlaneRadio = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RadioData gnd_radio = 7;
 * @return {?proto.RadioData}
 */
proto.Telemetry.prototype.getGndRadio = function() {
  return /** @type{?proto.RadioData} */ (
    jspb.Message.getWrapperField(this, sensors_pb.RadioData, 7));
};


/**
 * @param {?proto.RadioData|undefined} value
 * @return {!proto.Telemetry} returns this
*/
proto.Telemetry.prototype.setGndRadio = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Telemetry} returns this
 */
proto.Telemetry.prototype.clearGndRadio = function() {
  return this.setGndRadio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Telemetry.prototype.hasGndRadio = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 response_to = 8;
 * @return {number}
 */
proto.Telemetry.prototype.getResponseTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Telemetry} returns this
 */
proto.Telemetry.prototype.setResponseTo = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


goog.object.extend(exports, proto);
