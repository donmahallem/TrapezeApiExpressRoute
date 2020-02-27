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

    awesomepackage.Settings = (function() {

        /**
         * Properties of a Settings.
         * @memberof awesomepackage
         * @interface ISettings
         * @property {Array.<string>|null} [AVAILABLE_LANGUAGES] Settings AVAILABLE_LANGUAGES
         * @property {number|null} [DEFAULT_TIME_PREVIEW] Settings DEFAULT_TIME_PREVIEW
         * @property {boolean|null} [GEOLOCATION_ENABLED] Settings GEOLOCATION_ENABLED
         * @property {number|null} [INITIAL_LAT] Settings INITIAL_LAT
         * @property {number|null} [INITIAL_LON] Settings INITIAL_LON
         * @property {number|null} [INITIAL_ZOOM] Settings INITIAL_ZOOM
         * @property {string|null} [LANGUAGE] Settings LANGUAGE
         * @property {boolean|null} [MAP_ENABLED] Settings MAP_ENABLED
         * @property {boolean|null} [MAP_SHOW_CONTROLS] Settings MAP_SHOW_CONTROLS
         * @property {boolean|null} [MAP_SHOW_PATTERNS] Settings MAP_SHOW_PATTERNS
         * @property {boolean|null} [MAP_SHOW_STOPS] Settings MAP_SHOW_STOPS
         * @property {boolean|null} [MAP_SHOW_VEHICLES] Settings MAP_SHOW_VEHICLES
         * @property {number|null} [MAX_ZOOM] Settings MAX_ZOOM
         * @property {number|null} [MIN_ZOOM] Settings MIN_ZOOM
         * @property {boolean|null} [MOBILE_ENABLED] Settings MOBILE_ENABLED
         * @property {boolean|null} [SEARCH_BY_ROUTES_ENABLED] Settings SEARCH_BY_ROUTES_ENABLED
         * @property {boolean|null} [SEARCH_BY_STOPPOINTS_ENABLED] Settings SEARCH_BY_STOPPOINTS_ENABLED
         * @property {boolean|null} [SHOW_ABOUT_DEPARTURE_TEXT] Settings SHOW_ABOUT_DEPARTURE_TEXT
         * @property {boolean|null} [SHOW_ACTUAL_COLUMN] Settings SHOW_ACTUAL_COLUMN
         * @property {boolean|null} [SHOW_DEPARTING_TEXT] Settings SHOW_DEPARTING_TEXT
         * @property {boolean|null} [SHOW_DEP_ARR_TEXT] Settings SHOW_DEP_ARR_TEXT
         * @property {boolean|null} [SHOW_LANGUAGE_BAR] Settings SHOW_LANGUAGE_BAR
         * @property {boolean|null} [SHOW_MIXED_COLUMN] Settings SHOW_MIXED_COLUMN
         * @property {boolean|null} [SHOW_PASSAGETYPE_COLUMN] Settings SHOW_PASSAGETYPE_COLUMN
         * @property {boolean|null} [SHOW_SCHEDULE_COLUMN] Settings SHOW_SCHEDULE_COLUMN
         * @property {boolean|null} [SUPPRESS_COUNTDOWN_TIME_INCREMENT] Settings SUPPRESS_COUNTDOWN_TIME_INCREMENT
         * @property {boolean|null} [TIMESLIDER_ENABLED] Settings TIMESLIDER_ENABLED
         */

        /**
         * Constructs a new Settings.
         * @memberof awesomepackage
         * @classdesc Represents a Settings.
         * @implements ISettings
         * @constructor
         * @param {awesomepackage.ISettings=} [properties] Properties to set
         */
        function Settings(properties) {
            this.AVAILABLE_LANGUAGES = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Settings AVAILABLE_LANGUAGES.
         * @member {Array.<string>} AVAILABLE_LANGUAGES
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.AVAILABLE_LANGUAGES = $util.emptyArray;

        /**
         * Settings DEFAULT_TIME_PREVIEW.
         * @member {number} DEFAULT_TIME_PREVIEW
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.DEFAULT_TIME_PREVIEW = 0;

        /**
         * Settings GEOLOCATION_ENABLED.
         * @member {boolean} GEOLOCATION_ENABLED
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.GEOLOCATION_ENABLED = false;

        /**
         * Settings INITIAL_LAT.
         * @member {number} INITIAL_LAT
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.INITIAL_LAT = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Settings INITIAL_LON.
         * @member {number} INITIAL_LON
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.INITIAL_LON = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Settings INITIAL_ZOOM.
         * @member {number} INITIAL_ZOOM
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.INITIAL_ZOOM = 0;

        /**
         * Settings LANGUAGE.
         * @member {string} LANGUAGE
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.LANGUAGE = "";

        /**
         * Settings MAP_ENABLED.
         * @member {boolean} MAP_ENABLED
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.MAP_ENABLED = false;

        /**
         * Settings MAP_SHOW_CONTROLS.
         * @member {boolean} MAP_SHOW_CONTROLS
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.MAP_SHOW_CONTROLS = false;

        /**
         * Settings MAP_SHOW_PATTERNS.
         * @member {boolean} MAP_SHOW_PATTERNS
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.MAP_SHOW_PATTERNS = false;

        /**
         * Settings MAP_SHOW_STOPS.
         * @member {boolean} MAP_SHOW_STOPS
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.MAP_SHOW_STOPS = false;

        /**
         * Settings MAP_SHOW_VEHICLES.
         * @member {boolean} MAP_SHOW_VEHICLES
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.MAP_SHOW_VEHICLES = false;

        /**
         * Settings MAX_ZOOM.
         * @member {number} MAX_ZOOM
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.MAX_ZOOM = 0;

        /**
         * Settings MIN_ZOOM.
         * @member {number} MIN_ZOOM
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.MIN_ZOOM = 0;

        /**
         * Settings MOBILE_ENABLED.
         * @member {boolean} MOBILE_ENABLED
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.MOBILE_ENABLED = false;

        /**
         * Settings SEARCH_BY_ROUTES_ENABLED.
         * @member {boolean} SEARCH_BY_ROUTES_ENABLED
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SEARCH_BY_ROUTES_ENABLED = false;

        /**
         * Settings SEARCH_BY_STOPPOINTS_ENABLED.
         * @member {boolean} SEARCH_BY_STOPPOINTS_ENABLED
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SEARCH_BY_STOPPOINTS_ENABLED = false;

        /**
         * Settings SHOW_ABOUT_DEPARTURE_TEXT.
         * @member {boolean} SHOW_ABOUT_DEPARTURE_TEXT
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SHOW_ABOUT_DEPARTURE_TEXT = false;

        /**
         * Settings SHOW_ACTUAL_COLUMN.
         * @member {boolean} SHOW_ACTUAL_COLUMN
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SHOW_ACTUAL_COLUMN = false;

        /**
         * Settings SHOW_DEPARTING_TEXT.
         * @member {boolean} SHOW_DEPARTING_TEXT
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SHOW_DEPARTING_TEXT = false;

        /**
         * Settings SHOW_DEP_ARR_TEXT.
         * @member {boolean} SHOW_DEP_ARR_TEXT
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SHOW_DEP_ARR_TEXT = false;

        /**
         * Settings SHOW_LANGUAGE_BAR.
         * @member {boolean} SHOW_LANGUAGE_BAR
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SHOW_LANGUAGE_BAR = false;

        /**
         * Settings SHOW_MIXED_COLUMN.
         * @member {boolean} SHOW_MIXED_COLUMN
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SHOW_MIXED_COLUMN = false;

        /**
         * Settings SHOW_PASSAGETYPE_COLUMN.
         * @member {boolean} SHOW_PASSAGETYPE_COLUMN
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SHOW_PASSAGETYPE_COLUMN = false;

        /**
         * Settings SHOW_SCHEDULE_COLUMN.
         * @member {boolean} SHOW_SCHEDULE_COLUMN
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SHOW_SCHEDULE_COLUMN = false;

        /**
         * Settings SUPPRESS_COUNTDOWN_TIME_INCREMENT.
         * @member {boolean} SUPPRESS_COUNTDOWN_TIME_INCREMENT
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.SUPPRESS_COUNTDOWN_TIME_INCREMENT = false;

        /**
         * Settings TIMESLIDER_ENABLED.
         * @member {boolean} TIMESLIDER_ENABLED
         * @memberof awesomepackage.Settings
         * @instance
         */
        Settings.prototype.TIMESLIDER_ENABLED = false;

        /**
         * Creates a new Settings instance using the specified properties.
         * @function create
         * @memberof awesomepackage.Settings
         * @static
         * @param {awesomepackage.ISettings=} [properties] Properties to set
         * @returns {awesomepackage.Settings} Settings instance
         */
        Settings.create = function create(properties) {
            return new Settings(properties);
        };

        /**
         * Encodes the specified Settings message. Does not implicitly {@link awesomepackage.Settings.verify|verify} messages.
         * @function encode
         * @memberof awesomepackage.Settings
         * @static
         * @param {awesomepackage.ISettings} message Settings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AVAILABLE_LANGUAGES != null && message.AVAILABLE_LANGUAGES.length)
                for (var i = 0; i < message.AVAILABLE_LANGUAGES.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.AVAILABLE_LANGUAGES[i]);
            if (message.DEFAULT_TIME_PREVIEW != null && message.hasOwnProperty("DEFAULT_TIME_PREVIEW"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.DEFAULT_TIME_PREVIEW);
            if (message.GEOLOCATION_ENABLED != null && message.hasOwnProperty("GEOLOCATION_ENABLED"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.GEOLOCATION_ENABLED);
            if (message.INITIAL_LAT != null && message.hasOwnProperty("INITIAL_LAT"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.INITIAL_LAT);
            if (message.INITIAL_LON != null && message.hasOwnProperty("INITIAL_LON"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.INITIAL_LON);
            if (message.INITIAL_ZOOM != null && message.hasOwnProperty("INITIAL_ZOOM"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.INITIAL_ZOOM);
            if (message.LANGUAGE != null && message.hasOwnProperty("LANGUAGE"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.LANGUAGE);
            if (message.MAP_ENABLED != null && message.hasOwnProperty("MAP_ENABLED"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.MAP_ENABLED);
            if (message.MAP_SHOW_CONTROLS != null && message.hasOwnProperty("MAP_SHOW_CONTROLS"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.MAP_SHOW_CONTROLS);
            if (message.MAP_SHOW_PATTERNS != null && message.hasOwnProperty("MAP_SHOW_PATTERNS"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.MAP_SHOW_PATTERNS);
            if (message.MAP_SHOW_STOPS != null && message.hasOwnProperty("MAP_SHOW_STOPS"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.MAP_SHOW_STOPS);
            if (message.MAP_SHOW_VEHICLES != null && message.hasOwnProperty("MAP_SHOW_VEHICLES"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.MAP_SHOW_VEHICLES);
            if (message.MAX_ZOOM != null && message.hasOwnProperty("MAX_ZOOM"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.MAX_ZOOM);
            if (message.MIN_ZOOM != null && message.hasOwnProperty("MIN_ZOOM"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.MIN_ZOOM);
            if (message.MOBILE_ENABLED != null && message.hasOwnProperty("MOBILE_ENABLED"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.MOBILE_ENABLED);
            if (message.SEARCH_BY_ROUTES_ENABLED != null && message.hasOwnProperty("SEARCH_BY_ROUTES_ENABLED"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.SEARCH_BY_ROUTES_ENABLED);
            if (message.SEARCH_BY_STOPPOINTS_ENABLED != null && message.hasOwnProperty("SEARCH_BY_STOPPOINTS_ENABLED"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.SEARCH_BY_STOPPOINTS_ENABLED);
            if (message.SHOW_ABOUT_DEPARTURE_TEXT != null && message.hasOwnProperty("SHOW_ABOUT_DEPARTURE_TEXT"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.SHOW_ABOUT_DEPARTURE_TEXT);
            if (message.SHOW_ACTUAL_COLUMN != null && message.hasOwnProperty("SHOW_ACTUAL_COLUMN"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.SHOW_ACTUAL_COLUMN);
            if (message.SHOW_DEPARTING_TEXT != null && message.hasOwnProperty("SHOW_DEPARTING_TEXT"))
                writer.uint32(/* id 20, wireType 0 =*/160).bool(message.SHOW_DEPARTING_TEXT);
            if (message.SHOW_DEP_ARR_TEXT != null && message.hasOwnProperty("SHOW_DEP_ARR_TEXT"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.SHOW_DEP_ARR_TEXT);
            if (message.SHOW_LANGUAGE_BAR != null && message.hasOwnProperty("SHOW_LANGUAGE_BAR"))
                writer.uint32(/* id 22, wireType 0 =*/176).bool(message.SHOW_LANGUAGE_BAR);
            if (message.SHOW_MIXED_COLUMN != null && message.hasOwnProperty("SHOW_MIXED_COLUMN"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.SHOW_MIXED_COLUMN);
            if (message.SHOW_PASSAGETYPE_COLUMN != null && message.hasOwnProperty("SHOW_PASSAGETYPE_COLUMN"))
                writer.uint32(/* id 24, wireType 0 =*/192).bool(message.SHOW_PASSAGETYPE_COLUMN);
            if (message.SHOW_SCHEDULE_COLUMN != null && message.hasOwnProperty("SHOW_SCHEDULE_COLUMN"))
                writer.uint32(/* id 25, wireType 0 =*/200).bool(message.SHOW_SCHEDULE_COLUMN);
            if (message.SUPPRESS_COUNTDOWN_TIME_INCREMENT != null && message.hasOwnProperty("SUPPRESS_COUNTDOWN_TIME_INCREMENT"))
                writer.uint32(/* id 26, wireType 0 =*/208).bool(message.SUPPRESS_COUNTDOWN_TIME_INCREMENT);
            if (message.TIMESLIDER_ENABLED != null && message.hasOwnProperty("TIMESLIDER_ENABLED"))
                writer.uint32(/* id 27, wireType 0 =*/216).bool(message.TIMESLIDER_ENABLED);
            return writer;
        };

        /**
         * Encodes the specified Settings message, length delimited. Does not implicitly {@link awesomepackage.Settings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awesomepackage.Settings
         * @static
         * @param {awesomepackage.ISettings} message Settings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Settings message from the specified reader or buffer.
         * @function decode
         * @memberof awesomepackage.Settings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awesomepackage.Settings} Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settings.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awesomepackage.Settings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AVAILABLE_LANGUAGES && message.AVAILABLE_LANGUAGES.length))
                        message.AVAILABLE_LANGUAGES = [];
                    message.AVAILABLE_LANGUAGES.push(reader.string());
                    break;
                case 2:
                    message.DEFAULT_TIME_PREVIEW = reader.int32();
                    break;
                case 3:
                    message.GEOLOCATION_ENABLED = reader.bool();
                    break;
                case 4:
                    message.INITIAL_LAT = reader.int64();
                    break;
                case 5:
                    message.INITIAL_LON = reader.int64();
                    break;
                case 6:
                    message.INITIAL_ZOOM = reader.int32();
                    break;
                case 7:
                    message.LANGUAGE = reader.string();
                    break;
                case 8:
                    message.MAP_ENABLED = reader.bool();
                    break;
                case 9:
                    message.MAP_SHOW_CONTROLS = reader.bool();
                    break;
                case 10:
                    message.MAP_SHOW_PATTERNS = reader.bool();
                    break;
                case 11:
                    message.MAP_SHOW_STOPS = reader.bool();
                    break;
                case 12:
                    message.MAP_SHOW_VEHICLES = reader.bool();
                    break;
                case 13:
                    message.MAX_ZOOM = reader.int32();
                    break;
                case 14:
                    message.MIN_ZOOM = reader.int32();
                    break;
                case 15:
                    message.MOBILE_ENABLED = reader.bool();
                    break;
                case 16:
                    message.SEARCH_BY_ROUTES_ENABLED = reader.bool();
                    break;
                case 17:
                    message.SEARCH_BY_STOPPOINTS_ENABLED = reader.bool();
                    break;
                case 18:
                    message.SHOW_ABOUT_DEPARTURE_TEXT = reader.bool();
                    break;
                case 19:
                    message.SHOW_ACTUAL_COLUMN = reader.bool();
                    break;
                case 20:
                    message.SHOW_DEPARTING_TEXT = reader.bool();
                    break;
                case 21:
                    message.SHOW_DEP_ARR_TEXT = reader.bool();
                    break;
                case 22:
                    message.SHOW_LANGUAGE_BAR = reader.bool();
                    break;
                case 23:
                    message.SHOW_MIXED_COLUMN = reader.bool();
                    break;
                case 24:
                    message.SHOW_PASSAGETYPE_COLUMN = reader.bool();
                    break;
                case 25:
                    message.SHOW_SCHEDULE_COLUMN = reader.bool();
                    break;
                case 26:
                    message.SUPPRESS_COUNTDOWN_TIME_INCREMENT = reader.bool();
                    break;
                case 27:
                    message.TIMESLIDER_ENABLED = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Settings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awesomepackage.Settings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awesomepackage.Settings} Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Settings message.
         * @function verify
         * @memberof awesomepackage.Settings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Settings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AVAILABLE_LANGUAGES != null && message.hasOwnProperty("AVAILABLE_LANGUAGES")) {
                if (!Array.isArray(message.AVAILABLE_LANGUAGES))
                    return "AVAILABLE_LANGUAGES: array expected";
                for (var i = 0; i < message.AVAILABLE_LANGUAGES.length; ++i)
                    if (!$util.isString(message.AVAILABLE_LANGUAGES[i]))
                        return "AVAILABLE_LANGUAGES: string[] expected";
            }
            if (message.DEFAULT_TIME_PREVIEW != null && message.hasOwnProperty("DEFAULT_TIME_PREVIEW"))
                if (!$util.isInteger(message.DEFAULT_TIME_PREVIEW))
                    return "DEFAULT_TIME_PREVIEW: integer expected";
            if (message.GEOLOCATION_ENABLED != null && message.hasOwnProperty("GEOLOCATION_ENABLED"))
                if (typeof message.GEOLOCATION_ENABLED !== "boolean")
                    return "GEOLOCATION_ENABLED: boolean expected";
            if (message.INITIAL_LAT != null && message.hasOwnProperty("INITIAL_LAT"))
                if (!$util.isInteger(message.INITIAL_LAT) && !(message.INITIAL_LAT && $util.isInteger(message.INITIAL_LAT.low) && $util.isInteger(message.INITIAL_LAT.high)))
                    return "INITIAL_LAT: integer|Long expected";
            if (message.INITIAL_LON != null && message.hasOwnProperty("INITIAL_LON"))
                if (!$util.isInteger(message.INITIAL_LON) && !(message.INITIAL_LON && $util.isInteger(message.INITIAL_LON.low) && $util.isInteger(message.INITIAL_LON.high)))
                    return "INITIAL_LON: integer|Long expected";
            if (message.INITIAL_ZOOM != null && message.hasOwnProperty("INITIAL_ZOOM"))
                if (!$util.isInteger(message.INITIAL_ZOOM))
                    return "INITIAL_ZOOM: integer expected";
            if (message.LANGUAGE != null && message.hasOwnProperty("LANGUAGE"))
                if (!$util.isString(message.LANGUAGE))
                    return "LANGUAGE: string expected";
            if (message.MAP_ENABLED != null && message.hasOwnProperty("MAP_ENABLED"))
                if (typeof message.MAP_ENABLED !== "boolean")
                    return "MAP_ENABLED: boolean expected";
            if (message.MAP_SHOW_CONTROLS != null && message.hasOwnProperty("MAP_SHOW_CONTROLS"))
                if (typeof message.MAP_SHOW_CONTROLS !== "boolean")
                    return "MAP_SHOW_CONTROLS: boolean expected";
            if (message.MAP_SHOW_PATTERNS != null && message.hasOwnProperty("MAP_SHOW_PATTERNS"))
                if (typeof message.MAP_SHOW_PATTERNS !== "boolean")
                    return "MAP_SHOW_PATTERNS: boolean expected";
            if (message.MAP_SHOW_STOPS != null && message.hasOwnProperty("MAP_SHOW_STOPS"))
                if (typeof message.MAP_SHOW_STOPS !== "boolean")
                    return "MAP_SHOW_STOPS: boolean expected";
            if (message.MAP_SHOW_VEHICLES != null && message.hasOwnProperty("MAP_SHOW_VEHICLES"))
                if (typeof message.MAP_SHOW_VEHICLES !== "boolean")
                    return "MAP_SHOW_VEHICLES: boolean expected";
            if (message.MAX_ZOOM != null && message.hasOwnProperty("MAX_ZOOM"))
                if (!$util.isInteger(message.MAX_ZOOM))
                    return "MAX_ZOOM: integer expected";
            if (message.MIN_ZOOM != null && message.hasOwnProperty("MIN_ZOOM"))
                if (!$util.isInteger(message.MIN_ZOOM))
                    return "MIN_ZOOM: integer expected";
            if (message.MOBILE_ENABLED != null && message.hasOwnProperty("MOBILE_ENABLED"))
                if (typeof message.MOBILE_ENABLED !== "boolean")
                    return "MOBILE_ENABLED: boolean expected";
            if (message.SEARCH_BY_ROUTES_ENABLED != null && message.hasOwnProperty("SEARCH_BY_ROUTES_ENABLED"))
                if (typeof message.SEARCH_BY_ROUTES_ENABLED !== "boolean")
                    return "SEARCH_BY_ROUTES_ENABLED: boolean expected";
            if (message.SEARCH_BY_STOPPOINTS_ENABLED != null && message.hasOwnProperty("SEARCH_BY_STOPPOINTS_ENABLED"))
                if (typeof message.SEARCH_BY_STOPPOINTS_ENABLED !== "boolean")
                    return "SEARCH_BY_STOPPOINTS_ENABLED: boolean expected";
            if (message.SHOW_ABOUT_DEPARTURE_TEXT != null && message.hasOwnProperty("SHOW_ABOUT_DEPARTURE_TEXT"))
                if (typeof message.SHOW_ABOUT_DEPARTURE_TEXT !== "boolean")
                    return "SHOW_ABOUT_DEPARTURE_TEXT: boolean expected";
            if (message.SHOW_ACTUAL_COLUMN != null && message.hasOwnProperty("SHOW_ACTUAL_COLUMN"))
                if (typeof message.SHOW_ACTUAL_COLUMN !== "boolean")
                    return "SHOW_ACTUAL_COLUMN: boolean expected";
            if (message.SHOW_DEPARTING_TEXT != null && message.hasOwnProperty("SHOW_DEPARTING_TEXT"))
                if (typeof message.SHOW_DEPARTING_TEXT !== "boolean")
                    return "SHOW_DEPARTING_TEXT: boolean expected";
            if (message.SHOW_DEP_ARR_TEXT != null && message.hasOwnProperty("SHOW_DEP_ARR_TEXT"))
                if (typeof message.SHOW_DEP_ARR_TEXT !== "boolean")
                    return "SHOW_DEP_ARR_TEXT: boolean expected";
            if (message.SHOW_LANGUAGE_BAR != null && message.hasOwnProperty("SHOW_LANGUAGE_BAR"))
                if (typeof message.SHOW_LANGUAGE_BAR !== "boolean")
                    return "SHOW_LANGUAGE_BAR: boolean expected";
            if (message.SHOW_MIXED_COLUMN != null && message.hasOwnProperty("SHOW_MIXED_COLUMN"))
                if (typeof message.SHOW_MIXED_COLUMN !== "boolean")
                    return "SHOW_MIXED_COLUMN: boolean expected";
            if (message.SHOW_PASSAGETYPE_COLUMN != null && message.hasOwnProperty("SHOW_PASSAGETYPE_COLUMN"))
                if (typeof message.SHOW_PASSAGETYPE_COLUMN !== "boolean")
                    return "SHOW_PASSAGETYPE_COLUMN: boolean expected";
            if (message.SHOW_SCHEDULE_COLUMN != null && message.hasOwnProperty("SHOW_SCHEDULE_COLUMN"))
                if (typeof message.SHOW_SCHEDULE_COLUMN !== "boolean")
                    return "SHOW_SCHEDULE_COLUMN: boolean expected";
            if (message.SUPPRESS_COUNTDOWN_TIME_INCREMENT != null && message.hasOwnProperty("SUPPRESS_COUNTDOWN_TIME_INCREMENT"))
                if (typeof message.SUPPRESS_COUNTDOWN_TIME_INCREMENT !== "boolean")
                    return "SUPPRESS_COUNTDOWN_TIME_INCREMENT: boolean expected";
            if (message.TIMESLIDER_ENABLED != null && message.hasOwnProperty("TIMESLIDER_ENABLED"))
                if (typeof message.TIMESLIDER_ENABLED !== "boolean")
                    return "TIMESLIDER_ENABLED: boolean expected";
            return null;
        };

        /**
         * Creates a Settings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awesomepackage.Settings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awesomepackage.Settings} Settings
         */
        Settings.fromObject = function fromObject(object) {
            if (object instanceof $root.awesomepackage.Settings)
                return object;
            var message = new $root.awesomepackage.Settings();
            if (object.AVAILABLE_LANGUAGES) {
                if (!Array.isArray(object.AVAILABLE_LANGUAGES))
                    throw TypeError(".awesomepackage.Settings.AVAILABLE_LANGUAGES: array expected");
                message.AVAILABLE_LANGUAGES = [];
                for (var i = 0; i < object.AVAILABLE_LANGUAGES.length; ++i)
                    message.AVAILABLE_LANGUAGES[i] = String(object.AVAILABLE_LANGUAGES[i]);
            }
            if (object.DEFAULT_TIME_PREVIEW != null)
                message.DEFAULT_TIME_PREVIEW = object.DEFAULT_TIME_PREVIEW | 0;
            if (object.GEOLOCATION_ENABLED != null)
                message.GEOLOCATION_ENABLED = Boolean(object.GEOLOCATION_ENABLED);
            if (object.INITIAL_LAT != null)
                if ($util.Long)
                    (message.INITIAL_LAT = $util.Long.fromValue(object.INITIAL_LAT)).unsigned = false;
                else if (typeof object.INITIAL_LAT === "string")
                    message.INITIAL_LAT = parseInt(object.INITIAL_LAT, 10);
                else if (typeof object.INITIAL_LAT === "number")
                    message.INITIAL_LAT = object.INITIAL_LAT;
                else if (typeof object.INITIAL_LAT === "object")
                    message.INITIAL_LAT = new $util.LongBits(object.INITIAL_LAT.low >>> 0, object.INITIAL_LAT.high >>> 0).toNumber();
            if (object.INITIAL_LON != null)
                if ($util.Long)
                    (message.INITIAL_LON = $util.Long.fromValue(object.INITIAL_LON)).unsigned = false;
                else if (typeof object.INITIAL_LON === "string")
                    message.INITIAL_LON = parseInt(object.INITIAL_LON, 10);
                else if (typeof object.INITIAL_LON === "number")
                    message.INITIAL_LON = object.INITIAL_LON;
                else if (typeof object.INITIAL_LON === "object")
                    message.INITIAL_LON = new $util.LongBits(object.INITIAL_LON.low >>> 0, object.INITIAL_LON.high >>> 0).toNumber();
            if (object.INITIAL_ZOOM != null)
                message.INITIAL_ZOOM = object.INITIAL_ZOOM | 0;
            if (object.LANGUAGE != null)
                message.LANGUAGE = String(object.LANGUAGE);
            if (object.MAP_ENABLED != null)
                message.MAP_ENABLED = Boolean(object.MAP_ENABLED);
            if (object.MAP_SHOW_CONTROLS != null)
                message.MAP_SHOW_CONTROLS = Boolean(object.MAP_SHOW_CONTROLS);
            if (object.MAP_SHOW_PATTERNS != null)
                message.MAP_SHOW_PATTERNS = Boolean(object.MAP_SHOW_PATTERNS);
            if (object.MAP_SHOW_STOPS != null)
                message.MAP_SHOW_STOPS = Boolean(object.MAP_SHOW_STOPS);
            if (object.MAP_SHOW_VEHICLES != null)
                message.MAP_SHOW_VEHICLES = Boolean(object.MAP_SHOW_VEHICLES);
            if (object.MAX_ZOOM != null)
                message.MAX_ZOOM = object.MAX_ZOOM | 0;
            if (object.MIN_ZOOM != null)
                message.MIN_ZOOM = object.MIN_ZOOM | 0;
            if (object.MOBILE_ENABLED != null)
                message.MOBILE_ENABLED = Boolean(object.MOBILE_ENABLED);
            if (object.SEARCH_BY_ROUTES_ENABLED != null)
                message.SEARCH_BY_ROUTES_ENABLED = Boolean(object.SEARCH_BY_ROUTES_ENABLED);
            if (object.SEARCH_BY_STOPPOINTS_ENABLED != null)
                message.SEARCH_BY_STOPPOINTS_ENABLED = Boolean(object.SEARCH_BY_STOPPOINTS_ENABLED);
            if (object.SHOW_ABOUT_DEPARTURE_TEXT != null)
                message.SHOW_ABOUT_DEPARTURE_TEXT = Boolean(object.SHOW_ABOUT_DEPARTURE_TEXT);
            if (object.SHOW_ACTUAL_COLUMN != null)
                message.SHOW_ACTUAL_COLUMN = Boolean(object.SHOW_ACTUAL_COLUMN);
            if (object.SHOW_DEPARTING_TEXT != null)
                message.SHOW_DEPARTING_TEXT = Boolean(object.SHOW_DEPARTING_TEXT);
            if (object.SHOW_DEP_ARR_TEXT != null)
                message.SHOW_DEP_ARR_TEXT = Boolean(object.SHOW_DEP_ARR_TEXT);
            if (object.SHOW_LANGUAGE_BAR != null)
                message.SHOW_LANGUAGE_BAR = Boolean(object.SHOW_LANGUAGE_BAR);
            if (object.SHOW_MIXED_COLUMN != null)
                message.SHOW_MIXED_COLUMN = Boolean(object.SHOW_MIXED_COLUMN);
            if (object.SHOW_PASSAGETYPE_COLUMN != null)
                message.SHOW_PASSAGETYPE_COLUMN = Boolean(object.SHOW_PASSAGETYPE_COLUMN);
            if (object.SHOW_SCHEDULE_COLUMN != null)
                message.SHOW_SCHEDULE_COLUMN = Boolean(object.SHOW_SCHEDULE_COLUMN);
            if (object.SUPPRESS_COUNTDOWN_TIME_INCREMENT != null)
                message.SUPPRESS_COUNTDOWN_TIME_INCREMENT = Boolean(object.SUPPRESS_COUNTDOWN_TIME_INCREMENT);
            if (object.TIMESLIDER_ENABLED != null)
                message.TIMESLIDER_ENABLED = Boolean(object.TIMESLIDER_ENABLED);
            return message;
        };

        /**
         * Creates a plain object from a Settings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awesomepackage.Settings
         * @static
         * @param {awesomepackage.Settings} message Settings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Settings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AVAILABLE_LANGUAGES = [];
            if (options.defaults) {
                object.DEFAULT_TIME_PREVIEW = 0;
                object.GEOLOCATION_ENABLED = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.INITIAL_LAT = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.INITIAL_LAT = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.INITIAL_LON = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.INITIAL_LON = options.longs === String ? "0" : 0;
                object.INITIAL_ZOOM = 0;
                object.LANGUAGE = "";
                object.MAP_ENABLED = false;
                object.MAP_SHOW_CONTROLS = false;
                object.MAP_SHOW_PATTERNS = false;
                object.MAP_SHOW_STOPS = false;
                object.MAP_SHOW_VEHICLES = false;
                object.MAX_ZOOM = 0;
                object.MIN_ZOOM = 0;
                object.MOBILE_ENABLED = false;
                object.SEARCH_BY_ROUTES_ENABLED = false;
                object.SEARCH_BY_STOPPOINTS_ENABLED = false;
                object.SHOW_ABOUT_DEPARTURE_TEXT = false;
                object.SHOW_ACTUAL_COLUMN = false;
                object.SHOW_DEPARTING_TEXT = false;
                object.SHOW_DEP_ARR_TEXT = false;
                object.SHOW_LANGUAGE_BAR = false;
                object.SHOW_MIXED_COLUMN = false;
                object.SHOW_PASSAGETYPE_COLUMN = false;
                object.SHOW_SCHEDULE_COLUMN = false;
                object.SUPPRESS_COUNTDOWN_TIME_INCREMENT = false;
                object.TIMESLIDER_ENABLED = false;
            }
            if (message.AVAILABLE_LANGUAGES && message.AVAILABLE_LANGUAGES.length) {
                object.AVAILABLE_LANGUAGES = [];
                for (var j = 0; j < message.AVAILABLE_LANGUAGES.length; ++j)
                    object.AVAILABLE_LANGUAGES[j] = message.AVAILABLE_LANGUAGES[j];
            }
            if (message.DEFAULT_TIME_PREVIEW != null && message.hasOwnProperty("DEFAULT_TIME_PREVIEW"))
                object.DEFAULT_TIME_PREVIEW = message.DEFAULT_TIME_PREVIEW;
            if (message.GEOLOCATION_ENABLED != null && message.hasOwnProperty("GEOLOCATION_ENABLED"))
                object.GEOLOCATION_ENABLED = message.GEOLOCATION_ENABLED;
            if (message.INITIAL_LAT != null && message.hasOwnProperty("INITIAL_LAT"))
                if (typeof message.INITIAL_LAT === "number")
                    object.INITIAL_LAT = options.longs === String ? String(message.INITIAL_LAT) : message.INITIAL_LAT;
                else
                    object.INITIAL_LAT = options.longs === String ? $util.Long.prototype.toString.call(message.INITIAL_LAT) : options.longs === Number ? new $util.LongBits(message.INITIAL_LAT.low >>> 0, message.INITIAL_LAT.high >>> 0).toNumber() : message.INITIAL_LAT;
            if (message.INITIAL_LON != null && message.hasOwnProperty("INITIAL_LON"))
                if (typeof message.INITIAL_LON === "number")
                    object.INITIAL_LON = options.longs === String ? String(message.INITIAL_LON) : message.INITIAL_LON;
                else
                    object.INITIAL_LON = options.longs === String ? $util.Long.prototype.toString.call(message.INITIAL_LON) : options.longs === Number ? new $util.LongBits(message.INITIAL_LON.low >>> 0, message.INITIAL_LON.high >>> 0).toNumber() : message.INITIAL_LON;
            if (message.INITIAL_ZOOM != null && message.hasOwnProperty("INITIAL_ZOOM"))
                object.INITIAL_ZOOM = message.INITIAL_ZOOM;
            if (message.LANGUAGE != null && message.hasOwnProperty("LANGUAGE"))
                object.LANGUAGE = message.LANGUAGE;
            if (message.MAP_ENABLED != null && message.hasOwnProperty("MAP_ENABLED"))
                object.MAP_ENABLED = message.MAP_ENABLED;
            if (message.MAP_SHOW_CONTROLS != null && message.hasOwnProperty("MAP_SHOW_CONTROLS"))
                object.MAP_SHOW_CONTROLS = message.MAP_SHOW_CONTROLS;
            if (message.MAP_SHOW_PATTERNS != null && message.hasOwnProperty("MAP_SHOW_PATTERNS"))
                object.MAP_SHOW_PATTERNS = message.MAP_SHOW_PATTERNS;
            if (message.MAP_SHOW_STOPS != null && message.hasOwnProperty("MAP_SHOW_STOPS"))
                object.MAP_SHOW_STOPS = message.MAP_SHOW_STOPS;
            if (message.MAP_SHOW_VEHICLES != null && message.hasOwnProperty("MAP_SHOW_VEHICLES"))
                object.MAP_SHOW_VEHICLES = message.MAP_SHOW_VEHICLES;
            if (message.MAX_ZOOM != null && message.hasOwnProperty("MAX_ZOOM"))
                object.MAX_ZOOM = message.MAX_ZOOM;
            if (message.MIN_ZOOM != null && message.hasOwnProperty("MIN_ZOOM"))
                object.MIN_ZOOM = message.MIN_ZOOM;
            if (message.MOBILE_ENABLED != null && message.hasOwnProperty("MOBILE_ENABLED"))
                object.MOBILE_ENABLED = message.MOBILE_ENABLED;
            if (message.SEARCH_BY_ROUTES_ENABLED != null && message.hasOwnProperty("SEARCH_BY_ROUTES_ENABLED"))
                object.SEARCH_BY_ROUTES_ENABLED = message.SEARCH_BY_ROUTES_ENABLED;
            if (message.SEARCH_BY_STOPPOINTS_ENABLED != null && message.hasOwnProperty("SEARCH_BY_STOPPOINTS_ENABLED"))
                object.SEARCH_BY_STOPPOINTS_ENABLED = message.SEARCH_BY_STOPPOINTS_ENABLED;
            if (message.SHOW_ABOUT_DEPARTURE_TEXT != null && message.hasOwnProperty("SHOW_ABOUT_DEPARTURE_TEXT"))
                object.SHOW_ABOUT_DEPARTURE_TEXT = message.SHOW_ABOUT_DEPARTURE_TEXT;
            if (message.SHOW_ACTUAL_COLUMN != null && message.hasOwnProperty("SHOW_ACTUAL_COLUMN"))
                object.SHOW_ACTUAL_COLUMN = message.SHOW_ACTUAL_COLUMN;
            if (message.SHOW_DEPARTING_TEXT != null && message.hasOwnProperty("SHOW_DEPARTING_TEXT"))
                object.SHOW_DEPARTING_TEXT = message.SHOW_DEPARTING_TEXT;
            if (message.SHOW_DEP_ARR_TEXT != null && message.hasOwnProperty("SHOW_DEP_ARR_TEXT"))
                object.SHOW_DEP_ARR_TEXT = message.SHOW_DEP_ARR_TEXT;
            if (message.SHOW_LANGUAGE_BAR != null && message.hasOwnProperty("SHOW_LANGUAGE_BAR"))
                object.SHOW_LANGUAGE_BAR = message.SHOW_LANGUAGE_BAR;
            if (message.SHOW_MIXED_COLUMN != null && message.hasOwnProperty("SHOW_MIXED_COLUMN"))
                object.SHOW_MIXED_COLUMN = message.SHOW_MIXED_COLUMN;
            if (message.SHOW_PASSAGETYPE_COLUMN != null && message.hasOwnProperty("SHOW_PASSAGETYPE_COLUMN"))
                object.SHOW_PASSAGETYPE_COLUMN = message.SHOW_PASSAGETYPE_COLUMN;
            if (message.SHOW_SCHEDULE_COLUMN != null && message.hasOwnProperty("SHOW_SCHEDULE_COLUMN"))
                object.SHOW_SCHEDULE_COLUMN = message.SHOW_SCHEDULE_COLUMN;
            if (message.SUPPRESS_COUNTDOWN_TIME_INCREMENT != null && message.hasOwnProperty("SUPPRESS_COUNTDOWN_TIME_INCREMENT"))
                object.SUPPRESS_COUNTDOWN_TIME_INCREMENT = message.SUPPRESS_COUNTDOWN_TIME_INCREMENT;
            if (message.TIMESLIDER_ENABLED != null && message.hasOwnProperty("TIMESLIDER_ENABLED"))
                object.TIMESLIDER_ENABLED = message.TIMESLIDER_ENABLED;
            return object;
        };

        /**
         * Converts this Settings to JSON.
         * @function toJSON
         * @memberof awesomepackage.Settings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Settings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Settings;
    })();

    return awesomepackage;
})();

module.exports = $root;
