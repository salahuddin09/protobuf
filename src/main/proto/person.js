// source: Person.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Person');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.Address');
goog.require('proto.Car');

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
proto.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Person.repeatedFields_, null);
};
goog.inherits(proto.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Person.displayName = 'proto.Person';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Person.repeatedFields_ = [4];



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
proto.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    age: jspb.Message.getFieldWithDefault(msg, 2, 0),
    address: (f = msg.getAddress()) && proto.Address.toObject(includeInstance, f),
    carList: jspb.Message.toObjectList(msg.getCarList(),
    proto.Car.toObject, includeInstance)
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
 * @return {!proto.Person}
 */
proto.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Person;
  return proto.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Person}
 */
proto.Person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAge(value);
      break;
    case 3:
      var value = new proto.Address;
      reader.readMessage(value,proto.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 4:
      var value = new proto.Car;
      reader.readMessage(value,proto.Car.deserializeBinaryFromReader);
      msg.addCar(value);
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
proto.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Address.serializeBinaryToWriter
    );
  }
  f = message.getCarList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.Car.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.Person.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 age = 2;
 * @return {number}
 */
proto.Person.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setAge = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Address address = 3;
 * @return {?proto.Address}
 */
proto.Person.prototype.getAddress = function() {
  return /** @type{?proto.Address} */ (
    jspb.Message.getWrapperField(this, proto.Address, 3));
};


/**
 * @param {?proto.Address|undefined} value
 * @return {!proto.Person} returns this
*/
proto.Person.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Person.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Car car = 4;
 * @return {!Array<!proto.Car>}
 */
proto.Person.prototype.getCarList = function() {
  return /** @type{!Array<!proto.Car>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Car, 4));
};


/**
 * @param {!Array<!proto.Car>} value
 * @return {!proto.Person} returns this
*/
proto.Person.prototype.setCarList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Car=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Car}
 */
proto.Person.prototype.addCar = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Car, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.clearCarList = function() {
  return this.setCarList([]);
};


