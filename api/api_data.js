define({ "api": [
  {
    "type": "get",
    "url": "/geo/stations",
    "title": "Request station locations",
    "name": "GetStationsLocations",
    "group": "Geo",
    "version": "1.0.0",
    "deprecated": {
      "content": "use now (#Geo:StopLocations)."
    },
    "filename": "src/api-routes.ts",
    "groupTitle": "Geo"
  },
  {
    "type": "get",
    "url": "/geo/vehicle/:id",
    "title": "Request vehicle location",
    "name": "GetVehicleLocation",
    "group": "Geo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicle id</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Geo"
  },
  {
    "type": "get",
    "url": "/geo/vehicles",
    "title": "Request vehicle locations",
    "name": "GetVehicleLocations",
    "group": "Geo",
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Geo"
  },
  {
    "type": "get",
    "url": "/geo/stops",
    "title": "Request stop locations",
    "name": "StopLocations",
    "group": "Geo",
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Geo"
  },
  {
    "type": "get",
    "url": "/settings",
    "title": "Request Trapeze Settings",
    "name": "GetSettings",
    "group": "Settings",
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "/stop/:id/departures",
    "title": "Request Stop Departures",
    "name": "GetStopDepartures",
    "group": "Stop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stop id</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Stop"
  },
  {
    "type": "get",
    "url": "/stop/:id/info",
    "title": "Request Stop Info",
    "name": "GetStopInfo",
    "group": "Stop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stop id</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Stop"
  },
  {
    "type": "get",
    "url": "/stopPoint/:id/info",
    "title": "Request stop point info",
    "name": "StopPointInfo",
    "group": "StopPoint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stop Point ID</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "StopPoint"
  },
  {
    "type": "get",
    "url": "/trip/:id/passages",
    "title": "Request Trip Passages",
    "name": "GetTripPassages",
    "group": "Trip",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicle id</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Trip"
  },
  {
    "type": "get",
    "url": "/trip/:id/route",
    "title": "Request Vehicle Route",
    "name": "GetTripRoute",
    "group": "Trip",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicle id</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Trip"
  },
  {
    "type": "get",
    "url": "/vehicle/:id/route",
    "title": "Request Vehicle Route",
    "name": "GetVehicleRoute",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicle id</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/api-routes.ts",
    "groupTitle": "Vehicle"
  }
] });