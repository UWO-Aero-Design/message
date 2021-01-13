// source: message.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IMU');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.IMU = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IMU, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.IMU.displayName = 'proto.IMU';
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
proto.IMU.prototype.toObject = function(opt_includeInstance) {
  return proto.IMU.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IMU} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IMU.toObject = function(includeInstance, msg) {
  var f, obj = {
    ax: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    ay: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    az: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    gx: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    gy: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    gz: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    mx: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    my: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    mz: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    yaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    roll: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0)
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
 * @return {!proto.IMU}
 */
proto.IMU.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IMU;
  return proto.IMU.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IMU} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IMU}
 */
proto.IMU.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAx(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAy(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAz(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGx(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGy(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGz(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMx(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMy(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMz(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYaw(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPitch(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRoll(value);
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
proto.IMU.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IMU.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IMU} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IMU.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAx();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getAy();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAz();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getGx();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getGy();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getGz();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getMx();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getMy();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getMz();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getYaw();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getPitch();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getRoll();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
};


/**
 * optional float ax = 1;
 * @return {number}
 */
proto.IMU.prototype.getAx = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setAx = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float ay = 2;
 * @return {number}
 */
proto.IMU.prototype.getAy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setAy = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float az = 3;
 * @return {number}
 */
proto.IMU.prototype.getAz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setAz = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float gx = 4;
 * @return {number}
 */
proto.IMU.prototype.getGx = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setGx = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float gy = 5;
 * @return {number}
 */
proto.IMU.prototype.getGy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setGy = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float gz = 6;
 * @return {number}
 */
proto.IMU.prototype.getGz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setGz = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float mx = 7;
 * @return {number}
 */
proto.IMU.prototype.getMx = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setMx = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float my = 8;
 * @return {number}
 */
proto.IMU.prototype.getMy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setMy = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float mz = 9;
 * @return {number}
 */
proto.IMU.prototype.getMz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setMz = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float yaw = 10;
 * @return {number}
 */
proto.IMU.prototype.getYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setYaw = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float pitch = 11;
 * @return {number}
 */
proto.IMU.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional float roll = 12;
 * @return {number}
 */
proto.IMU.prototype.getRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.IMU} returns this
 */
proto.IMU.prototype.setRoll = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


