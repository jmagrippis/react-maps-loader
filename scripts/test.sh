#!/bin/bash

yarn startDemo & yarn wait-on http://localhost:4444
yarn cypress run
