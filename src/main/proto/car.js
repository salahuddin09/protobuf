// source: Person.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Car');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.BodyStyle');
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
proto.Car = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Car, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Car.displayName = 'proto.Car';
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
proto.Car.prototype.toObject = function(opt_includeInstance) {
  return proto.Car.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Car} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Car.toObject = function(includeInstance, msg) {
  var f, obj = {
    make: jspb.Message.getFieldWithDefault(msg, 1, ""),
    model: jspb.Message.getFieldWithDefault(msg, 2, ""),
    year: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bodyStyle: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.Car}
 */
proto.Car.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Car;
  return proto.Car.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Car} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Car}
 */
proto.Car.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMake(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 4:
      var value = /** @type {!proto.BodyStyle} */ (reader.readEnum());
      msg.setBodyStyle(value);
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
proto.Car.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Car.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Car} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Car.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMake();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBodyStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string make = 1;
 * @return {string}
 */
proto.Car.prototype.getMake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Car} returns this
 */
proto.Car.prototype.setMake = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.Car.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Car} returns this
 */
proto.Car.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 year = 3;
 * @return {number}
 */
proto.Car.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Car} returns this
 */
proto.Car.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional BodyStyle body_style = 4;
 * @return {!proto.BodyStyle}
 */
proto.Car.prototype.getBodyStyle = function() {
  return /** @type {!proto.BodyStyle} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.BodyStyle} value
 * @return {!proto.Car} returns this
 */
proto.Car.prototype.setBodyStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


