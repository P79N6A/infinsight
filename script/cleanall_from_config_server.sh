#!/bin/env bash

mongo 127.0.0.1:3001/MonitorData -eval "db.dropDatabase()"
mongo 127.0.0.1:3001/MonitorConfig  -eval "db.dropDatabase()"

