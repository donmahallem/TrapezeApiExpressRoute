/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.awesomepackage = (function() {

    /**
     * Namespace awesomepackage.
     * @exports awesomepackage
     * @namespace
     */
    var awesomepackage = {};

    awesomepackage.VehicleLocation = (function() {

        /**
         * Properties of a VehicleLocation.
         * @memberof awesomepackage
         * @interface IVehicleLocation
         * @property {boolean|null} [isDeleted] Check if vehicle is Deleted
         * @property {string|null} [category] Kind of Vehicle
         * @property {string|null} [color] VehicleLocation color
         * @property {number|null} [heading] Heading of the vehicle in degrees
         * @property {number|null} [latitude] Latitude in arcmiliseconds
         * @property {number|null} [longitude] Longitude in arcmiliseconds
         * @property {string|null} [name] Humanreadable vehicle name
         * @property {Array.<awesomepackage.VehicleLocation.IPathSegment>|null} [path] Previous Vehicle locations
         * @property {string|null} [tripId] Current TripId of the vehicle
         */

        /**
         * Constructs a new VehicleLocation.
         * @memberof awesomepackage
         * @classdesc Represents a VehicleLocation.
         * @implements IVehicleLocation
         * @constructor
         * @param {awesomepackage.IVehicleLocation=} [properties] Properties to set
         */
        function VehicleLocation(properties) {
            this.path = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Check if vehicle is Deleted
         * @member {boolean} isDeleted
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.isDeleted = false;

        /**
         * Kind of Vehicle
         * @member {string} category
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.category = "";

        /**
         * VehicleLocation color.
         * @member {string} color
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.color = "";

        /**
         * Heading of the vehicle in degrees
         * @member {number} heading
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.heading = 0;

        /**
         * Latitude in arcmiliseconds
         * @member {number} latitude
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.latitude = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Longitude in arcmiliseconds
         * @member {number} longitude
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.longitude = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Humanreadable vehicle name
         * @member {string} name
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.name = "";

        /**
         * Previous Vehicle locations
         * @member {Array.<awesomepackage.VehicleLocation.IPathSegment>} path
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.path = $util.emptyArray;

        /**
         * Current TripId of the vehicle
         * @member {string} tripId
         * @memberof awesomepackage.VehicleLocation
         * @instance
         */
        VehicleLocation.prototype.tripId = "";

        /**
         * Creates a new VehicleLocation instance using the specified properties.
         * @function create
         * @memberof awesomepackage.VehicleLocation
         * @static
         * @param {awesomepackage.IVehicleLocation=} [properties] Properties to set
         * @returns {awesomepackage.VehicleLocation} VehicleLocation instance
         */
        VehicleLocation.create = function create(properties) {
            return new VehicleLocation(properties);
        };

        /**
         * Encodes the specified VehicleLocation message. Does not implicitly {@link awesomepackage.VehicleLocation.verify|verify} messages.
         * @function encode
         * @memberof awesomepackage.VehicleLocation
         * @static
         * @param {awesomepackage.IVehicleLocation} message VehicleLocation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VehicleLocation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isDeleted);
            if (message.category != null && message.hasOwnProperty("category"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.category);
            if (message.color != null && message.hasOwnProperty("color"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
            if (message.heading != null && message.hasOwnProperty("heading"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.heading);
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.latitude);
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.longitude);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.name);
            if (message.path != null && message.path.length)
                for (var i = 0; i < message.path.length; ++i)
                    $root.awesomepackage.VehicleLocation.PathSegment.encode(message.path[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.tripId);
            return writer;
        };

        /**
         * Encodes the specified VehicleLocation message, length delimited. Does not implicitly {@link awesomepackage.VehicleLocation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awesomepackage.VehicleLocation
         * @static
         * @param {awesomepackage.IVehicleLocation} message VehicleLocation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VehicleLocation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VehicleLocation message from the specified reader or buffer.
         * @function decode
         * @memberof awesomepackage.VehicleLocation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awesomepackage.VehicleLocation} VehicleLocation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VehicleLocation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awesomepackage.VehicleLocation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isDeleted = reader.bool();
                    break;
                case 2:
                    message.category = reader.string();
                    break;
                case 3:
                    message.color = reader.string();
                    break;
                case 4:
                    message.heading = reader.uint32();
                    break;
                case 5:
                    message.latitude = reader.int64();
                    break;
                case 6:
                    message.longitude = reader.int64();
                    break;
                case 7:
                    message.name = reader.string();
                    break;
                case 8:
                    if (!(message.path && message.path.length))
                        message.path = [];
                    message.path.push($root.awesomepackage.VehicleLocation.PathSegment.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.tripId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VehicleLocation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awesomepackage.VehicleLocation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awesomepackage.VehicleLocation} VehicleLocation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VehicleLocation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VehicleLocation message.
         * @function verify
         * @memberof awesomepackage.VehicleLocation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VehicleLocation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                if (typeof message.isDeleted !== "boolean")
                    return "isDeleted: boolean expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.heading != null && message.hasOwnProperty("heading"))
                if (!$util.isInteger(message.heading))
                    return "heading: integer expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (!$util.isInteger(message.latitude) && !(message.latitude && $util.isInteger(message.latitude.low) && $util.isInteger(message.latitude.high)))
                    return "latitude: integer|Long expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (!$util.isInteger(message.longitude) && !(message.longitude && $util.isInteger(message.longitude.low) && $util.isInteger(message.longitude.high)))
                    return "longitude: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.path != null && message.hasOwnProperty("path")) {
                if (!Array.isArray(message.path))
                    return "path: array expected";
                for (var i = 0; i < message.path.length; ++i) {
                    var error = $root.awesomepackage.VehicleLocation.PathSegment.verify(message.path[i]);
                    if (error)
                        return "path." + error;
                }
            }
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                if (!$util.isString(message.tripId))
                    return "tripId: string expected";
            return null;
        };

        /**
         * Creates a VehicleLocation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awesomepackage.VehicleLocation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awesomepackage.VehicleLocation} VehicleLocation
         */
        VehicleLocation.fromObject = function fromObject(object) {
            if (object instanceof $root.awesomepackage.VehicleLocation)
                return object;
            var message = new $root.awesomepackage.VehicleLocation();
            if (object.isDeleted != null)
                message.isDeleted = Boolean(object.isDeleted);
            if (object.category != null)
                message.category = String(object.category);
            if (object.color != null)
                message.color = String(object.color);
            if (object.heading != null)
                message.heading = object.heading >>> 0;
            if (object.latitude != null)
                if ($util.Long)
                    (message.latitude = $util.Long.fromValue(object.latitude)).unsigned = false;
                else if (typeof object.latitude === "string")
                    message.latitude = parseInt(object.latitude, 10);
                else if (typeof object.latitude === "number")
                    message.latitude = object.latitude;
                else if (typeof object.latitude === "object")
                    message.latitude = new $util.LongBits(object.latitude.low >>> 0, object.latitude.high >>> 0).toNumber();
            if (object.longitude != null)
                if ($util.Long)
                    (message.longitude = $util.Long.fromValue(object.longitude)).unsigned = false;
                else if (typeof object.longitude === "string")
                    message.longitude = parseInt(object.longitude, 10);
                else if (typeof object.longitude === "number")
                    message.longitude = object.longitude;
                else if (typeof object.longitude === "object")
                    message.longitude = new $util.LongBits(object.longitude.low >>> 0, object.longitude.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.path) {
                if (!Array.isArray(object.path))
                    throw TypeError(".awesomepackage.VehicleLocation.path: array expected");
                message.path = [];
                for (var i = 0; i < object.path.length; ++i) {
                    if (typeof object.path[i] !== "object")
                        throw TypeError(".awesomepackage.VehicleLocation.path: object expected");
                    message.path[i] = $root.awesomepackage.VehicleLocation.PathSegment.fromObject(object.path[i]);
                }
            }
            if (object.tripId != null)
                message.tripId = String(object.tripId);
            return message;
        };

        /**
         * Creates a plain object from a VehicleLocation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awesomepackage.VehicleLocation
         * @static
         * @param {awesomepackage.VehicleLocation} message VehicleLocation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VehicleLocation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.path = [];
            if (options.defaults) {
                object.isDeleted = false;
                object.category = "";
                object.color = "";
                object.heading = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.latitude = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.latitude = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longitude = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longitude = options.longs === String ? "0" : 0;
                object.name = "";
                object.tripId = "";
            }
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                object.isDeleted = message.isDeleted;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.heading != null && message.hasOwnProperty("heading"))
                object.heading = message.heading;
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude === "number")
                    object.latitude = options.longs === String ? String(message.latitude) : message.latitude;
                else
                    object.latitude = options.longs === String ? $util.Long.prototype.toString.call(message.latitude) : options.longs === Number ? new $util.LongBits(message.latitude.low >>> 0, message.latitude.high >>> 0).toNumber() : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude === "number")
                    object.longitude = options.longs === String ? String(message.longitude) : message.longitude;
                else
                    object.longitude = options.longs === String ? $util.Long.prototype.toString.call(message.longitude) : options.longs === Number ? new $util.LongBits(message.longitude.low >>> 0, message.longitude.high >>> 0).toNumber() : message.longitude;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.path && message.path.length) {
                object.path = [];
                for (var j = 0; j < message.path.length; ++j)
                    object.path[j] = $root.awesomepackage.VehicleLocation.PathSegment.toObject(message.path[j], options);
            }
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                object.tripId = message.tripId;
            return object;
        };

        /**
         * Converts this VehicleLocation to JSON.
         * @function toJSON
         * @memberof awesomepackage.VehicleLocation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VehicleLocation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        VehicleLocation.PathSegment = (function() {

            /**
             * Properties of a PathSegment.
             * @memberof awesomepackage.VehicleLocation
             * @interface IPathSegment
             * @property {number|null} [x1] PathSegment x1
             * @property {number|null} [x2] PathSegment x2
             * @property {number|null} [y1] PathSegment y1
             * @property {number|null} [y2] PathSegment y2
             * @property {number|null} [angle] PathSegment angle
             * @property {number|null} [length] PathSegment length
             */

            /**
             * Constructs a new PathSegment.
             * @memberof awesomepackage.VehicleLocation
             * @classdesc Represents a PathSegment.
             * @implements IPathSegment
             * @constructor
             * @param {awesomepackage.VehicleLocation.IPathSegment=} [properties] Properties to set
             */
            function PathSegment(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PathSegment x1.
             * @member {number} x1
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @instance
             */
            PathSegment.prototype.x1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PathSegment x2.
             * @member {number} x2
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @instance
             */
            PathSegment.prototype.x2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PathSegment y1.
             * @member {number} y1
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @instance
             */
            PathSegment.prototype.y1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PathSegment y2.
             * @member {number} y2
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @instance
             */
            PathSegment.prototype.y2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PathSegment angle.
             * @member {number} angle
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @instance
             */
            PathSegment.prototype.angle = 0;

            /**
             * PathSegment length.
             * @member {number} length
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @instance
             */
            PathSegment.prototype.length = 0;

            /**
             * Creates a new PathSegment instance using the specified properties.
             * @function create
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @static
             * @param {awesomepackage.VehicleLocation.IPathSegment=} [properties] Properties to set
             * @returns {awesomepackage.VehicleLocation.PathSegment} PathSegment instance
             */
            PathSegment.create = function create(properties) {
                return new PathSegment(properties);
            };

            /**
             * Encodes the specified PathSegment message. Does not implicitly {@link awesomepackage.VehicleLocation.PathSegment.verify|verify} messages.
             * @function encode
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @static
             * @param {awesomepackage.VehicleLocation.IPathSegment} message PathSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PathSegment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x1 != null && message.hasOwnProperty("x1"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.x1);
                if (message.x2 != null && message.hasOwnProperty("x2"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.x2);
                if (message.y1 != null && message.hasOwnProperty("y1"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.y1);
                if (message.y2 != null && message.hasOwnProperty("y2"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.y2);
                if (message.angle != null && message.hasOwnProperty("angle"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.angle);
                if (message.length != null && message.hasOwnProperty("length"))
                    writer.uint32(/* id 6, wireType 5 =*/53).float(message.length);
                return writer;
            };

            /**
             * Encodes the specified PathSegment message, length delimited. Does not implicitly {@link awesomepackage.VehicleLocation.PathSegment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @static
             * @param {awesomepackage.VehicleLocation.IPathSegment} message PathSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PathSegment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PathSegment message from the specified reader or buffer.
             * @function decode
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {awesomepackage.VehicleLocation.PathSegment} PathSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PathSegment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awesomepackage.VehicleLocation.PathSegment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x1 = reader.int64();
                        break;
                    case 2:
                        message.x2 = reader.int64();
                        break;
                    case 3:
                        message.y1 = reader.int64();
                        break;
                    case 4:
                        message.y2 = reader.int64();
                        break;
                    case 5:
                        message.angle = reader.uint32();
                        break;
                    case 6:
                        message.length = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PathSegment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {awesomepackage.VehicleLocation.PathSegment} PathSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PathSegment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PathSegment message.
             * @function verify
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PathSegment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x1 != null && message.hasOwnProperty("x1"))
                    if (!$util.isInteger(message.x1) && !(message.x1 && $util.isInteger(message.x1.low) && $util.isInteger(message.x1.high)))
                        return "x1: integer|Long expected";
                if (message.x2 != null && message.hasOwnProperty("x2"))
                    if (!$util.isInteger(message.x2) && !(message.x2 && $util.isInteger(message.x2.low) && $util.isInteger(message.x2.high)))
                        return "x2: integer|Long expected";
                if (message.y1 != null && message.hasOwnProperty("y1"))
                    if (!$util.isInteger(message.y1) && !(message.y1 && $util.isInteger(message.y1.low) && $util.isInteger(message.y1.high)))
                        return "y1: integer|Long expected";
                if (message.y2 != null && message.hasOwnProperty("y2"))
                    if (!$util.isInteger(message.y2) && !(message.y2 && $util.isInteger(message.y2.low) && $util.isInteger(message.y2.high)))
                        return "y2: integer|Long expected";
                if (message.angle != null && message.hasOwnProperty("angle"))
                    if (!$util.isInteger(message.angle))
                        return "angle: integer expected";
                if (message.length != null && message.hasOwnProperty("length"))
                    if (typeof message.length !== "number")
                        return "length: number expected";
                return null;
            };

            /**
             * Creates a PathSegment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {awesomepackage.VehicleLocation.PathSegment} PathSegment
             */
            PathSegment.fromObject = function fromObject(object) {
                if (object instanceof $root.awesomepackage.VehicleLocation.PathSegment)
                    return object;
                var message = new $root.awesomepackage.VehicleLocation.PathSegment();
                if (object.x1 != null)
                    if ($util.Long)
                        (message.x1 = $util.Long.fromValue(object.x1)).unsigned = false;
                    else if (typeof object.x1 === "string")
                        message.x1 = parseInt(object.x1, 10);
                    else if (typeof object.x1 === "number")
                        message.x1 = object.x1;
                    else if (typeof object.x1 === "object")
                        message.x1 = new $util.LongBits(object.x1.low >>> 0, object.x1.high >>> 0).toNumber();
                if (object.x2 != null)
                    if ($util.Long)
                        (message.x2 = $util.Long.fromValue(object.x2)).unsigned = false;
                    else if (typeof object.x2 === "string")
                        message.x2 = parseInt(object.x2, 10);
                    else if (typeof object.x2 === "number")
                        message.x2 = object.x2;
                    else if (typeof object.x2 === "object")
                        message.x2 = new $util.LongBits(object.x2.low >>> 0, object.x2.high >>> 0).toNumber();
                if (object.y1 != null)
                    if ($util.Long)
                        (message.y1 = $util.Long.fromValue(object.y1)).unsigned = false;
                    else if (typeof object.y1 === "string")
                        message.y1 = parseInt(object.y1, 10);
                    else if (typeof object.y1 === "number")
                        message.y1 = object.y1;
                    else if (typeof object.y1 === "object")
                        message.y1 = new $util.LongBits(object.y1.low >>> 0, object.y1.high >>> 0).toNumber();
                if (object.y2 != null)
                    if ($util.Long)
                        (message.y2 = $util.Long.fromValue(object.y2)).unsigned = false;
                    else if (typeof object.y2 === "string")
                        message.y2 = parseInt(object.y2, 10);
                    else if (typeof object.y2 === "number")
                        message.y2 = object.y2;
                    else if (typeof object.y2 === "object")
                        message.y2 = new $util.LongBits(object.y2.low >>> 0, object.y2.high >>> 0).toNumber();
                if (object.angle != null)
                    message.angle = object.angle >>> 0;
                if (object.length != null)
                    message.length = Number(object.length);
                return message;
            };

            /**
             * Creates a plain object from a PathSegment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @static
             * @param {awesomepackage.VehicleLocation.PathSegment} message PathSegment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PathSegment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.x1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.x1 = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.x2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.x2 = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.y1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.y1 = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.y2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.y2 = options.longs === String ? "0" : 0;
                    object.angle = 0;
                    object.length = 0;
                }
                if (message.x1 != null && message.hasOwnProperty("x1"))
                    if (typeof message.x1 === "number")
                        object.x1 = options.longs === String ? String(message.x1) : message.x1;
                    else
                        object.x1 = options.longs === String ? $util.Long.prototype.toString.call(message.x1) : options.longs === Number ? new $util.LongBits(message.x1.low >>> 0, message.x1.high >>> 0).toNumber() : message.x1;
                if (message.x2 != null && message.hasOwnProperty("x2"))
                    if (typeof message.x2 === "number")
                        object.x2 = options.longs === String ? String(message.x2) : message.x2;
                    else
                        object.x2 = options.longs === String ? $util.Long.prototype.toString.call(message.x2) : options.longs === Number ? new $util.LongBits(message.x2.low >>> 0, message.x2.high >>> 0).toNumber() : message.x2;
                if (message.y1 != null && message.hasOwnProperty("y1"))
                    if (typeof message.y1 === "number")
                        object.y1 = options.longs === String ? String(message.y1) : message.y1;
                    else
                        object.y1 = options.longs === String ? $util.Long.prototype.toString.call(message.y1) : options.longs === Number ? new $util.LongBits(message.y1.low >>> 0, message.y1.high >>> 0).toNumber() : message.y1;
                if (message.y2 != null && message.hasOwnProperty("y2"))
                    if (typeof message.y2 === "number")
                        object.y2 = options.longs === String ? String(message.y2) : message.y2;
                    else
                        object.y2 = options.longs === String ? $util.Long.prototype.toString.call(message.y2) : options.longs === Number ? new $util.LongBits(message.y2.low >>> 0, message.y2.high >>> 0).toNumber() : message.y2;
                if (message.angle != null && message.hasOwnProperty("angle"))
                    object.angle = message.angle;
                if (message.length != null && message.hasOwnProperty("length"))
                    object.length = options.json && !isFinite(message.length) ? String(message.length) : message.length;
                return object;
            };

            /**
             * Converts this PathSegment to JSON.
             * @function toJSON
             * @memberof awesomepackage.VehicleLocation.PathSegment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PathSegment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PathSegment;
        })();

        return VehicleLocation;
    })();

    awesomepackage.VehicleLocationList = (function() {

        /**
         * Properties of a VehicleLocationList.
         * @memberof awesomepackage
         * @interface IVehicleLocationList
         * @property {number|null} [lastUpdate] Timestamp
         * @property {Array.<awesomepackage.IVehicleLocation>|null} [vehicles] reported locations
         */

        /**
         * Constructs a new VehicleLocationList.
         * @memberof awesomepackage
         * @classdesc Represents a VehicleLocationList.
         * @implements IVehicleLocationList
         * @constructor
         * @param {awesomepackage.IVehicleLocationList=} [properties] Properties to set
         */
        function VehicleLocationList(properties) {
            this.vehicles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Timestamp
         * @member {number} lastUpdate
         * @memberof awesomepackage.VehicleLocationList
         * @instance
         */
        VehicleLocationList.prototype.lastUpdate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * reported locations
         * @member {Array.<awesomepackage.IVehicleLocation>} vehicles
         * @memberof awesomepackage.VehicleLocationList
         * @instance
         */
        VehicleLocationList.prototype.vehicles = $util.emptyArray;

        /**
         * Creates a new VehicleLocationList instance using the specified properties.
         * @function create
         * @memberof awesomepackage.VehicleLocationList
         * @static
         * @param {awesomepackage.IVehicleLocationList=} [properties] Properties to set
         * @returns {awesomepackage.VehicleLocationList} VehicleLocationList instance
         */
        VehicleLocationList.create = function create(properties) {
            return new VehicleLocationList(properties);
        };

        /**
         * Encodes the specified VehicleLocationList message. Does not implicitly {@link awesomepackage.VehicleLocationList.verify|verify} messages.
         * @function encode
         * @memberof awesomepackage.VehicleLocationList
         * @static
         * @param {awesomepackage.IVehicleLocationList} message VehicleLocationList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VehicleLocationList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastUpdate);
            if (message.vehicles != null && message.vehicles.length)
                for (var i = 0; i < message.vehicles.length; ++i)
                    $root.awesomepackage.VehicleLocation.encode(message.vehicles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VehicleLocationList message, length delimited. Does not implicitly {@link awesomepackage.VehicleLocationList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awesomepackage.VehicleLocationList
         * @static
         * @param {awesomepackage.IVehicleLocationList} message VehicleLocationList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VehicleLocationList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VehicleLocationList message from the specified reader or buffer.
         * @function decode
         * @memberof awesomepackage.VehicleLocationList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awesomepackage.VehicleLocationList} VehicleLocationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VehicleLocationList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awesomepackage.VehicleLocationList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.lastUpdate = reader.int64();
                    break;
                case 2:
                    if (!(message.vehicles && message.vehicles.length))
                        message.vehicles = [];
                    message.vehicles.push($root.awesomepackage.VehicleLocation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VehicleLocationList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awesomepackage.VehicleLocationList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awesomepackage.VehicleLocationList} VehicleLocationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VehicleLocationList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VehicleLocationList message.
         * @function verify
         * @memberof awesomepackage.VehicleLocationList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VehicleLocationList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate"))
                if (!$util.isInteger(message.lastUpdate) && !(message.lastUpdate && $util.isInteger(message.lastUpdate.low) && $util.isInteger(message.lastUpdate.high)))
                    return "lastUpdate: integer|Long expected";
            if (message.vehicles != null && message.hasOwnProperty("vehicles")) {
                if (!Array.isArray(message.vehicles))
                    return "vehicles: array expected";
                for (var i = 0; i < message.vehicles.length; ++i) {
                    var error = $root.awesomepackage.VehicleLocation.verify(message.vehicles[i]);
                    if (error)
                        return "vehicles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VehicleLocationList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awesomepackage.VehicleLocationList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awesomepackage.VehicleLocationList} VehicleLocationList
         */
        VehicleLocationList.fromObject = function fromObject(object) {
            if (object instanceof $root.awesomepackage.VehicleLocationList)
                return object;
            var message = new $root.awesomepackage.VehicleLocationList();
            if (object.lastUpdate != null)
                if ($util.Long)
                    (message.lastUpdate = $util.Long.fromValue(object.lastUpdate)).unsigned = false;
                else if (typeof object.lastUpdate === "string")
                    message.lastUpdate = parseInt(object.lastUpdate, 10);
                else if (typeof object.lastUpdate === "number")
                    message.lastUpdate = object.lastUpdate;
                else if (typeof object.lastUpdate === "object")
                    message.lastUpdate = new $util.LongBits(object.lastUpdate.low >>> 0, object.lastUpdate.high >>> 0).toNumber();
            if (object.vehicles) {
                if (!Array.isArray(object.vehicles))
                    throw TypeError(".awesomepackage.VehicleLocationList.vehicles: array expected");
                message.vehicles = [];
                for (var i = 0; i < object.vehicles.length; ++i) {
                    if (typeof object.vehicles[i] !== "object")
                        throw TypeError(".awesomepackage.VehicleLocationList.vehicles: object expected");
                    message.vehicles[i] = $root.awesomepackage.VehicleLocation.fromObject(object.vehicles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a VehicleLocationList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awesomepackage.VehicleLocationList
         * @static
         * @param {awesomepackage.VehicleLocationList} message VehicleLocationList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VehicleLocationList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.vehicles = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastUpdate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastUpdate = options.longs === String ? "0" : 0;
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate"))
                if (typeof message.lastUpdate === "number")
                    object.lastUpdate = options.longs === String ? String(message.lastUpdate) : message.lastUpdate;
                else
                    object.lastUpdate = options.longs === String ? $util.Long.prototype.toString.call(message.lastUpdate) : options.longs === Number ? new $util.LongBits(message.lastUpdate.low >>> 0, message.lastUpdate.high >>> 0).toNumber() : message.lastUpdate;
            if (message.vehicles && message.vehicles.length) {
                object.vehicles = [];
                for (var j = 0; j < message.vehicles.length; ++j)
                    object.vehicles[j] = $root.awesomepackage.VehicleLocation.toObject(message.vehicles[j], options);
            }
            return object;
        };

        /**
         * Converts this VehicleLocationList to JSON.
         * @function toJSON
         * @memberof awesomepackage.VehicleLocationList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VehicleLocationList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VehicleLocationList;
    })();

    return awesomepackage;
})();

module.exports = $root;
