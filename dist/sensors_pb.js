// source: sensors.proto
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

goog.exportSymbol('proto.BatteryData', null, global);
goog.exportSymbol('proto.EnviroData', null, global);
goog.exportSymbol('proto.GpsData', null, global);
goog.exportSymbol('proto.ImuData', null, global);
goog.exportSymbol('proto.RadioData', null, global);
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
proto.ImuData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ImuData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ImuData.displayName = 'proto.ImuData';
}
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
proto.GpsData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GpsData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GpsData.displayName = 'proto.GpsData';
}
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
proto.EnviroData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EnviroData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EnviroData.displayName = 'proto.EnviroData';
}
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
proto.BatteryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BatteryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BatteryData.displayName = 'proto.BatteryData';
}
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
proto.RadioData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RadioData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RadioData.displayName = 'proto.RadioData';
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
proto.ImuData.prototype.toObject = function(opt_includeInstance) {
  return proto.ImuData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ImuData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ImuData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ImuData}
 */
proto.ImuData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ImuData;
  return proto.ImuData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ImuData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ImuData}
 */
proto.ImuData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ImuData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ImuData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ImuData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ImuData.serializeBinaryToWriter = function(message, writer) {
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
proto.ImuData.prototype.getAx = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setAx = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float ay = 2;
 * @return {number}
 */
proto.ImuData.prototype.getAy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setAy = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float az = 3;
 * @return {number}
 */
proto.ImuData.prototype.getAz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setAz = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float gx = 4;
 * @return {number}
 */
proto.ImuData.prototype.getGx = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setGx = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float gy = 5;
 * @return {number}
 */
proto.ImuData.prototype.getGy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setGy = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float gz = 6;
 * @return {number}
 */
proto.ImuData.prototype.getGz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setGz = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float mx = 7;
 * @return {number}
 */
proto.ImuData.prototype.getMx = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setMx = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float my = 8;
 * @return {number}
 */
proto.ImuData.prototype.getMy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setMy = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float mz = 9;
 * @return {number}
 */
proto.ImuData.prototype.getMz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setMz = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float yaw = 10;
 * @return {number}
 */
proto.ImuData.prototype.getYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setYaw = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float pitch = 11;
 * @return {number}
 */
proto.ImuData.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional float roll = 12;
 * @return {number}
 */
proto.ImuData.prototype.getRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ImuData} returns this
 */
proto.ImuData.prototype.setRoll = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};





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
proto.GpsData.prototype.toObject = function(opt_includeInstance) {
  return proto.GpsData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GpsData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GpsData.toObject = function(includeInstance, msg) {
  var f, obj = {
    fix: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    lat: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    lon: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    speed: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    satellites: jspb.Message.getFieldWithDefault(msg, 5, 0),
    altitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    time: jspb.Message.getFieldWithDefault(msg, 7, 0),
    date: jspb.Message.getFieldWithDefault(msg, 8, 0),
    hdop: jspb.Message.getFieldWithDefault(msg, 9, 0),
    quality: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.GpsData}
 */
proto.GpsData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GpsData;
  return proto.GpsData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GpsData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GpsData}
 */
proto.GpsData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFix(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLon(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSatellites(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitude(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDate(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHdop(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQuality(value);
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
proto.GpsData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GpsData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GpsData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GpsData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFix();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getLon();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getSpeed();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getSatellites();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getAltitude();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getHdop();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getQuality();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional bool fix = 1;
 * @return {boolean}
 */
proto.GpsData.prototype.getFix = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setFix = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional float lat = 2;
 * @return {number}
 */
proto.GpsData.prototype.getLat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setLat = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float lon = 3;
 * @return {number}
 */
proto.GpsData.prototype.getLon = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setLon = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float speed = 4;
 * @return {number}
 */
proto.GpsData.prototype.getSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setSpeed = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint32 satellites = 5;
 * @return {number}
 */
proto.GpsData.prototype.getSatellites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setSatellites = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional float altitude = 6;
 * @return {number}
 */
proto.GpsData.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional uint32 time = 7;
 * @return {number}
 */
proto.GpsData.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 date = 8;
 * @return {number}
 */
proto.GpsData.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 hdop = 9;
 * @return {number}
 */
proto.GpsData.prototype.getHdop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setHdop = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 quality = 10;
 * @return {number}
 */
proto.GpsData.prototype.getQuality = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.GpsData} returns this
 */
proto.GpsData.prototype.setQuality = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





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
proto.EnviroData.prototype.toObject = function(opt_includeInstance) {
  return proto.EnviroData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnviroData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnviroData.toObject = function(includeInstance, msg) {
  var f, obj = {
    altitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    temperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    pressure: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.EnviroData}
 */
proto.EnviroData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnviroData;
  return proto.EnviroData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnviroData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnviroData}
 */
proto.EnviroData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperature(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPressure(value);
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
proto.EnviroData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EnviroData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EnviroData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnviroData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAltitude();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getPressure();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float altitude = 1;
 * @return {number}
 */
proto.EnviroData.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EnviroData} returns this
 */
proto.EnviroData.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float temperature = 2;
 * @return {number}
 */
proto.EnviroData.prototype.getTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EnviroData} returns this
 */
proto.EnviroData.prototype.setTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float pressure = 3;
 * @return {number}
 */
proto.EnviroData.prototype.getPressure = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EnviroData} returns this
 */
proto.EnviroData.prototype.setPressure = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





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
proto.BatteryData.prototype.toObject = function(opt_includeInstance) {
  return proto.BatteryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BatteryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatteryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    voltage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    current: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.BatteryData}
 */
proto.BatteryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BatteryData;
  return proto.BatteryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BatteryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BatteryData}
 */
proto.BatteryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVoltage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrent(value);
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
proto.BatteryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BatteryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BatteryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatteryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoltage();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getCurrent();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float voltage = 1;
 * @return {number}
 */
proto.BatteryData.prototype.getVoltage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.BatteryData} returns this
 */
proto.BatteryData.prototype.setVoltage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float current = 2;
 * @return {number}
 */
proto.BatteryData.prototype.getCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.BatteryData} returns this
 */
proto.BatteryData.prototype.setCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





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
proto.RadioData.prototype.toObject = function(opt_includeInstance) {
  return proto.RadioData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RadioData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RadioData.toObject = function(includeInstance, msg) {
  var f, obj = {
    rssi: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    frequencyError: jspb.Message.getFieldWithDefault(msg, 2, 0),
    snr: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.RadioData}
 */
proto.RadioData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RadioData;
  return proto.RadioData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RadioData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RadioData}
 */
proto.RadioData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRssi(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFrequencyError(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSnr(value);
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
proto.RadioData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RadioData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RadioData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RadioData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRssi();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getFrequencyError();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSnr();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional float rssi = 1;
 * @return {number}
 */
proto.RadioData.prototype.getRssi = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.RadioData} returns this
 */
proto.RadioData.prototype.setRssi = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int32 frequency_error = 2;
 * @return {number}
 */
proto.RadioData.prototype.getFrequencyError = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RadioData} returns this
 */
proto.RadioData.prototype.setFrequencyError = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 snr = 3;
 * @return {number}
 */
proto.RadioData.prototype.getSnr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.RadioData} returns this
 */
proto.RadioData.prototype.setSnr = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto);
