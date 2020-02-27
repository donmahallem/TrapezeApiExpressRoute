import * as $protobuf from "protobufjs";
/** Namespace awesomepackage. */
export namespace awesomepackage {

    /** Properties of a VehicleLocation. */
    interface IVehicleLocation {

        /** Check if vehicle is Deleted */
        isDeleted?: (boolean|null);

        /** Kind of Vehicle */
        category?: (string|null);

        /** VehicleLocation color */
        color?: (string|null);

        /** Heading of the vehicle in degrees */
        heading?: (number|null);

        /** Latitude in arcmiliseconds */
        latitude?: (number|null);

        /** Longitude in arcmiliseconds */
        longitude?: (number|null);

        /** Humanreadable vehicle name */
        name?: (string|null);

        /** Previous Vehicle locations */
        path?: (awesomepackage.VehicleLocation.IPathSegment[]|null);

        /** Current TripId of the vehicle */
        tripId?: (string|null);
    }

    /** Represents a VehicleLocation. */
    class VehicleLocation implements IVehicleLocation {

        /**
         * Constructs a new VehicleLocation.
         * @param [properties] Properties to set
         */
        constructor(properties?: awesomepackage.IVehicleLocation);

        /** Check if vehicle is Deleted */
        public isDeleted: boolean;

        /** Kind of Vehicle */
        public category: string;

        /** VehicleLocation color. */
        public color: string;

        /** Heading of the vehicle in degrees */
        public heading: number;

        /** Latitude in arcmiliseconds */
        public latitude: number;

        /** Longitude in arcmiliseconds */
        public longitude: number;

        /** Humanreadable vehicle name */
        public name: string;

        /** Previous Vehicle locations */
        public path: awesomepackage.VehicleLocation.IPathSegment[];

        /** Current TripId of the vehicle */
        public tripId: string;

        /**
         * Creates a new VehicleLocation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VehicleLocation instance
         */
        public static create(properties?: awesomepackage.IVehicleLocation): awesomepackage.VehicleLocation;

        /**
         * Encodes the specified VehicleLocation message. Does not implicitly {@link awesomepackage.VehicleLocation.verify|verify} messages.
         * @param message VehicleLocation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awesomepackage.IVehicleLocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VehicleLocation message, length delimited. Does not implicitly {@link awesomepackage.VehicleLocation.verify|verify} messages.
         * @param message VehicleLocation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awesomepackage.IVehicleLocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleLocation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VehicleLocation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awesomepackage.VehicleLocation;

        /**
         * Decodes a VehicleLocation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VehicleLocation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awesomepackage.VehicleLocation;

        /**
         * Verifies a VehicleLocation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VehicleLocation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VehicleLocation
         */
        public static fromObject(object: { [k: string]: any }): awesomepackage.VehicleLocation;

        /**
         * Creates a plain object from a VehicleLocation message. Also converts values to other types if specified.
         * @param message VehicleLocation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awesomepackage.VehicleLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VehicleLocation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace VehicleLocation {

        /** Properties of a PathSegment. */
        interface IPathSegment {

            /** PathSegment x1 */
            x1?: (number|null);

            /** PathSegment x2 */
            x2?: (number|null);

            /** PathSegment y1 */
            y1?: (number|null);

            /** PathSegment y2 */
            y2?: (number|null);

            /** PathSegment angle */
            angle?: (number|null);

            /** PathSegment length */
            length?: (number|null);
        }

        /** Represents a PathSegment. */
        class PathSegment implements IPathSegment {

            /**
             * Constructs a new PathSegment.
             * @param [properties] Properties to set
             */
            constructor(properties?: awesomepackage.VehicleLocation.IPathSegment);

            /** PathSegment x1. */
            public x1: number;

            /** PathSegment x2. */
            public x2: number;

            /** PathSegment y1. */
            public y1: number;

            /** PathSegment y2. */
            public y2: number;

            /** PathSegment angle. */
            public angle: number;

            /** PathSegment length. */
            public length: number;

            /**
             * Creates a new PathSegment instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PathSegment instance
             */
            public static create(properties?: awesomepackage.VehicleLocation.IPathSegment): awesomepackage.VehicleLocation.PathSegment;

            /**
             * Encodes the specified PathSegment message. Does not implicitly {@link awesomepackage.VehicleLocation.PathSegment.verify|verify} messages.
             * @param message PathSegment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: awesomepackage.VehicleLocation.IPathSegment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PathSegment message, length delimited. Does not implicitly {@link awesomepackage.VehicleLocation.PathSegment.verify|verify} messages.
             * @param message PathSegment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: awesomepackage.VehicleLocation.IPathSegment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PathSegment message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PathSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awesomepackage.VehicleLocation.PathSegment;

            /**
             * Decodes a PathSegment message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PathSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awesomepackage.VehicleLocation.PathSegment;

            /**
             * Verifies a PathSegment message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PathSegment message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PathSegment
             */
            public static fromObject(object: { [k: string]: any }): awesomepackage.VehicleLocation.PathSegment;

