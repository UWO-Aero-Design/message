// source: header.proto
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

goog.exportSymbol('proto.Header', null, global);
goog.exportSymbol('proto.Location', null, global);
goog.exportSymbol('proto.Status', null, global);
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
proto.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Header.displayName = 'proto.Header';
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
proto.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, 0),
    receiver: jspb.Message.getFieldWithDefault(msg, 2, 0),
    packetNumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.Header}
 */
proto.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Header;
  return proto.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Header}
 */
proto.Header.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Location} */ (reader.readEnum());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {!proto.Location} */ (reader.readEnum());
      msg.setReceiver(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPacketNumber(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReceiver();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPacketNumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional Location sender = 1;
 * @return {!proto.Location}
 */
proto.Header.prototype.getSender = function() {
  return /** @type {!proto.Location} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Location} value
 * @return {!proto.Header} returns this
 */
proto.Header.prototype.setSender = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Location receiver = 2;
 * @return {!proto.Location}
 */
proto.Header.prototype.getReceiver = function() {
  return /** @type {!proto.Location} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Location} value
 * @return {!proto.Header} returns this
 */
proto.Header.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 packet_number = 3;
 * @return {number}
 */
proto.Header.prototype.getPacketNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Header} returns this
 */
proto.Header.prototype.setPacketNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 time = 4;
 * @return {number}
 */
proto.Header.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Header} returns this
 */
proto.Header.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Status status = 5;
 * @return {!proto.Status}
 */
proto.Header.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.Status} value
 * @return {!proto.Header} returns this
 */
proto.Header.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.Location = {
  GROUND_STATION: 0,
  PLANE: 1,
  ANY: 2
};

/**
 * @enum {number}
 */
proto.Status = {
  READY: 0,
  PADA_ARMED: 1
};

goog.object.extend(exports, proto);