            /**
             * Creates a plain object from a PathSegment message. Also converts values to other types if specified.
             * @param message PathSegment
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: awesomepackage.VehicleLocation.PathSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PathSegment to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a VehicleLocationList. */
    interface IVehicleLocationList {

        /** Timestamp */
        lastUpdate?: (number|null);

        /** reported locations */
        vehicles?: (awesomepackage.IVehicleLocation[]|null);
    }

    /** Represents a VehicleLocationList. */
    class VehicleLocationList implements IVehicleLocationList {

        /**
         * Constructs a new VehicleLocationList.
         * @param [properties] Properties to set
         */
        constructor(properties?: awesomepackage.IVehicleLocationList);

        /** Timestamp */
        public lastUpdate: number;

        /** reported locations */
        public vehicles: awesomepackage.IVehicleLocation[];

        /**
         * Creates a new VehicleLocationList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VehicleLocationList instance
         */
        public static create(properties?: awesomepackage.IVehicleLocationList): awesomepackage.VehicleLocationList;

        /**
         * Encodes the specified VehicleLocationList message. Does not implicitly {@link awesomepackage.VehicleLocationList.verify|verify} messages.
         * @param message VehicleLocationList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awesomepackage.IVehicleLocationList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VehicleLocationList message, length delimited. Does not implicitly {@link awesomepackage.VehicleLocationList.verify|verify} messages.
         * @param message VehicleLocationList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awesomepackage.IVehicleLocationList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleLocationList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VehicleLocationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awesomepackage.VehicleLocationList;

        /**
         * Decodes a VehicleLocationList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VehicleLocationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awesomepackage.VehicleLocationList;

        /**
         * Verifies a VehicleLocationList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VehicleLocationList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VehicleLocationList
         */
        public static fromObject(object: { [k: string]: any }): awesomepackage.VehicleLocationList;

        /**
         * Creates a plain object from a VehicleLocationList message. Also converts values to other types if specified.
         * @param message VehicleLocationList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awesomepackage.VehicleLocationList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VehicleLocationList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Settings. */
    interface ISettings {

        /** Settings AVAILABLE_LANGUAGES */
        AVAILABLE_LANGUAGES?: (string[]|null);

        /** Settings DEFAULT_TIME_PREVIEW */
        DEFAULT_TIME_PREVIEW?: (number|null);

        /** Settings GEOLOCATION_ENABLED */
        GEOLOCATION_ENABLED?: (boolean|null);

        /** Settings INITIAL_LAT */
        INITIAL_LAT?: (number|null);

        /** Settings INITIAL_LON */
        INITIAL_LON?: (number|null);

        /** Settings INITIAL_ZOOM */
        INITIAL_ZOOM?: (number|null);

        /** Settings LANGUAGE */
        LANGUAGE?: (string|null);

        /** Settings MAP_ENABLED */
        MAP_ENABLED?: (boolean|null);

        /** Settings MAP_SHOW_CONTROLS */
        MAP_SHOW_CONTROLS?: (boolean|null);

        /** Settings MAP_SHOW_PATTERNS */
        MAP_SHOW_PATTERNS?: (boolean|null);

        /** Settings MAP_SHOW_STOPS */
        MAP_SHOW_STOPS?: (boolean|null);

        /** Settings MAP_SHOW_VEHICLES */
        MAP_SHOW_VEHICLES?: (boolean|null);

        /** Settings MAX_ZOOM */
        MAX_ZOOM?: (number|null);

        /** Settings MIN_ZOOM */
        MIN_ZOOM?: (number|null);

        /** Settings MOBILE_ENABLED */
        MOBILE_ENABLED?: (boolean|null);

        /** Settings SEARCH_BY_ROUTES_ENABLED */
        SEARCH_BY_ROUTES_ENABLED?: (boolean|null);

        /** Settings SEARCH_BY_STOPPOINTS_ENABLED */
        SEARCH_BY_STOPPOINTS_ENABLED?: (boolean|null);

        /** Settings SHOW_ABOUT_DEPARTURE_TEXT */
        SHOW_ABOUT_DEPARTURE_TEXT?: (boolean|null);

        /** Settings SHOW_ACTUAL_COLUMN */
        SHOW_ACTUAL_COLUMN?: (boolean|null);

        /** Settings SHOW_DEPARTING_TEXT */
        SHOW_DEPARTING_TEXT?: (boolean|null);

        /** Settings SHOW_DEP_ARR_TEXT */
        SHOW_DEP_ARR_TEXT?: (boolean|null);

        /** Settings SHOW_LANGUAGE_BAR */
        SHOW_LANGUAGE_BAR?: (boolean|null);

        /** Settings SHOW_MIXED_COLUMN */
        SHOW_MIXED_COLUMN?: (boolean|null);

        /** Settings SHOW_PASSAGETYPE_COLUMN */
        SHOW_PASSAGETYPE_COLUMN?: (boolean|null);

        /** Settings SHOW_SCHEDULE_COLUMN */
        SHOW_SCHEDULE_COLUMN?: (boolean|null);

        /** Settings SUPPRESS_COUNTDOWN_TIME_INCREMENT */
        SUPPRESS_COUNTDOWN_TIME_INCREMENT?: (boolean|null);

        /** Settings TIMESLIDER_ENABLED */
        TIMESLIDER_ENABLED?: (boolean|null);
    }

    /** Represents a Settings. */
    class Settings implements ISettings {

        /**
         * Constructs a new Settings.
         * @param [properties] Properties to set
         */
        constructor(properties?: awesomepackage.ISettings);

        /** Settings AVAILABLE_LANGUAGES. */
        public AVAILABLE_LANGUAGES: string[];

        /** Settings DEFAULT_TIME_PREVIEW. */
        public DEFAULT_TIME_PREVIEW: number;

        /** Settings GEOLOCATION_ENABLED. */
        public GEOLOCATION_ENABLED: boolean;

        /** Settings INITIAL_LAT. */
        public INITIAL_LAT: number;

        /** Settings INITIAL_LON. */
        public INITIAL_LON: number;

        /** Settings INITIAL_ZOOM. */
        public INITIAL_ZOOM: number;

        /** Settings LANGUAGE. */
        public LANGUAGE: string;

        /** Settings MAP_ENABLED. */
        public MAP_ENABLED: boolean;

        /** Settings MAP_SHOW_CONTROLS. */
        public MAP_SHOW_CONTROLS: boolean;

        /** Settings MAP_SHOW_PATTERNS. */
        public MAP_SHOW_PATTERNS: boolean;

        /** Settings MAP_SHOW_STOPS. */
        public MAP_SHOW_STOPS: boolean;

        /** Settings MAP_SHOW_VEHICLES. */
        public MAP_SHOW_VEHICLES: boolean;

        /** Settings MAX_ZOOM. */
        public MAX_ZOOM: number;

        /** Settings MIN_ZOOM. */
        public MIN_ZOOM: number;

        /** Settings MOBILE_ENABLED. */
        public MOBILE_ENABLED: boolean;

        /** Settings SEARCH_BY_ROUTES_ENABLED. */
        public SEARCH_BY_ROUTES_ENABLED: boolean;

        /** Settings SEARCH_BY_STOPPOINTS_ENABLED. */
        public SEARCH_BY_STOPPOINTS_ENABLED: boolean;

        /** Settings SHOW_ABOUT_DEPARTURE_TEXT. */
        public SHOW_ABOUT_DEPARTURE_TEXT: boolean;

        /** Settings SHOW_ACTUAL_COLUMN. */
        public SHOW_ACTUAL_COLUMN: boolean;

        /** Settings SHOW_DEPARTING_TEXT. */
        public SHOW_DEPARTING_TEXT: boolean;

        /** Settings SHOW_DEP_ARR_TEXT. */
        public SHOW_DEP_ARR_TEXT: boolean;

        /** Settings SHOW_LANGUAGE_BAR. */
        public SHOW_LANGUAGE_BAR: boolean;

        /** Settings SHOW_MIXED_COLUMN. */
        public SHOW_MIXED_COLUMN: boolean;

        /** Settings SHOW_PASSAGETYPE_COLUMN. */
        public SHOW_PASSAGETYPE_COLUMN: boolean;

        /** Settings SHOW_SCHEDULE_COLUMN. */
        public SHOW_SCHEDULE_COLUMN: boolean;

        /** Settings SUPPRESS_COUNTDOWN_TIME_INCREMENT. */
        public SUPPRESS_COUNTDOWN_TIME_INCREMENT: boolean;

        /** Settings TIMESLIDER_ENABLED. */
        public TIMESLIDER_ENABLED: boolean;

        /**
         * Creates a new Settings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Settings instance
         */
        public static create(properties?: awesomepackage.ISettings): awesomepackage.Settings;

        /**
         * Encodes the specified Settings message. Does not implicitly {@link awesomepackage.Settings.verify|verify} messages.
         * @param message Settings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awesomepackage.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Settings message, length delimited. Does not implicitly {@link awesomepackage.Settings.verify|verify} messages.
         * @param message Settings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awesomepackage.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Settings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awesomepackage.Settings;

        /**
         * Decodes a Settings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awesomepackage.Settings;

        /**
         * Verifies a Settings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Settings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Settings
         */
        public static fromObject(object: { [k: string]: any }): awesomepackage.Settings;

        /**
         * Creates a plain object from a Settings message. Also converts values to other types if specified.
         * @param message Settings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awesomepackage.Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Settings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
