/*!
 * wavesurfer.js 6.0.1 (2022-02-18)
 * https://wavesurfer-js.org
 * @license BSD-3-Clause
 */
(self["webpackChunkWaveSurfer"] = self["webpackChunkWaveSurfer"] || []).push([["commons"],{

/***/ "./spec/drawer.spec.js":
/*!*****************************!*\
  !*** ./spec/drawer.spec.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _testHelpers = _interopRequireDefault(__webpack_require__(/*! ./test-helpers.js */ "./spec/test-helpers.js"));

var _drawer = _interopRequireDefault(__webpack_require__(/*! ../src/drawer */ "./src/drawer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jasmine */

/** @test {Drawer} */
describe('Drawer', function () {
  var container;
  var drawer;
  beforeEach(function () {
    container = _testHelpers.default.createElement();
    drawer = new _drawer.default(container, {});
    drawer.createWrapper();
  });
  afterEach(function () {
    if (drawer) {
      drawer.destroy(); // destroy removed the dom element of the wrapper

      expect(drawer.container.domElement.children.length).toEqual(0);
    }

    _testHelpers.default.removeElement(container);
  });
  /** @test {wrapper} */

  it('wrapper should exist and have correct tagName', function () {
    expect(drawer.wrapper).toBeTruthy();
    expect(drawer.wrapper.tagName.toLowerCase()).toBe('wave');
  });
  /** @test {handleEvent/0.5} */

  it('handleEvent should return 0.5 if clicked in the middle of wrapper', function () {
    var _drawer$wrapper$getBo = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo.right,
        width = _drawer$wrapper$getBo.width;

    expect(drawer.handleEvent({
      clientX: right - width / 2
    }, true)).toBeWithinRange(0.49, 0.51); // because 0.1 + 0.2 !== 0.3
  });
  /** @test {handleEvent/0.9} */

  it('handleEvent should return 0.9 if clicked 10% from the end', function () {
    var _drawer$wrapper$getBo2 = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo2.right,
        width = _drawer$wrapper$getBo2.width;

    expect(drawer.handleEvent({
      clientX: right - width / 10
    }, true)).toBeWithinRange(0.89, 0.91); // because 0.1 + 0.2 !== 0.3
  });
  /** @test {handleEvent/left} */

  it('handleEvent should return 0 if clicked on wrapper left position', function () {
    var _drawer$wrapper$getBo3 = drawer.wrapper.getBoundingClientRect(),
        left = _drawer$wrapper$getBo3.left;

    expect(drawer.handleEvent({
      clientX: left
    }, true)).toBe(0);
  });
  /** @test {handleEvent/left-1} */

  it('handleEvent should return 0 if clicked on wrapper left position -1px', function () {
    var _drawer$wrapper$getBo4 = drawer.wrapper.getBoundingClientRect(),
        left = _drawer$wrapper$getBo4.left;

    expect(drawer.handleEvent({
      clientX: left - 1
    }, true)).toBe(0);
  });
  /** @test {handleEvent/left+1} */

  it('handleEvent should not return 0 if clicked on wrapper left position +1px', function () {
    var _drawer$wrapper$getBo5 = drawer.wrapper.getBoundingClientRect(),
        left = _drawer$wrapper$getBo5.left;

    expect(drawer.handleEvent({
      clientX: left + 1
    }, true)).not.toBe(0);
    expect(drawer.handleEvent({
      clientX: left + 1
    }, true)).toBeGreaterThan(0);
  });
  /** @test {handleEvent/right} */

  it('handleEvent should return 1 if clicked on wrapper right position', function () {
    var _drawer$wrapper$getBo6 = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo6.right;

    expect(drawer.handleEvent({
      clientX: right
    }, true)).toBeCloseTo(1, 3);
  });
  /** @test {handleEvent/right+1} */

  it('handleEvent should return 1 if clicked on wrapper right position +1px', function () {
    var _drawer$wrapper$getBo7 = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo7.right;

    expect(drawer.handleEvent({
      clientX: right + 1
    }, true)).toBe(1);
  });
  /** @test {handleEvent/right-1} */

  it('handleEvent should not return 1 if clicked on wrapper right position -1px', function () {
    var _drawer$wrapper$getBo8 = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo8.right;

    expect(drawer.handleEvent({
      clientX: right - 1
    }, true)).not.toBe(1);
    expect(drawer.handleEvent({
      clientX: right - 1
    }, true)).toBeLessThan(1);
  });
});
/** @test {Drawer} */

describe('Drawer/vertical:', function () {
  var container;
  var drawer;
  beforeEach(function () {
    container = _testHelpers.default.createElement();
    container.style.display = 'flex';
    container.style.height = '800px';
    drawer = new _drawer.default(container, {
      vertical: true,
      fillParent: false
    });
    drawer.createWrapper();
  });
  afterEach(function () {
    if (drawer) {
      drawer.destroy();
    }

    _testHelpers.default.removeElement(container);
  });
  /** @test {wrapper} */

  it('wrapper should exist and have correct tagName', function () {
    expect(drawer.wrapper).toBeTruthy();
    expect(drawer.wrapper.tagName.toLowerCase()).toBe('wave');
  });
  /** @test {handleEvent/0.5} */

  it('handleEvent should return 0.5 if clicked in the middle of wrapper', function () {
    var _drawer$wrapper$getBo9 = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo9.right,
        width = _drawer$wrapper$getBo9.width;

    expect(drawer.handleEvent({
      clientY: right - width / 2
    }, true)).toBeWithinRange(0.49, 0.51); // because 0.1 + 0.2 !== 0.3
  });
  /** @test {handleEvent/0.9} */

  it('handleEvent should return 0.9 if clicked 10% from the end', function () {
    var _drawer$wrapper$getBo10 = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo10.right,
        width = _drawer$wrapper$getBo10.width;

    expect(drawer.handleEvent({
      clientY: right - width / 10
    }, true)).toBeWithinRange(0.89, 0.91); // because 0.1 + 0.2 !== 0.3
  });
  /** @test {handleEvent/left} */

  it('handleEvent should return 0 if clicked on wrapper left position', function () {
    var _drawer$wrapper$getBo11 = drawer.wrapper.getBoundingClientRect(),
        left = _drawer$wrapper$getBo11.left;

    expect(drawer.handleEvent({
      clientY: left
    }, true)).toBe(0);
  });
  /** @test {handleEvent/left-1} */

  it('handleEvent should return 0 if clicked on wrapper left position -1px', function () {
    var _drawer$wrapper$getBo12 = drawer.wrapper.getBoundingClientRect(),
        left = _drawer$wrapper$getBo12.left;

    expect(drawer.handleEvent({
      clientY: left - 1
    }, true)).toBe(0);
  });
  /** @test {handleEvent/left+1} */

  it('handleEvent should not return 0 if clicked on wrapper left position +1px', function () {
    var _drawer$wrapper$getBo13 = drawer.wrapper.getBoundingClientRect(),
        left = _drawer$wrapper$getBo13.left;

    expect(drawer.handleEvent({
      clientY: left + 1
    }, true)).not.toBe(0);
    expect(drawer.handleEvent({
      clientY: left + 1
    }, true)).toBeGreaterThan(0);
  });
  /** @test {handleEvent/right} */

  it('handleEvent should return 1 if clicked on wrapper right position', function () {
    var bbox = drawer.wrapper.getBoundingClientRect();
    expect(drawer.handleEvent({
      clientY: bbox.right
    }, true)).toBeCloseTo(1, 3);
  });
  /** @test {handleEvent/right+1} */

  it('handleEvent should return 1 if clicked on wrapper right position +1px', function () {
    var _drawer$wrapper$getBo14 = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo14.right;

    expect(drawer.handleEvent({
      clientY: right + 1
    }, true)).toBe(1);
  });
  /** @test {handleEvent/right-1} */

  it('handleEvent should not return 1 if clicked on wrapper right position -1px', function () {
    var _drawer$wrapper$getBo15 = drawer.wrapper.getBoundingClientRect(),
        right = _drawer$wrapper$getBo15.right;

    expect(drawer.handleEvent({
      clientY: right - 1
    }, true)).not.toBe(1);
    expect(drawer.handleEvent({
      clientY: right - 1
    }, true)).toBeLessThan(1);
  });
});

/***/ }),

/***/ "./spec/mediaelement-shared.js":
/*!*************************************!*\
  !*** ./spec/mediaelement-shared.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sharedErrorTests = sharedErrorTests;
exports.sharedTests = sharedTests;

var _testHelpers = _interopRequireDefault(__webpack_require__(/*! ./test-helpers */ "./spec/test-helpers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_2qlod8emha() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/spec/mediaelement-shared.js";
  var hash = "2074430baf282c965001ead2bc28e7ec20f963e8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/spec/mediaelement-shared.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "1": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 21,
          column: 7
        }
      },
      "2": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 71
        }
      },
      "3": {
        start: {
          line: 12,
          column: 21
        },
        end: {
          line: 18,
          column: 10
        }
      },
      "4": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 29
        }
      },
      "5": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 26
        }
      },
      "6": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 26,
          column: 7
        }
      },
      "7": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 29
        }
      },
      "8": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 43
        }
      },
      "9": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "10": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 39
        }
      },
      "11": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 22
        }
      },
      "12": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 50,
          column: 7
        }
      },
      "13": {
        start: {
          line: 39,
          column: 33
        },
        end: {
          line: 39,
          column: 72
        }
      },
      "14": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 47,
          column: 11
        }
      },
      "15": {
        start: {
          line: 42,
          column: 12
        },
        end: {
          line: 42,
          column: 31
        }
      },
      "16": {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 44,
          column: 62
        }
      },
      "17": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 46,
          column: 19
        }
      },
      "18": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 49,
          column: 25
        }
      },
      "19": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 65,
          column: 7
        }
      },
      "20": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 63,
          column: 11
        }
      },
      "21": {
        start: {
          line: 58,
          column: 12
        },
        end: {
          line: 58,
          column: 30
        }
      },
      "22": {
        start: {
          line: 60,
          column: 12
        },
        end: {
          line: 60,
          column: 54
        }
      },
      "23": {
        start: {
          line: 62,
          column: 12
        },
        end: {
          line: 62,
          column: 19
        }
      },
      "24": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 64,
          column: 22
        }
      },
      "25": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 83,
          column: 7
        }
      },
      "26": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 81,
          column: 11
        }
      },
      "27": {
        start: {
          line: 74,
          column: 12
        },
        end: {
          line: 74,
          column: 30
        }
      },
      "28": {
        start: {
          line: 75,
          column: 12
        },
        end: {
          line: 75,
          column: 54
        }
      },
      "29": {
        start: {
          line: 77,
          column: 12
        },
        end: {
          line: 77,
          column: 31
        }
      },
      "30": {
        start: {
          line: 78,
          column: 12
        },
        end: {
          line: 78,
          column: 55
        }
      },
      "31": {
        start: {
          line: 80,
          column: 12
        },
        end: {
          line: 80,
          column: 19
        }
      },
      "32": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 22
        }
      },
      "33": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 100,
          column: 7
        }
      },
      "34": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 98,
          column: 11
        }
      },
      "35": {
        start: {
          line: 91,
          column: 12
        },
        end: {
          line: 91,
          column: 35
        }
      },
      "36": {
        start: {
          line: 92,
          column: 12
        },
        end: {
          line: 92,
          column: 54
        }
      },
      "37": {
        start: {
          line: 94,
          column: 12
        },
        end: {
          line: 94,
          column: 35
        }
      },
      "38": {
        start: {
          line: 95,
          column: 12
        },
        end: {
          line: 95,
          column: 55
        }
      },
      "39": {
        start: {
          line: 97,
          column: 12
        },
        end: {
          line: 97,
          column: 19
        }
      },
      "40": {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 99,
          column: 22
        }
      },
      "41": {
        start: {
          line: 103,
          column: 4
        },
        end: {
          line: 111,
          column: 7
        }
      },
      "42": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 109,
          column: 11
        }
      },
      "43": {
        start: {
          line: 105,
          column: 27
        },
        end: {
          line: 105,
          column: 65
        }
      },
      "44": {
        start: {
          line: 106,
          column: 12
        },
        end: {
          line: 106,
          column: 72
        }
      },
      "45": {
        start: {
          line: 108,
          column: 12
        },
        end: {
          line: 108,
          column: 19
        }
      },
      "46": {
        start: {
          line: 110,
          column: 8
        },
        end: {
          line: 110,
          column: 22
        }
      },
      "47": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 128,
          column: 7
        }
      },
      "48": {
        start: {
          line: 115,
          column: 8
        },
        end: {
          line: 126,
          column: 11
        }
      },
      "49": {
        start: {
          line: 117,
          column: 23
        },
        end: {
          line: 117,
          column: 50
        }
      },
      "50": {
        start: {
          line: 118,
          column: 12
        },
        end: {
          line: 118,
          column: 36
        }
      },
      "51": {
        start: {
          line: 121,
          column: 12
        },
        end: {
          line: 121,
          column: 35
        }
      },
      "52": {
        start: {
          line: 122,
          column: 12
        },
        end: {
          line: 122,
          column: 61
        }
      },
      "53": {
        start: {
          line: 123,
          column: 12
        },
        end: {
          line: 123,
          column: 37
        }
      },
      "54": {
        start: {
          line: 125,
          column: 12
        },
        end: {
          line: 125,
          column: 19
        }
      },
      "55": {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 127,
          column: 22
        }
      },
      "56": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 152,
          column: 7
        }
      },
      "57": {
        start: {
          line: 132,
          column: 8
        },
        end: {
          line: 150,
          column: 11
        }
      },
      "58": {
        start: {
          line: 134,
          column: 23
        },
        end: {
          line: 134,
          column: 50
        }
      },
      "59": {
        start: {
          line: 135,
          column: 12
        },
        end: {
          line: 135,
          column: 36
        }
      },
      "60": {
        start: {
          line: 138,
          column: 12
        },
        end: {
          line: 138,
          column: 42
        }
      },
      "61": {
        start: {
          line: 139,
          column: 12
        },
        end: {
          line: 139,
          column: 47
        }
      },
      "62": {
        start: {
          line: 140,
          column: 12
        },
        end: {
          line: 140,
          column: 37
        }
      },
      "63": {
        start: {
          line: 143,
          column: 12
        },
        end: {
          line: 143,
          column: 44
        }
      },
      "64": {
        start: {
          line: 144,
          column: 12
        },
        end: {
          line: 144,
          column: 47
        }
      },
      "65": {
        start: {
          line: 146,
          column: 12
        },
        end: {
          line: 146,
          column: 61
        }
      },
      "66": {
        start: {
          line: 147,
          column: 12
        },
        end: {
          line: 147,
          column: 68
        }
      },
      "67": {
        start: {
          line: 149,
          column: 12
        },
        end: {
          line: 149,
          column: 19
        }
      },
      "68": {
        start: {
          line: 151,
          column: 8
        },
        end: {
          line: 151,
          column: 22
        }
      },
      "69": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 173,
          column: 7
        }
      },
      "70": {
        start: {
          line: 156,
          column: 8
        },
        end: {
          line: 171,
          column: 11
        }
      },
      "71": {
        start: {
          line: 158,
          column: 12
        },
        end: {
          line: 158,
          column: 35
        }
      },
      "72": {
        start: {
          line: 161,
          column: 12
        },
        end: {
          line: 161,
          column: 39
        }
      },
      "73": {
        start: {
          line: 162,
          column: 23
        },
        end: {
          line: 162,
          column: 50
        }
      },
      "74": {
        start: {
          line: 163,
          column: 12
        },
        end: {
          line: 163,
          column: 53
        }
      },
      "75": {
        start: {
          line: 166,
          column: 12
        },
        end: {
          line: 166,
          column: 38
        }
      },
      "76": {
        start: {
          line: 167,
          column: 12
        },
        end: {
          line: 167,
          column: 47
        }
      },
      "77": {
        start: {
          line: 168,
          column: 12
        },
        end: {
          line: 168,
          column: 53
        }
      },
      "78": {
        start: {
          line: 170,
          column: 12
        },
        end: {
          line: 170,
          column: 19
        }
      },
      "79": {
        start: {
          line: 172,
          column: 8
        },
        end: {
          line: 172,
          column: 22
        }
      },
      "80": {
        start: {
          line: 176,
          column: 4
        },
        end: {
          line: 191,
          column: 7
        }
      },
      "81": {
        start: {
          line: 177,
          column: 8
        },
        end: {
          line: 189,
          column: 11
        }
      },
      "82": {
        start: {
          line: 179,
          column: 12
        },
        end: {
          line: 179,
          column: 38
        }
      },
      "83": {
        start: {
          line: 180,
          column: 23
        },
        end: {
          line: 180,
          column: 50
        }
      },
      "84": {
        start: {
          line: 181,
          column: 12
        },
        end: {
          line: 181,
          column: 50
        }
      },
      "85": {
        start: {
          line: 184,
          column: 12
        },
        end: {
          line: 184,
          column: 37
        }
      },
      "86": {
        start: {
          line: 185,
          column: 12
        },
        end: {
          line: 185,
          column: 47
        }
      },
      "87": {
        start: {
          line: 186,
          column: 12
        },
        end: {
          line: 186,
          column: 50
        }
      },
      "88": {
        start: {
          line: 188,
          column: 12
        },
        end: {
          line: 188,
          column: 19
        }
      },
      "89": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 190,
          column: 22
        }
      },
      "90": {
        start: {
          line: 194,
          column: 4
        },
        end: {
          line: 202,
          column: 7
        }
      },
      "91": {
        start: {
          line: 195,
          column: 8
        },
        end: {
          line: 200,
          column: 11
        }
      },
      "92": {
        start: {
          line: 196,
          column: 23
        },
        end: {
          line: 196,
          column: 51
        }
      },
      "93": {
        start: {
          line: 197,
          column: 12
        },
        end: {
          line: 197,
          column: 36
        }
      },
      "94": {
        start: {
          line: 199,
          column: 12
        },
        end: {
          line: 199,
          column: 19
        }
      },
      "95": {
        start: {
          line: 201,
          column: 8
        },
        end: {
          line: 201,
          column: 22
        }
      },
      "96": {
        start: {
          line: 205,
          column: 4
        },
        end: {
          line: 215,
          column: 7
        }
      },
      "97": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 213,
          column: 11
        }
      },
      "98": {
        start: {
          line: 207,
          column: 23
        },
        end: {
          line: 207,
          column: 26
        }
      },
      "99": {
        start: {
          line: 208,
          column: 12
        },
        end: {
          line: 208,
          column: 45
        }
      },
      "100": {
        start: {
          line: 210,
          column: 12
        },
        end: {
          line: 210,
          column: 63
        }
      },
      "101": {
        start: {
          line: 212,
          column: 12
        },
        end: {
          line: 212,
          column: 19
        }
      },
      "102": {
        start: {
          line: 214,
          column: 8
        },
        end: {
          line: 214,
          column: 22
        }
      },
      "103": {
        start: {
          line: 218,
          column: 4
        },
        end: {
          line: 227,
          column: 7
        }
      },
      "104": {
        start: {
          line: 219,
          column: 8
        },
        end: {
          line: 219,
          column: 34
        }
      },
      "105": {
        start: {
          line: 220,
          column: 8
        },
        end: {
          line: 225,
          column: 11
        }
      },
      "106": {
        start: {
          line: 221,
          column: 25
        },
        end: {
          line: 221,
          column: 47
        }
      },
      "107": {
        start: {
          line: 222,
          column: 12
        },
        end: {
          line: 222,
          column: 56
        }
      },
      "108": {
        start: {
          line: 224,
          column: 12
        },
        end: {
          line: 224,
          column: 19
        }
      },
      "109": {
        start: {
          line: 226,
          column: 8
        },
        end: {
          line: 226,
          column: 22
        }
      },
      "110": {
        start: {
          line: 230,
          column: 4
        },
        end: {
          line: 244,
          column: 7
        }
      },
      "111": {
        start: {
          line: 231,
          column: 27
        },
        end: {
          line: 231,
          column: 30
        }
      },
      "112": {
        start: {
          line: 233,
          column: 8
        },
        end: {
          line: 238,
          column: 11
        }
      },
      "113": {
        start: {
          line: 234,
          column: 12
        },
        end: {
          line: 234,
          column: 49
        }
      },
      "114": {
        start: {
          line: 235,
          column: 12
        },
        end: {
          line: 235,
          column: 65
        }
      },
      "115": {
        start: {
          line: 237,
          column: 12
        },
        end: {
          line: 237,
          column: 19
        }
      },
      "116": {
        start: {
          line: 240,
          column: 8
        },
        end: {
          line: 242,
          column: 11
        }
      },
      "117": {
        start: {
          line: 241,
          column: 12
        },
        end: {
          line: 241,
          column: 47
        }
      },
      "118": {
        start: {
          line: 243,
          column: 8
        },
        end: {
          line: 243,
          column: 22
        }
      },
      "119": {
        start: {
          line: 247,
          column: 4
        },
        end: {
          line: 258,
          column: 7
        }
      },
      "120": {
        start: {
          line: 248,
          column: 8
        },
        end: {
          line: 256,
          column: 11
        }
      },
      "121": {
        start: {
          line: 249,
          column: 12
        },
        end: {
          line: 249,
          column: 36
        }
      },
      "122": {
        start: {
          line: 250,
          column: 12
        },
        end: {
          line: 250,
          column: 50
        }
      },
      "123": {
        start: {
          line: 252,
          column: 12
        },
        end: {
          line: 252,
          column: 36
        }
      },
      "124": {
        start: {
          line: 253,
          column: 12
        },
        end: {
          line: 253,
          column: 51
        }
      },
      "125": {
        start: {
          line: 255,
          column: 12
        },
        end: {
          line: 255,
          column: 19
        }
      },
      "126": {
        start: {
          line: 257,
          column: 8
        },
        end: {
          line: 257,
          column: 22
        }
      },
      "127": {
        start: {
          line: 261,
          column: 4
        },
        end: {
          line: 272,
          column: 7
        }
      },
      "128": {
        start: {
          line: 262,
          column: 8
        },
        end: {
          line: 270,
          column: 11
        }
      },
      "129": {
        start: {
          line: 263,
          column: 12
        },
        end: {
          line: 263,
          column: 37
        }
      },
      "130": {
        start: {
          line: 264,
          column: 12
        },
        end: {
          line: 264,
          column: 50
        }
      },
      "131": {
        start: {
          line: 266,
          column: 12
        },
        end: {
          line: 266,
          column: 38
        }
      },
      "132": {
        start: {
          line: 267,
          column: 12
        },
        end: {
          line: 267,
          column: 51
        }
      },
      "133": {
        start: {
          line: 269,
          column: 12
        },
        end: {
          line: 269,
          column: 19
        }
      },
      "134": {
        start: {
          line: 271,
          column: 8
        },
        end: {
          line: 271,
          column: 22
        }
      },
      "135": {
        start: {
          line: 275,
          column: 4
        },
        end: {
          line: 286,
          column: 7
        }
      },
      "136": {
        start: {
          line: 276,
          column: 8
        },
        end: {
          line: 284,
          column: 11
        }
      },
      "137": {
        start: {
          line: 277,
          column: 12
        },
        end: {
          line: 277,
          column: 37
        }
      },
      "138": {
        start: {
          line: 278,
          column: 12
        },
        end: {
          line: 278,
          column: 52
        }
      },
      "139": {
        start: {
          line: 280,
          column: 12
        },
        end: {
          line: 280,
          column: 38
        }
      },
      "140": {
        start: {
          line: 281,
          column: 12
        },
        end: {
          line: 281,
          column: 53
        }
      },
      "141": {
        start: {
          line: 283,
          column: 12
        },
        end: {
          line: 283,
          column: 19
        }
      },
      "142": {
        start: {
          line: 285,
          column: 8
        },
        end: {
          line: 285,
          column: 22
        }
      },
      "143": {
        start: {
          line: 292,
          column: 4
        },
        end: {
          line: 294,
          column: 7
        }
      },
      "144": {
        start: {
          line: 293,
          column: 8
        },
        end: {
          line: 293,
          column: 52
        }
      },
      "145": {
        start: {
          line: 296,
          column: 4
        },
        end: {
          line: 298,
          column: 7
        }
      },
      "146": {
        start: {
          line: 297,
          column: 8
        },
        end: {
          line: 297,
          column: 43
        }
      },
      "147": {
        start: {
          line: 303,
          column: 4
        },
        end: {
          line: 313,
          column: 7
        }
      },
      "148": {
        start: {
          line: 304,
          column: 19
        },
        end: {
          line: 307,
          column: 10
        }
      },
      "149": {
        start: {
          line: 308,
          column: 8
        },
        end: {
          line: 312,
          column: 78
        }
      },
      "150": {
        start: {
          line: 309,
          column: 12
        },
        end: {
          line: 311,
          column: 15
        }
      },
      "151": {
        start: {
          line: 317,
          column: 4
        },
        end: {
          line: 317,
          column: 53
        }
      },
      "152": {
        start: {
          line: 318,
          column: 4
        },
        end: {
          line: 318,
          column: 34
        }
      },
      "153": {
        start: {
          line: 323,
          column: 4
        },
        end: {
          line: 327,
          column: 7
        }
      },
      "154": {
        start: {
          line: 324,
          column: 20
        },
        end: {
          line: 324,
          column: 56
        }
      },
      "155": {
        start: {
          line: 326,
          column: 8
        },
        end: {
          line: 326,
          column: 86
        }
      }
    },
    fnMap: {
      "0": {
        name: "sharedTests",
        decl: {
          start: {
            line: 6,
            column: 16
          },
          end: {
            line: 6,
            column: 27
          }
        },
        loc: {
          start: {
            line: 6,
            column: 37
          },
          end: {
            line: 287,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 15
          },
          end: {
            line: 10,
            column: 16
          }
        },
        loc: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 23,
            column: 15
          }
        },
        loc: {
          start: {
            line: 23,
            column: 25
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 23
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 30,
            column: 26
          },
          end: {
            line: 30,
            column: 27
          }
        },
        loc: {
          start: {
            line: 30,
            column: 41
          },
          end: {
            line: 33,
            column: 5
          }
        },
        line: 30
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 38,
            column: 70
          },
          end: {
            line: 38,
            column: 71
          }
        },
        loc: {
          start: {
            line: 38,
            column: 85
          },
          end: {
            line: 50,
            column: 5
          }
        },
        line: 38
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 41,
            column: 40
          },
          end: {
            line: 41,
            column: 41
          }
        },
        loc: {
          start: {
            line: 41,
            column: 46
          },
          end: {
            line: 47,
            column: 9
          }
        },
        line: 41
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 56,
            column: 22
          },
          end: {
            line: 56,
            column: 23
          }
        },
        loc: {
          start: {
            line: 56,
            column: 37
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 56
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 57,
            column: 33
          },
          end: {
            line: 57,
            column: 34
          }
        },
        loc: {
          start: {
            line: 57,
            column: 44
          },
          end: {
            line: 63,
            column: 9
          }
        },
        line: 57
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 72,
            column: 23
          },
          end: {
            line: 72,
            column: 24
          }
        },
        loc: {
          start: {
            line: 72,
            column: 38
          },
          end: {
            line: 83,
            column: 5
          }
        },
        line: 72
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 73,
            column: 33
          },
          end: {
            line: 73,
            column: 34
          }
        },
        loc: {
          start: {
            line: 73,
            column: 44
          },
          end: {
            line: 81,
            column: 9
          }
        },
        line: 73
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 89,
            column: 31
          },
          end: {
            line: 89,
            column: 32
          }
        },
        loc: {
          start: {
            line: 89,
            column: 46
          },
          end: {
            line: 100,
            column: 5
          }
        },
        line: 89
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 90,
            column: 33
          },
          end: {
            line: 90,
            column: 34
          }
        },
        loc: {
          start: {
            line: 90,
            column: 44
          },
          end: {
            line: 98,
            column: 9
          }
        },
        line: 90
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 103,
            column: 30
          },
          end: {
            line: 103,
            column: 31
          }
        },
        loc: {
          start: {
            line: 103,
            column: 45
          },
          end: {
            line: 111,
            column: 5
          }
        },
        line: 103
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 104,
            column: 33
          },
          end: {
            line: 104,
            column: 34
          }
        },
        loc: {
          start: {
            line: 104,
            column: 44
          },
          end: {
            line: 109,
            column: 9
          }
        },
        line: 104
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 114,
            column: 33
          },
          end: {
            line: 114,
            column: 34
          }
        },
        loc: {
          start: {
            line: 114,
            column: 48
          },
          end: {
            line: 128,
            column: 5
          }
        },
        line: 114
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 115,
            column: 33
          },
          end: {
            line: 115,
            column: 34
          }
        },
        loc: {
          start: {
            line: 115,
            column: 44
          },
          end: {
            line: 126,
            column: 9
          }
        },
        line: 115
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 131,
            column: 33
          },
          end: {
            line: 131,
            column: 34
          }
        },
        loc: {
          start: {
            line: 131,
            column: 48
          },
          end: {
            line: 152,
            column: 5
          }
        },
        line: 131
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 132,
            column: 33
          },
          end: {
            line: 132,
            column: 34
          }
        },
        loc: {
          start: {
            line: 132,
            column: 44
          },
          end: {
            line: 150,
            column: 9
          }
        },
        line: 132
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 155,
            column: 31
          },
          end: {
            line: 155,
            column: 32
          }
        },
        loc: {
          start: {
            line: 155,
            column: 46
          },
          end: {
            line: 173,
            column: 5
          }
        },
        line: 155
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 156,
            column: 33
          },
          end: {
            line: 156,
            column: 34
          }
        },
        loc: {
          start: {
            line: 156,
            column: 44
          },
          end: {
            line: 171,
            column: 9
          }
        },
        line: 156
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 176,
            column: 30
          },
          end: {
            line: 176,
            column: 31
          }
        },
        loc: {
          start: {
            line: 176,
            column: 45
          },
          end: {
            line: 191,
            column: 5
          }
        },
        line: 176
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 177,
            column: 33
          },
          end: {
            line: 177,
            column: 34
          }
        },
        loc: {
          start: {
            line: 177,
            column: 44
          },
          end: {
            line: 189,
            column: 9
          }
        },
        line: 177
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 194,
            column: 35
          },
          end: {
            line: 194,
            column: 36
          }
        },
        loc: {
          start: {
            line: 194,
            column: 50
          },
          end: {
            line: 202,
            column: 5
          }
        },
        line: 194
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 195,
            column: 33
          },
          end: {
            line: 195,
            column: 34
          }
        },
        loc: {
          start: {
            line: 195,
            column: 44
          },
          end: {
            line: 200,
            column: 9
          }
        },
        line: 195
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 205,
            column: 35
          },
          end: {
            line: 205,
            column: 36
          }
        },
        loc: {
          start: {
            line: 205,
            column: 50
          },
          end: {
            line: 215,
            column: 5
          }
        },
        line: 205
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 206,
            column: 33
          },
          end: {
            line: 206,
            column: 34
          }
        },
        loc: {
          start: {
            line: 206,
            column: 44
          },
          end: {
            line: 213,
            column: 9
          }
        },
        line: 206
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 218,
            column: 28
          },
          end: {
            line: 218,
            column: 29
          }
        },
        loc: {
          start: {
            line: 218,
            column: 43
          },
          end: {
            line: 227,
            column: 5
          }
        },
        line: 218
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 220,
            column: 33
          },
          end: {
            line: 220,
            column: 34
          }
        },
        loc: {
          start: {
            line: 220,
            column: 44
          },
          end: {
            line: 225,
            column: 9
          }
        },
        line: 220
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 230,
            column: 28
          },
          end: {
            line: 230,
            column: 29
          }
        },
        loc: {
          start: {
            line: 230,
            column: 43
          },
          end: {
            line: 244,
            column: 5
          }
        },
        line: 230
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 233,
            column: 34
          },
          end: {
            line: 233,
            column: 35
          }
        },
        loc: {
          start: {
            line: 233,
            column: 51
          },
          end: {
            line: 238,
            column: 9
          }
        },
        line: 233
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 240,
            column: 33
          },
          end: {
            line: 240,
            column: 34
          }
        },
        loc: {
          start: {
            line: 240,
            column: 44
          },
          end: {
            line: 242,
            column: 9
          }
        },
        line: 240
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 247,
            column: 29
          },
          end: {
            line: 247,
            column: 30
          }
        },
        loc: {
          start: {
            line: 247,
            column: 44
          },
          end: {
            line: 258,
            column: 5
          }
        },
        line: 247
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 248,
            column: 33
          },
          end: {
            line: 248,
            column: 34
          }
        },
        loc: {
          start: {
            line: 248,
            column: 44
          },
          end: {
            line: 256,
            column: 9
          }
        },
        line: 248
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 261,
            column: 26
          },
          end: {
            line: 261,
            column: 27
          }
        },
        loc: {
          start: {
            line: 261,
            column: 41
          },
          end: {
            line: 272,
            column: 5
          }
        },
        line: 261
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 262,
            column: 33
          },
          end: {
            line: 262,
            column: 34
          }
        },
        loc: {
          start: {
            line: 262,
            column: 44
          },
          end: {
            line: 270,
            column: 9
          }
        },
        line: 262
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 275,
            column: 26
          },
          end: {
            line: 275,
            column: 27
          }
        },
        loc: {
          start: {
            line: 275,
            column: 41
          },
          end: {
            line: 286,
            column: 5
          }
        },
        line: 275
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 276,
            column: 33
          },
          end: {
            line: 276,
            column: 34
          }
        },
        loc: {
          start: {
            line: 276,
            column: 44
          },
          end: {
            line: 284,
            column: 9
          }
        },
        line: 276
      },
      "37": {
        name: "sharedErrorTests",
        decl: {
          start: {
            line: 289,
            column: 16
          },
          end: {
            line: 289,
            column: 32
          }
        },
        loc: {
          start: {
            line: 289,
            column: 42
          },
          end: {
            line: 314,
            column: 1
          }
        },
        line: 289
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 292,
            column: 15
          },
          end: {
            line: 292,
            column: 16
          }
        },
        loc: {
          start: {
            line: 292,
            column: 26
          },
          end: {
            line: 294,
            column: 5
          }
        },
        line: 292
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 296,
            column: 14
          },
          end: {
            line: 296,
            column: 15
          }
        },
        loc: {
          start: {
            line: 296,
            column: 25
          },
          end: {
            line: 298,
            column: 5
          }
        },
        line: 296
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 303,
            column: 66
          },
          end: {
            line: 303,
            column: 67
          }
        },
        loc: {
          start: {
            line: 303,
            column: 77
          },
          end: {
            line: 313,
            column: 5
          }
        },
        line: 303
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 308,
            column: 15
          },
          end: {
            line: 308,
            column: 16
          }
        },
        loc: {
          start: {
            line: 308,
            column: 26
          },
          end: {
            line: 312,
            column: 9
          }
        },
        line: 308
      },
      "42": {
        name: "loadElement",
        decl: {
          start: {
            line: 315,
            column: 9
          },
          end: {
            line: 315,
            column: 20
          }
        },
        loc: {
          start: {
            line: 315,
            column: 23
          },
          end: {
            line: 319,
            column: 1
          }
        },
        line: 315
      },
      "43": {
        name: "loadAudioPeaks",
        decl: {
          start: {
            line: 322,
            column: 9
          },
          end: {
            line: 322,
            column: 23
          }
        },
        loc: {
          start: {
            line: 322,
            column: 26
          },
          end: {
            line: 328,
            column: 1
          }
        },
        line: 322
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 323,
            column: 68
          },
          end: {
            line: 323,
            column: 69
          }
        },
        loc: {
          start: {
            line: 323,
            column: 79
          },
          end: {
            line: 327,
            column: 5
          }
        },
        line: 323
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2074430baf282c965001ead2bc28e7ec20f963e8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2qlod8emha = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2qlod8emha();
var audioElement;
var wavesurfer;

function sharedTests(backend) {
  cov_2qlod8emha().f[0]++;
  var element;
  cov_2qlod8emha().s[0]++;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  cov_2qlod8emha().s[1]++;
  beforeEach(function () {
    cov_2qlod8emha().f[1]++;
    cov_2qlod8emha().s[2]++;
    audioElement = _testHelpers.default.createElement('testAudio', 'audio');
    var wave = (cov_2qlod8emha().s[3]++, _testHelpers.default.createWaveform({
      container: _testHelpers.default.createElement(),
      waveColor: 'red',
      progressColor: 'orange',
      cursorColor: 'white',
      backend: backend
    }));
    cov_2qlod8emha().s[4]++;
    wavesurfer = wave[0];
    cov_2qlod8emha().s[5]++;
    element = wave[1];
  });
  cov_2qlod8emha().s[6]++;
  afterEach(function () {
    cov_2qlod8emha().f[2]++;
    cov_2qlod8emha().s[7]++;
    wavesurfer.destroy();
    cov_2qlod8emha().s[8]++;

    _testHelpers.default.removeElement(element);
  });
  /**
   * @test {WaveSurfer#isReady}
   */

  cov_2qlod8emha().s[9]++;
  it('should be ready', function (done) {
    cov_2qlod8emha().f[3]++;
    cov_2qlod8emha().s[10]++;
    wavesurfer.once('ready', done);
    cov_2qlod8emha().s[11]++;
    loadElement();
  });
  /**
   * @test {WaveSurfer#waveform-ready} When the waveform is drawn, the 'waveform-ready' event is triggered
   */

  cov_2qlod8emha().s[12]++;
  it('should fire waveform-ready event when the waveform is drawn', function (done) {
    cov_2qlod8emha().f[4]++;
    var waveformReadySpy = (cov_2qlod8emha().s[13]++, jasmine.createSpy('waveform-ready-spy'));
    cov_2qlod8emha().s[14]++;
    wavesurfer.on('waveform-ready', function () {
      cov_2qlod8emha().f[5]++;
      cov_2qlod8emha().s[15]++;
      waveformReadySpy();
      cov_2qlod8emha().s[16]++;
      expect(waveformReadySpy).toHaveBeenCalledTimes(1);
      cov_2qlod8emha().s[17]++;
      done();
    });
    cov_2qlod8emha().s[18]++;
    loadAudioPeaks();
  });
  /**
   * @test {WaveSurfer#play}
   * @test {WaveSurfer#isPlaying}
   */

  cov_2qlod8emha().s[19]++;
  it('should play', function (done) {
    cov_2qlod8emha().f[6]++;
    cov_2qlod8emha().s[20]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[7]++;
      cov_2qlod8emha().s[21]++;
      wavesurfer.play();
      cov_2qlod8emha().s[22]++;
      expect(wavesurfer.isPlaying()).toBeTrue();
      cov_2qlod8emha().s[23]++;
      done();
    });
    cov_2qlod8emha().s[24]++;
    loadElement();
  });
  /**
   * @test {WaveSurfer#play}
   * @test {WaveSurfer#isPlaying}
   * @test {WaveSurfer#pause}
   */

  cov_2qlod8emha().s[25]++;
  it('should pause', function (done) {
    cov_2qlod8emha().f[8]++;
    cov_2qlod8emha().s[26]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[9]++;
      cov_2qlod8emha().s[27]++;
      wavesurfer.play();
      cov_2qlod8emha().s[28]++;
      expect(wavesurfer.isPlaying()).toBeTrue();
      cov_2qlod8emha().s[29]++;
      wavesurfer.pause();
      cov_2qlod8emha().s[30]++;
      expect(wavesurfer.isPlaying()).toBeFalse();
      cov_2qlod8emha().s[31]++;
      done();
    });
    cov_2qlod8emha().s[32]++;
    loadElement();
  });
  /**
   * @test {WaveSurfer#playPause}
   * @test {WaveSurfer#isPlaying}
   */

  cov_2qlod8emha().s[33]++;
  it('should play or pause', function (done) {
    cov_2qlod8emha().f[10]++;
    cov_2qlod8emha().s[34]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[11]++;
      cov_2qlod8emha().s[35]++;
      wavesurfer.playPause();
      cov_2qlod8emha().s[36]++;
      expect(wavesurfer.isPlaying()).toBeTrue();
      cov_2qlod8emha().s[37]++;
      wavesurfer.playPause();
      cov_2qlod8emha().s[38]++;
      expect(wavesurfer.isPlaying()).toBeFalse();
      cov_2qlod8emha().s[39]++;
      done();
    });
    cov_2qlod8emha().s[40]++;
    loadElement();
  });
  /** @test {WaveSurfer#getDuration}  */

  cov_2qlod8emha().s[41]++;
  it('should get duration', function (done) {
    cov_2qlod8emha().f[12]++;
    cov_2qlod8emha().s[42]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[13]++;
      var duration = (cov_2qlod8emha().s[43]++, parseInt(wavesurfer.getDuration(), 10));
      cov_2qlod8emha().s[44]++;
      expect(duration).toEqual(_testHelpers.default.EXAMPLE_FILE_DURATION);
      cov_2qlod8emha().s[45]++;
      done();
    });
    cov_2qlod8emha().s[46]++;
    loadElement();
  });
  /** @test {WaveSurfer#getCurrentTime}  */

  cov_2qlod8emha().s[47]++;
  it('should get currentTime', function (done) {
    cov_2qlod8emha().f[14]++;
    cov_2qlod8emha().s[48]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[15]++;
      // initially zero
      var time = (cov_2qlod8emha().s[49]++, wavesurfer.getCurrentTime());
      cov_2qlod8emha().s[50]++;
      expect(time).toEqual(0); // seek to 50%

      cov_2qlod8emha().s[51]++;
      wavesurfer.seekTo(0.5);
      cov_2qlod8emha().s[52]++;
      time = parseInt(wavesurfer.getCurrentTime(), 10);
      cov_2qlod8emha().s[53]++;
      expect(time).toEqual(10);
      cov_2qlod8emha().s[54]++;
      done();
    });
    cov_2qlod8emha().s[55]++;
    loadElement();
  });
  /** @test {WaveSurfer#setCurrentTime}  */

  cov_2qlod8emha().s[56]++;
  it('should set currentTime', function (done) {
    cov_2qlod8emha().f[16]++;
    cov_2qlod8emha().s[57]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[17]++;
      // initially zero
      var time = (cov_2qlod8emha().s[58]++, wavesurfer.getCurrentTime());
      cov_2qlod8emha().s[59]++;
      expect(time).toEqual(0); // set to 10 seconds

      cov_2qlod8emha().s[60]++;
      wavesurfer.setCurrentTime(10);
      cov_2qlod8emha().s[61]++;
      time = wavesurfer.getCurrentTime();
      cov_2qlod8emha().s[62]++;
      expect(time).toEqual(10); // set to something higher than duration

      cov_2qlod8emha().s[63]++;
      wavesurfer.setCurrentTime(1000);
      cov_2qlod8emha().s[64]++;
      time = wavesurfer.getCurrentTime(); // sets it to end of track

      cov_2qlod8emha().s[65]++;
      time = parseInt(wavesurfer.getCurrentTime(), 10);
      cov_2qlod8emha().s[66]++;
      expect(time).toEqual(_testHelpers.default.EXAMPLE_FILE_DURATION);
      cov_2qlod8emha().s[67]++;
      done();
    });
    cov_2qlod8emha().s[68]++;
    loadElement();
  });
  /** @test {WaveSurfer#skipBackward}  */

  cov_2qlod8emha().s[69]++;
  it('should skip backward', function (done) {
    cov_2qlod8emha().f[18]++;
    cov_2qlod8emha().s[70]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[19]++;
      cov_2qlod8emha().s[71]++;
      // seek to 50%
      wavesurfer.seekTo(0.5); // skip 4 seconds backward

      cov_2qlod8emha().s[72]++;
      wavesurfer.skipBackward(4);
      var time = (cov_2qlod8emha().s[73]++, wavesurfer.getCurrentTime());
      cov_2qlod8emha().s[74]++;
      expect(time).toBeWithinRange(6.88, 6.89); // skip backward with params.skipLength (default: 2 seconds)

      cov_2qlod8emha().s[75]++;
      wavesurfer.skipBackward();
      cov_2qlod8emha().s[76]++;
      time = wavesurfer.getCurrentTime();
      cov_2qlod8emha().s[77]++;
      expect(time).toBeWithinRange(4.88, 4.89);
      cov_2qlod8emha().s[78]++;
      done();
    });
    cov_2qlod8emha().s[79]++;
    loadElement();
  });
  /** @test {WaveSurfer#skipForward}  */

  cov_2qlod8emha().s[80]++;
  it('should skip forward', function (done) {
    cov_2qlod8emha().f[20]++;
    cov_2qlod8emha().s[81]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[21]++;
      cov_2qlod8emha().s[82]++;
      // skip 4 seconds forward
      wavesurfer.skipForward(4);
      var time = (cov_2qlod8emha().s[83]++, wavesurfer.getCurrentTime());
      cov_2qlod8emha().s[84]++;
      expect(time).toBeWithinRange(3.99, 4); // skip forward with params.skipLength (default: 2 seconds)

      cov_2qlod8emha().s[85]++;
      wavesurfer.skipForward();
      cov_2qlod8emha().s[86]++;
      time = wavesurfer.getCurrentTime();
      cov_2qlod8emha().s[87]++;
      expect(time).toBeWithinRange(5.99, 6);
      cov_2qlod8emha().s[88]++;
      done();
    });
    cov_2qlod8emha().s[89]++;
    loadElement();
  });
  /** @test {WaveSurfer#getPlaybackRate}  */

  cov_2qlod8emha().s[90]++;
  it('should get playback rate', function (done) {
    cov_2qlod8emha().f[22]++;
    cov_2qlod8emha().s[91]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[23]++;
      var rate = (cov_2qlod8emha().s[92]++, wavesurfer.getPlaybackRate());
      cov_2qlod8emha().s[93]++;
      expect(rate).toEqual(1);
      cov_2qlod8emha().s[94]++;
      done();
    });
    cov_2qlod8emha().s[95]++;
    loadElement();
  });
  /** @test {WaveSurfer#setPlaybackRate}  */

  cov_2qlod8emha().s[96]++;
  it('should set playback rate', function (done) {
    cov_2qlod8emha().f[24]++;
    cov_2qlod8emha().s[97]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[25]++;
      var rate = (cov_2qlod8emha().s[98]++, 0.5);
      cov_2qlod8emha().s[99]++;
      wavesurfer.setPlaybackRate(rate);
      cov_2qlod8emha().s[100]++;
      expect(wavesurfer.getPlaybackRate()).toEqual(rate);
      cov_2qlod8emha().s[101]++;
      done();
    });
    cov_2qlod8emha().s[102]++;
    loadElement();
  });
  /** @test {WaveSurfer#getVolume}  */

  cov_2qlod8emha().s[103]++;
  it('should get volume', function (done) {
    cov_2qlod8emha().f[26]++;
    cov_2qlod8emha().s[104]++;
    audioElement.volume = 0.3;
    cov_2qlod8emha().s[105]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[27]++;
      var volume = (cov_2qlod8emha().s[106]++, wavesurfer.getVolume());
      cov_2qlod8emha().s[107]++;
      expect(volume).toEqual(audioElement.volume);
      cov_2qlod8emha().s[108]++;
      done();
    });
    cov_2qlod8emha().s[109]++;
    loadElement();
  });
  /** @test {WaveSurfer#setVolume}  */

  cov_2qlod8emha().s[110]++;
  it('should set volume', function (done) {
    cov_2qlod8emha().f[28]++;
    var targetVolume = (cov_2qlod8emha().s[111]++, 0.5);
    cov_2qlod8emha().s[112]++;
    wavesurfer.once('volume', function (result) {
      cov_2qlod8emha().f[29]++;
      cov_2qlod8emha().s[113]++;
      expect(result).toEqual(targetVolume);
      cov_2qlod8emha().s[114]++;
      expect(wavesurfer.getVolume()).toEqual(targetVolume);
      cov_2qlod8emha().s[115]++;
      done();
    });
    cov_2qlod8emha().s[116]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[30]++;
      cov_2qlod8emha().s[117]++;
      wavesurfer.setVolume(targetVolume);
    });
    cov_2qlod8emha().s[118]++;
    loadElement();
  });
  /** @test {WaveSurfer#toggleMute}  */

  cov_2qlod8emha().s[119]++;
  it('should toggle mute', function (done) {
    cov_2qlod8emha().f[31]++;
    cov_2qlod8emha().s[120]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[32]++;
      cov_2qlod8emha().s[121]++;
      wavesurfer.toggleMute();
      cov_2qlod8emha().s[122]++;
      expect(wavesurfer.isMuted).toBeTrue();
      cov_2qlod8emha().s[123]++;
      wavesurfer.toggleMute();
      cov_2qlod8emha().s[124]++;
      expect(wavesurfer.isMuted).toBeFalse();
      cov_2qlod8emha().s[125]++;
      done();
    });
    cov_2qlod8emha().s[126]++;
    loadElement();
  });
  /** @test {WaveSurfer#setMute}  */

  cov_2qlod8emha().s[127]++;
  it('should set mute', function (done) {
    cov_2qlod8emha().f[33]++;
    cov_2qlod8emha().s[128]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[34]++;
      cov_2qlod8emha().s[129]++;
      wavesurfer.setMute(true);
      cov_2qlod8emha().s[130]++;
      expect(wavesurfer.isMuted).toBeTrue();
      cov_2qlod8emha().s[131]++;
      wavesurfer.setMute(false);
      cov_2qlod8emha().s[132]++;
      expect(wavesurfer.isMuted).toBeFalse();
      cov_2qlod8emha().s[133]++;
      done();
    });
    cov_2qlod8emha().s[134]++;
    loadElement();
  });
  /** @test {WaveSurfer#getMute}  */

  cov_2qlod8emha().s[135]++;
  it('should get mute', function (done) {
    cov_2qlod8emha().f[35]++;
    cov_2qlod8emha().s[136]++;
    wavesurfer.once('ready', function () {
      cov_2qlod8emha().f[36]++;
      cov_2qlod8emha().s[137]++;
      wavesurfer.setMute(true);
      cov_2qlod8emha().s[138]++;
      expect(wavesurfer.getMute()).toBeTrue();
      cov_2qlod8emha().s[139]++;
      wavesurfer.setMute(false);
      cov_2qlod8emha().s[140]++;
      expect(wavesurfer.getMute()).toBeFalse();
      cov_2qlod8emha().s[141]++;
      done();
    });
    cov_2qlod8emha().s[142]++;
    loadElement();
  });
}

function sharedErrorTests(backend) {
  cov_2qlod8emha().f[37]++;
  var element;
  cov_2qlod8emha().s[143]++;
  beforeEach(function () {
    cov_2qlod8emha().f[38]++;
    cov_2qlod8emha().s[144]++;
    element = _testHelpers.default.createElement('test');
  });
  cov_2qlod8emha().s[145]++;
  afterEach(function () {
    cov_2qlod8emha().f[39]++;
    cov_2qlod8emha().s[146]++;

    _testHelpers.default.removeElement(element);
  });
  /**
   * @test {WaveSurfer}
   */

  cov_2qlod8emha().s[147]++;
  it('throw when load is called with invalid HTMLMediaElement', function () {
    cov_2qlod8emha().f[40]++;
    var wave = (cov_2qlod8emha().s[148]++, _testHelpers.default.createWaveform({
      container: '#test',
      backend: backend
    }));
    cov_2qlod8emha().s[149]++;
    expect(function () {
      cov_2qlod8emha().f[41]++;
      cov_2qlod8emha().s[150]++;
      wave[0].load({
        foo: 'bar'
      });
    }).toThrow(new Error('media parameter is not a valid media element'));
  });
}

function loadElement() {
  cov_2qlod8emha().f[42]++;
  cov_2qlod8emha().s[151]++;
  // set src
  audioElement.src = _testHelpers.default.EXAMPLE_FILE_PATH;
  cov_2qlod8emha().s[152]++;
  wavesurfer.load(audioElement);
}
/** Retrieve normalized waveform peaks, then load an audio resource giving peaks and setting preload attribute to 'none' **/


function loadAudioPeaks() {
  cov_2qlod8emha().f[43]++;
  cov_2qlod8emha().s[153]++;

  _testHelpers.default.getPeaks(_testHelpers.default.EXAMPLE_STEREO_FILE_JSON_PATH, function (peaks) {
    cov_2qlod8emha().f[44]++;
    var src = (cov_2qlod8emha().s[154]++, _testHelpers.default.EXAMPLE_STEREO_FILE_PATH);
    cov_2qlod8emha().s[155]++;
    wavesurfer.load(src, peaks, 'none', _testHelpers.default.EXAMPLE_STEREO_FILE_DURATION);
  });
}

/***/ }),

/***/ "./spec/mediaelement-webaudio.spec.js":
/*!********************************************!*\
  !*** ./spec/mediaelement-webaudio.spec.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _mediaelementShared = __webpack_require__(/*! ./mediaelement-shared */ "./spec/mediaelement-shared.js");

/* eslint-env jasmine */

/** @test {WaveSurfer} */
describe('WaveSurfer/MediaElementWebAudio:', function () {
  (0, _mediaelementShared.sharedTests)('MediaElementWebAudio');
});
/** @test {WaveSurfer} */

describe('WaveSurfer/MediaElementWebAudio/errors:', function () {
  (0, _mediaelementShared.sharedErrorTests)('MediaElementWebAudio');
});

/***/ }),

/***/ "./spec/mediaelement.spec.js":
/*!***********************************!*\
  !*** ./spec/mediaelement.spec.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _mediaelementShared = __webpack_require__(/*! ./mediaelement-shared */ "./spec/mediaelement-shared.js");

var _testHelpers = _interopRequireDefault(__webpack_require__(/*! ./test-helpers */ "./spec/test-helpers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jasmine */

/** @test {WaveSurfer} */
describe('WaveSurfer/MediaElement:', function () {
  (0, _mediaelementShared.sharedTests)('MediaElement');
});
/** @test {WaveSurfer} */

describe('WaveSurfer/MediaElement/errors:', function () {
  (0, _mediaelementShared.sharedErrorTests)('MediaElement');
});

/***/ }),

/***/ "./spec/peakcache.spec.js":
/*!********************************!*\
  !*** ./spec/peakcache.spec.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _peakcache = _interopRequireDefault(__webpack_require__(/*! ../src/peakcache */ "./src/peakcache.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jasmine */
describe('PeakCache:', function () {
  var peakcache;
  var test_length = 200;
  var test_length2 = 300;
  var test_start = 50;
  var test_end = 100;
  var test_start2 = 100;
  var test_end2 = 120;
  var test_start3 = 120;
  var test_end3 = 150;
  var window_size = 20;

  function __createPeakCache() {
    peakcache = new _peakcache.default();
  }

  beforeEach(function (done) {
    __createPeakCache();

    done();
  });
  /** @test {PeakCache#addRangeToPeakCache} */

  it('empty cache returns full range', function () {
    var newranges = peakcache.addRangeToPeakCache(test_length, test_start, test_end);
    expect(newranges.length).toEqual(1);
    expect(newranges[0][0]).toEqual(test_start);
    expect(newranges[0][1]).toEqual(test_end);
  });
  /** @test {PeakCache#addRangeToPeakCache} */

  it('different length clears cache', function () {
    peakcache.addRangeToPeakCache(test_length, test_start, test_end);
    var newranges = peakcache.addRangeToPeakCache(test_length2, test_start, test_end);
    expect(newranges.length).toEqual(1);
    expect(newranges[0][0]).toEqual(test_start);
    expect(newranges[0][1]).toEqual(test_end);
  });
  /** @test {PeakCache#addRangeToPeakCache} */

  it('consecutive calls return no ranges', function () {
    peakcache.addRangeToPeakCache(test_length, test_start, test_end);
    var newranges = peakcache.addRangeToPeakCache(test_length, test_start, test_end);
    expect(newranges.length).toEqual(0);
  });
  /** @test {PeakCache#addRangeToPeakCache} */

  it('sliding window returns window sized range', function () {
    var newranges = peakcache.addRangeToPeakCache(test_length, test_start, test_end);
    expect(newranges.length).toEqual(1);
    expect(newranges[0][0]).toEqual(test_start);
    expect(newranges[0][1]).toEqual(test_end);
    newranges = peakcache.addRangeToPeakCache(test_length, test_start + window_size, test_end + window_size);
    expect(newranges.length).toEqual(1);
    expect(newranges[0][0]).toEqual(test_end);
    expect(newranges[0][1]).toEqual(test_end + window_size);
    newranges = peakcache.addRangeToPeakCache(test_length, test_start + window_size * 2, test_end + window_size * 2);
    expect(newranges.length).toEqual(1);
    expect(newranges[0][0]).toEqual(test_end + window_size);
    expect(newranges[0][1]).toEqual(test_end + window_size * 2);
  });
  /** @test {PeakCache#addRangeToPeakCache} */

  /** @test {PeakCache#getCacheRanges} */

  it('disjoint set creates two ranges', function () {
    peakcache.addRangeToPeakCache(test_length, test_start, test_end);
    peakcache.addRangeToPeakCache(test_length, test_start3, test_end3);
    var ranges = peakcache.getCacheRanges();
    expect(ranges.length).toEqual(2);
    expect(ranges[0][0]).toEqual(test_start);
    expect(ranges[0][1]).toEqual(test_end);
    expect(ranges[1][0]).toEqual(test_start3);
    expect(ranges[1][1]).toEqual(test_end3);
  });
  /** @test {PeakCache#addRangeToPeakCache} */

  /** @test {PeakCache#getCacheRanges} */

  it('filling in disjoint sets coalesces', function () {
    peakcache.addRangeToPeakCache(test_length, test_start, test_end);
    peakcache.addRangeToPeakCache(test_length, test_start3, test_end3);
    var newranges = peakcache.addRangeToPeakCache(test_length, test_start, test_end3);
    expect(newranges.length).toEqual(1);
    expect(newranges[0][0]).toEqual(test_end);
    expect(newranges[0][1]).toEqual(test_start3);
    var ranges = peakcache.getCacheRanges();
    expect(ranges.length).toEqual(1);
    expect(ranges[0][0]).toEqual(test_start);
    expect(ranges[0][1]).toEqual(test_end3);
  });
  /** @test {PeakCache#addRangeToPeakCache} */

  /** @test {PeakCache#getCacheRanges} */

  it('filling in disjoint sets coalesces / edge cases', function () {
    peakcache.addRangeToPeakCache(test_length, test_start, test_end);
    peakcache.addRangeToPeakCache(test_length, test_start3, test_end3);
    var newranges = peakcache.addRangeToPeakCache(test_length, test_start2, test_end2);
    expect(newranges.length).toEqual(1);
    expect(newranges[0][0]).toEqual(test_end);
    expect(newranges[0][1]).toEqual(test_start3);
    var ranges = peakcache.getCacheRanges();
    expect(ranges.length).toEqual(1);
    expect(ranges[0][0]).toEqual(test_start);
    expect(ranges[0][1]).toEqual(test_end3);
  });
});

/***/ }),

/***/ "./spec/plugin-api.spec.js":
/*!*********************************!*\
  !*** ./spec/plugin-api.spec.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _wavesurfer = _interopRequireDefault(__webpack_require__(/*! ../src/wavesurfer.js */ "./src/wavesurfer.js"));

var _testHelpers = _interopRequireDefault(__webpack_require__(/*! ./test-helpers.js */ "./spec/test-helpers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/** @test {WaveSurfer} */
describe('WaveSurfer/plugin API:', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  var waveformDiv;
  var dummyPlugin;
  var wavesurfer; // clean up after each test

  afterEach(function (done) {
    if (wavesurfer !== undefined) {
      wavesurfer.destroy();
      waveformDiv.parentNode.removeChild(waveformDiv);
    }

    done();
  }); // utility function to generate a mock plugin object

  function mockPlugin(name) {
    var deferInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var MockPlugin = /*#__PURE__*/function () {
      function MockPlugin(params, ws) {
        _classCallCheck(this, MockPlugin);

        this.ws = ws; // using the instance factory unfortunately makes it
        // difficult to use the spyOn function, so we use this
        // instead

        this.isInitialised = false;
      }

      _createClass(MockPlugin, [{
        key: "init",
        value: function init() {
          this.isInitialised = true;
        }
      }, {
        key: "destroy",
        value: function destroy() {}
      }]);

      return MockPlugin;
    }();

    return {
      name: name,
      deferInit: deferInit,
      staticProps: _defineProperty({}, "".concat(name, "Static"), 'static property value'),
      instance: MockPlugin
    };
  } // utility function to generate wavesurfer instances for testing


  function __createWaveform() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    waveformDiv = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(waveformDiv);
    wavesurfer = _wavesurfer.default.create(Object.assign({
      container: waveformDiv
    }, options));
    wavesurfer.load(_testHelpers.default.EXAMPLE_FILE_PATH);
  } // plugin methods

  /** @test {WaveSurfer#addPlugin} */


  it('addPlugin adds staticProps and correctly builds and instantiates plugin class', function () {
    dummyPlugin = mockPlugin('dummy');

    __createWaveform();

    wavesurfer.addPlugin(dummyPlugin);
    expect(wavesurfer.dummyStatic).toEqual(dummyPlugin.staticProps.dummyStatic);
    expect(wavesurfer.dummy.ws).toEqual(wavesurfer);
    expect(_typeof(Object.getPrototypeOf(wavesurfer.dummy).on)).toEqual('function');
    dummyPlugin = {};
    expect(function () {
      wavesurfer.addPlugin(dummyPlugin);
    }).toThrow(new Error('Plugin does not have a name!'));
    dummyPlugin.name = 'foo';
    expect(function () {
      wavesurfer.addPlugin(dummyPlugin);
    }).toThrow(new Error('Plugin foo does not have an instance property!'));
  });
  /** @test {WaveSurfer#initPlugin} */

  it('initPlugin calls init function of the plugin and adds its name to the initialisedPluginList', function () {
    dummyPlugin = mockPlugin('dummy');

    __createWaveform();

    wavesurfer.addPlugin(dummyPlugin);
    spyOn(wavesurfer.dummy, 'init');
    wavesurfer.initPlugin('dummy');
    expect(wavesurfer.dummy.init).toHaveBeenCalled();
    expect(wavesurfer.initialisedPluginList.dummy).toBeTrue();
    expect(function () {
      wavesurfer.initPlugin('foo');
    }).toThrow(new Error('Plugin foo has not been added yet!'));
  });
  /** @test {WaveSurfer#destroyPlugin} */

  it('destroyPlugin calls plugin destroy function and removes the plugin name from the initialisedPluginList', function () {
    dummyPlugin = mockPlugin('dummy');

    __createWaveform();

    wavesurfer.addPlugin(dummyPlugin);
    wavesurfer.initPlugin('dummy');
    spyOn(wavesurfer.dummy, 'destroy');
    wavesurfer.destroyPlugin('dummy');
    expect(wavesurfer.dummy.destroy).toHaveBeenCalled();
    expect(wavesurfer.initialisedPluginList.dummy).toBeUndefined();
    expect(function () {
      wavesurfer.destroyPlugin('foo');
    }).toThrow(new Error('Plugin foo has not been added yet and cannot be destroyed!'));
  }); // auto-adding and initialising of plugins (registerPlugins)

  /** @test {WaveSurfer#registerPlugins} */

  it('registerPlugin adds a plugin but does not call plugin init function if the plugin property deferInit is truethy', function () {
    dummyPlugin = mockPlugin('dummy', true);

    __createWaveform({
      plugins: [dummyPlugin]
    });

    expect(wavesurfer.dummyStatic).toEqual(dummyPlugin.staticProps.dummyStatic);
    expect(wavesurfer.dummy.ws).toEqual(wavesurfer);
    expect(wavesurfer.dummy.isInitialised).toBeFalse();
  });
  /** @test {WaveSurfer#registerPlugins} */

  it('registerPlugin adds a plugin ands calls plugin init function if the plugin property deferInit is falsey', function () {
    dummyPlugin = mockPlugin('dummy');

    __createWaveform({
      plugins: [dummyPlugin]
    });

    expect(wavesurfer.dummyStatic).toEqual(dummyPlugin.staticProps.dummyStatic);
    expect(wavesurfer.dummy.ws).toEqual(wavesurfer);
    expect(wavesurfer.dummy.isInitialised).toBeTrue();
  });
  /** @test {WaveSurfer#getActivePlugins} */

  it('getActivePlugins returns map of plugin names that are currently initialised', function () {
    dummyPlugin = mockPlugin('dummy');

    __createWaveform({
      plugins: [dummyPlugin]
    });

    expect(wavesurfer.getActivePlugins()).toEqual({
      dummy: true
    });
    expect(wavesurfer.getActivePlugins()).toEqual(wavesurfer.initialisedPluginList);
  });
});

/***/ }),

/***/ "./spec/test-helpers.js":
/*!******************************!*\
  !*** ./spec/test-helpers.js ***!
  \******************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _wavesurfer = _interopRequireDefault(__webpack_require__(/*! ../src/wavesurfer.js */ "./src/wavesurfer.js"));

var _fetch = _interopRequireDefault(__webpack_require__(/*! ../src/util/fetch.js */ "./src/util/fetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_4qgqt2kzh() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/spec/test-helpers.js";
  var hash = "be8da5e86ab8c07bd91df609617a4d5888a49f04";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/spec/test-helpers.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 82,
          column: 1
        }
      },
      "1": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 26,
          column: 9
        }
      },
      "2": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 52
        }
      },
      "3": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 29,
          column: 9
        }
      },
      "4": {
        start: {
          line: 28,
          column: 12
        },
        end: {
          line: 28,
          column: 25
        }
      },
      "5": {
        start: {
          line: 30,
          column: 22
        },
        end: {
          line: 30,
          column: 50
        }
      },
      "6": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 24
        }
      },
      "7": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 70
        }
      },
      "8": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 23
        }
      },
      "9": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 70
        }
      },
      "10": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 52,
          column: 9
        }
      },
      "11": {
        start: {
          line: 49,
          column: 12
        },
        end: {
          line: 49,
          column: 43
        }
      },
      "12": {
        start: {
          line: 51,
          column: 12
        },
        end: {
          line: 51,
          column: 40
        }
      },
      "13": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 59,
          column: 10
        }
      },
      "14": {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 60,
          column: 53
        }
      },
      "15": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 80,
          column: 10
        }
      },
      "16": {
        start: {
          line: 76,
          column: 28
        },
        end: {
          line: 76,
          column: 81
        }
      },
      "17": {
        start: {
          line: 76,
          column: 60
        },
        end: {
          line: 76,
          column: 79
        }
      },
      "18": {
        start: {
          line: 77,
          column: 40
        },
        end: {
          line: 77,
          column: 70
        }
      },
      "19": {
        start: {
          line: 77,
          column: 61
        },
        end: {
          line: 77,
          column: 69
        }
      },
      "20": {
        start: {
          line: 78,
          column: 16
        },
        end: {
          line: 78,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        loc: {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 35,
            column: 5
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        loc: {
          start: {
            line: 37,
            column: 27
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 37
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        loc: {
          start: {
            line: 46,
            column: 28
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        loc: {
          start: {
            line: 69,
            column: 43
          },
          end: {
            line: 81,
            column: 5
          }
        },
        line: 69
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 75,
            column: 12
          },
          end: {
            line: 75,
            column: 13
          }
        },
        loc: {
          start: {
            line: 75,
            column: 21
          },
          end: {
            line: 79,
            column: 13
          }
        },
        line: 75
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 76,
            column: 46
          },
          end: {
            line: 76,
            column: 47
          }
        },
        loc: {
          start: {
            line: 76,
            column: 60
          },
          end: {
            line: 76,
            column: 79
          }
        },
        line: 76
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 77,
            column: 55
          },
          end: {
            line: 77,
            column: 56
          }
        },
        loc: {
          start: {
            line: 77,
            column: 61
          },
          end: {
            line: 77,
            column: 69
          }
        },
        line: 77
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        }, {
          start: {
            line: 50,
            column: 15
          },
          end: {
            line: 52,
            column: 9
          }
        }],
        line: 48
      },
      "3": {
        loc: {
          start: {
            line: 54,
            column: 18
          },
          end: {
            line: 59,
            column: 9
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 54,
            column: 18
          },
          end: {
            line: 54,
            column: 25
          }
        }, {
          start: {
            line: 54,
            column: 29
          },
          end: {
            line: 59,
            column: 9
          }
        }],
        line: 54
      },
      "4": {
        loc: {
          start: {
            line: 76,
            column: 60
          },
          end: {
            line: 76,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 76,
            column: 71
          },
          end: {
            line: 76,
            column: 73
          }
        }, {
          start: {
            line: 76,
            column: 76
          },
          end: {
            line: 76,
            column: 79
          }
        }],
        line: 76
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "be8da5e86ab8c07bd91df609617a4d5888a49f04"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_4qgqt2kzh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_4qgqt2kzh();
var TestHelpers = (cov_4qgqt2kzh().s[0]++, {
  /** Example audio clip */
  EXAMPLE_FILE_PATH: '/base/spec/support/demo.wav',

  /** Filesize of example audio clip (in bytes) */
  EXAMPLE_FILE_SIZE: 480158,

  /** Length of example audio clip (in seconds) */
  EXAMPLE_FILE_DURATION: 21,

  /** Example stero audio clip with waveform */
  EXAMPLE_STEREO_FILE_PATH: '/base/spec/support/stereo.mp3',

  /** Length of example audio clip with waveform (in seconds) */
  EXAMPLE_STEREO_FILE_DURATION: 51,

  /** Example waveform peaks */
  EXAMPLE_STEREO_FILE_JSON_PATH: '/base/spec/support/stereo-peaks.json',
  createElement: function createElement(id, type) {
    cov_4qgqt2kzh().f[0]++;
    cov_4qgqt2kzh().s[1]++;

    if (id == undefined) {
      cov_4qgqt2kzh().b[0][0]++;
      cov_4qgqt2kzh().s[2]++;
      id = _wavesurfer.default.util.getId('waveform_');
    } else {
      cov_4qgqt2kzh().b[0][1]++;
    }

    cov_4qgqt2kzh().s[3]++;

    if (type == undefined) {
      cov_4qgqt2kzh().b[1][0]++;
      cov_4qgqt2kzh().s[4]++;
      type = 'div';
    } else {
      cov_4qgqt2kzh().b[1][1]++;
    }

    var element = (cov_4qgqt2kzh().s[5]++, document.createElement(type));
    cov_4qgqt2kzh().s[6]++;
    element.id = id;
    cov_4qgqt2kzh().s[7]++;
    document.getElementsByTagName('body')[0].appendChild(element);
    cov_4qgqt2kzh().s[8]++;
    return element;
  },
  removeElement: function removeElement(element) {
    cov_4qgqt2kzh().f[1]++;
    cov_4qgqt2kzh().s[9]++;
    document.getElementsByTagName('body')[0].removeChild(element);
  },

  /**
   * Handle creating wavesurfer UI requirements
   *
   * @param  {Object} options
   */
  createWaveform: function createWaveform(options) {
    cov_4qgqt2kzh().f[2]++;
    var element;
    cov_4qgqt2kzh().s[10]++;

    if (options === undefined) {
      cov_4qgqt2kzh().b[2][0]++;
      cov_4qgqt2kzh().s[11]++;
      element = this.createElement();
    } else {
      cov_4qgqt2kzh().b[2][1]++;
      cov_4qgqt2kzh().s[12]++;
      element = options.container;
    }

    cov_4qgqt2kzh().s[13]++;
    options = (cov_4qgqt2kzh().b[3][0]++, options) || (cov_4qgqt2kzh().b[3][1]++, {
      container: element,
      waveColor: '#90F09B',
      progressColor: 'purple',
      cursorColor: 'white'
    });
    cov_4qgqt2kzh().s[14]++;
    return [_wavesurfer.default.create(options), element];
  },

  /**
   * Normalize audio peaks
   *
   * @param  {String} jsonFilePath
   * @param  {function} successHandler
   */
  getPeaks: function getPeaks(jsonFilePath, successHandler) {
    cov_4qgqt2kzh().f[3]++;
    cov_4qgqt2kzh().s[15]++;
    (0, _fetch.default)({
      url: jsonFilePath,
      responseType: 'json'
    }).on('success', function (peaks) {
      cov_4qgqt2kzh().f[4]++;
      var max = (cov_4qgqt2kzh().s[16]++, peaks.data.reduce(function (max, el) {
        cov_4qgqt2kzh().f[5]++;
        cov_4qgqt2kzh().s[17]++;
        return el > max ? (cov_4qgqt2kzh().b[4][0]++, el) : (cov_4qgqt2kzh().b[4][1]++, max);
      }));
      var normalizedPeaks = (cov_4qgqt2kzh().s[18]++, peaks.data.map(function (el) {
        cov_4qgqt2kzh().f[6]++;
        cov_4qgqt2kzh().s[19]++;
        return el / max;
      }));
      cov_4qgqt2kzh().s[20]++;
      return successHandler(normalizedPeaks);
    });
  }
});
var _default = TestHelpers;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./spec/util.spec.js":
/*!***************************!*\
  !*** ./spec/util.spec.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _wavesurfer = _interopRequireDefault(__webpack_require__(/*! ../src/wavesurfer.js */ "./src/wavesurfer.js"));

var _testHelpers = _interopRequireDefault(__webpack_require__(/*! ./test-helpers.js */ "./spec/test-helpers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jasmine */

/** @test {util.fetchFile} */
describe('util.fetchFile:', function () {
  var audioExampleUrl = _testHelpers.default.EXAMPLE_FILE_PATH;
  it('load ArrayBuffer response', function (done) {
    var options = {
      url: audioExampleUrl,
      responseType: 'arraybuffer'
    };

    var instance = _wavesurfer.default.util.fetchFile(options);

    instance.once('success', function (data) {
      expect(instance.response.status).toEqual(200);
      expect(instance.response.headers.get('content-type')).toEqual('audio/wav'); // options

      expect(instance.fetchRequest.url).toEndWith(options.url);
      expect(instance.fetchRequest.cache).toEqual('default');
      expect(instance.fetchRequest.method).toEqual('GET');
      expect(instance.fetchRequest.mode).toEqual('cors'); // returned data is an arraybuffer

      expect(data).toEqual(jasmine.any(ArrayBuffer));
      done();
    });
  });
  it('load Blob response', function (done) {
    var options = {
      url: audioExampleUrl,
      responseType: 'blob'
    };

    var instance = _wavesurfer.default.util.fetchFile(options);

    instance.once('success', function (data) {
      expect(instance.response.status).toEqual(200);
      expect(instance.response.headers.get('content-type')).toEqual('audio/wav'); // returned data is a Blob

      expect(data).toEqual(jasmine.any(Blob));
      done();
    });
  });
  it('load JSON response', function (done) {
    var options = {
      url: '/base/spec/support/test.json',
      responseType: 'json'
    };

    var instance = _wavesurfer.default.util.fetchFile(options);

    instance.once('success', function (data) {
      expect(instance.response.status).toEqual(200);
      expect(instance.response.headers.get('content-type')).toEqual('application/json'); // returned data is an array

      expect(data).toEqual([[0, 1, 2, 3]]);
      done();
    });
  });
  it('load text response', function (done) {
    var options = {
      url: '/base/spec/support/test.txt',
      responseType: 'text'
    };

    var instance = _wavesurfer.default.util.fetchFile(options);

    instance.once('success', function (data) {
      expect(instance.response.status).toEqual(200);
      expect(instance.response.headers.get('content-type')).toEqual('text/plain'); // returned data is a string

      expect(data).toEqual('hello world');
      done();
    });
  });
  it('load unknown response type', function (done) {
    var options = {
      url: audioExampleUrl,
      responseType: 'fooBar'
    };

    var instance = _wavesurfer.default.util.fetchFile(options);

    instance.once('error', function (error) {
      expect(error).toEqual(new Error('Unknown responseType: ' + options.responseType));
      done();
    });
  });
  it('throws error when URL contains credentials', function () {
    var options = {
      url: 'http://user:password@example.com'
    };

    try {
      _wavesurfer.default.util.fetchFile(options);
    } catch (err) {
      expect(err).toEqual(jasmine.any(TypeError));
    }
  });
  it('throws error when URL is missing', function () {
    try {
      _wavesurfer.default.util.fetchFile({});
    } catch (err) {
      expect(err).toEqual(new Error('fetch url missing'));
    }
  });
  it('throws error when options are missing', function () {
    try {
      _wavesurfer.default.util.fetchFile();
    } catch (err) {
      expect(err).toEqual(new Error('fetch options missing'));
    }
  });
  it('fires error event when the file is not found', function (done) {
    var options = {
      url: '/foo/bar'
    };

    var instance = _wavesurfer.default.util.fetchFile(options);

    instance.once('error', function (error) {
      expect(instance.response.status).toEqual(404);
      expect(error).toEqual(new Error('HTTP error status: 404'));
      done();
    });
  });
  it('accepts custom request headers', function (done) {
    var options = {
      url: '/base/spec/support/test.txt',
      responseType: 'text',
      requestHeaders: [{
        key: 'Content-Type',
        value: 'text/plain'
      }]
    };

    var instance = _wavesurfer.default.util.fetchFile(options);

    instance.once('success', function (data) {
      expect(instance.response.headers.has('Content-Type')).toBeTrue();
      expect(instance.response.headers.get('Content-Type')).toEqual('text/plain');
      done();
    });
  });
});
/** @test {util} */

describe('util:', function () {
  /** @test {getId} */
  it('getId returns a random string with a default prefix', function () {
    var prefix = 'wavesurfer_';
    expect(_wavesurfer.default.util.getId()).toStartWith(prefix);
  });
  /** @test {getId} */

  it('getId returns a random string with a custom prefix', function () {
    var prefix = 'test-';
    expect(_wavesurfer.default.util.getId(prefix)).toStartWith(prefix);
  });
  /** @test {min} */

  it('min returns the smallest number in the provided array', function () {
    expect(_wavesurfer.default.util.min([0, 1, 1.1, 100, -1])).toEqual(-1);
  });
  /** @test {min} */

  it('min returns +Infinity for an empty array', function () {
    expect(_wavesurfer.default.util.min([])).toEqual(+Infinity);
  });
  /** @test {max} */

  it('max returns the largest number in the provided array', function () {
    expect(_wavesurfer.default.util.max([0, 1, 1.1, 100, -1])).toEqual(100);
  });
  /** @test {max} */

  it('max returns -Infinity for an empty array', function () {
    expect(_wavesurfer.default.util.max([])).toEqual(-Infinity);
  });
  /** @test {absMax} */

  it('absMax returns largest absolute number in the provided array when largest is positive', function () {
    expect(_wavesurfer.default.util.absMax([0, 1, 1.1, 100, -1])).toEqual(100);
  });
  /** @test {absMax} */

  it('absMax returns largest absolute number in the provided array when largest is negative', function () {
    expect(_wavesurfer.default.util.absMax([0, 1, -101, 1.1, 100, -1])).toEqual(101);
  });
  /** @test {absMax} */

  it('absMax returns -Infinity for an empty array', function () {
    expect(_wavesurfer.default.util.absMax([])).toEqual(-Infinity);
  });
  /** @test {style} */

  it('style applies a map of styles to an element', function () {
    var el = {
      style: {}
    };
    var styles = {
      backgroundcolor: 'red',
      'background-color': 'blue'
    };
    var result = {
      style: styles
    };
    expect(_wavesurfer.default.util.style(el, styles)).toEqual(result);
  });
});
/** @test {util.clamp} */

describe('util.clamp:', function () {
  var min = 0;
  var max = 2;
  /** @test {clamp/min} */

  it('clamp should return min if val is less than min', function () {
    var val = min - 1;
    expect(_wavesurfer.default.util.clamp(val, min, max)).toBe(min);
  });
  /** @test {clamp/val} */

  it('clamp should return val if val is more than min and less than max', function () {
    var val = 1;
    expect(_wavesurfer.default.util.clamp(val, min, max)).toBe(val);
  });
  /** @test {clamp/max} */

  it('clamp should return max if val is more than max', function () {
    var val = max + 1;
    expect(_wavesurfer.default.util.clamp(val, min, max)).toBe(max);
  });
});

/***/ }),

/***/ "./spec/wavesurfer.spec.js":
/*!*********************************!*\
  !*** ./spec/wavesurfer.spec.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _testHelpers = _interopRequireDefault(__webpack_require__(/*! ./test-helpers.js */ "./spec/test-helpers.js"));

var _wavesurfer = _interopRequireDefault(__webpack_require__(/*! ../src/wavesurfer.js */ "./src/wavesurfer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jasmine */

/** @test {WaveSurfer} */
describe('WaveSurfer/playback:', function () {
  var wavesurfer;
  var element;
  var manualDestroy = false;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  beforeEach(function (done) {
    manualDestroy = false;

    var wave = _testHelpers.default.createWaveform();

    wavesurfer = wave[0];
    element = wave[1];
    wavesurfer.load(_testHelpers.default.EXAMPLE_FILE_PATH);
    wavesurfer.once('ready', done);
  });
  afterEach(function () {
    if (!manualDestroy) {
      wavesurfer.destroy();

      _testHelpers.default.removeElement(element);
    }
  });
  /**
   * @test {WaveSurfer#isReady}
   */

  it('be ready', function () {
    wavesurfer.play();
    expect(wavesurfer.isReady).toBeTrue();
  });
  /**
   * @test {WaveSurfer#VERSION}
   */

  it('have version number', function () {
    var version = (__webpack_require__(/*! ../package.json */ "./package.json").version);

    expect(_wavesurfer.default.VERSION).toEqual(version);
  });
  /**
   * @test {WaveSurfer#play}
   * @test {WaveSurfer#isPlaying}
   */

  it('play', function () {
    wavesurfer.play();
    expect(wavesurfer.isPlaying()).toBeTrue();
  });
  /**
   * @test {WaveSurfer#play}
   * @test {WaveSurfer#isPlaying}
   * @test {WaveSurfer#pause}
   */

  it('pause', function () {
    wavesurfer.play();
    expect(wavesurfer.isPlaying()).toBeTrue();
    wavesurfer.pause();
    expect(wavesurfer.isPlaying()).toBeFalse();
  });
  /**
   * @test {WaveSurfer#playPause}
   * @test {WaveSurfer#isPlaying}
   */

  it('play or pause', function () {
    wavesurfer.playPause();
    expect(wavesurfer.isPlaying()).toBeTrue();
    wavesurfer.playPause();
    expect(wavesurfer.isPlaying()).toBeFalse();
  });
  /**
   * @test {WaveSurfer#cancelAjax}
   */

  it('cancelAjax', function () {
    wavesurfer.cancelAjax();
    expect(wavesurfer.currentRequest).toBeNull();
  });
  /**
   * @test {WaveSurfer#loadBlob}
   */

  it('loadBlob', function (done) {
    fetch(_testHelpers.default.EXAMPLE_FILE_PATH).then(function (response) {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      return response.blob();
    }).then(function (blob) {
      wavesurfer.once('ready', done);
      wavesurfer.loadBlob(blob);
    });
  });
  /** @test {WaveSurfer#getDuration}  */

  it('get duration', function () {
    var duration = parseInt(wavesurfer.getDuration(), 10);
    expect(duration).toEqual(_testHelpers.default.EXAMPLE_FILE_DURATION);
  });
  /** @test {WaveSurfer#getCurrentTime}  */

  it('get currentTime', function () {
    // initially zero
    var time = wavesurfer.getCurrentTime();
    expect(time).toEqual(0); // seek to 50%

    wavesurfer.seekTo(0.5);
    time = parseInt(wavesurfer.getCurrentTime(), 10);
    expect(time).toEqual(10);
  });
  /** @test {WaveSurfer#setCurrentTime}  */

  it('set currentTime', function () {
    // initially zero
    var time = wavesurfer.getCurrentTime();
    expect(time).toEqual(0); // set to 10 seconds

    wavesurfer.setCurrentTime(10);
    time = wavesurfer.getCurrentTime();
    expect(time).toEqual(10); // set to something higher than duration

    wavesurfer.setCurrentTime(1000);
    time = wavesurfer.getCurrentTime(); // sets it to end of track

    time = parseInt(wavesurfer.getCurrentTime(), 10);
    expect(time).toEqual(_testHelpers.default.EXAMPLE_FILE_DURATION);
  });
  /** @test {WaveSurfer#skipBackward}  */

  it('should skip backward', function () {
    // seek to 50%
    wavesurfer.seekTo(0.5); // skip 4 seconds backward

    wavesurfer.skipBackward(4);
    var time = wavesurfer.getCurrentTime();
    expect(time).toBeWithinRange(6.88, 6.89); // skip backward with params.skipLength (default: 2 seconds)

    wavesurfer.skipBackward();
    time = wavesurfer.getCurrentTime();
    expect(time).toBeWithinRange(4.88, 4.89);
  });
  /** @test {WaveSurfer#skipForward}  */

  it('skip forward', function () {
    // skip x seconds forward
    var expectedTime = 4;
    wavesurfer.skipForward(expectedTime);
    var time = wavesurfer.getCurrentTime();
    expect(time).toBeNear(expectedTime, 0.0001); // skip forward with params.skipLength (default: 2 seconds)

    wavesurfer.skipForward();
    time = wavesurfer.getCurrentTime();
    expect(time).toBeNear(expectedTime + 2, 0.0001);
  });
  /** @test {WaveSurfer#getPlaybackRate}  */

  it('get playback rate', function () {
    var rate = wavesurfer.getPlaybackRate();
    expect(rate).toEqual(1);
  });
  /** @test {WaveSurfer#setPlaybackRate}  */

  it('set playback rate', function () {
    var rate = 0.5;
    wavesurfer.setPlaybackRate(rate);
    expect(wavesurfer.getPlaybackRate()).toEqual(rate);
  });
  /** @test {WaveSurfer#getVolume}  */

  it('get volume', function () {
    var volume = wavesurfer.getVolume();
    expect(volume).toEqual(1);
  });
  /** @test {WaveSurfer#setVolume}  */

  it('set volume', function (done) {
    var targetVolume = 0.5;
    wavesurfer.once('volume', function (result) {
      expect(result).toEqual(targetVolume);
      done();
    });
    wavesurfer.setVolume(targetVolume);
  });
  /** @test {WaveSurfer#toggleMute}  */

  it('toggle mute', function () {
    wavesurfer.toggleMute();
    expect(wavesurfer.isMuted).toBeTrue();
    wavesurfer.toggleMute();
    expect(wavesurfer.isMuted).toBeFalse();
  });
  /** @test {WaveSurfer#setMute}  */

  it('set mute', function () {
    wavesurfer.setMute(true);
    expect(wavesurfer.isMuted).toBeTrue();
    wavesurfer.setMute(false);
    expect(wavesurfer.isMuted).toBeFalse();
  });
  /** @test {WaveSurfer#getMute}  */

  it('get mute', function () {
    wavesurfer.setMute(true);
    expect(wavesurfer.getMute()).toBeTrue();
    wavesurfer.setMute(false);
    expect(wavesurfer.getMute()).toBeFalse();
  });
  /** @test {WaveSurfer#zoom}  */

  it('set zoom parameters', function () {
    wavesurfer.zoom(20);
    expect(wavesurfer.params.minPxPerSec).toEqual(20);
    expect(wavesurfer.params.scrollParent).toBe(true);
  });
  /** @test {WaveSurfer#zoom}  */

  it('set unzoom parameters', function () {
    wavesurfer.zoom(false);
    expect(wavesurfer.params.minPxPerSec).toEqual(wavesurfer.defaultParams.minPxPerSec);
    expect(wavesurfer.params.scrollParent).toBe(false);
  });
  /** @test {WaveSurfer#getWaveColor} */

  it('allow getting waveColor', function () {
    var waveColor = wavesurfer.getWaveColor();
    expect(waveColor).toEqual('#90F09B');
  });
  /** @test {WaveSurfer#setWaveColor} */

  it('allow setting waveColor', function () {
    var color = 'blue';
    wavesurfer.setWaveColor(color);
    var waveColor = wavesurfer.getWaveColor();
    expect(waveColor).toEqual(color);
  });
  /** @test {WaveSurfer#setWaveColorGradient} */

  it('allow setting waveColor gradient', function () {
    var colors = ["red", "green", "purple", "yellow", "rgba(0,255,255,.5)"];
    wavesurfer.setWaveColor(colors);
    var waveColor = wavesurfer.getWaveColor();
    expect(waveColor).toEqual(colors);
  });
  /** @test {WaveSurfer#getProgressColor} */

  it('allow getting progressColor', function () {
    var progressColor = wavesurfer.getProgressColor();
    expect(progressColor).toEqual('purple');
  });
  /** @test {WaveSurfer#setProgressColor} */

  it('allow setting progressColor', function () {
    wavesurfer.setProgressColor('green');
    var progressColor = wavesurfer.getProgressColor();
    expect(progressColor).toEqual('green');
  });
  describe('split channels options', function () {
    beforeEach(function () {
      wavesurfer.params.splitChannels = true;
      wavesurfer.params.splitChannelsOptions = {
        channelColors: {
          0: {
            progressColor: 'green',
            waveColor: 'pink'
          },
          1: {
            progressColor: 'orange',
            waveColor: 'purple'
          }
        }
      };
    });
    afterEach(function () {
      wavesurfer.params.splitChannels = false;
      wavesurfer.params.splitChannelsOptions = {
        channelColors: {}
      };
    });
    /** @test {WaveSurfer#getChannelWaveColor} */

    it('allow getting channel waveColor', function () {
      var waveColor = wavesurfer.getWaveColor(1);
      expect(waveColor).toEqual('purple');
    });
    /** @test {WaveSurfer#setChannelWaveColor} */

    it('allow setting channel waveColor', function () {
      var color = 'blue';
      wavesurfer.setWaveColor(color, 1);
      var waveColor = wavesurfer.getWaveColor(1);
      expect(waveColor).toEqual(color);
    });
    /** @test {WaveSurfer#getChannelProgressColor} */

    it('allow getting channel progressColor', function () {
      var progressColor = wavesurfer.getProgressColor(1);
      expect(progressColor).toEqual('orange');
    });
    /** @test {WaveSurfer#setChannelProgressColor} */

    it('allow setting channel progressColor', function () {
      var color = 'blue';
      wavesurfer.setProgressColor(color, 1);
      var progressColor = wavesurfer.getProgressColor(1);
      expect(progressColor).toEqual(color);
    });
  });
  /** @test {WaveSurfer#getCursorColor} */

  it('allow getting cursorColor', function () {
    var cursorColor = wavesurfer.getCursorColor();
    expect(cursorColor).toEqual('white');
  });
  /** @test {WaveSurfer#setCursorColor} */

  it('allow setting cursorColor', function () {
    wavesurfer.setCursorColor('black');
    var cursorColor = wavesurfer.getCursorColor();
    expect(cursorColor).toEqual('black');
  });
  /** @test {WaveSurfer#getBackgroundColor} */

  it('allow getting backgroundColor', function () {
    var bgColor = wavesurfer.getBackgroundColor();
    expect(bgColor).toEqual(null);
  });
  /** @test {WaveSurfer#setBackgroundColor} */

  it('allow setting backgroundColor', function () {
    wavesurfer.setBackgroundColor('#FFFF00');
    var bgColor = wavesurfer.getBackgroundColor();
    expect(bgColor).toEqual('#FFFF00');
  });
  /** @test {WaveSurfer#getHeight} */

  it('allow getting height', function () {
    var height = wavesurfer.getHeight();
    expect(height).toEqual(128);
  });
  /** @test {WaveSurfer#setHeight} */

  it('allow setting height', function () {
    wavesurfer.setHeight(150);
    var height = wavesurfer.getHeight();
    expect(height).toEqual(150);
  });
  /** @test {WaveSurfer#exportPCM} */

  it('return Promise with PCM array data', function (done) {
    wavesurfer.load(_testHelpers.default.EXAMPLE_FILE_PATH);
    wavesurfer.once('ready', function () {
      wavesurfer.exportPCM(1024, 10000, false, 0, 100).then(function (pcmData) {
        expect(pcmData instanceof Array).toBeTruthy();
        done();
      });
    });
  });
  it('return Promise with PCM array data in new window', function (done) {
    wavesurfer.load(_testHelpers.default.EXAMPLE_FILE_PATH);
    wavesurfer.once('ready', function () {
      wavesurfer.exportPCM(1024, 10000, true, 0, 100).then(function (pcmData) {
        expect(pcmData instanceof Array).toBeTruthy();
        done();
      });
    });
  });
  /** @test {WaveSurfer#getFilters} */

  it('return the list of current set filters as an array', function () {
    var list = wavesurfer.getFilters();
    expect(list).toEqual([]);
  });
  /** @test {WaveSurfer#exportImage} */

  it('export image data', function () {
    var imgData = wavesurfer.exportImage();
    expect(imgData).toBeNonEmptyString();
    wavesurfer.exportImage('image/png', 1, 'blob').then(function (blobs) {
      expect(blobs.length).toEqual(1);
      expect(blobs[0] instanceof Blob).toBeTruthy();
    });
  });
  /** @test {WaveSurfer#destroy} */

  it('destroy', function (done) {
    manualDestroy = true;
    wavesurfer.once('destroy', function () {
      _testHelpers.default.removeElement(element);

      done();
    });
    wavesurfer.destroy();
    expect(wavesurfer.backend).toBeNull();
  });
  describe('seek event emission', function () {
    var seekEventSpy;
    var interactionEventSpy;
    beforeEach(function () {
      seekEventSpy = jasmine.createSpy();
      interactionEventSpy = jasmine.createSpy();
      wavesurfer.on('seek', function () {
        seekEventSpy();
      });
      wavesurfer.on('interaction', function () {
        interactionEventSpy();
      });
    });
    afterEach(function () {
      wavesurfer.unAll();
      wavesurfer.setDisabledEventEmissions([]);
    });
    describe('when event emissions are not disabled', function () {
      it('all event handlers should be called', function () {
        wavesurfer.seekTo(0.5);
        wavesurfer.setCurrentTime(1.45);
        expect(seekEventSpy).toHaveBeenCalled();
        expect(interactionEventSpy).toHaveBeenCalled();
      });
    });
    describe('when seek and interaction events are disabled', function () {
      beforeEach(function () {
        wavesurfer.setDisabledEventEmissions(['seek', 'interaction']);
      });
      it('should not call event handlers for either "seek" or "interaction"', function () {
        wavesurfer.seekTo(0.5);
        wavesurfer.setCurrentTime(1.45);
        expect(seekEventSpy).not.toHaveBeenCalled();
        expect(interactionEventSpy).not.toHaveBeenCalled();
      });
    });
  });
});
/** @test {WaveSurfer} */

describe('WaveSurfer/errors:', function () {
  var element;
  beforeEach(function () {
    element = _testHelpers.default.createElement('test');
  });
  afterEach(function () {
    _testHelpers.default.removeElement(element);
  });
  /**
   * @test {WaveSurfer}
   */

  it('throw when container element is not found', function () {
    expect(function () {
      _testHelpers.default.createWaveform({
        container: '#foo'
      });
    }).toThrow(new Error('Container element not found'));
  });
  /**
   * @test {WaveSurfer}
   */

  it('throw when media container element is not found', function () {
    expect(function () {
      _testHelpers.default.createWaveform({
        container: '#test',
        mediaContainer: '#foo'
      });
    }).toThrow(new Error('Media Container element not found'));
  });
  /**
   * @test {WaveSurfer}
   */

  it('throw for invalid maxCanvasWidth param', function () {
    expect(function () {
      _testHelpers.default.createWaveform({
        container: '#test',
        maxCanvasWidth: 0.5
      });
    }).toThrow(new Error('maxCanvasWidth must be greater than 1'));
    expect(function () {
      _testHelpers.default.createWaveform({
        container: '#test',
        maxCanvasWidth: 3
      });
    }).toThrow(new Error('maxCanvasWidth must be an even number'));
  });
  /**
   * @test {WaveSurfer}
   */

  it('throw for invalid renderer', function () {
    expect(function () {
      _testHelpers.default.createWaveform({
        container: '#test',
        renderer: 'foo'
      });
    }).toThrow(new Error('Renderer parameter is invalid'));
  });
  /**
   * @test {WaveSurfer}
   */

  it('not throw when rendered and media is not loaded', function () {
    expect(function () {
      var wave = _testHelpers.default.createWaveform({
        container: '#test'
      });

      wave[0].setWaveColor('#000000');
    }).not.toThrow();
  });
  /**
   * @test {WaveSurfer#load}
   */

  it('throw when url parameter for load is empty', function () {
    var wave = _testHelpers.default.createWaveform({
      container: '#test'
    });

    var expectedError = new Error('url parameter cannot be empty'); // undefined url

    expect(function () {
      wave[0].load();
    }).toThrow(expectedError); // empty string

    expect(function () {
      wave[0].load('');
    }).toThrow(expectedError); // null

    expect(function () {
      wave[0].load(null);
    }).toThrow(expectedError);
  });
});

/***/ }),

/***/ "./spec/webaudio.spec.js":
/*!*******************************!*\
  !*** ./spec/webaudio.spec.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _testHelpers = _interopRequireDefault(__webpack_require__(/*! ./test-helpers */ "./spec/test-helpers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jasmine */

/**
 * Doesn't call load() automatically so you can test loading behaviour here
 */
describe('WebAudio/load:', function () {
  var wavesurfer;
  var element;
  var manualDestroy = false;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  beforeEach(function (done) {
    manualDestroy = false;
    element = _testHelpers.default.createElement();

    var wave = _testHelpers.default.createWaveform({
      container: element,
      backend: 'WebAudio',
      waveColor: '#90F09B',
      progressColor: 'purple',
      cursorColor: 'white'
    });

    wavesurfer = wave[0];
    element = wave[1];
    done();
  });
  afterEach(function () {
    if (!manualDestroy) {
      wavesurfer.destroy();

      _testHelpers.default.removeElement(element);
    }
  });
  /**
   * @test {WaveSurfer#load}
   */

  it('load should accept HTMLMediaElement as the url', function (done) {
    var audio = new Audio(_testHelpers.default.EXAMPLE_FILE_PATH);
    wavesurfer.load(audio);
    wavesurfer.once('ready', done);
  });
});

/***/ }),

/***/ "./src/drawer.canvasentry.js":
/*!***********************************!*\
  !*** ./src/drawer.canvasentry.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./util/style */ "./src/util/style.js"));

var _getId = _interopRequireDefault(__webpack_require__(/*! ./util/get-id */ "./src/util/get-id.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_16n202qn8k() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/drawer.canvasentry.js";
  var hash = "56c2df1a077100e88dae9b0958d3dd1f63a8d41f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/drawer.canvasentry.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 25
        }
      },
      "1": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 28
        }
      },
      "2": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 29
        }
      },
      "3": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 32
        }
      },
      "4": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 23
        }
      },
      "5": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 52,
          column: 21
        }
      },
      "6": {
        start: {
          line: 58,
          column: 8
        },
        end: {
          line: 62,
          column: 10
        }
      },
      "7": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 42
        }
      },
      "8": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 28
        }
      },
      "9": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 80
        }
      },
      "10": {
        start: {
          line: 88,
          column: 8
        },
        end: {
          line: 88,
          column: 32
        }
      },
      "11": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 92,
          column: 10
        }
      },
      "12": {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 106,
          column: 60
        }
      },
      "13": {
        start: {
          line: 107,
          column: 8
        },
        end: {
          line: 107,
          column: 58
        }
      },
      "14": {
        start: {
          line: 110,
          column: 8
        },
        end: {
          line: 110,
          column: 32
        }
      },
      "15": {
        start: {
          line: 111,
          column: 8
        },
        end: {
          line: 111,
          column: 34
        }
      },
      "16": {
        start: {
          line: 112,
          column: 26
        },
        end: {
          line: 112,
          column: 56
        }
      },
      "17": {
        start: {
          line: 113,
          column: 8
        },
        end: {
          line: 113,
          column: 38
        }
      },
      "18": {
        start: {
          line: 115,
          column: 8
        },
        end: {
          line: 120,
          column: 9
        }
      },
      "19": {
        start: {
          line: 117,
          column: 12
        },
        end: {
          line: 117,
          column: 40
        }
      },
      "20": {
        start: {
          line: 118,
          column: 12
        },
        end: {
          line: 118,
          column: 42
        }
      },
      "21": {
        start: {
          line: 119,
          column: 12
        },
        end: {
          line: 119,
          column: 46
        }
      },
      "22": {
        start: {
          line: 128,
          column: 8
        },
        end: {
          line: 133,
          column: 10
        }
      },
      "23": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 143,
          column: 9
        }
      },
      "24": {
        start: {
          line: 137,
          column: 12
        },
        end: {
          line: 142,
          column: 14
        }
      },
      "25": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 154,
          column: 76
        }
      },
      "26": {
        start: {
          line: 156,
          column: 8
        },
        end: {
          line: 158,
          column: 9
        }
      },
      "27": {
        start: {
          line: 157,
          column: 12
        },
        end: {
          line: 157,
          column: 92
        }
      },
      "28": {
        start: {
          line: 174,
          column: 8
        },
        end: {
          line: 176,
          column: 9
        }
      },
      "29": {
        start: {
          line: 175,
          column: 12
        },
        end: {
          line: 175,
          column: 25
        }
      },
      "30": {
        start: {
          line: 178,
          column: 29
        },
        end: {
          line: 178,
          column: 81
        }
      },
      "31": {
        start: {
          line: 179,
          column: 8
        },
        end: {
          line: 179,
          column: 98
        }
      },
      "32": {
        start: {
          line: 179,
          column: 40
        },
        end: {
          line: 179,
          column: 96
        }
      },
      "33": {
        start: {
          line: 181,
          column: 8
        },
        end: {
          line: 181,
          column: 28
        }
      },
      "34": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 197,
          column: 9
        }
      },
      "35": {
        start: {
          line: 192,
          column: 12
        },
        end: {
          line: 192,
          column: 56
        }
      },
      "36": {
        start: {
          line: 194,
          column: 12
        },
        end: {
          line: 196,
          column: 13
        }
      },
      "37": {
        start: {
          line: 195,
          column: 16
        },
        end: {
          line: 195,
          column: 64
        }
      },
      "38": {
        start: {
          line: 210,
          column: 8
        },
        end: {
          line: 210,
          column: 74
        }
      },
      "39": {
        start: {
          line: 212,
          column: 8
        },
        end: {
          line: 221,
          column: 9
        }
      },
      "40": {
        start: {
          line: 213,
          column: 12
        },
        end: {
          line: 220,
          column: 14
        }
      },
      "41": {
        start: {
          line: 235,
          column: 8
        },
        end: {
          line: 237,
          column: 9
        }
      },
      "42": {
        start: {
          line: 236,
          column: 12
        },
        end: {
          line: 236,
          column: 19
        }
      },
      "43": {
        start: {
          line: 239,
          column: 8
        },
        end: {
          line: 243,
          column: 9
        }
      },
      "44": {
        start: {
          line: 240,
          column: 12
        },
        end: {
          line: 240,
          column: 67
        }
      },
      "45": {
        start: {
          line: 242,
          column: 12
        },
        end: {
          line: 242,
          column: 46
        }
      },
      "46": {
        start: {
          line: 260,
          column: 8
        },
        end: {
          line: 262,
          column: 9
        }
      },
      "47": {
        start: {
          line: 261,
          column: 12
        },
        end: {
          line: 261,
          column: 19
        }
      },
      "48": {
        start: {
          line: 265,
          column: 8
        },
        end: {
          line: 268,
          column: 9
        }
      },
      "49": {
        start: {
          line: 266,
          column: 12
        },
        end: {
          line: 266,
          column: 25
        }
      },
      "50": {
        start: {
          line: 267,
          column: 12
        },
        end: {
          line: 267,
          column: 24
        }
      },
      "51": {
        start: {
          line: 269,
          column: 8
        },
        end: {
          line: 269,
          column: 24
        }
      },
      "52": {
        start: {
          line: 270,
          column: 8
        },
        end: {
          line: 270,
          column: 34
        }
      },
      "53": {
        start: {
          line: 271,
          column: 8
        },
        end: {
          line: 271,
          column: 42
        }
      },
      "54": {
        start: {
          line: 272,
          column: 8
        },
        end: {
          line: 272,
          column: 66
        }
      },
      "55": {
        start: {
          line: 273,
          column: 8
        },
        end: {
          line: 273,
          column: 51
        }
      },
      "56": {
        start: {
          line: 274,
          column: 8
        },
        end: {
          line: 279,
          column: 10
        }
      },
      "57": {
        start: {
          line: 280,
          column: 8
        },
        end: {
          line: 280,
          column: 43
        }
      },
      "58": {
        start: {
          line: 281,
          column: 8
        },
        end: {
          line: 281,
          column: 68
        }
      },
      "59": {
        start: {
          line: 282,
          column: 8
        },
        end: {
          line: 282,
          column: 34
        }
      },
      "60": {
        start: {
          line: 283,
          column: 8
        },
        end: {
          line: 283,
          column: 50
        }
      },
      "61": {
        start: {
          line: 284,
          column: 8
        },
        end: {
          line: 284,
          column: 24
        }
      },
      "62": {
        start: {
          line: 285,
          column: 8
        },
        end: {
          line: 285,
          column: 19
        }
      },
      "63": {
        start: {
          line: 301,
          column: 8
        },
        end: {
          line: 309,
          column: 10
        }
      },
      "64": {
        start: {
          line: 311,
          column: 8
        },
        end: {
          line: 321,
          column: 9
        }
      },
      "65": {
        start: {
          line: 312,
          column: 12
        },
        end: {
          line: 320,
          column: 14
        }
      },
      "66": {
        start: {
          line: 338,
          column: 8
        },
        end: {
          line: 340,
          column: 9
        }
      },
      "67": {
        start: {
          line: 339,
          column: 12
        },
        end: {
          line: 339,
          column: 19
        }
      },
      "68": {
        start: {
          line: 342,
          column: 23
        },
        end: {
          line: 342,
          column: 39
        }
      },
      "69": {
        start: {
          line: 343,
          column: 22
        },
        end: {
          line: 343,
          column: 53
        }
      },
      "70": {
        start: {
          line: 347,
          column: 21
        },
        end: {
          line: 347,
          column: 54
        }
      },
      "71": {
        start: {
          line: 349,
          column: 28
        },
        end: {
          line: 349,
          column: 33
        }
      },
      "72": {
        start: {
          line: 350,
          column: 26
        },
        end: {
          line: 350,
          column: 30
        }
      },
      "73": {
        start: {
          line: 351,
          column: 22
        },
        end: {
          line: 351,
          column: 69
        }
      },
      "74": {
        start: {
          line: 354,
          column: 27
        },
        end: {
          line: 354,
          column: 42
        }
      },
      "75": {
        start: {
          line: 355,
          column: 27
        },
        end: {
          line: 355,
          column: 41
        }
      },
      "76": {
        start: {
          line: 357,
          column: 8
        },
        end: {
          line: 357,
          column: 24
        }
      },
      "77": {
        start: {
          line: 358,
          column: 8
        },
        end: {
          line: 358,
          column: 62
        }
      },
      "78": {
        start: {
          line: 360,
          column: 8
        },
        end: {
          line: 363,
          column: 10
        }
      },
      "79": {
        start: {
          line: 366,
          column: 8
        },
        end: {
          line: 370,
          column: 9
        }
      },
      "80": {
        start: {
          line: 367,
          column: 12
        },
        end: {
          line: 367,
          column: 37
        }
      },
      "81": {
        start: {
          line: 368,
          column: 12
        },
        end: {
          line: 368,
          column: 46
        }
      },
      "82": {
        start: {
          line: 369,
          column: 12
        },
        end: {
          line: 369,
          column: 77
        }
      },
      "83": {
        start: {
          line: 374,
          column: 16
        },
        end: {
          line: 374,
          column: 29
        }
      },
      "84": {
        start: {
          line: 375,
          column: 8
        },
        end: {
          line: 379,
          column: 9
        }
      },
      "85": {
        start: {
          line: 376,
          column: 12
        },
        end: {
          line: 376,
          column: 41
        }
      },
      "86": {
        start: {
          line: 377,
          column: 12
        },
        end: {
          line: 377,
          column: 46
        }
      },
      "87": {
        start: {
          line: 378,
          column: 12
        },
        end: {
          line: 378,
          column: 77
        }
      },
      "88": {
        start: {
          line: 381,
          column: 8
        },
        end: {
          line: 385,
          column: 10
        }
      },
      "89": {
        start: {
          line: 387,
          column: 8
        },
        end: {
          line: 387,
          column: 24
        }
      },
      "90": {
        start: {
          line: 388,
          column: 8
        },
        end: {
          line: 388,
          column: 19
        }
      },
      "91": {
        start: {
          line: 395,
          column: 8
        },
        end: {
          line: 395,
          column: 28
        }
      },
      "92": {
        start: {
          line: 396,
          column: 8
        },
        end: {
          line: 396,
          column: 25
        }
      },
      "93": {
        start: {
          line: 398,
          column: 8
        },
        end: {
          line: 398,
          column: 32
        }
      },
      "94": {
        start: {
          line: 399,
          column: 8
        },
        end: {
          line: 399,
          column: 29
        }
      },
      "95": {
        start: {
          line: 416,
          column: 8
        },
        end: {
          line: 422,
          column: 9
        }
      },
      "96": {
        start: {
          line: 417,
          column: 12
        },
        end: {
          line: 419,
          column: 15
        }
      },
      "97": {
        start: {
          line: 418,
          column: 16
        },
        end: {
          line: 418,
          column: 59
        }
      },
      "98": {
        start: {
          line: 420,
          column: 15
        },
        end: {
          line: 422,
          column: 9
        }
      },
      "99": {
        start: {
          line: 421,
          column: 12
        },
        end: {
          line: 421,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 18
          },
          end: {
            line: 69,
            column: 5
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 5
          }
        },
        loc: {
          start: {
            line: 76,
            column: 22
          },
          end: {
            line: 79,
            column: 5
          }
        },
        line: 76
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        loc: {
          start: {
            line: 87,
            column: 26
          },
          end: {
            line: 93,
            column: 5
          }
        },
        line: 87
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        loc: {
          start: {
            line: 103,
            column: 62
          },
          end: {
            line: 121,
            column: 5
          }
        },
        line: 103
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 5
          }
        },
        loc: {
          start: {
            line: 126,
            column: 16
          },
          end: {
            line: 144,
            column: 5
          }
        },
        line: 126
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 5
          }
        },
        loc: {
          start: {
            line: 153,
            column: 44
          },
          end: {
            line: 159,
            column: 5
          }
        },
        line: 153
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 173,
            column: 4
          },
          end: {
            line: 173,
            column: 5
          }
        },
        loc: {
          start: {
            line: 173,
            column: 29
          },
          end: {
            line: 182,
            column: 5
          }
        },
        line: 173
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 179,
            column: 22
          },
          end: {
            line: 179,
            column: 23
          }
        },
        loc: {
          start: {
            line: 179,
            column: 40
          },
          end: {
            line: 179,
            column: 96
          }
        },
        line: 179
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 189,
            column: 5
          }
        },
        loc: {
          start: {
            line: 189,
            column: 36
          },
          end: {
            line: 198,
            column: 5
          }
        },
        line: 189
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 5
          }
        },
        loc: {
          start: {
            line: 209,
            column: 43
          },
          end: {
            line: 222,
            column: 5
          }
        },
        line: 209
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 234,
            column: 5
          }
        },
        loc: {
          start: {
            line: 234,
            column: 56
          },
          end: {
            line: 244,
            column: 5
          }
        },
        line: 234
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 259,
            column: 5
          }
        },
        loc: {
          start: {
            line: 259,
            column: 54
          },
          end: {
            line: 286,
            column: 5
          }
        },
        line: 259
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 300,
            column: 4
          },
          end: {
            line: 300,
            column: 5
          }
        },
        loc: {
          start: {
            line: 300,
            column: 57
          },
          end: {
            line: 322,
            column: 5
          }
        },
        line: 300
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 337,
            column: 4
          },
          end: {
            line: 337,
            column: 5
          }
        },
        loc: {
          start: {
            line: 337,
            column: 70
          },
          end: {
            line: 389,
            column: 5
          }
        },
        line: 337
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 394,
            column: 4
          },
          end: {
            line: 394,
            column: 5
          }
        },
        loc: {
          start: {
            line: 394,
            column: 14
          },
          end: {
            line: 400,
            column: 5
          }
        },
        line: 394
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 415,
            column: 4
          },
          end: {
            line: 415,
            column: 5
          }
        },
        loc: {
          start: {
            line: 415,
            column: 36
          },
          end: {
            line: 423,
            column: 5
          }
        },
        line: 415
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 417,
            column: 31
          },
          end: {
            line: 417,
            column: 32
          }
        },
        loc: {
          start: {
            line: 417,
            column: 42
          },
          end: {
            line: 419,
            column: 13
          }
        },
        line: 417
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 59,
            column: 12
          },
          end: {
            line: 61,
            column: 32
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 60,
            column: 18
          },
          end: {
            line: 60,
            column: 59
          }
        }, {
          start: {
            line: 61,
            column: 18
          },
          end: {
            line: 61,
            column: 32
          }
        }],
        line: 59
      },
      "1": {
        loc: {
          start: {
            line: 106,
            column: 21
          },
          end: {
            line: 106,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 106,
            column: 21
          },
          end: {
            line: 106,
            column: 54
          }
        }, {
          start: {
            line: 106,
            column: 58
          },
          end: {
            line: 106,
            column: 59
          }
        }],
        line: 106
      },
      "2": {
        loc: {
          start: {
            line: 115,
            column: 8
          },
          end: {
            line: 120,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 115,
            column: 8
          },
          end: {
            line: 120,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 115
      },
      "3": {
        loc: {
          start: {
            line: 136,
            column: 8
          },
          end: {
            line: 143,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 136,
            column: 8
          },
          end: {
            line: 143,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 136
      },
      "4": {
        loc: {
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 158,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 158,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 156
      },
      "5": {
        loc: {
          start: {
            line: 174,
            column: 8
          },
          end: {
            line: 176,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 174,
            column: 8
          },
          end: {
            line: 176,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 174
      },
      "6": {
        loc: {
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 197,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 197,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 190
      },
      "7": {
        loc: {
          start: {
            line: 194,
            column: 12
          },
          end: {
            line: 196,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 194,
            column: 12
          },
          end: {
            line: 196,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 194
      },
      "8": {
        loc: {
          start: {
            line: 212,
            column: 8
          },
          end: {
            line: 221,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 212,
            column: 8
          },
          end: {
            line: 221,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 212
      },
      "9": {
        loc: {
          start: {
            line: 235,
            column: 8
          },
          end: {
            line: 237,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 235,
            column: 8
          },
          end: {
            line: 237,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 235
      },
      "10": {
        loc: {
          start: {
            line: 239,
            column: 8
          },
          end: {
            line: 243,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 8
          },
          end: {
            line: 243,
            column: 9
          }
        }, {
          start: {
            line: 241,
            column: 15
          },
          end: {
            line: 243,
            column: 9
          }
        }],
        line: 239
      },
      "11": {
        loc: {
          start: {
            line: 260,
            column: 8
          },
          end: {
            line: 262,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 260,
            column: 8
          },
          end: {
            line: 262,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 260
      },
      "12": {
        loc: {
          start: {
            line: 265,
            column: 8
          },
          end: {
            line: 268,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 265,
            column: 8
          },
          end: {
            line: 268,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 265
      },
      "13": {
        loc: {
          start: {
            line: 311,
            column: 8
          },
          end: {
            line: 321,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 311,
            column: 8
          },
          end: {
            line: 321,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 311
      },
      "14": {
        loc: {
          start: {
            line: 338,
            column: 8
          },
          end: {
            line: 340,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 338,
            column: 8
          },
          end: {
            line: 340,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 338
      },
      "15": {
        loc: {
          start: {
            line: 362,
            column: 37
          },
          end: {
            line: 362,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 362,
            column: 37
          },
          end: {
            line: 362,
            column: 59
          }
        }, {
          start: {
            line: 362,
            column: 63
          },
          end: {
            line: 362,
            column: 64
          }
        }],
        line: 362
      },
      "16": {
        loc: {
          start: {
            line: 367,
            column: 19
          },
          end: {
            line: 367,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 367,
            column: 19
          },
          end: {
            line: 367,
            column: 31
          }
        }, {
          start: {
            line: 367,
            column: 35
          },
          end: {
            line: 367,
            column: 36
          }
        }],
        line: 367
      },
      "17": {
        loc: {
          start: {
            line: 376,
            column: 19
          },
          end: {
            line: 376,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 376,
            column: 19
          },
          end: {
            line: 376,
            column: 35
          }
        }, {
          start: {
            line: 376,
            column: 39
          },
          end: {
            line: 376,
            column: 40
          }
        }],
        line: 376
      },
      "18": {
        loc: {
          start: {
            line: 384,
            column: 24
          },
          end: {
            line: 384,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 384,
            column: 24
          },
          end: {
            line: 384,
            column: 50
          }
        }, {
          start: {
            line: 384,
            column: 54
          },
          end: {
            line: 384,
            column: 55
          }
        }],
        line: 384
      },
      "19": {
        loc: {
          start: {
            line: 416,
            column: 8
          },
          end: {
            line: 422,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 416,
            column: 8
          },
          end: {
            line: 422,
            column: 9
          }
        }, {
          start: {
            line: 420,
            column: 15
          },
          end: {
            line: 422,
            column: 9
          }
        }],
        line: 416
      },
      "20": {
        loc: {
          start: {
            line: 420,
            column: 15
          },
          end: {
            line: 422,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 420,
            column: 15
          },
          end: {
            line: 422,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 420
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "56c2df1a077100e88dae9b0958d3dd1f63a8d41f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16n202qn8k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_16n202qn8k();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The `CanvasEntry` class represents an element consisting of a wave `canvas`
 * and an (optional) progress wave `canvas`.
 *
 * The `MultiCanvas` renderer uses one or more `CanvasEntry` instances to
 * render a waveform, depending on the zoom level.
 */
var CanvasEntry = /*#__PURE__*/function () {
  function CanvasEntry() {
    _classCallCheck(this, CanvasEntry);

    cov_16n202qn8k().f[0]++;
    cov_16n202qn8k().s[0]++;

    /**
     * The wave node
     *
     * @type {HTMLCanvasElement}
     */
    this.wave = null;
    /**
     * The wave canvas rendering context
     *
     * @type {CanvasRenderingContext2D}
     */

    cov_16n202qn8k().s[1]++;
    this.waveCtx = null;
    /**
     * The (optional) progress wave node
     *
     * @type {HTMLCanvasElement}
     */

    cov_16n202qn8k().s[2]++;
    this.progress = null;
    /**
     * The (optional) progress wave canvas rendering context
     *
     * @type {CanvasRenderingContext2D}
     */

    cov_16n202qn8k().s[3]++;
    this.progressCtx = null;
    /**
     * Start of the area the canvas should render, between 0 and 1
     *
     * @type {number}
     */

    cov_16n202qn8k().s[4]++;
    this.start = 0;
    /**
     * End of the area the canvas should render, between 0 and 1
     *
     * @type {number}
     */

    cov_16n202qn8k().s[5]++;
    this.end = 1;
    /**
     * Unique identifier for this entry
     *
     * @type {string}
     */

    cov_16n202qn8k().s[6]++;
    this.id = (0, _getId.default)(typeof this.constructor.name !== 'undefined' ? (cov_16n202qn8k().b[0][0]++, this.constructor.name.toLowerCase() + '_') : (cov_16n202qn8k().b[0][1]++, 'canvasentry_'));
    /**
     * Canvas 2d context attributes
     *
     * @type {object}
     */

    cov_16n202qn8k().s[7]++;
    this.canvasContextAttributes = {};
  }
  /**
   * Store the wave canvas element and create the 2D rendering context
   *
   * @param {HTMLCanvasElement} element The wave `canvas` element.
   */


  _createClass(CanvasEntry, [{
    key: "initWave",
    value: function initWave(element) {
      cov_16n202qn8k().f[1]++;
      cov_16n202qn8k().s[8]++;
      this.wave = element;
      cov_16n202qn8k().s[9]++;
      this.waveCtx = this.wave.getContext('2d', this.canvasContextAttributes);
    }
    /**
     * Store the progress wave canvas element and create the 2D rendering
     * context
     *
     * @param {HTMLCanvasElement} element The progress wave `canvas` element.
     */

  }, {
    key: "initProgress",
    value: function initProgress(element) {
      cov_16n202qn8k().f[2]++;
      cov_16n202qn8k().s[10]++;
      this.progress = element;
      cov_16n202qn8k().s[11]++;
      this.progressCtx = this.progress.getContext('2d', this.canvasContextAttributes);
    }
    /**
     * Update the dimensions
     *
     * @param {number} elementWidth Width of the entry
     * @param {number} totalWidth Total width of the multi canvas renderer
     * @param {number} width The new width of the element
     * @param {number} height The new height of the element
     */

  }, {
    key: "updateDimensions",
    value: function updateDimensions(elementWidth, totalWidth, width, height) {
      cov_16n202qn8k().f[3]++;
      cov_16n202qn8k().s[12]++;
      // where the canvas starts and ends in the waveform, represented as a
      // decimal between 0 and 1
      this.start = (cov_16n202qn8k().b[1][0]++, this.wave.offsetLeft / totalWidth) || (cov_16n202qn8k().b[1][1]++, 0);
      cov_16n202qn8k().s[13]++;
      this.end = this.start + elementWidth / totalWidth; // set wave canvas dimensions

      cov_16n202qn8k().s[14]++;
      this.wave.width = width;
      cov_16n202qn8k().s[15]++;
      this.wave.height = height;
      var elementSize = (cov_16n202qn8k().s[16]++, {
        width: elementWidth + 'px'
      });
      cov_16n202qn8k().s[17]++;
      (0, _style.default)(this.wave, elementSize);
      cov_16n202qn8k().s[18]++;

      if (this.hasProgressCanvas) {
        cov_16n202qn8k().b[2][0]++;
        cov_16n202qn8k().s[19]++;
        // set progress canvas dimensions
        this.progress.width = width;
        cov_16n202qn8k().s[20]++;
        this.progress.height = height;
        cov_16n202qn8k().s[21]++;
        (0, _style.default)(this.progress, elementSize);
      } else {
        cov_16n202qn8k().b[2][1]++;
      }
    }
    /**
     * Clear the wave and progress rendering contexts
     */

  }, {
    key: "clearWave",
    value: function clearWave() {
      cov_16n202qn8k().f[4]++;
      cov_16n202qn8k().s[22]++;
      // wave
      this.waveCtx.clearRect(0, 0, this.waveCtx.canvas.width, this.waveCtx.canvas.height); // progress

      cov_16n202qn8k().s[23]++;

      if (this.hasProgressCanvas) {
        cov_16n202qn8k().b[3][0]++;
        cov_16n202qn8k().s[24]++;
        this.progressCtx.clearRect(0, 0, this.progressCtx.canvas.width, this.progressCtx.canvas.height);
      } else {
        cov_16n202qn8k().b[3][1]++;
      }
    }
    /**
     * Set the fill styles for wave and progress
     * @param {string|string[]} waveColor Fill color for the wave canvas,
     * or an array of colors to apply as a gradient
     * @param {?string|string[]} progressColor Fill color for the progress canvas,
     * or an array of colors to apply as a gradient
     */

  }, {
    key: "setFillStyles",
    value: function setFillStyles(waveColor, progressColor) {
      cov_16n202qn8k().f[5]++;
      cov_16n202qn8k().s[25]++;
      this.waveCtx.fillStyle = this.getFillStyle(this.waveCtx, waveColor);
      cov_16n202qn8k().s[26]++;

      if (this.hasProgressCanvas) {
        cov_16n202qn8k().b[4][0]++;
        cov_16n202qn8k().s[27]++;
        this.progressCtx.fillStyle = this.getFillStyle(this.progressCtx, progressColor);
      } else {
        cov_16n202qn8k().b[4][1]++;
      }
    }
    /**
     * Utility function to handle wave color arguments
     *
     * When the color argument type is a string, it will be returned as is.
     * Otherwise, it will be treated as an array, and a canvas gradient will
     * be returned
     *
     * @since 6.0.0
     * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
     * @param {string|string[]} color Fill color for the wave canvas, or an array of colors to apply as a gradient
     * @returns {string|CanvasGradient} Returns a string fillstyle value, or a canvas gradient
     */

  }, {
    key: "getFillStyle",
    value: function getFillStyle(ctx, color) {
      cov_16n202qn8k().f[6]++;
      cov_16n202qn8k().s[28]++;

      if (typeof color == 'string') {
        cov_16n202qn8k().b[5][0]++;
        cov_16n202qn8k().s[29]++;
        return color;
      } else {
        cov_16n202qn8k().b[5][1]++;
      }

      var waveGradient = (cov_16n202qn8k().s[30]++, ctx.createLinearGradient(0, 0, 0, ctx.canvas.height));
      cov_16n202qn8k().s[31]++;
      color.forEach(function (value, index) {
        cov_16n202qn8k().f[7]++;
        cov_16n202qn8k().s[32]++;
        return waveGradient.addColorStop(index / color.length, value);
      });
      cov_16n202qn8k().s[33]++;
      return waveGradient;
    }
    /**
     * Set the canvas transforms for wave and progress
     *
     * @param {boolean} vertical Whether to render vertically
     */

  }, {
    key: "applyCanvasTransforms",
    value: function applyCanvasTransforms(vertical) {
      cov_16n202qn8k().f[8]++;
      cov_16n202qn8k().s[34]++;

      if (vertical) {
        cov_16n202qn8k().b[6][0]++;
        cov_16n202qn8k().s[35]++;
        // Reflect the waveform across the line y = -x
        this.waveCtx.setTransform(0, 1, 1, 0, 0, 0);
        cov_16n202qn8k().s[36]++;

        if (this.hasProgressCanvas) {
          cov_16n202qn8k().b[7][0]++;
          cov_16n202qn8k().s[37]++;
          this.progressCtx.setTransform(0, 1, 1, 0, 0, 0);
        } else {
          cov_16n202qn8k().b[7][1]++;
        }
      } else {
        cov_16n202qn8k().b[6][1]++;
      }
    }
    /**
     * Draw a rectangle for wave and progress
     *
     * @param {number} x X start position
     * @param {number} y Y start position
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {number} radius Radius of the rectangle
     */

  }, {
    key: "fillRects",
    value: function fillRects(x, y, width, height, radius) {
      cov_16n202qn8k().f[9]++;
      cov_16n202qn8k().s[38]++;
      this.fillRectToContext(this.waveCtx, x, y, width, height, radius);
      cov_16n202qn8k().s[39]++;

      if (this.hasProgressCanvas) {
        cov_16n202qn8k().b[8][0]++;
        cov_16n202qn8k().s[40]++;
        this.fillRectToContext(this.progressCtx, x, y, width, height, radius);
      } else {
        cov_16n202qn8k().b[8][1]++;
      }
    }
    /**
     * Draw the actual rectangle on a `canvas` element
     *
     * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
     * @param {number} x X start position
     * @param {number} y Y start position
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {number} radius Radius of the rectangle
     */

  }, {
    key: "fillRectToContext",
    value: function fillRectToContext(ctx, x, y, width, height, radius) {
      cov_16n202qn8k().f[10]++;
      cov_16n202qn8k().s[41]++;

      if (!ctx) {
        cov_16n202qn8k().b[9][0]++;
        cov_16n202qn8k().s[42]++;
        return;
      } else {
        cov_16n202qn8k().b[9][1]++;
      }

      cov_16n202qn8k().s[43]++;

      if (radius) {
        cov_16n202qn8k().b[10][0]++;
        cov_16n202qn8k().s[44]++;
        this.drawRoundedRect(ctx, x, y, width, height, radius);
      } else {
        cov_16n202qn8k().b[10][1]++;
        cov_16n202qn8k().s[45]++;
        ctx.fillRect(x, y, width, height);
      }
    }
    /**
     * Draw a rounded rectangle on Canvas
     *
     * @param {CanvasRenderingContext2D} ctx Canvas context
     * @param {number} x X-position of the rectangle
     * @param {number} y Y-position of the rectangle
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {number} radius Radius of the rectangle
     *
     * @return {void}
     * @example drawRoundedRect(ctx, 50, 50, 5, 10, 3)
     */

  }, {
    key: "drawRoundedRect",
    value: function drawRoundedRect(ctx, x, y, width, height, radius) {
      cov_16n202qn8k().f[11]++;
      cov_16n202qn8k().s[46]++;

      if (height === 0) {
        cov_16n202qn8k().b[11][0]++;
        cov_16n202qn8k().s[47]++;
        return;
      } else {
        cov_16n202qn8k().b[11][1]++;
      } // peaks are float values from -1 to 1. Use absolute height values in
      // order to correctly calculate rounded rectangle coordinates


      cov_16n202qn8k().s[48]++;

      if (height < 0) {
        cov_16n202qn8k().b[12][0]++;
        cov_16n202qn8k().s[49]++;
        height *= -1;
        cov_16n202qn8k().s[50]++;
        y -= height;
      } else {
        cov_16n202qn8k().b[12][1]++;
      }

      cov_16n202qn8k().s[51]++;
      ctx.beginPath();
      cov_16n202qn8k().s[52]++;
      ctx.moveTo(x + radius, y);
      cov_16n202qn8k().s[53]++;
      ctx.lineTo(x + width - radius, y);
      cov_16n202qn8k().s[54]++;
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      cov_16n202qn8k().s[55]++;
      ctx.lineTo(x + width, y + height - radius);
      cov_16n202qn8k().s[56]++;
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      cov_16n202qn8k().s[57]++;
      ctx.lineTo(x + radius, y + height);
      cov_16n202qn8k().s[58]++;
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      cov_16n202qn8k().s[59]++;
      ctx.lineTo(x, y + radius);
      cov_16n202qn8k().s[60]++;
      ctx.quadraticCurveTo(x, y, x + radius, y);
      cov_16n202qn8k().s[61]++;
      ctx.closePath();
      cov_16n202qn8k().s[62]++;
      ctx.fill();
    }
    /**
     * Render the actual wave and progress lines
     *
     * @param {number[]} peaks Array with peaks data
     * @param {number} absmax Maximum peak value (absolute)
     * @param {number} halfH Half the height of the waveform
     * @param {number} offsetY Offset to the top
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that
     * should be rendered
     */

  }, {
    key: "drawLines",
    value: function drawLines(peaks, absmax, halfH, offsetY, start, end) {
      cov_16n202qn8k().f[12]++;
      cov_16n202qn8k().s[63]++;
      this.drawLineToContext(this.waveCtx, peaks, absmax, halfH, offsetY, start, end);
      cov_16n202qn8k().s[64]++;

      if (this.hasProgressCanvas) {
        cov_16n202qn8k().b[13][0]++;
        cov_16n202qn8k().s[65]++;
        this.drawLineToContext(this.progressCtx, peaks, absmax, halfH, offsetY, start, end);
      } else {
        cov_16n202qn8k().b[13][1]++;
      }
    }
    /**
     * Render the actual waveform line on a `canvas` element
     *
     * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
     * @param {number[]} peaks Array with peaks data
     * @param {number} absmax Maximum peak value (absolute)
     * @param {number} halfH Half the height of the waveform
     * @param {number} offsetY Offset to the top
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that
     * should be rendered
     */

  }, {
    key: "drawLineToContext",
    value: function drawLineToContext(ctx, peaks, absmax, halfH, offsetY, start, end) {
      cov_16n202qn8k().f[13]++;
      cov_16n202qn8k().s[66]++;

      if (!ctx) {
        cov_16n202qn8k().b[14][0]++;
        cov_16n202qn8k().s[67]++;
        return;
      } else {
        cov_16n202qn8k().b[14][1]++;
      }

      var length = (cov_16n202qn8k().s[68]++, peaks.length / 2);
      var first = (cov_16n202qn8k().s[69]++, Math.round(length * this.start)); // use one more peak value to make sure we join peaks at ends -- unless,
      // of course, this is the last canvas

      var last = (cov_16n202qn8k().s[70]++, Math.round(length * this.end) + 1);
      var canvasStart = (cov_16n202qn8k().s[71]++, first);
      var canvasEnd = (cov_16n202qn8k().s[72]++, last);
      var scale = (cov_16n202qn8k().s[73]++, this.wave.width / (canvasEnd - canvasStart - 1)); // optimization

      var halfOffset = (cov_16n202qn8k().s[74]++, halfH + offsetY);
      var absmaxHalf = (cov_16n202qn8k().s[75]++, absmax / halfH);
      cov_16n202qn8k().s[76]++;
      ctx.beginPath();
      cov_16n202qn8k().s[77]++;
      ctx.moveTo((canvasStart - first) * scale, halfOffset);
      cov_16n202qn8k().s[78]++;
      ctx.lineTo((canvasStart - first) * scale, halfOffset - Math.round(((cov_16n202qn8k().b[15][0]++, peaks[2 * canvasStart]) || (cov_16n202qn8k().b[15][1]++, 0)) / absmaxHalf));
      var i, peak, h;
      cov_16n202qn8k().s[79]++;

      for (i = canvasStart; i < canvasEnd; i++) {
        cov_16n202qn8k().s[80]++;
        peak = (cov_16n202qn8k().b[16][0]++, peaks[2 * i]) || (cov_16n202qn8k().b[16][1]++, 0);
        cov_16n202qn8k().s[81]++;
        h = Math.round(peak / absmaxHalf);
        cov_16n202qn8k().s[82]++;
        ctx.lineTo((i - first) * scale + this.halfPixel, halfOffset - h);
      } // draw the bottom edge going backwards, to make a single
      // closed hull to fill


      var j = (cov_16n202qn8k().s[83]++, canvasEnd - 1);
      cov_16n202qn8k().s[84]++;

      for (j; j >= canvasStart; j--) {
        cov_16n202qn8k().s[85]++;
        peak = (cov_16n202qn8k().b[17][0]++, peaks[2 * j + 1]) || (cov_16n202qn8k().b[17][1]++, 0);
        cov_16n202qn8k().s[86]++;
        h = Math.round(peak / absmaxHalf);
        cov_16n202qn8k().s[87]++;
        ctx.lineTo((j - first) * scale + this.halfPixel, halfOffset - h);
      }

      cov_16n202qn8k().s[88]++;
      ctx.lineTo((canvasStart - first) * scale, halfOffset - Math.round(((cov_16n202qn8k().b[18][0]++, peaks[2 * canvasStart + 1]) || (cov_16n202qn8k().b[18][1]++, 0)) / absmaxHalf));
      cov_16n202qn8k().s[89]++;
      ctx.closePath();
      cov_16n202qn8k().s[90]++;
      ctx.fill();
    }
    /**
     * Destroys this entry
     */

  }, {
    key: "destroy",
    value: function destroy() {
      cov_16n202qn8k().f[14]++;
      cov_16n202qn8k().s[91]++;
      this.waveCtx = null;
      cov_16n202qn8k().s[92]++;
      this.wave = null;
      cov_16n202qn8k().s[93]++;
      this.progressCtx = null;
      cov_16n202qn8k().s[94]++;
      this.progress = null;
    }
    /**
     * Return image data of the wave `canvas` element
     *
     * When using a `type` of `'blob'`, this will return a `Promise` that
     * resolves with a `Blob` instance.
     *
     * @param {string} format='image/png' An optional value of a format type.
     * @param {number} quality=0.92 An optional value between 0 and 1.
     * @param {string} type='dataURL' Either 'dataURL' or 'blob'.
     * @return {string|Promise} When using the default `'dataURL'` `type` this
     * returns a data URL. When using the `'blob'` `type` this returns a
     * `Promise` that resolves with a `Blob` instance.
     */

  }, {
    key: "getImage",
    value: function getImage(format, quality, type) {
      var _this = this;

      cov_16n202qn8k().f[15]++;
      cov_16n202qn8k().s[95]++;

      if (type === 'blob') {
        cov_16n202qn8k().b[19][0]++;
        cov_16n202qn8k().s[96]++;
        return new Promise(function (resolve) {
          cov_16n202qn8k().f[16]++;
          cov_16n202qn8k().s[97]++;

          _this.wave.toBlob(resolve, format, quality);
        });
      } else {
        cov_16n202qn8k().b[19][1]++;
        cov_16n202qn8k().s[98]++;

        if (type === 'dataURL') {
          cov_16n202qn8k().b[20][0]++;
          cov_16n202qn8k().s[99]++;
          return this.wave.toDataURL(format, quality);
        } else {
          cov_16n202qn8k().b[20][1]++;
        }
      }
    }
  }]);

  return CanvasEntry;
}();

exports["default"] = CanvasEntry;
module.exports = exports.default;

/***/ }),

/***/ "./src/drawer.js":
/*!***********************!*\
  !*** ./src/drawer.js ***!
  \***********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function cov_1em1v5czwm() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/drawer.js";
  var hash = "9f9fdd41ba3ab892158120de17c0bbcde74ddd8e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/drawer.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 16
        }
      },
      "1": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 74
        }
      },
      "2": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 29
        }
      },
      "3": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 23
        }
      },
      "4": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 61
        }
      },
      "5": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 25
        }
      },
      "6": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 28
        }
      },
      "7": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 38
        }
      },
      "8": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 59,
          column: 10
        }
      },
      "9": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 67,
          column: 11
        }
      },
      "10": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 76,
          column: 9
        }
      },
      "11": {
        start: {
          line: 70,
          column: 12
        },
        end: {
          line: 75,
          column: 15
        }
      },
      "12": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 34
        }
      },
      "13": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 89,
          column: 41
        }
      },
      "14": {
        start: {
          line: 91,
          column: 24
        },
        end: {
          line: 94,
          column: 17
        }
      },
      "15": {
        start: {
          line: 95,
          column: 21
        },
        end: {
          line: 95,
          column: 57
        }
      },
      "16": {
        start: {
          line: 97,
          column: 29
        },
        end: {
          line: 97,
          column: 39
        }
      },
      "17": {
        start: {
          line: 98,
          column: 28
        },
        end: {
          line: 98,
          column: 43
        }
      },
      "18": {
        start: {
          line: 99,
          column: 31
        },
        end: {
          line: 99,
          column: 68
        }
      },
      "19": {
        start: {
          line: 102,
          column: 8
        },
        end: {
          line: 108,
          column: 9
        }
      },
      "20": {
        start: {
          line: 103,
          column: 12
        },
        end: {
          line: 104,
          column: 61
        }
      },
      "21": {
        start: {
          line: 106,
          column: 12
        },
        end: {
          line: 107,
          column: 46
        }
      },
      "22": {
        start: {
          line: 110,
          column: 8
        },
        end: {
          line: 110,
          column: 42
        }
      },
      "23": {
        start: {
          line: 114,
          column: 8
        },
        end: {
          line: 118,
          column: 9
        }
      },
      "24": {
        start: {
          line: 115,
          column: 12
        },
        end: {
          line: 115,
          column: 47
        }
      },
      "25": {
        start: {
          line: 117,
          column: 12
        },
        end: {
          line: 117,
          column: 46
        }
      },
      "26": {
        start: {
          line: 122,
          column: 8
        },
        end: {
          line: 139,
          column: 11
        }
      },
      "27": {
        start: {
          line: 123,
          column: 34
        },
        end: {
          line: 123,
          column: 79
        }
      },
      "28": {
        start: {
          line: 124,
          column: 36
        },
        end: {
          line: 125,
          column: 43
        }
      },
      "29": {
        start: {
          line: 127,
          column: 12
        },
        end: {
          line: 134,
          column: 13
        }
      },
      "30": {
        start: {
          line: 129,
          column: 29
        },
        end: {
          line: 129,
          column: 65
        }
      },
      "31": {
        start: {
          line: 130,
          column: 16
        },
        end: {
          line: 133,
          column: 17
        }
      },
      "32": {
        start: {
          line: 132,
          column: 20
        },
        end: {
          line: 132,
          column: 27
        }
      },
      "33": {
        start: {
          line: 136,
          column: 12
        },
        end: {
          line: 138,
          column: 13
        }
      },
      "34": {
        start: {
          line: 137,
          column: 16
        },
        end: {
          line: 137,
          column: 64
        }
      },
      "35": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 145,
          column: 11
        }
      },
      "36": {
        start: {
          line: 142,
          column: 12
        },
        end: {
          line: 144,
          column: 13
        }
      },
      "37": {
        start: {
          line: 143,
          column: 16
        },
        end: {
          line: 143,
          column: 67
        }
      },
      "38": {
        start: {
          line: 147,
          column: 8
        },
        end: {
          line: 149,
          column: 10
        }
      },
      "39": {
        start: {
          line: 148,
          column: 12
        },
        end: {
          line: 148,
          column: 39
        }
      },
      "40": {
        start: {
          line: 164,
          column: 8
        },
        end: {
          line: 166,
          column: 9
        }
      },
      "41": {
        start: {
          line: 165,
          column: 12
        },
        end: {
          line: 165,
          column: 29
        }
      },
      "42": {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 170,
          column: 50
        }
      },
      "43": {
        start: {
          line: 177,
          column: 8
        },
        end: {
          line: 179,
          column: 9
        }
      },
      "44": {
        start: {
          line: 178,
          column: 12
        },
        end: {
          line: 178,
          column: 40
        }
      },
      "45": {
        start: {
          line: 188,
          column: 25
        },
        end: {
          line: 188,
          column: 59
        }
      },
      "46": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 48
        }
      },
      "47": {
        start: {
          line: 200,
          column: 27
        },
        end: {
          line: 200,
          column: 50
        }
      },
      "48": {
        start: {
          line: 201,
          column: 21
        },
        end: {
          line: 201,
          column: 53
        }
      },
      "49": {
        start: {
          line: 202,
          column: 26
        },
        end: {
          line: 202,
          column: 77
        }
      },
      "50": {
        start: {
          line: 203,
          column: 21
        },
        end: {
          line: 203,
          column: 36
        }
      },
      "51": {
        start: {
          line: 204,
          column: 21
        },
        end: {
          line: 204,
          column: 40
        }
      },
      "52": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 209,
          column: 9
        }
      },
      "53": {
        start: {
          line: 208,
          column: 12
        },
        end: {
          line: 208,
          column: 19
        }
      },
      "54": {
        start: {
          line: 212,
          column: 8
        },
        end: {
          line: 222,
          column: 9
        }
      },
      "55": {
        start: {
          line: 214,
          column: 23
        },
        end: {
          line: 214,
          column: 49
        }
      },
      "56": {
        start: {
          line: 217,
          column: 12
        },
        end: {
          line: 217,
          column: 25
        }
      },
      "57": {
        start: {
          line: 218,
          column: 12
        },
        end: {
          line: 218,
          column: 30
        }
      },
      "58": {
        start: {
          line: 220,
          column: 12
        },
        end: {
          line: 220,
          column: 61
        }
      },
      "59": {
        start: {
          line: 221,
          column: 12
        },
        end: {
          line: 221,
          column: 41
        }
      },
      "60": {
        start: {
          line: 225,
          column: 8
        },
        end: {
          line: 225,
          column: 58
        }
      },
      "61": {
        start: {
          line: 227,
          column: 8
        },
        end: {
          line: 229,
          column: 9
        }
      },
      "62": {
        start: {
          line: 228,
          column: 12
        },
        end: {
          line: 228,
          column: 45
        }
      },
      "63": {
        start: {
          line: 238,
          column: 16
        },
        end: {
          line: 238,
          column: 17
        }
      },
      "64": {
        start: {
          line: 239,
          column: 8
        },
        end: {
          line: 255,
          column: 9
        }
      },
      "65": {
        start: {
          line: 240,
          column: 31
        },
        end: {
          line: 240,
          column: 53
        }
      },
      "66": {
        start: {
          line: 241,
          column: 12
        },
        end: {
          line: 241,
          column: 65
        }
      },
      "67": {
        start: {
          line: 248,
          column: 12
        },
        end: {
          line: 254,
          column: 13
        }
      },
      "68": {
        start: {
          line: 249,
          column: 34
        },
        end: {
          line: 252,
          column: 17
        }
      },
      "69": {
        start: {
          line: 253,
          column: 16
        },
        end: {
          line: 253,
          column: 56
        }
      },
      "70": {
        start: {
          line: 256,
          column: 8
        },
        end: {
          line: 256,
          column: 17
        }
      },
      "71": {
        start: {
          line: 265,
          column: 8
        },
        end: {
          line: 265,
          column: 79
        }
      },
      "72": {
        start: {
          line: 275,
          column: 8
        },
        end: {
          line: 277,
          column: 9
        }
      },
      "73": {
        start: {
          line: 276,
          column: 12
        },
        end: {
          line: 276,
          column: 25
        }
      },
      "74": {
        start: {
          line: 279,
          column: 8
        },
        end: {
          line: 279,
          column: 27
        }
      },
      "75": {
        start: {
          line: 281,
          column: 8
        },
        end: {
          line: 290,
          column: 9
        }
      },
      "76": {
        start: {
          line: 282,
          column: 12
        },
        end: {
          line: 284,
          column: 15
        }
      },
      "77": {
        start: {
          line: 286,
          column: 29
        },
        end: {
          line: 286,
          column: 75
        }
      },
      "78": {
        start: {
          line: 287,
          column: 12
        },
        end: {
          line: 289,
          column: 15
        }
      },
      "79": {
        start: {
          line: 292,
          column: 8
        },
        end: {
          line: 292,
          column: 26
        }
      },
      "80": {
        start: {
          line: 293,
          column: 8
        },
        end: {
          line: 293,
          column: 20
        }
      },
      "81": {
        start: {
          line: 303,
          column: 8
        },
        end: {
          line: 305,
          column: 9
        }
      },
      "82": {
        start: {
          line: 304,
          column: 12
        },
        end: {
          line: 304,
          column: 25
        }
      },
      "83": {
        start: {
          line: 306,
          column: 8
        },
        end: {
          line: 306,
          column: 29
        }
      },
      "84": {
        start: {
          line: 308,
          column: 8
        },
        end: {
          line: 310,
          column: 11
        }
      },
      "85": {
        start: {
          line: 312,
          column: 8
        },
        end: {
          line: 312,
          column: 26
        }
      },
      "86": {
        start: {
          line: 313,
          column: 8
        },
        end: {
          line: 313,
          column: 20
        }
      },
      "87": {
        start: {
          line: 322,
          column: 27
        },
        end: {
          line: 322,
          column: 53
        }
      },
      "88": {
        start: {
          line: 323,
          column: 20
        },
        end: {
          line: 323,
          column: 66
        }
      },
      "89": {
        start: {
          line: 325,
          column: 8
        },
        end: {
          line: 337,
          column: 9
        }
      },
      "90": {
        start: {
          line: 326,
          column: 12
        },
        end: {
          line: 326,
          column: 31
        }
      },
      "91": {
        start: {
          line: 328,
          column: 12
        },
        end: {
          line: 334,
          column: 13
        }
      },
      "92": {
        start: {
          line: 329,
          column: 31
        },
        end: {
          line: 329,
          column: 70
        }
      },
      "93": {
        start: {
          line: 330,
          column: 16
        },
        end: {
          line: 333,
          column: 18
        }
      },
      "94": {
        start: {
          line: 336,
          column: 12
        },
        end: {
          line: 336,
          column: 37
        }
      },
      "95": {
        start: {
          line: 344,
          column: 8
        },
        end: {
          line: 344,
          column: 21
        }
      },
      "96": {
        start: {
          line: 345,
          column: 8
        },
        end: {
          line: 350,
          column: 9
        }
      },
      "97": {
        start: {
          line: 346,
          column: 12
        },
        end: {
          line: 348,
          column: 13
        }
      },
      "98": {
        start: {
          line: 347,
          column: 16
        },
        end: {
          line: 347,
          column: 68
        }
      },
      "99": {
        start: {
          line: 349,
          column: 12
        },
        end: {
          line: 349,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 35
          },
          end: {
            line: 38,
            column: 5
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        loc: {
          start: {
            line: 47,
            column: 22
          },
          end: {
            line: 49,
            column: 5
          }
        },
        line: 47
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        loc: {
          start: {
            line: 55,
            column: 20
          },
          end: {
            line: 79,
            column: 5
          }
        },
        line: 55
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 5
          }
        },
        loc: {
          start: {
            line: 88,
            column: 30
          },
          end: {
            line: 111,
            column: 5
          }
        },
        line: 88
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 5
          }
        },
        loc: {
          start: {
            line: 113,
            column: 44
          },
          end: {
            line: 119,
            column: 5
          }
        },
        line: 113
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 5
          }
        },
        loc: {
          start: {
            line: 121,
            column: 25
          },
          end: {
            line: 150,
            column: 5
          }
        },
        line: 121
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 122,
            column: 47
          },
          end: {
            line: 122,
            column: 48
          }
        },
        loc: {
          start: {
            line: 122,
            column: 52
          },
          end: {
            line: 139,
            column: 9
          }
        },
        line: 122
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 141,
            column: 50
          },
          end: {
            line: 141,
            column: 51
          }
        },
        loc: {
          start: {
            line: 141,
            column: 55
          },
          end: {
            line: 145,
            column: 9
          }
        },
        line: 141
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 147,
            column: 48
          },
          end: {
            line: 147,
            column: 49
          }
        },
        loc: {
          start: {
            line: 148,
            column: 12
          },
          end: {
            line: 148,
            column: 39
          }
        },
        line: 148
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        loc: {
          start: {
            line: 163,
            column: 41
          },
          end: {
            line: 171,
            column: 5
          }
        },
        line: 163
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        loc: {
          start: {
            line: 176,
            column: 18
          },
          end: {
            line: 180,
            column: 5
          }
        },
        line: 176
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        },
        loc: {
          start: {
            line: 187,
            column: 22
          },
          end: {
            line: 190,
            column: 5
          }
        },
        line: 187
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 199,
            column: 5
          }
        },
        loc: {
          start: {
            line: 199,
            column: 44
          },
          end: {
            line: 230,
            column: 5
          }
        },
        line: 199
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 237,
            column: 5
          }
        },
        loc: {
          start: {
            line: 237,
            column: 17
          },
          end: {
            line: 257,
            column: 5
          }
        },
        line: 237
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 264,
            column: 5
          }
        },
        loc: {
          start: {
            line: 264,
            column: 15
          },
          end: {
            line: 266,
            column: 5
          }
        },
        line: 264
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 274,
            column: 4
          },
          end: {
            line: 274,
            column: 5
          }
        },
        loc: {
          start: {
            line: 274,
            column: 20
          },
          end: {
            line: 294,
            column: 5
          }
        },
        line: 274
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 302,
            column: 4
          },
          end: {
            line: 302,
            column: 5
          }
        },
        loc: {
          start: {
            line: 302,
            column: 22
          },
          end: {
            line: 314,
            column: 5
          }
        },
        line: 302
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 321,
            column: 4
          },
          end: {
            line: 321,
            column: 5
          }
        },
        loc: {
          start: {
            line: 321,
            column: 23
          },
          end: {
            line: 338,
            column: 5
          }
        },
        line: 321
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 343,
            column: 4
          },
          end: {
            line: 343,
            column: 5
          }
        },
        loc: {
          start: {
            line: 343,
            column: 14
          },
          end: {
            line: 351,
            column: 5
          }
        },
        line: 343
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 360,
            column: 4
          },
          end: {
            line: 360,
            column: 5
          }
        },
        loc: {
          start: {
            line: 360,
            column: 19
          },
          end: {
            line: 360,
            column: 21
          }
        },
        line: 360
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 367,
            column: 5
          }
        },
        loc: {
          start: {
            line: 367,
            column: 17
          },
          end: {
            line: 367,
            column: 19
          }
        },
        line: 367
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 382,
            column: 4
          },
          end: {
            line: 382,
            column: 5
          }
        },
        loc: {
          start: {
            line: 382,
            column: 46
          },
          end: {
            line: 382,
            column: 48
          }
        },
        line: 382
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 397,
            column: 5
          }
        },
        loc: {
          start: {
            line: 397,
            column: 46
          },
          end: {
            line: 397,
            column: 48
          }
        },
        line: 397
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 404,
            column: 4
          },
          end: {
            line: 404,
            column: 5
          }
        },
        loc: {
          start: {
            line: 404,
            column: 16
          },
          end: {
            line: 404,
            column: 18
          }
        },
        line: 404
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 412,
            column: 4
          },
          end: {
            line: 412,
            column: 5
          }
        },
        loc: {
          start: {
            line: 412,
            column: 29
          },
          end: {
            line: 412,
            column: 31
          }
        },
        line: 412
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 69,
            column: 8
          },
          end: {
            line: 76,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 8
          },
          end: {
            line: 76,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 69
      },
      "1": {
        loc: {
          start: {
            line: 69,
            column: 12
          },
          end: {
            line: 69,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 69,
            column: 12
          },
          end: {
            line: 69,
            column: 34
          }
        }, {
          start: {
            line: 69,
            column: 38
          },
          end: {
            line: 69,
            column: 62
          }
        }],
        line: 69
      },
      "2": {
        loc: {
          start: {
            line: 72,
            column: 24
          },
          end: {
            line: 72,
            column: 64
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 72,
            column: 49
          },
          end: {
            line: 72,
            column: 55
          }
        }, {
          start: {
            line: 72,
            column: 58
          },
          end: {
            line: 72,
            column: 64
          }
        }],
        line: 72
      },
      "3": {
        loc: {
          start: {
            line: 73,
            column: 27
          },
          end: {
            line: 73,
            column: 72
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 73,
            column: 55
          },
          end: {
            line: 73,
            column: 63
          }
        }, {
          start: {
            line: 73,
            column: 66
          },
          end: {
            line: 73,
            column: 72
          }
        }],
        line: 73
      },
      "4": {
        loc: {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 89,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 89,
            column: 18
          }
        }, {
          start: {
            line: 89,
            column: 22
          },
          end: {
            line: 89,
            column: 40
          }
        }],
        line: 89
      },
      "5": {
        loc: {
          start: {
            line: 92,
            column: 12
          },
          end: {
            line: 92,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 92,
            column: 30
          },
          end: {
            line: 92,
            column: 48
          }
        }, {
          start: {
            line: 92,
            column: 51
          },
          end: {
            line: 92,
            column: 52
          }
        }],
        line: 92
      },
      "6": {
        loc: {
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        }, {
          start: {
            line: 105,
            column: 15
          },
          end: {
            line: 108,
            column: 9
          }
        }],
        line: 102
      },
      "7": {
        loc: {
          start: {
            line: 102,
            column: 12
          },
          end: {
            line: 102,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 102,
            column: 12
          },
          end: {
            line: 102,
            column: 35
          }
        }, {
          start: {
            line: 102,
            column: 39
          },
          end: {
            line: 102,
            column: 65
          }
        }],
        line: 102
      },
      "8": {
        loc: {
          start: {
            line: 103,
            column: 23
          },
          end: {
            line: 104,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 103,
            column: 23
          },
          end: {
            line: 104,
            column: 55
          }
        }, {
          start: {
            line: 104,
            column: 59
          },
          end: {
            line: 104,
            column: 60
          }
        }],
        line: 103
      },
      "9": {
        loc: {
          start: {
            line: 106,
            column: 23
          },
          end: {
            line: 107,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 106,
            column: 23
          },
          end: {
            line: 107,
            column: 40
          }
        }, {
          start: {
            line: 107,
            column: 44
          },
          end: {
            line: 107,
            column: 45
          }
        }],
        line: 106
      },
      "10": {
        loc: {
          start: {
            line: 114,
            column: 8
          },
          end: {
            line: 118,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 114,
            column: 8
          },
          end: {
            line: 118,
            column: 9
          }
        }, {
          start: {
            line: 116,
            column: 15
          },
          end: {
            line: 118,
            column: 9
          }
        }],
        line: 114
      },
      "11": {
        loc: {
          start: {
            line: 127,
            column: 12
          },
          end: {
            line: 134,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 127,
            column: 12
          },
          end: {
            line: 134,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 127
      },
      "12": {
        loc: {
          start: {
            line: 130,
            column: 16
          },
          end: {
            line: 133,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 130,
            column: 16
          },
          end: {
            line: 133,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 130
      },
      "13": {
        loc: {
          start: {
            line: 136,
            column: 12
          },
          end: {
            line: 138,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 136,
            column: 12
          },
          end: {
            line: 138,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 136
      },
      "14": {
        loc: {
          start: {
            line: 142,
            column: 12
          },
          end: {
            line: 144,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 12
          },
          end: {
            line: 144,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 142
      },
      "15": {
        loc: {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 166,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 166,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 164
      },
      "16": {
        loc: {
          start: {
            line: 168,
            column: 8
          },
          end: {
            line: 170,
            column: 49
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 169,
            column: 14
          },
          end: {
            line: 169,
            column: 49
          }
        }, {
          start: {
            line: 170,
            column: 14
          },
          end: {
            line: 170,
            column: 49
          }
        }],
        line: 168
      },
      "17": {
        loc: {
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 179,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 179,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 177
      },
      "18": {
        loc: {
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 209,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 209,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 206
      },
      "19": {
        loc: {
          start: {
            line: 212,
            column: 8
          },
          end: {
            line: 222,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 212,
            column: 8
          },
          end: {
            line: 222,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 212
      },
      "20": {
        loc: {
          start: {
            line: 212,
            column: 12
          },
          end: {
            line: 212,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 212,
            column: 12
          },
          end: {
            line: 212,
            column: 22
          }
        }, {
          start: {
            line: 212,
            column: 26
          },
          end: {
            line: 212,
            column: 41
          }
        }, {
          start: {
            line: 212,
            column: 45
          },
          end: {
            line: 212,
            column: 58
          }
        }],
        line: 212
      },
      "21": {
        loc: {
          start: {
            line: 227,
            column: 8
          },
          end: {
            line: 229,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 227,
            column: 8
          },
          end: {
            line: 229,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 227
      },
      "22": {
        loc: {
          start: {
            line: 239,
            column: 8
          },
          end: {
            line: 255,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 8
          },
          end: {
            line: 255,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 239
      },
      "23": {
        loc: {
          start: {
            line: 248,
            column: 12
          },
          end: {
            line: 254,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 248,
            column: 12
          },
          end: {
            line: 254,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 248
      },
      "24": {
        loc: {
          start: {
            line: 275,
            column: 8
          },
          end: {
            line: 277,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 275,
            column: 8
          },
          end: {
            line: 277,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 275
      },
      "25": {
        loc: {
          start: {
            line: 281,
            column: 8
          },
          end: {
            line: 290,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 281,
            column: 8
          },
          end: {
            line: 290,
            column: 9
          }
        }, {
          start: {
            line: 285,
            column: 15
          },
          end: {
            line: 290,
            column: 9
          }
        }],
        line: 281
      },
      "26": {
        loc: {
          start: {
            line: 281,
            column: 12
          },
          end: {
            line: 281,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 281,
            column: 12
          },
          end: {
            line: 281,
            column: 34
          }
        }, {
          start: {
            line: 281,
            column: 38
          },
          end: {
            line: 281,
            column: 62
          }
        }],
        line: 281
      },
      "27": {
        loc: {
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 305,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 305,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 303
      },
      "28": {
        loc: {
          start: {
            line: 325,
            column: 8
          },
          end: {
            line: 337,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 325,
            column: 8
          },
          end: {
            line: 337,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 325
      },
      "29": {
        loc: {
          start: {
            line: 325,
            column: 12
          },
          end: {
            line: 325,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 325,
            column: 12
          },
          end: {
            line: 325,
            column: 30
          }
        }, {
          start: {
            line: 325,
            column: 34
          },
          end: {
            line: 325,
            column: 66
          }
        }],
        line: 325
      },
      "30": {
        loc: {
          start: {
            line: 328,
            column: 12
          },
          end: {
            line: 334,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 328,
            column: 12
          },
          end: {
            line: 334,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 328
      },
      "31": {
        loc: {
          start: {
            line: 328,
            column: 16
          },
          end: {
            line: 328,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 328,
            column: 16
          },
          end: {
            line: 328,
            column: 40
          }
        }, {
          start: {
            line: 328,
            column: 44
          },
          end: {
            line: 328,
            column: 66
          }
        }],
        line: 328
      },
      "32": {
        loc: {
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 350,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 350,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 345
      },
      "33": {
        loc: {
          start: {
            line: 346,
            column: 12
          },
          end: {
            line: 348,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 346,
            column: 12
          },
          end: {
            line: 348,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 346
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9f9fdd41ba3ab892158120de17c0bbcde74ddd8e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1em1v5czwm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1em1v5czwm();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Parent class for renderers
 *
 * @extends {Observer}
 */
var Drawer = /*#__PURE__*/function (_util$Observer) {
  _inherits(Drawer, _util$Observer);

  var _super = _createSuper(Drawer);

  /**
   * @param {HTMLElement} container The container node of the wavesurfer instance
   * @param {WavesurferParams} params The wavesurfer initialisation options
   */
  function Drawer(container, params) {
    var _this;

    _classCallCheck(this, Drawer);

    cov_1em1v5czwm().f[0]++;
    cov_1em1v5czwm().s[0]++;
    _this = _super.call(this);
    cov_1em1v5czwm().s[1]++;
    _this.container = util.withOrientation(container, params.vertical);
    /**
     * @type {WavesurferParams}
     */

    cov_1em1v5czwm().s[2]++;
    _this.params = params;
    /**
     * The width of the renderer
     * @type {number}
     */

    cov_1em1v5czwm().s[3]++;
    _this.width = 0;
    /**
     * The height of the renderer
     * @type {number}
     */

    cov_1em1v5czwm().s[4]++;
    _this.height = params.height * _this.params.pixelRatio;
    cov_1em1v5czwm().s[5]++;
    _this.lastPos = 0;
    /**
     * The `<wave>` element which is added to the container
     * @type {HTMLElement}
     */

    cov_1em1v5czwm().s[6]++;
    _this.wrapper = null;
    return _this;
  }
  /**
   * Alias of `util.style`
   *
   * @param {HTMLElement} el The element that the styles will be applied to
   * @param {Object} styles The map of propName: attribute, both are used as-is
   * @return {HTMLElement} el
   */


  _createClass(Drawer, [{
    key: "style",
    value: function style(el, styles) {
      cov_1em1v5czwm().f[1]++;
      cov_1em1v5czwm().s[7]++;
      return util.style(el, styles);
    }
    /**
     * Create the wrapper `<wave>` element, style it and set up the events for
     * interaction
     */

  }, {
    key: "createWrapper",
    value: function createWrapper() {
      cov_1em1v5czwm().f[2]++;
      cov_1em1v5czwm().s[8]++;
      this.wrapper = util.withOrientation(this.container.appendChild(document.createElement('wave')), this.params.vertical);
      cov_1em1v5czwm().s[9]++;
      this.style(this.wrapper, {
        display: 'block',
        position: 'relative',
        userSelect: 'none',
        webkitUserSelect: 'none',
        height: this.params.height + 'px'
      });
      cov_1em1v5czwm().s[10]++;

      if ((cov_1em1v5czwm().b[1][0]++, this.params.fillParent) || (cov_1em1v5czwm().b[1][1]++, this.params.scrollParent)) {
        cov_1em1v5czwm().b[0][0]++;
        cov_1em1v5czwm().s[11]++;
        this.style(this.wrapper, {
          width: '100%',
          cursor: this.params.hideCursor ? (cov_1em1v5czwm().b[2][0]++, 'none') : (cov_1em1v5czwm().b[2][1]++, 'auto'),
          overflowX: this.params.hideScrollbar ? (cov_1em1v5czwm().b[3][0]++, 'hidden') : (cov_1em1v5czwm().b[3][1]++, 'auto'),
          overflowY: 'hidden'
        });
      } else {
        cov_1em1v5czwm().b[0][1]++;
      }

      cov_1em1v5czwm().s[12]++;
      this.setupWrapperEvents();
    }
    /**
     * Handle click event
     *
     * @param {Event} e Click event
     * @param {?boolean} noPrevent Set to true to not call `e.preventDefault()`
     * @return {number} Playback position from 0 to 1
     */

  }, {
    key: "handleEvent",
    value: function handleEvent(e, noPrevent) {
      cov_1em1v5czwm().f[3]++;
      cov_1em1v5czwm().s[13]++;
      (cov_1em1v5czwm().b[4][0]++, !noPrevent) && (cov_1em1v5czwm().b[4][1]++, e.preventDefault());
      var clientX = (cov_1em1v5czwm().s[14]++, util.withOrientation(e.targetTouches ? (cov_1em1v5czwm().b[5][0]++, e.targetTouches[0]) : (cov_1em1v5czwm().b[5][1]++, e), this.params.vertical).clientX);
      var bbox = (cov_1em1v5czwm().s[15]++, this.wrapper.getBoundingClientRect());
      var nominalWidth = (cov_1em1v5czwm().s[16]++, this.width);
      var parentWidth = (cov_1em1v5czwm().s[17]++, this.getWidth());
      var progressPixels = (cov_1em1v5czwm().s[18]++, this.getProgressPixels(bbox, clientX));
      var progress;
      cov_1em1v5czwm().s[19]++;

      if ((cov_1em1v5czwm().b[7][0]++, !this.params.fillParent) && (cov_1em1v5czwm().b[7][1]++, nominalWidth < parentWidth)) {
        cov_1em1v5czwm().b[6][0]++;
        cov_1em1v5czwm().s[20]++;
        progress = (cov_1em1v5czwm().b[8][0]++, progressPixels * (this.params.pixelRatio / nominalWidth)) || (cov_1em1v5czwm().b[8][1]++, 0);
      } else {
        cov_1em1v5czwm().b[6][1]++;
        cov_1em1v5czwm().s[21]++;
        progress = (cov_1em1v5czwm().b[9][0]++, (progressPixels + this.wrapper.scrollLeft) / this.wrapper.scrollWidth) || (cov_1em1v5czwm().b[9][1]++, 0);
      }

      cov_1em1v5czwm().s[22]++;
      return util.clamp(progress, 0, 1);
    }
  }, {
    key: "getProgressPixels",
    value: function getProgressPixels(wrapperBbox, clientX) {
      cov_1em1v5czwm().f[4]++;
      cov_1em1v5czwm().s[23]++;

      if (this.params.rtl) {
        cov_1em1v5czwm().b[10][0]++;
        cov_1em1v5czwm().s[24]++;
        return wrapperBbox.right - clientX;
      } else {
        cov_1em1v5czwm().b[10][1]++;
        cov_1em1v5czwm().s[25]++;
        return clientX - wrapperBbox.left;
      }
    }
  }, {
    key: "setupWrapperEvents",
    value: function setupWrapperEvents() {
      var _this2 = this;

      cov_1em1v5czwm().f[5]++;
      cov_1em1v5czwm().s[26]++;
      this.wrapper.addEventListener('click', function (e) {
        cov_1em1v5czwm().f[6]++;
        var orientedEvent = (cov_1em1v5czwm().s[27]++, util.withOrientation(e, _this2.params.vertical));
        var scrollbarHeight = (cov_1em1v5czwm().s[28]++, _this2.wrapper.offsetHeight - _this2.wrapper.clientHeight);
        cov_1em1v5czwm().s[29]++;

        if (scrollbarHeight !== 0) {
          cov_1em1v5czwm().b[11][0]++;
          // scrollbar is visible.  Check if click was on it
          var bbox = (cov_1em1v5czwm().s[30]++, _this2.wrapper.getBoundingClientRect());
          cov_1em1v5czwm().s[31]++;

          if (orientedEvent.clientY >= bbox.bottom - scrollbarHeight) {
            cov_1em1v5czwm().b[12][0]++;
            cov_1em1v5czwm().s[32]++;
            // ignore mousedown as it was on the scrollbar
            return;
          } else {
            cov_1em1v5czwm().b[12][1]++;
          }
        } else {
          cov_1em1v5czwm().b[11][1]++;
        }

        cov_1em1v5czwm().s[33]++;

        if (_this2.params.interact) {
          cov_1em1v5czwm().b[13][0]++;
          cov_1em1v5czwm().s[34]++;

          _this2.fireEvent('click', e, _this2.handleEvent(e));
        } else {
          cov_1em1v5czwm().b[13][1]++;
        }
      });
      cov_1em1v5czwm().s[35]++;
      this.wrapper.addEventListener('dblclick', function (e) {
        cov_1em1v5czwm().f[7]++;
        cov_1em1v5czwm().s[36]++;

        if (_this2.params.interact) {
          cov_1em1v5czwm().b[14][0]++;
          cov_1em1v5czwm().s[37]++;

          _this2.fireEvent('dblclick', e, _this2.handleEvent(e));
        } else {
          cov_1em1v5czwm().b[14][1]++;
        }
      });
      cov_1em1v5czwm().s[38]++;
      this.wrapper.addEventListener('scroll', function (e) {
        cov_1em1v5czwm().f[8]++;
        cov_1em1v5czwm().s[39]++;
        return _this2.fireEvent('scroll', e);
      });
    }
    /**
     * Draw peaks on the canvas
     *
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
     * for split channel rendering
     * @param {number} length The width of the area that should be drawn
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that should be
     * rendered
     */

  }, {
    key: "drawPeaks",
    value: function drawPeaks(peaks, length, start, end) {
      cov_1em1v5czwm().f[9]++;
      cov_1em1v5czwm().s[40]++;

      if (!this.setWidth(length)) {
        cov_1em1v5czwm().b[15][0]++;
        cov_1em1v5czwm().s[41]++;
        this.clearWave();
      } else {
        cov_1em1v5czwm().b[15][1]++;
      }

      cov_1em1v5czwm().s[42]++;
      this.params.barWidth ? (cov_1em1v5czwm().b[16][0]++, this.drawBars(peaks, 0, start, end)) : (cov_1em1v5czwm().b[16][1]++, this.drawWave(peaks, 0, start, end));
    }
    /**
     * Scroll to the beginning
     */

  }, {
    key: "resetScroll",
    value: function resetScroll() {
      cov_1em1v5czwm().f[10]++;
      cov_1em1v5czwm().s[43]++;

      if (this.wrapper !== null) {
        cov_1em1v5czwm().b[17][0]++;
        cov_1em1v5czwm().s[44]++;
        this.wrapper.scrollLeft = 0;
      } else {
        cov_1em1v5czwm().b[17][1]++;
      }
    }
    /**
     * Recenter the view-port at a certain percent of the waveform
     *
     * @param {number} percent Value from 0 to 1 on the waveform
     */

  }, {
    key: "recenter",
    value: function recenter(percent) {
      cov_1em1v5czwm().f[11]++;
      var position = (cov_1em1v5czwm().s[45]++, this.wrapper.scrollWidth * percent);
      cov_1em1v5czwm().s[46]++;
      this.recenterOnPosition(position, true);
    }
    /**
     * Recenter the view-port on a position, either scroll there immediately or
     * in steps of 5 pixels
     *
     * @param {number} position X-offset in pixels
     * @param {boolean} immediate Set to true to immediately scroll somewhere
     */

  }, {
    key: "recenterOnPosition",
    value: function recenterOnPosition(position, immediate) {
      cov_1em1v5czwm().f[12]++;
      var scrollLeft = (cov_1em1v5czwm().s[47]++, this.wrapper.scrollLeft);
      var half = (cov_1em1v5czwm().s[48]++, ~~(this.wrapper.clientWidth / 2));
      var maxScroll = (cov_1em1v5czwm().s[49]++, this.wrapper.scrollWidth - this.wrapper.clientWidth);
      var target = (cov_1em1v5czwm().s[50]++, position - half);
      var offset = (cov_1em1v5czwm().s[51]++, target - scrollLeft);
      cov_1em1v5czwm().s[52]++;

      if (maxScroll == 0) {
        cov_1em1v5czwm().b[18][0]++;
        cov_1em1v5czwm().s[53]++;
        // no need to continue if scrollbar is not there
        return;
      } else {
        cov_1em1v5czwm().b[18][1]++;
      } // if the cursor is currently visible...


      cov_1em1v5czwm().s[54]++;

      if ((cov_1em1v5czwm().b[20][0]++, !immediate) && (cov_1em1v5czwm().b[20][1]++, -half <= offset) && (cov_1em1v5czwm().b[20][2]++, offset < half)) {
        cov_1em1v5czwm().b[19][0]++;
        // set rate at which waveform is centered
        var rate = (cov_1em1v5czwm().s[55]++, this.params.autoCenterRate); // make rate depend on width of view and length of waveform

        cov_1em1v5czwm().s[56]++;
        rate /= half;
        cov_1em1v5czwm().s[57]++;
        rate *= maxScroll;
        cov_1em1v5czwm().s[58]++;
        offset = Math.max(-rate, Math.min(rate, offset));
        cov_1em1v5czwm().s[59]++;
        target = scrollLeft + offset;
      } else {
        cov_1em1v5czwm().b[19][1]++;
      } // limit target to valid range (0 to maxScroll)


      cov_1em1v5czwm().s[60]++;
      target = Math.max(0, Math.min(maxScroll, target)); // no use attempting to scroll if we're not moving

      cov_1em1v5czwm().s[61]++;

      if (target != scrollLeft) {
        cov_1em1v5czwm().b[21][0]++;
        cov_1em1v5czwm().s[62]++;
        this.wrapper.scrollLeft = target;
      } else {
        cov_1em1v5czwm().b[21][1]++;
      }
    }
    /**
     * Get the current scroll position in pixels
     *
     * @return {number} Horizontal scroll position in pixels
     */

  }, {
    key: "getScrollX",
    value: function getScrollX() {
      cov_1em1v5czwm().f[13]++;
      var x = (cov_1em1v5czwm().s[63]++, 0);
      cov_1em1v5czwm().s[64]++;

      if (this.wrapper) {
        cov_1em1v5czwm().b[22][0]++;
        var pixelRatio = (cov_1em1v5czwm().s[65]++, this.params.pixelRatio);
        cov_1em1v5czwm().s[66]++;
        x = Math.round(this.wrapper.scrollLeft * pixelRatio); // In cases of elastic scroll (safari with mouse wheel) you can
        // scroll beyond the limits of the container
        // Calculate and floor the scrollable extent to make sure an out
        // of bounds value is not returned
        // Ticket #1312

        cov_1em1v5czwm().s[67]++;

        if (this.params.scrollParent) {
          cov_1em1v5czwm().b[23][0]++;
          var maxScroll = (cov_1em1v5czwm().s[68]++, ~~(this.wrapper.scrollWidth * pixelRatio - this.getWidth()));
          cov_1em1v5czwm().s[69]++;
          x = Math.min(maxScroll, Math.max(0, x));
        } else {
          cov_1em1v5czwm().b[23][1]++;
        }
      } else {
        cov_1em1v5czwm().b[22][1]++;
      }

      cov_1em1v5czwm().s[70]++;
      return x;
    }
    /**
     * Get the width of the container
     *
     * @return {number} The width of the container
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      cov_1em1v5czwm().f[14]++;
      cov_1em1v5czwm().s[71]++;
      return Math.round(this.container.clientWidth * this.params.pixelRatio);
    }
    /**
     * Set the width of the container
     *
     * @param {number} width The new width of the container
     * @return {boolean} Whether the width of the container was updated or not
     */

  }, {
    key: "setWidth",
    value: function setWidth(width) {
      cov_1em1v5czwm().f[15]++;
      cov_1em1v5czwm().s[72]++;

      if (this.width == width) {
        cov_1em1v5czwm().b[24][0]++;
        cov_1em1v5czwm().s[73]++;
        return false;
      } else {
        cov_1em1v5czwm().b[24][1]++;
      }

      cov_1em1v5czwm().s[74]++;
      this.width = width;
      cov_1em1v5czwm().s[75]++;

      if ((cov_1em1v5czwm().b[26][0]++, this.params.fillParent) || (cov_1em1v5czwm().b[26][1]++, this.params.scrollParent)) {
        cov_1em1v5czwm().b[25][0]++;
        cov_1em1v5czwm().s[76]++;
        this.style(this.wrapper, {
          width: ''
        });
      } else {
        cov_1em1v5czwm().b[25][1]++;
        var newWidth = (cov_1em1v5czwm().s[77]++, ~~(this.width / this.params.pixelRatio) + 'px');
        cov_1em1v5czwm().s[78]++;
        this.style(this.wrapper, {
          width: newWidth
        });
      }

      cov_1em1v5czwm().s[79]++;
      this.updateSize();
      cov_1em1v5czwm().s[80]++;
      return true;
    }
    /**
     * Set the height of the container
     *
     * @param {number} height The new height of the container.
     * @return {boolean} Whether the height of the container was updated or not
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      cov_1em1v5czwm().f[16]++;
      cov_1em1v5czwm().s[81]++;

      if (height == this.height) {
        cov_1em1v5czwm().b[27][0]++;
        cov_1em1v5czwm().s[82]++;
        return false;
      } else {
        cov_1em1v5czwm().b[27][1]++;
      }

      cov_1em1v5czwm().s[83]++;
      this.height = height;
      cov_1em1v5czwm().s[84]++;
      this.style(this.wrapper, {
        height: ~~(this.height / this.params.pixelRatio) + 'px'
      });
      cov_1em1v5czwm().s[85]++;
      this.updateSize();
      cov_1em1v5czwm().s[86]++;
      return true;
    }
    /**
     * Called by wavesurfer when progress should be rendered
     *
     * @param {number} progress From 0 to 1
     */

  }, {
    key: "progress",
    value: function progress(_progress) {
      cov_1em1v5czwm().f[17]++;
      var minPxDelta = (cov_1em1v5czwm().s[87]++, 1 / this.params.pixelRatio);
      var pos = (cov_1em1v5czwm().s[88]++, Math.round(_progress * this.width) * minPxDelta);
      cov_1em1v5czwm().s[89]++;

      if ((cov_1em1v5czwm().b[29][0]++, pos < this.lastPos) || (cov_1em1v5czwm().b[29][1]++, pos - this.lastPos >= minPxDelta)) {
        cov_1em1v5czwm().b[28][0]++;
        cov_1em1v5czwm().s[90]++;
        this.lastPos = pos;
        cov_1em1v5czwm().s[91]++;

        if ((cov_1em1v5czwm().b[31][0]++, this.params.scrollParent) && (cov_1em1v5czwm().b[31][1]++, this.params.autoCenter)) {
          cov_1em1v5czwm().b[30][0]++;
          var newPos = (cov_1em1v5czwm().s[92]++, ~~(this.wrapper.scrollWidth * _progress));
          cov_1em1v5czwm().s[93]++;
          this.recenterOnPosition(newPos, this.params.autoCenterImmediately);
        } else {
          cov_1em1v5czwm().b[30][1]++;
        }

        cov_1em1v5czwm().s[94]++;
        this.updateProgress(pos);
      } else {
        cov_1em1v5czwm().b[28][1]++;
      }
    }
    /**
     * This is called when wavesurfer is destroyed
     */

  }, {
    key: "destroy",
    value: function destroy() {
      cov_1em1v5czwm().f[18]++;
      cov_1em1v5czwm().s[95]++;
      this.unAll();
      cov_1em1v5czwm().s[96]++;

      if (this.wrapper) {
        cov_1em1v5czwm().b[32][0]++;
        cov_1em1v5czwm().s[97]++;

        if (this.wrapper.parentNode == this.container.domElement) {
          cov_1em1v5czwm().b[33][0]++;
          cov_1em1v5czwm().s[98]++;
          this.container.removeChild(this.wrapper.domElement);
        } else {
          cov_1em1v5czwm().b[33][1]++;
        }

        cov_1em1v5czwm().s[99]++;
        this.wrapper = null;
      } else {
        cov_1em1v5czwm().b[32][1]++;
      }
    }
    /* Renderer-specific methods */

    /**
     * Called after cursor related params have changed.
     *
     * @abstract
     */

  }, {
    key: "updateCursor",
    value: function updateCursor() {
      cov_1em1v5czwm().f[19]++;
    }
    /**
     * Called when the size of the container changes so the renderer can adjust
     *
     * @abstract
     */

  }, {
    key: "updateSize",
    value: function updateSize() {
      cov_1em1v5czwm().f[20]++;
    }
    /**
     * Draw a waveform with bars
     *
     * @abstract
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for split channel
     * rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that should be
     * rendered
     */

  }, {
    key: "drawBars",
    value: function drawBars(peaks, channelIndex, start, end) {
      cov_1em1v5czwm().f[21]++;
    }
    /**
     * Draw a waveform
     *
     * @abstract
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for split channel
     * rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that should be
     * rendered
     */

  }, {
    key: "drawWave",
    value: function drawWave(peaks, channelIndex, start, end) {
      cov_1em1v5czwm().f[22]++;
    }
    /**
     * Clear the waveform
     *
     * @abstract
     */

  }, {
    key: "clearWave",
    value: function clearWave() {
      cov_1em1v5czwm().f[23]++;
    }
    /**
     * Render the new progress
     *
     * @abstract
     * @param {number} position X-Offset of progress position in pixels
     */

  }, {
    key: "updateProgress",
    value: function updateProgress(position) {
      cov_1em1v5czwm().f[24]++;
    }
  }]);

  return Drawer;
}((util.Observer));

exports["default"] = Drawer;
module.exports = exports.default;

/***/ }),

/***/ "./src/drawer.multicanvas.js":
/*!***********************************!*\
  !*** ./src/drawer.multicanvas.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _drawer = _interopRequireDefault(__webpack_require__(/*! ./drawer */ "./src/drawer.js"));

var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));

var _drawer2 = _interopRequireDefault(__webpack_require__(/*! ./drawer.canvasentry */ "./src/drawer.canvasentry.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_24le79ckgu() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/drawer.multicanvas.js";
  var hash = "cd7435fea4865dbc2b795162b9f8a439013645ca";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/drawer.multicanvas.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 33
        }
      },
      "1": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 52
        }
      },
      "2": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 30,
          column: 10
        }
      },
      "3": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 74
        }
      },
      "4": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 49
        }
      },
      "5": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 27
        }
      },
      "6": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 55,
          column: 33
        }
      },
      "7": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 62,
          column: 38
        }
      },
      "8": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 71
        }
      },
      "9": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 60
        }
      },
      "10": {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 84,
          column: 47
        }
      },
      "11": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 91,
          column: 40
        }
      },
      "12": {
        start: {
          line: 98,
          column: 8
        },
        end: {
          line: 98,
          column: 29
        }
      },
      "13": {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 99,
          column: 30
        }
      },
      "14": {
        start: {
          line: 107,
          column: 8
        },
        end: {
          line: 110,
          column: 10
        }
      },
      "15": {
        start: {
          line: 111,
          column: 8
        },
        end: {
          line: 123,
          column: 11
        }
      },
      "16": {
        start: {
          line: 125,
          column: 8
        },
        end: {
          line: 125,
          column: 25
        }
      },
      "17": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 126,
          column: 28
        }
      },
      "18": {
        start: {
          line: 133,
          column: 8
        },
        end: {
          line: 136,
          column: 11
        }
      },
      "19": {
        start: {
          line: 143,
          column: 27
        },
        end: {
          line: 143,
          column: 74
        }
      },
      "20": {
        start: {
          line: 144,
          column: 33
        },
        end: {
          line: 146,
          column: 9
        }
      },
      "21": {
        start: {
          line: 149,
          column: 8
        },
        end: {
          line: 151,
          column: 9
        }
      },
      "22": {
        start: {
          line: 150,
          column: 12
        },
        end: {
          line: 150,
          column: 29
        }
      },
      "23": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 156,
          column: 9
        }
      },
      "24": {
        start: {
          line: 155,
          column: 12
        },
        end: {
          line: 155,
          column: 32
        }
      },
      "25": {
        start: {
          line: 158,
          column: 26
        },
        end: {
          line: 158,
          column: 60
        }
      },
      "26": {
        start: {
          line: 159,
          column: 27
        },
        end: {
          line: 159,
          column: 51
        }
      },
      "27": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 167,
          column: 11
        }
      },
      "28": {
        start: {
          line: 161,
          column: 12
        },
        end: {
          line: 163,
          column: 13
        }
      },
      "29": {
        start: {
          line: 162,
          column: 16
        },
        end: {
          line: 162,
          column: 76
        }
      },
      "30": {
        start: {
          line: 164,
          column: 12
        },
        end: {
          line: 164,
          column: 67
        }
      },
      "31": {
        start: {
          line: 166,
          column: 12
        },
        end: {
          line: 166,
          column: 30
        }
      },
      "32": {
        start: {
          line: 175,
          column: 22
        },
        end: {
          line: 175,
          column: 43
        }
      },
      "33": {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 176,
          column: 69
        }
      },
      "34": {
        start: {
          line: 177,
          column: 8
        },
        end: {
          line: 177,
          column: 57
        }
      },
      "35": {
        start: {
          line: 178,
          column: 8
        },
        end: {
          line: 178,
          column: 41
        }
      },
      "36": {
        start: {
          line: 179,
          column: 27
        },
        end: {
          line: 179,
          column: 76
        }
      },
      "37": {
        start: {
          line: 182,
          column: 19
        },
        end: {
          line: 185,
          column: 9
        }
      },
      "38": {
        start: {
          line: 186,
          column: 8
        },
        end: {
          line: 194,
          column: 11
        }
      },
      "39": {
        start: {
          line: 195,
          column: 8
        },
        end: {
          line: 195,
          column: 29
        }
      },
      "40": {
        start: {
          line: 198,
          column: 8
        },
        end: {
          line: 211,
          column: 9
        }
      },
      "41": {
        start: {
          line: 199,
          column: 27
        },
        end: {
          line: 202,
          column: 13
        }
      },
      "42": {
        start: {
          line: 203,
          column: 12
        },
        end: {
          line: 209,
          column: 15
        }
      },
      "43": {
        start: {
          line: 210,
          column: 12
        },
        end: {
          line: 210,
          column: 41
        }
      },
      "44": {
        start: {
          line: 213,
          column: 8
        },
        end: {
          line: 213,
          column: 34
        }
      },
      "45": {
        start: {
          line: 221,
          column: 24
        },
        end: {
          line: 221,
          column: 63
        }
      },
      "46": {
        start: {
          line: 224,
          column: 8
        },
        end: {
          line: 224,
          column: 76
        }
      },
      "47": {
        start: {
          line: 227,
          column: 8
        },
        end: {
          line: 229,
          column: 9
        }
      },
      "48": {
        start: {
          line: 228,
          column: 12
        },
        end: {
          line: 228,
          column: 88
        }
      },
      "49": {
        start: {
          line: 232,
          column: 8
        },
        end: {
          line: 235,
          column: 9
        }
      },
      "50": {
        start: {
          line: 233,
          column: 12
        },
        end: {
          line: 233,
          column: 32
        }
      },
      "51": {
        start: {
          line: 234,
          column: 12
        },
        end: {
          line: 234,
          column: 29
        }
      },
      "52": {
        start: {
          line: 237,
          column: 8
        },
        end: {
          line: 237,
          column: 28
        }
      },
      "53": {
        start: {
          line: 248,
          column: 29
        },
        end: {
          line: 248,
          column: 71
        }
      },
      "54": {
        start: {
          line: 249,
          column: 27
        },
        end: {
          line: 249,
          column: 74
        }
      },
      "55": {
        start: {
          line: 252,
          column: 8
        },
        end: {
          line: 252,
          column: 72
        }
      },
      "56": {
        start: {
          line: 255,
          column: 8
        },
        end: {
          line: 255,
          column: 60
        }
      },
      "57": {
        start: {
          line: 262,
          column: 8
        },
        end: {
          line: 264,
          column: 13
        }
      },
      "58": {
        start: {
          line: 263,
          column: 12
        },
        end: {
          line: 263,
          column: 62
        }
      },
      "59": {
        start: {
          line: 263,
          column: 43
        },
        end: {
          line: 263,
          column: 60
        }
      },
      "60": {
        start: {
          line: 281,
          column: 8
        },
        end: {
          line: 342,
          column: 10
        }
      },
      "61": {
        start: {
          line: 289,
          column: 16
        },
        end: {
          line: 291,
          column: 17
        }
      },
      "62": {
        start: {
          line: 290,
          column: 20
        },
        end: {
          line: 290,
          column: 27
        }
      },
      "63": {
        start: {
          line: 293,
          column: 39
        },
        end: {
          line: 293,
          column: 57
        }
      },
      "64": {
        start: {
          line: 294,
          column: 31
        },
        end: {
          line: 294,
          column: 60
        }
      },
      "65": {
        start: {
          line: 295,
          column: 28
        },
        end: {
          line: 295,
          column: 73
        }
      },
      "66": {
        start: {
          line: 297,
          column: 20
        },
        end: {
          line: 302,
          column: 25
        }
      },
      "67": {
        start: {
          line: 303,
          column: 29
        },
        end: {
          line: 303,
          column: 38
        }
      },
      "68": {
        start: {
          line: 305,
          column: 30
        },
        end: {
          line: 305,
          column: 49
        }
      },
      "69": {
        start: {
          line: 306,
          column: 30
        },
        end: {
          line: 306,
          column: 35
        }
      },
      "70": {
        start: {
          line: 307,
          column: 29
        },
        end: {
          line: 307,
          column: 32
        }
      },
      "71": {
        start: {
          line: 308,
          column: 32
        },
        end: {
          line: 308,
          column: 37
        }
      },
      "72": {
        start: {
          line: 309,
          column: 16
        },
        end: {
          line: 340,
          column: 17
        }
      },
      "73": {
        start: {
          line: 312,
          column: 31
        },
        end: {
          line: 312,
          column: 32
        }
      },
      "74": {
        start: {
          line: 313,
          column: 41
        },
        end: {
          line: 313,
          column: 87
        }
      },
      "75": {
        start: {
          line: 314,
          column: 41
        },
        end: {
          line: 314,
          column: 96
        }
      },
      "76": {
        start: {
          line: 315,
          column: 20
        },
        end: {
          line: 321,
          column: 60
        }
      },
      "77": {
        start: {
          line: 316,
          column: 40
        },
        end: {
          line: 316,
          column: 71
        }
      },
      "78": {
        start: {
          line: 317,
          column: 24
        },
        end: {
          line: 319,
          column: 25
        }
      },
      "79": {
        start: {
          line: 318,
          column: 28
        },
        end: {
          line: 318,
          column: 43
        }
      },
      "80": {
        start: {
          line: 320,
          column: 24
        },
        end: {
          line: 320,
          column: 57
        }
      },
      "81": {
        start: {
          line: 324,
          column: 28
        },
        end: {
          line: 324,
          column: 63
        }
      },
      "82": {
        start: {
          line: 328,
          column: 20
        },
        end: {
          line: 330,
          column: 21
        }
      },
      "83": {
        start: {
          line: 329,
          column: 24
        },
        end: {
          line: 329,
          column: 53
        }
      },
      "84": {
        start: {
          line: 332,
          column: 20
        },
        end: {
          line: 339,
          column: 22
        }
      },
      "85": {
        start: {
          line: 359,
          column: 8
        },
        end: {
          line: 392,
          column: 10
        }
      },
      "86": {
        start: {
          line: 365,
          column: 16
        },
        end: {
          line: 374,
          column: 17
        }
      },
      "87": {
        start: {
          line: 366,
          column: 43
        },
        end: {
          line: 366,
          column: 45
        }
      },
      "88": {
        start: {
          line: 367,
          column: 32
        },
        end: {
          line: 367,
          column: 44
        }
      },
      "89": {
        start: {
          line: 368,
          column: 28
        },
        end: {
          line: 368,
          column: 29
        }
      },
      "90": {
        start: {
          line: 369,
          column: 20
        },
        end: {
          line: 372,
          column: 21
        }
      },
      "91": {
        start: {
          line: 370,
          column: 24
        },
        end: {
          line: 370,
          column: 57
        }
      },
      "92": {
        start: {
          line: 371,
          column: 24
        },
        end: {
          line: 371,
          column: 62
        }
      },
      "93": {
        start: {
          line: 373,
          column: 20
        },
        end: {
          line: 373,
          column: 43
        }
      },
      "94": {
        start: {
          line: 378,
          column: 16
        },
        end: {
          line: 380,
          column: 17
        }
      },
      "95": {
        start: {
          line: 379,
          column: 20
        },
        end: {
          line: 379,
          column: 91
        }
      },
      "96": {
        start: {
          line: 383,
          column: 16
        },
        end: {
          line: 390,
          column: 18
        }
      },
      "97": {
        start: {
          line: 409,
          column: 45
        },
        end: {
          line: 409,
          column: 111
        }
      },
      "98": {
        start: {
          line: 410,
          column: 8
        },
        end: {
          line: 414,
          column: 11
        }
      },
      "99": {
        start: {
          line: 411,
          column: 12
        },
        end: {
          line: 411,
          column: 64
        }
      },
      "100": {
        start: {
          line: 412,
          column: 12
        },
        end: {
          line: 412,
          column: 68
        }
      },
      "101": {
        start: {
          line: 413,
          column: 12
        },
        end: {
          line: 413,
          column: 71
        }
      },
      "102": {
        start: {
          line: 428,
          column: 28
        },
        end: {
          line: 428,
          column: 63
        }
      },
      "103": {
        start: {
          line: 429,
          column: 26
        },
        end: {
          line: 432,
          column: 9
        }
      },
      "104": {
        start: {
          line: 433,
          column: 16
        },
        end: {
          line: 433,
          column: 27
        }
      },
      "105": {
        start: {
          line: 434,
          column: 8
        },
        end: {
          line: 461,
          column: 9
        }
      },
      "106": {
        start: {
          line: 435,
          column: 26
        },
        end: {
          line: 435,
          column: 42
        }
      },
      "107": {
        start: {
          line: 436,
          column: 31
        },
        end: {
          line: 436,
          column: 54
        }
      },
      "108": {
        start: {
          line: 438,
          column: 33
        },
        end: {
          line: 446,
          column: 13
        }
      },
      "109": {
        start: {
          line: 448,
          column: 12
        },
        end: {
          line: 460,
          column: 13
        }
      },
      "110": {
        start: {
          line: 449,
          column: 53
        },
        end: {
          line: 449,
          column: 119
        }
      },
      "111": {
        start: {
          line: 450,
          column: 16
        },
        end: {
          line: 450,
          column: 68
        }
      },
      "112": {
        start: {
          line: 451,
          column: 16
        },
        end: {
          line: 451,
          column: 72
        }
      },
      "113": {
        start: {
          line: 453,
          column: 16
        },
        end: {
          line: 459,
          column: 18
        }
      },
      "114": {
        start: {
          line: 471,
          column: 8
        },
        end: {
          line: 471,
          column: 115
        }
      },
      "115": {
        start: {
          line: 492,
          column: 8
        },
        end: {
          line: 556,
          column: 13
        }
      },
      "116": {
        start: {
          line: 494,
          column: 12
        },
        end: {
          line: 519,
          column: 13
        }
      },
      "117": {
        start: {
          line: 495,
          column: 33
        },
        end: {
          line: 495,
          column: 38
        }
      },
      "118": {
        start: {
          line: 497,
          column: 16
        },
        end: {
          line: 517,
          column: 17
        }
      },
      "119": {
        start: {
          line: 498,
          column: 45
        },
        end: {
          line: 498,
          column: 92
        }
      },
      "120": {
        start: {
          line: 498,
          column: 71
        },
        end: {
          line: 498,
          column: 91
        }
      },
      "121": {
        start: {
          line: 499,
          column: 20
        },
        end: {
          line: 505,
          column: 21
        }
      },
      "122": {
        start: {
          line: 500,
          column: 24
        },
        end: {
          line: 504,
          column: 26
        }
      },
      "123": {
        start: {
          line: 508,
          column: 20
        },
        end: {
          line: 511,
          column: 21
        }
      },
      "124": {
        start: {
          line: 510,
          column: 24
        },
        end: {
          line: 510,
          column: 108
        }
      },
      "125": {
        start: {
          line: 510,
          column: 79
        },
        end: {
          line: 510,
          column: 104
        }
      },
      "126": {
        start: {
          line: 514,
          column: 20
        },
        end: {
          line: 516,
          column: 22
        }
      },
      "127": {
        start: {
          line: 515,
          column: 24
        },
        end: {
          line: 515,
          column: 128
        }
      },
      "128": {
        start: {
          line: 518,
          column: 16
        },
        end: {
          line: 518,
          column: 36
        }
      },
      "129": {
        start: {
          line: 522,
          column: 12
        },
        end: {
          line: 524,
          column: 13
        }
      },
      "130": {
        start: {
          line: 523,
          column: 16
        },
        end: {
          line: 523,
          column: 23
        }
      },
      "131": {
        start: {
          line: 529,
          column: 25
        },
        end: {
          line: 529,
          column: 50
        }
      },
      "132": {
        start: {
          line: 530,
          column: 12
        },
        end: {
          line: 532,
          column: 13
        }
      },
      "133": {
        start: {
          line: 531,
          column: 16
        },
        end: {
          line: 531,
          column: 90
        }
      },
      "134": {
        start: {
          line: 536,
          column: 31
        },
        end: {
          line: 536,
          column: 66
        }
      },
      "135": {
        start: {
          line: 536,
          column: 58
        },
        end: {
          line: 536,
          column: 65
        }
      },
      "136": {
        start: {
          line: 537,
          column: 27
        },
        end: {
          line: 537,
          column: 70
        }
      },
      "137": {
        start: {
          line: 538,
          column: 26
        },
        end: {
          line: 538,
          column: 36
        }
      },
      "138": {
        start: {
          line: 540,
          column: 26
        },
        end: {
          line: 540,
          column: 49
        }
      },
      "139": {
        start: {
          line: 543,
          column: 12
        },
        end: {
          line: 545,
          column: 13
        }
      },
      "140": {
        start: {
          line: 544,
          column: 16
        },
        end: {
          line: 544,
          column: 28
        }
      },
      "141": {
        start: {
          line: 547,
          column: 12
        },
        end: {
          line: 555,
          column: 15
        }
      },
      "142": {
        start: {
          line: 567,
          column: 8
        },
        end: {
          line: 567,
          column: 54
        }
      },
      "143": {
        start: {
          line: 577,
          column: 8
        },
        end: {
          line: 577,
          column: 46
        }
      },
      "144": {
        start: {
          line: 595,
          column: 8
        },
        end: {
          line: 606,
          column: 9
        }
      },
      "145": {
        start: {
          line: 596,
          column: 12
        },
        end: {
          line: 600,
          column: 14
        }
      },
      "146": {
        start: {
          line: 598,
          column: 20
        },
        end: {
          line: 598,
          column: 65
        }
      },
      "147": {
        start: {
          line: 601,
          column: 15
        },
        end: {
          line: 606,
          column: 9
        }
      },
      "148": {
        start: {
          line: 602,
          column: 25
        },
        end: {
          line: 604,
          column: 13
        }
      },
      "149": {
        start: {
          line: 603,
          column: 16
        },
        end: {
          line: 603,
          column: 53
        }
      },
      "150": {
        start: {
          line: 605,
          column: 12
        },
        end: {
          line: 605,
          column: 58
        }
      },
      "151": {
        start: {
          line: 615,
          column: 8
        },
        end: {
          line: 615,
          column: 66
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 35
          },
          end: {
            line: 92,
            column: 5
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 5
          }
        },
        loc: {
          start: {
            line: 97,
            column: 11
          },
          end: {
            line: 100,
            column: 5
          }
        },
        line: 97
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 5
          }
        },
        loc: {
          start: {
            line: 106,
            column: 21
          },
          end: {
            line: 127,
            column: 5
          }
        },
        line: 106
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        },
        loc: {
          start: {
            line: 132,
            column: 19
          },
          end: {
            line: 137,
            column: 5
          }
        },
        line: 132
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 142,
            column: 5
          }
        },
        loc: {
          start: {
            line: 142,
            column: 17
          },
          end: {
            line: 168,
            column: 5
          }
        },
        line: 142
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 160,
            column: 30
          },
          end: {
            line: 160,
            column: 31
          }
        },
        loc: {
          start: {
            line: 160,
            column: 44
          },
          end: {
            line: 167,
            column: 9
          }
        },
        line: 160
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        },
        loc: {
          start: {
            line: 174,
            column: 16
          },
          end: {
            line: 214,
            column: 5
          }
        },
        line: 174
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 220,
            column: 5
          }
        },
        loc: {
          start: {
            line: 220,
            column: 19
          },
          end: {
            line: 238,
            column: 5
          }
        },
        line: 220
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 247,
            column: 4
          },
          end: {
            line: 247,
            column: 5
          }
        },
        loc: {
          start: {
            line: 247,
            column: 43
          },
          end: {
            line: 256,
            column: 5
          }
        },
        line: 247
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 261,
            column: 5
          }
        },
        loc: {
          start: {
            line: 261,
            column: 16
          },
          end: {
            line: 265,
            column: 5
          }
        },
        line: 261
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 262,
            column: 19
          },
          end: {
            line: 262,
            column: 20
          }
        },
        loc: {
          start: {
            line: 262,
            column: 25
          },
          end: {
            line: 264,
            column: 9
          }
        },
        line: 262
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 263,
            column: 34
          },
          end: {
            line: 263,
            column: 35
          }
        },
        loc: {
          start: {
            line: 263,
            column: 43
          },
          end: {
            line: 263,
            column: 60
          }
        },
        line: 263
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 280,
            column: 4
          },
          end: {
            line: 280,
            column: 5
          }
        },
        loc: {
          start: {
            line: 280,
            column: 46
          },
          end: {
            line: 343,
            column: 5
          }
        },
        line: 280
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 286,
            column: 12
          },
          end: {
            line: 286,
            column: 13
          }
        },
        loc: {
          start: {
            line: 286,
            column: 89
          },
          end: {
            line: 341,
            column: 13
          }
        },
        line: 286
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 358,
            column: 5
          }
        },
        loc: {
          start: {
            line: 358,
            column: 46
          },
          end: {
            line: 393,
            column: 5
          }
        },
        line: 358
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 364,
            column: 12
          },
          end: {
            line: 364,
            column: 13
          }
        },
        loc: {
          start: {
            line: 364,
            column: 85
          },
          end: {
            line: 391,
            column: 13
          }
        },
        line: 364
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 408,
            column: 4
          },
          end: {
            line: 408,
            column: 5
          }
        },
        loc: {
          start: {
            line: 408,
            column: 70
          },
          end: {
            line: 415,
            column: 5
          }
        },
        line: 408
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 410,
            column: 30
          },
          end: {
            line: 410,
            column: 31
          }
        },
        loc: {
          start: {
            line: 410,
            column: 44
          },
          end: {
            line: 414,
            column: 9
          }
        },
        line: 410
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 427,
            column: 4
          },
          end: {
            line: 427,
            column: 5
          }
        },
        loc: {
          start: {
            line: 427,
            column: 56
          },
          end: {
            line: 462,
            column: 5
          }
        },
        line: 427
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 470,
            column: 4
          },
          end: {
            line: 470,
            column: 5
          }
        },
        loc: {
          start: {
            line: 470,
            column: 30
          },
          end: {
            line: 472,
            column: 5
          }
        },
        line: 470
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 491,
            column: 4
          },
          end: {
            line: 491,
            column: 5
          }
        },
        loc: {
          start: {
            line: 491,
            column: 79
          },
          end: {
            line: 557,
            column: 5
          }
        },
        line: 491
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 492,
            column: 26
          },
          end: {
            line: 492,
            column: 27
          }
        },
        loc: {
          start: {
            line: 492,
            column: 32
          },
          end: {
            line: 556,
            column: 9
          }
        },
        line: 492
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 498,
            column: 61
          },
          end: {
            line: 498,
            column: 62
          }
        },
        loc: {
          start: {
            line: 498,
            column: 71
          },
          end: {
            line: 498,
            column: 91
          }
        },
        line: 498
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 510,
            column: 63
          },
          end: {
            line: 510,
            column: 64
          }
        },
        loc: {
          start: {
            line: 510,
            column: 79
          },
          end: {
            line: 510,
            column: 104
          }
        },
        line: 510
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 514,
            column: 44
          },
          end: {
            line: 514,
            column: 45
          }
        },
        loc: {
          start: {
            line: 515,
            column: 24
          },
          end: {
            line: 515,
            column: 128
          }
        },
        line: 515
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 536,
            column: 51
          },
          end: {
            line: 536,
            column: 52
          }
        },
        loc: {
          start: {
            line: 536,
            column: 58
          },
          end: {
            line: 536,
            column: 65
          }
        },
        line: 536
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 566,
            column: 4
          },
          end: {
            line: 566,
            column: 5
          }
        },
        loc: {
          start: {
            line: 566,
            column: 103
          },
          end: {
            line: 568,
            column: 5
          }
        },
        line: 566
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 576,
            column: 4
          },
          end: {
            line: 576,
            column: 5
          }
        },
        loc: {
          start: {
            line: 576,
            column: 51
          },
          end: {
            line: 578,
            column: 5
          }
        },
        line: 576
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 594,
            column: 4
          },
          end: {
            line: 594,
            column: 5
          }
        },
        loc: {
          start: {
            line: 594,
            column: 36
          },
          end: {
            line: 607,
            column: 5
          }
        },
        line: 594
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 597,
            column: 34
          },
          end: {
            line: 597,
            column: 35
          }
        },
        loc: {
          start: {
            line: 597,
            column: 43
          },
          end: {
            line: 599,
            column: 17
          }
        },
        line: 597
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 602,
            column: 43
          },
          end: {
            line: 602,
            column: 44
          }
        },
        loc: {
          start: {
            line: 603,
            column: 16
          },
          end: {
            line: 603,
            column: 53
          }
        },
        line: 603
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 614,
            column: 4
          },
          end: {
            line: 614,
            column: 5
          }
        },
        loc: {
          start: {
            line: 614,
            column: 29
          },
          end: {
            line: 616,
            column: 5
          }
        },
        line: 614
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 84,
            column: 25
          },
          end: {
            line: 84,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 84,
            column: 25
          },
          end: {
            line: 84,
            column: 41
          }
        }, {
          start: {
            line: 84,
            column: 45
          },
          end: {
            line: 84,
            column: 46
          }
        }],
        line: 84
      },
      "1": {
        loc: {
          start: {
            line: 161,
            column: 12
          },
          end: {
            line: 163,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 161,
            column: 12
          },
          end: {
            line: 163,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 161
      },
      "2": {
        loc: {
          start: {
            line: 198,
            column: 8
          },
          end: {
            line: 211,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 198,
            column: 8
          },
          end: {
            line: 211,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 198
      },
      "3": {
        loc: {
          start: {
            line: 227,
            column: 8
          },
          end: {
            line: 229,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 227,
            column: 8
          },
          end: {
            line: 229,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 227
      },
      "4": {
        loc: {
          start: {
            line: 232,
            column: 8
          },
          end: {
            line: 235,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 232,
            column: 8
          },
          end: {
            line: 235,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 232
      },
      "5": {
        loc: {
          start: {
            line: 289,
            column: 16
          },
          end: {
            line: 291,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 289,
            column: 16
          },
          end: {
            line: 291,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 289
      },
      "6": {
        loc: {
          start: {
            line: 293,
            column: 39
          },
          end: {
            line: 293,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 293,
            column: 52
          },
          end: {
            line: 293,
            column: 53
          }
        }, {
          start: {
            line: 293,
            column: 56
          },
          end: {
            line: 293,
            column: 57
          }
        }],
        line: 293
      },
      "7": {
        loc: {
          start: {
            line: 297,
            column: 20
          },
          end: {
            line: 302,
            column: 25
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 298,
            column: 26
          },
          end: {
            line: 298,
            column: 71
          }
        }, {
          start: {
            line: 299,
            column: 26
          },
          end: {
            line: 302,
            column: 25
          }
        }],
        line: 297
      },
      "8": {
        loc: {
          start: {
            line: 317,
            column: 24
          },
          end: {
            line: 319,
            column: 25
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 317,
            column: 24
          },
          end: {
            line: 319,
            column: 25
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 317
      },
      "9": {
        loc: {
          start: {
            line: 328,
            column: 20
          },
          end: {
            line: 330,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 328,
            column: 20
          },
          end: {
            line: 330,
            column: 21
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 328
      },
      "10": {
        loc: {
          start: {
            line: 328,
            column: 24
          },
          end: {
            line: 328,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 328,
            column: 24
          },
          end: {
            line: 328,
            column: 30
          }
        }, {
          start: {
            line: 328,
            column: 34
          },
          end: {
            line: 328,
            column: 58
          }
        }],
        line: 328
      },
      "11": {
        loc: {
          start: {
            line: 365,
            column: 16
          },
          end: {
            line: 374,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 365,
            column: 16
          },
          end: {
            line: 374,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 365
      },
      "12": {
        loc: {
          start: {
            line: 378,
            column: 16
          },
          end: {
            line: 380,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 378,
            column: 16
          },
          end: {
            line: 380,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 378
      },
      "13": {
        loc: {
          start: {
            line: 409,
            column: 45
          },
          end: {
            line: 409,
            column: 111
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 409,
            column: 45
          },
          end: {
            line: 409,
            column: 105
          }
        }, {
          start: {
            line: 409,
            column: 109
          },
          end: {
            line: 409,
            column: 111
          }
        }],
        line: 409
      },
      "14": {
        loc: {
          start: {
            line: 448,
            column: 12
          },
          end: {
            line: 460,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 448,
            column: 12
          },
          end: {
            line: 460,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 448
      },
      "15": {
        loc: {
          start: {
            line: 449,
            column: 53
          },
          end: {
            line: 449,
            column: 119
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 449,
            column: 53
          },
          end: {
            line: 449,
            column: 113
          }
        }, {
          start: {
            line: 449,
            column: 117
          },
          end: {
            line: 449,
            column: 119
          }
        }],
        line: 449
      },
      "16": {
        loc: {
          start: {
            line: 471,
            column: 15
          },
          end: {
            line: 471,
            column: 114
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 471,
            column: 15
          },
          end: {
            line: 471,
            column: 40
          }
        }, {
          start: {
            line: 471,
            column: 44
          },
          end: {
            line: 471,
            column: 114
          }
        }],
        line: 471
      },
      "17": {
        loc: {
          start: {
            line: 494,
            column: 12
          },
          end: {
            line: 519,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 494,
            column: 12
          },
          end: {
            line: 519,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 494
      },
      "18": {
        loc: {
          start: {
            line: 497,
            column: 16
          },
          end: {
            line: 517,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 497,
            column: 16
          },
          end: {
            line: 517,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 497
      },
      "19": {
        loc: {
          start: {
            line: 499,
            column: 20
          },
          end: {
            line: 505,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 499,
            column: 20
          },
          end: {
            line: 505,
            column: 21
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 499
      },
      "20": {
        loc: {
          start: {
            line: 508,
            column: 20
          },
          end: {
            line: 511,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 508,
            column: 20
          },
          end: {
            line: 511,
            column: 21
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 508
      },
      "21": {
        loc: {
          start: {
            line: 508,
            column: 24
          },
          end: {
            line: 508,
            column: 114
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 508,
            column: 24
          },
          end: {
            line: 508,
            column: 56
          }
        }, {
          start: {
            line: 508,
            column: 60
          },
          end: {
            line: 508,
            column: 114
          }
        }],
        line: 508
      },
      "22": {
        loc: {
          start: {
            line: 522,
            column: 12
          },
          end: {
            line: 524,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 522,
            column: 12
          },
          end: {
            line: 524,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 522
      },
      "23": {
        loc: {
          start: {
            line: 530,
            column: 12
          },
          end: {
            line: 532,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 530,
            column: 12
          },
          end: {
            line: 532,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 530
      },
      "24": {
        loc: {
          start: {
            line: 531,
            column: 25
          },
          end: {
            line: 531,
            column: 89
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 531,
            column: 55
          },
          end: {
            line: 531,
            column: 73
          }
        }, {
          start: {
            line: 531,
            column: 76
          },
          end: {
            line: 531,
            column: 89
          }
        }],
        line: 531
      },
      "25": {
        loc: {
          start: {
            line: 540,
            column: 26
          },
          end: {
            line: 540,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 540,
            column: 26
          },
          end: {
            line: 540,
            column: 44
          }
        }, {
          start: {
            line: 540,
            column: 48
          },
          end: {
            line: 540,
            column: 49
          }
        }],
        line: 540
      },
      "26": {
        loc: {
          start: {
            line: 543,
            column: 12
          },
          end: {
            line: 545,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 543,
            column: 12
          },
          end: {
            line: 545,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 543
      },
      "27": {
        loc: {
          start: {
            line: 543,
            column: 16
          },
          end: {
            line: 543,
            column: 92
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 543,
            column: 16
          },
          end: {
            line: 543,
            column: 48
          }
        }, {
          start: {
            line: 543,
            column: 52
          },
          end: {
            line: 543,
            column: 92
          }
        }],
        line: 543
      },
      "28": {
        loc: {
          start: {
            line: 566,
            column: 25
          },
          end: {
            line: 566,
            column: 58
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 566,
            column: 37
          },
          end: {
            line: 566,
            column: 58
          }
        }],
        line: 566
      },
      "29": {
        loc: {
          start: {
            line: 566,
            column: 60
          },
          end: {
            line: 566,
            column: 101
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 566,
            column: 76
          },
          end: {
            line: 566,
            column: 101
          }
        }],
        line: 566
      },
      "30": {
        loc: {
          start: {
            line: 576,
            column: 33
          },
          end: {
            line: 576,
            column: 49
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 576,
            column: 44
          },
          end: {
            line: 576,
            column: 49
          }
        }],
        line: 576
      },
      "31": {
        loc: {
          start: {
            line: 595,
            column: 8
          },
          end: {
            line: 606,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 595,
            column: 8
          },
          end: {
            line: 606,
            column: 9
          }
        }, {
          start: {
            line: 601,
            column: 15
          },
          end: {
            line: 606,
            column: 9
          }
        }],
        line: 595
      },
      "32": {
        loc: {
          start: {
            line: 601,
            column: 15
          },
          end: {
            line: 606,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 601,
            column: 15
          },
          end: {
            line: 606,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 601
      },
      "33": {
        loc: {
          start: {
            line: 605,
            column: 19
          },
          end: {
            line: 605,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 605,
            column: 39
          },
          end: {
            line: 605,
            column: 45
          }
        }, {
          start: {
            line: 605,
            column: 48
          },
          end: {
            line: 605,
            column: 57
          }
        }],
        line: 605
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0],
      "29": [0],
      "30": [0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cd7435fea4865dbc2b795162b9f8a439013645ca"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_24le79ckgu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_24le79ckgu();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * MultiCanvas renderer for wavesurfer. Is currently the default and sole
 * builtin renderer.
 *
 * A `MultiCanvas` consists of one or more `CanvasEntry` instances, depending
 * on the zoom level.
 */
var MultiCanvas = /*#__PURE__*/function (_Drawer) {
  _inherits(MultiCanvas, _Drawer);

  var _super = _createSuper(MultiCanvas);

  /**
   * @param {HTMLElement} container The container node of the wavesurfer instance
   * @param {WavesurferParams} params The wavesurfer initialisation options
   */
  function MultiCanvas(container, params) {
    var _this;

    _classCallCheck(this, MultiCanvas);

    cov_24le79ckgu().f[0]++;
    cov_24le79ckgu().s[0]++;
    _this = _super.call(this, container, params);
    /**
     * @type {number}
     */

    cov_24le79ckgu().s[1]++;
    _this.maxCanvasWidth = params.maxCanvasWidth;
    /**
     * @type {number}
     */

    cov_24le79ckgu().s[2]++;
    _this.maxCanvasElementWidth = Math.round(params.maxCanvasWidth / params.pixelRatio);
    /**
     * Whether or not the progress wave is rendered. If the `waveColor`
     * and `progressColor` are the same color it is not.
     *
     * @type {boolean}
     */

    cov_24le79ckgu().s[3]++;
    _this.hasProgressCanvas = params.waveColor != params.progressColor;
    /**
     * @type {number}
     */

    cov_24le79ckgu().s[4]++;
    _this.halfPixel = 0.5 / params.pixelRatio;
    /**
     * List of `CanvasEntry` instances.
     *
     * @type {Array}
     */

    cov_24le79ckgu().s[5]++;
    _this.canvases = [];
    /**
     * @type {HTMLElement}
     */

    cov_24le79ckgu().s[6]++;
    _this.progressWave = null;
    /**
     * Class used to generate entries.
     *
     * @type {function}
     */

    cov_24le79ckgu().s[7]++;
    _this.EntryClass = _drawer2.default;
    /**
     * Canvas 2d context attributes.
     *
     * @type {object}
     */

    cov_24le79ckgu().s[8]++;
    _this.canvasContextAttributes = params.drawingContextAttributes;
    /**
     * Overlap added between entries to prevent vertical white stripes
     * between `canvas` elements.
     *
     * @type {number}
     */

    cov_24le79ckgu().s[9]++;
    _this.overlap = 2 * Math.ceil(params.pixelRatio / 2);
    /**
     * The radius of the wave bars. Makes bars rounded
     *
     * @type {number}
     */

    cov_24le79ckgu().s[10]++;
    _this.barRadius = (cov_24le79ckgu().b[0][0]++, params.barRadius) || (cov_24le79ckgu().b[0][1]++, 0);
    /**
     * Whether to render the waveform vertically. Defaults to false.
     *
     * @type {boolean}
     */

    cov_24le79ckgu().s[11]++;
    _this.vertical = params.vertical;
    return _this;
  }
  /**
   * Initialize the drawer
   */


  _createClass(MultiCanvas, [{
    key: "init",
    value: function init() {
      cov_24le79ckgu().f[1]++;
      cov_24le79ckgu().s[12]++;
      this.createWrapper();
      cov_24le79ckgu().s[13]++;
      this.createElements();
    }
    /**
     * Create the canvas elements and style them
     *
     */

  }, {
    key: "createElements",
    value: function createElements() {
      cov_24le79ckgu().f[2]++;
      cov_24le79ckgu().s[14]++;
      this.progressWave = util.withOrientation(this.wrapper.appendChild(document.createElement('wave')), this.params.vertical);
      cov_24le79ckgu().s[15]++;
      this.style(this.progressWave, {
        position: 'absolute',
        zIndex: 3,
        left: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden',
        width: '0',
        display: 'none',
        boxSizing: 'border-box',
        borderRightStyle: 'solid',
        pointerEvents: 'none'
      });
      cov_24le79ckgu().s[16]++;
      this.addCanvas();
      cov_24le79ckgu().s[17]++;
      this.updateCursor();
    }
    /**
     * Update cursor style
     */

  }, {
    key: "updateCursor",
    value: function updateCursor() {
      cov_24le79ckgu().f[3]++;
      cov_24le79ckgu().s[18]++;
      this.style(this.progressWave, {
        borderRightWidth: this.params.cursorWidth + 'px',
        borderRightColor: this.params.cursorColor
      });
    }
    /**
     * Adjust to the updated size by adding or removing canvases
     */

  }, {
    key: "updateSize",
    value: function updateSize() {
      var _this2 = this;

      cov_24le79ckgu().f[4]++;
      var totalWidth = (cov_24le79ckgu().s[19]++, Math.round(this.width / this.params.pixelRatio));
      var requiredCanvases = (cov_24le79ckgu().s[20]++, Math.ceil(totalWidth / (this.maxCanvasElementWidth + this.overlap))); // add required canvases

      cov_24le79ckgu().s[21]++;

      while (this.canvases.length < requiredCanvases) {
        cov_24le79ckgu().s[22]++;
        this.addCanvas();
      } // remove older existing canvases, if any


      cov_24le79ckgu().s[23]++;

      while (this.canvases.length > requiredCanvases) {
        cov_24le79ckgu().s[24]++;
        this.removeCanvas();
      }

      var canvasWidth = (cov_24le79ckgu().s[25]++, this.maxCanvasWidth + this.overlap);
      var lastCanvas = (cov_24le79ckgu().s[26]++, this.canvases.length - 1);
      cov_24le79ckgu().s[27]++;
      this.canvases.forEach(function (entry, i) {
        cov_24le79ckgu().f[5]++;
        cov_24le79ckgu().s[28]++;

        if (i == lastCanvas) {
          cov_24le79ckgu().b[1][0]++;
          cov_24le79ckgu().s[29]++;
          canvasWidth = _this2.width - _this2.maxCanvasWidth * lastCanvas;
        } else {
          cov_24le79ckgu().b[1][1]++;
        }

        cov_24le79ckgu().s[30]++;

        _this2.updateDimensions(entry, canvasWidth, _this2.height);

        cov_24le79ckgu().s[31]++;
        entry.clearWave();
      });
    }
    /**
     * Add a canvas to the canvas list
     *
     */

  }, {
    key: "addCanvas",
    value: function addCanvas() {
      cov_24le79ckgu().f[6]++;
      var entry = (cov_24le79ckgu().s[32]++, new this.EntryClass());
      cov_24le79ckgu().s[33]++;
      entry.canvasContextAttributes = this.canvasContextAttributes;
      cov_24le79ckgu().s[34]++;
      entry.hasProgressCanvas = this.hasProgressCanvas;
      cov_24le79ckgu().s[35]++;
      entry.halfPixel = this.halfPixel;
      var leftOffset = (cov_24le79ckgu().s[36]++, this.maxCanvasElementWidth * this.canvases.length); // wave

      var wave = (cov_24le79ckgu().s[37]++, util.withOrientation(this.wrapper.appendChild(document.createElement('canvas')), this.params.vertical));
      cov_24le79ckgu().s[38]++;
      this.style(wave, {
        position: 'absolute',
        zIndex: 2,
        left: leftOffset + 'px',
        top: 0,
        bottom: 0,
        height: '100%',
        pointerEvents: 'none'
      });
      cov_24le79ckgu().s[39]++;
      entry.initWave(wave); // progress

      cov_24le79ckgu().s[40]++;

      if (this.hasProgressCanvas) {
        cov_24le79ckgu().b[2][0]++;
        var progress = (cov_24le79ckgu().s[41]++, util.withOrientation(this.progressWave.appendChild(document.createElement('canvas')), this.params.vertical));
        cov_24le79ckgu().s[42]++;
        this.style(progress, {
          position: 'absolute',
          left: leftOffset + 'px',
          top: 0,
          bottom: 0,
          height: '100%'
        });
        cov_24le79ckgu().s[43]++;
        entry.initProgress(progress);
      } else {
        cov_24le79ckgu().b[2][1]++;
      }

      cov_24le79ckgu().s[44]++;
      this.canvases.push(entry);
    }
    /**
     * Pop single canvas from the list
     *
     */

  }, {
    key: "removeCanvas",
    value: function removeCanvas() {
      cov_24le79ckgu().f[7]++;
      var lastEntry = (cov_24le79ckgu().s[45]++, this.canvases[this.canvases.length - 1]); // wave

      cov_24le79ckgu().s[46]++;
      lastEntry.wave.parentElement.removeChild(lastEntry.wave.domElement); // progress

      cov_24le79ckgu().s[47]++;

      if (this.hasProgressCanvas) {
        cov_24le79ckgu().b[3][0]++;
        cov_24le79ckgu().s[48]++;
        lastEntry.progress.parentElement.removeChild(lastEntry.progress.domElement);
      } else {
        cov_24le79ckgu().b[3][1]++;
      } // cleanup


      cov_24le79ckgu().s[49]++;

      if (lastEntry) {
        cov_24le79ckgu().b[4][0]++;
        cov_24le79ckgu().s[50]++;
        lastEntry.destroy();
        cov_24le79ckgu().s[51]++;
        lastEntry = null;
      } else {
        cov_24le79ckgu().b[4][1]++;
      }

      cov_24le79ckgu().s[52]++;
      this.canvases.pop();
    }
    /**
     * Update the dimensions of a canvas element
     *
     * @param {CanvasEntry} entry Target entry
     * @param {number} width The new width of the element
     * @param {number} height The new height of the element
     */

  }, {
    key: "updateDimensions",
    value: function updateDimensions(entry, width, height) {
      cov_24le79ckgu().f[8]++;
      var elementWidth = (cov_24le79ckgu().s[53]++, Math.round(width / this.params.pixelRatio));
      var totalWidth = (cov_24le79ckgu().s[54]++, Math.round(this.width / this.params.pixelRatio)); // update canvas dimensions

      cov_24le79ckgu().s[55]++;
      entry.updateDimensions(elementWidth, totalWidth, width, height); // style element

      cov_24le79ckgu().s[56]++;
      this.style(this.progressWave, {
        display: 'block'
      });
    }
    /**
     * Clear the whole multi-canvas
     */

  }, {
    key: "clearWave",
    value: function clearWave() {
      var _this3 = this;

      cov_24le79ckgu().f[9]++;
      cov_24le79ckgu().s[57]++;
      util.frame(function () {
        cov_24le79ckgu().f[10]++;
        cov_24le79ckgu().s[58]++;

        _this3.canvases.forEach(function (entry) {
          cov_24le79ckgu().f[11]++;
          cov_24le79ckgu().s[59]++;
          return entry.clearWave();
        });
      })();
    }
    /**
     * Draw a waveform with bars
     *
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
     * for split channel rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0. Must be an integer.
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that should be
     * rendered
     * @returns {void}
     */

  }, {
    key: "drawBars",
    value: function drawBars(peaks, channelIndex, start, end) {
      var _this4 = this;

      cov_24le79ckgu().f[12]++;
      cov_24le79ckgu().s[60]++;
      return this.prepareDraw(peaks, channelIndex, start, end, function (_ref) {
        var absmax = _ref.absmax,
            hasMinVals = _ref.hasMinVals,
            height = _ref.height,
            offsetY = _ref.offsetY,
            halfH = _ref.halfH,
            peaks = _ref.peaks,
            ch = _ref.channelIndex;
        cov_24le79ckgu().f[13]++;
        cov_24le79ckgu().s[61]++;

        // if drawBars was called within ws.empty we don't pass a start and
        // don't want anything to happen
        if (start === undefined) {
          cov_24le79ckgu().b[5][0]++;
          cov_24le79ckgu().s[62]++;
          return;
        } else {
          cov_24le79ckgu().b[5][1]++;
        } // Skip every other value if there are negatives.


        var peakIndexScale = (cov_24le79ckgu().s[63]++, hasMinVals ? (cov_24le79ckgu().b[6][0]++, 2) : (cov_24le79ckgu().b[6][1]++, 1));
        var length = (cov_24le79ckgu().s[64]++, peaks.length / peakIndexScale);
        var bar = (cov_24le79ckgu().s[65]++, _this4.params.barWidth * _this4.params.pixelRatio);
        var gap = (cov_24le79ckgu().s[66]++, _this4.params.barGap === null ? (cov_24le79ckgu().b[7][0]++, Math.max(_this4.params.pixelRatio, ~~(bar / 2))) : (cov_24le79ckgu().b[7][1]++, Math.max(_this4.params.pixelRatio, _this4.params.barGap * _this4.params.pixelRatio)));
        var step = (cov_24le79ckgu().s[67]++, bar + gap);
        var scale = (cov_24le79ckgu().s[68]++, length / _this4.width);
        var first = (cov_24le79ckgu().s[69]++, start);
        var last = (cov_24le79ckgu().s[70]++, end);
        var peakIndex = (cov_24le79ckgu().s[71]++, first);
        cov_24le79ckgu().s[72]++;

        for (peakIndex; peakIndex < last; peakIndex += step) {
          // search for the highest peak in the range this bar falls into
          var peak = (cov_24le79ckgu().s[73]++, 0);
          var peakIndexRange = (cov_24le79ckgu().s[74]++, Math.floor(peakIndex * scale) * peakIndexScale); // start index

          var peakIndexEnd = (cov_24le79ckgu().s[75]++, Math.floor((peakIndex + step) * scale) * peakIndexScale);
          cov_24le79ckgu().s[76]++;

          do {
            // do..while makes sure at least one peak is always evaluated
            var newPeak = (cov_24le79ckgu().s[77]++, Math.abs(peaks[peakIndexRange])); // for arrays starting with negative values

            cov_24le79ckgu().s[78]++;

            if (newPeak > peak) {
              cov_24le79ckgu().b[8][0]++;
              cov_24le79ckgu().s[79]++;
              peak = newPeak; // higher
            } else {
              cov_24le79ckgu().b[8][1]++;
            }

            cov_24le79ckgu().s[80]++;
            peakIndexRange += peakIndexScale; // skip every other value for negatives
          } while (peakIndexRange < peakIndexEnd); // calculate the height of this bar according to the highest peak found


          var h = (cov_24le79ckgu().s[81]++, Math.round(peak / absmax * halfH)); // in case of silences, allow the user to specify that we
          // always draw *something* (normally a 1px high bar)

          cov_24le79ckgu().s[82]++;

          if ((cov_24le79ckgu().b[10][0]++, h == 0) && (cov_24le79ckgu().b[10][1]++, _this4.params.barMinHeight)) {
            cov_24le79ckgu().b[9][0]++;
            cov_24le79ckgu().s[83]++;
            h = _this4.params.barMinHeight;
          } else {
            cov_24le79ckgu().b[9][1]++;
          }

          cov_24le79ckgu().s[84]++;

          _this4.fillRect(peakIndex + _this4.halfPixel, halfH - h + offsetY, bar + _this4.halfPixel, h * 2, _this4.barRadius, ch);
        }
      });
    }
    /**
     * Draw a waveform
     *
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
     * for split channel rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0
     * @param {number?} start The x-offset of the beginning of the area that
     * should be rendered (If this isn't set only a flat line is rendered)
     * @param {number?} end The x-offset of the end of the area that should be
     * rendered
     * @returns {void}
     */

  }, {
    key: "drawWave",
    value: function drawWave(peaks, channelIndex, start, end) {
      var _this5 = this;

      cov_24le79ckgu().f[14]++;
      cov_24le79ckgu().s[85]++;
      return this.prepareDraw(peaks, channelIndex, start, end, function (_ref2) {
        var absmax = _ref2.absmax,
            hasMinVals = _ref2.hasMinVals,
            height = _ref2.height,
            offsetY = _ref2.offsetY,
            halfH = _ref2.halfH,
            peaks = _ref2.peaks,
            channelIndex = _ref2.channelIndex;
        cov_24le79ckgu().f[15]++;
        cov_24le79ckgu().s[86]++;

        if (!hasMinVals) {
          cov_24le79ckgu().b[11][0]++;
          var reflectedPeaks = (cov_24le79ckgu().s[87]++, []);
          var len = (cov_24le79ckgu().s[88]++, peaks.length);
          var i = (cov_24le79ckgu().s[89]++, 0);
          cov_24le79ckgu().s[90]++;

          for (i; i < len; i++) {
            cov_24le79ckgu().s[91]++;
            reflectedPeaks[2 * i] = peaks[i];
            cov_24le79ckgu().s[92]++;
            reflectedPeaks[2 * i + 1] = -peaks[i];
          }

          cov_24le79ckgu().s[93]++;
          peaks = reflectedPeaks;
        } else {
          cov_24le79ckgu().b[11][1]++;
        } // if drawWave was called within ws.empty we don't pass a start and
        // end and simply want a flat line


        cov_24le79ckgu().s[94]++;

        if (start !== undefined) {
          cov_24le79ckgu().b[12][0]++;
          cov_24le79ckgu().s[95]++;

          _this5.drawLine(peaks, absmax, halfH, offsetY, start, end, channelIndex);
        } else {
          cov_24le79ckgu().b[12][1]++;
        } // always draw a median line


        cov_24le79ckgu().s[96]++;

        _this5.fillRect(0, halfH + offsetY - _this5.halfPixel, _this5.width, _this5.halfPixel, _this5.barRadius, channelIndex);
      });
    }
    /**
     * Tell the canvas entries to render their portion of the waveform
     *
     * @param {number[]} peaks Peaks data
     * @param {number} absmax Maximum peak value (absolute)
     * @param {number} halfH Half the height of the waveform
     * @param {number} offsetY Offset to the top
     * @param {number} start The x-offset of the beginning of the area that
     * should be rendered
     * @param {number} end The x-offset of the end of the area that
     * should be rendered
     * @param {channelIndex} channelIndex The channel index of the line drawn
     */

  }, {
    key: "drawLine",
    value: function drawLine(peaks, absmax, halfH, offsetY, start, end, channelIndex) {
      var _this6 = this;

      cov_24le79ckgu().f[16]++;

      var _ref3 = (cov_24le79ckgu().s[97]++, (cov_24le79ckgu().b[13][0]++, this.params.splitChannelsOptions.channelColors[channelIndex]) || (cov_24le79ckgu().b[13][1]++, {})),
          waveColor = _ref3.waveColor,
          progressColor = _ref3.progressColor;

      cov_24le79ckgu().s[98]++;
      this.canvases.forEach(function (entry, i) {
        cov_24le79ckgu().f[17]++;
        cov_24le79ckgu().s[99]++;

        _this6.setFillStyles(entry, waveColor, progressColor);

        cov_24le79ckgu().s[100]++;

        _this6.applyCanvasTransforms(entry, _this6.params.vertical);

        cov_24le79ckgu().s[101]++;
        entry.drawLines(peaks, absmax, halfH, offsetY, start, end);
      });
    }
    /**
     * Draw a rectangle on the multi-canvas
     *
     * @param {number} x X-position of the rectangle
     * @param {number} y Y-position of the rectangle
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {number} radius Radius of the rectangle
     * @param {channelIndex} channelIndex The channel index of the bar drawn
     */

  }, {
    key: "fillRect",
    value: function fillRect(x, y, width, height, radius, channelIndex) {
      cov_24le79ckgu().f[18]++;
      var startCanvas = (cov_24le79ckgu().s[102]++, Math.floor(x / this.maxCanvasWidth));
      var endCanvas = (cov_24le79ckgu().s[103]++, Math.min(Math.ceil((x + width) / this.maxCanvasWidth) + 1, this.canvases.length));
      var i = (cov_24le79ckgu().s[104]++, startCanvas);
      cov_24le79ckgu().s[105]++;

      for (i; i < endCanvas; i++) {
        var entry = (cov_24le79ckgu().s[106]++, this.canvases[i]);
        var leftOffset = (cov_24le79ckgu().s[107]++, i * this.maxCanvasWidth);
        var intersection = (cov_24le79ckgu().s[108]++, {
          x1: Math.max(x, i * this.maxCanvasWidth),
          y1: y,
          x2: Math.min(x + width, i * this.maxCanvasWidth + entry.wave.width),
          y2: y + height
        });
        cov_24le79ckgu().s[109]++;

        if (intersection.x1 < intersection.x2) {
          cov_24le79ckgu().b[14][0]++;

          var _ref4 = (cov_24le79ckgu().s[110]++, (cov_24le79ckgu().b[15][0]++, this.params.splitChannelsOptions.channelColors[channelIndex]) || (cov_24le79ckgu().b[15][1]++, {})),
              waveColor = _ref4.waveColor,
              progressColor = _ref4.progressColor;

          cov_24le79ckgu().s[111]++;
          this.setFillStyles(entry, waveColor, progressColor);
          cov_24le79ckgu().s[112]++;
          this.applyCanvasTransforms(entry, this.params.vertical);
          cov_24le79ckgu().s[113]++;
          entry.fillRects(intersection.x1 - leftOffset, intersection.y1, intersection.x2 - intersection.x1, intersection.y2 - intersection.y1, radius);
        } else {
          cov_24le79ckgu().b[14][1]++;
        }
      }
    }
    /**
     * Returns whether to hide the channel from being drawn based on params.
     *
     * @param {number} channelIndex The index of the current channel.
     * @returns {bool} True to hide the channel, false to draw.
     */

  }, {
    key: "hideChannel",
    value: function hideChannel(channelIndex) {
      cov_24le79ckgu().f[19]++;
      cov_24le79ckgu().s[114]++;
      return (cov_24le79ckgu().b[16][0]++, this.params.splitChannels) && (cov_24le79ckgu().b[16][1]++, this.params.splitChannelsOptions.filterChannels.includes(channelIndex));
    }
    /**
     * Performs preparation tasks and calculations which are shared by `drawBars`
     * and `drawWave`
     *
     * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for
     * split channel rendering
     * @param {number} channelIndex The index of the current channel. Normally
     * should be 0
     * @param {number?} start The x-offset of the beginning of the area that
     * should be rendered. If this isn't set only a flat line is rendered
     * @param {number?} end The x-offset of the end of the area that should be
     * rendered
     * @param {function} fn The render function to call, e.g. `drawWave`
     * @param {number} drawIndex The index of the current channel after filtering.
     * @param {number?} normalizedMax Maximum modulation value across channels for use with relativeNormalization. Ignored when undefined
     * @returns {void}
     */

  }, {
    key: "prepareDraw",
    value: function prepareDraw(peaks, channelIndex, start, end, fn, drawIndex, normalizedMax) {
      var _this7 = this;

      cov_24le79ckgu().f[20]++;
      cov_24le79ckgu().s[115]++;
      return util.frame(function () {
        cov_24le79ckgu().f[21]++;
        cov_24le79ckgu().s[116]++;

        // Split channels and call this function with the channelIndex set
        if (peaks[0] instanceof Array) {
          cov_24le79ckgu().b[17][0]++;
          var channels = (cov_24le79ckgu().s[117]++, peaks);
          cov_24le79ckgu().s[118]++;

          if (_this7.params.splitChannels) {
            cov_24le79ckgu().b[18][0]++;
            var filteredChannels = (cov_24le79ckgu().s[119]++, channels.filter(function (c, i) {
              cov_24le79ckgu().f[22]++;
              cov_24le79ckgu().s[120]++;
              return !_this7.hideChannel(i);
            }));
            cov_24le79ckgu().s[121]++;

            if (!_this7.params.splitChannelsOptions.overlay) {
              cov_24le79ckgu().b[19][0]++;
              cov_24le79ckgu().s[122]++;

              _this7.setHeight(Math.max(filteredChannels.length, 1) * _this7.params.height * _this7.params.pixelRatio);
            } else {
              cov_24le79ckgu().b[19][1]++;
            }

            var overallAbsMax;
            cov_24le79ckgu().s[123]++;

            if ((cov_24le79ckgu().b[21][0]++, _this7.params.splitChannelsOptions) && (cov_24le79ckgu().b[21][1]++, _this7.params.splitChannelsOptions.relativeNormalization)) {
              cov_24le79ckgu().b[20][0]++;
              cov_24le79ckgu().s[124]++;
              // calculate maximum peak across channels to use for normalization
              overallAbsMax = util.max(channels.map(function (channelPeaks) {
                cov_24le79ckgu().f[23]++;
                cov_24le79ckgu().s[125]++;
                return util.absMax(channelPeaks);
              }));
            } else {
              cov_24le79ckgu().b[20][1]++;
            }

            cov_24le79ckgu().s[126]++;
            return channels.forEach(function (channelPeaks, i) {
              cov_24le79ckgu().f[24]++;
              cov_24le79ckgu().s[127]++;
              return _this7.prepareDraw(channelPeaks, i, start, end, fn, filteredChannels.indexOf(channelPeaks), overallAbsMax);
            });
          } else {
            cov_24le79ckgu().b[18][1]++;
          }

          cov_24le79ckgu().s[128]++;
          peaks = channels[0];
        } else {
          cov_24le79ckgu().b[17][1]++;
        } // Return and do not draw channel peaks if hidden.


        cov_24le79ckgu().s[129]++;

        if (_this7.hideChannel(channelIndex)) {
          cov_24le79ckgu().b[22][0]++;
          cov_24le79ckgu().s[130]++;
          return;
        } else {
          cov_24le79ckgu().b[22][1]++;
        } // calculate maximum modulation value, either from the barHeight
        // parameter or if normalize=true from the largest value in the peak
        // set


        var absmax = (cov_24le79ckgu().s[131]++, 1 / _this7.params.barHeight);
        cov_24le79ckgu().s[132]++;

        if (_this7.params.normalize) {
          cov_24le79ckgu().b[23][0]++;
          cov_24le79ckgu().s[133]++;
          absmax = normalizedMax === undefined ? (cov_24le79ckgu().b[24][0]++, util.absMax(peaks)) : (cov_24le79ckgu().b[24][1]++, normalizedMax);
        } else {
          cov_24le79ckgu().b[23][1]++;
        } // Bar wave draws the bottom only as a reflection of the top,
        // so we don't need negative values


        var hasMinVals = (cov_24le79ckgu().s[134]++, [].some.call(peaks, function (val) {
          cov_24le79ckgu().f[25]++;
          cov_24le79ckgu().s[135]++;
          return val < 0;
        }));
        var height = (cov_24le79ckgu().s[136]++, _this7.params.height * _this7.params.pixelRatio);
        var halfH = (cov_24le79ckgu().s[137]++, height / 2);
        var offsetY = (cov_24le79ckgu().s[138]++, (cov_24le79ckgu().b[25][0]++, height * drawIndex) || (cov_24le79ckgu().b[25][1]++, 0)); // Override offsetY if overlay is true

        cov_24le79ckgu().s[139]++;

        if ((cov_24le79ckgu().b[27][0]++, _this7.params.splitChannelsOptions) && (cov_24le79ckgu().b[27][1]++, _this7.params.splitChannelsOptions.overlay)) {
          cov_24le79ckgu().b[26][0]++;
          cov_24le79ckgu().s[140]++;
          offsetY = 0;
        } else {
          cov_24le79ckgu().b[26][1]++;
        }

        cov_24le79ckgu().s[141]++;
        return fn({
          absmax: absmax,
          hasMinVals: hasMinVals,
          height: height,
          offsetY: offsetY,
          halfH: halfH,
          peaks: peaks,
          channelIndex: channelIndex
        });
      })();
    }
    /**
     * Set the fill styles for a certain entry (wave and progress)
     *
     * @param {CanvasEntry} entry Target entry
     * @param {string} waveColor Wave color to draw this entry
     * @param {string} progressColor Progress color to draw this entry
     */

  }, {
    key: "setFillStyles",
    value: function setFillStyles(entry) {
      var waveColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_24le79ckgu().b[28][0]++, this.params.waveColor);
      var progressColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_24le79ckgu().b[29][0]++, this.params.progressColor);
      cov_24le79ckgu().f[26]++;
      cov_24le79ckgu().s[142]++;
      entry.setFillStyles(waveColor, progressColor);
    }
    /**
     * Set the canvas transforms for a certain entry (wave and progress)
     *
     * @param {CanvasEntry} entry Target entry
     * @param {boolean} vertical Whether to render the waveform vertically
     */

  }, {
    key: "applyCanvasTransforms",
    value: function applyCanvasTransforms(entry) {
      var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_24le79ckgu().b[30][0]++, false);
      cov_24le79ckgu().f[27]++;
      cov_24le79ckgu().s[143]++;
      entry.applyCanvasTransforms(vertical);
    }
    /**
     * Return image data of the multi-canvas
     *
     * When using a `type` of `'blob'`, this will return a `Promise`.
     *
     * @param {string} format='image/png' An optional value of a format type.
     * @param {number} quality=0.92 An optional value between 0 and 1.
     * @param {string} type='dataURL' Either 'dataURL' or 'blob'.
     * @return {string|string[]|Promise} When using the default `'dataURL'`
     * `type` this returns a single data URL or an array of data URLs,
     * one for each canvas. When using the `'blob'` `type` this returns a
     * `Promise` that resolves with an array of `Blob` instances, one for each
     * canvas.
     */

  }, {
    key: "getImage",
    value: function getImage(format, quality, type) {
      cov_24le79ckgu().f[28]++;
      cov_24le79ckgu().s[144]++;

      if (type === 'blob') {
        cov_24le79ckgu().b[31][0]++;
        cov_24le79ckgu().s[145]++;
        return Promise.all(this.canvases.map(function (entry) {
          cov_24le79ckgu().f[29]++;
          cov_24le79ckgu().s[146]++;
          return entry.getImage(format, quality, type);
        }));
      } else {
        cov_24le79ckgu().b[31][1]++;
        cov_24le79ckgu().s[147]++;

        if (type === 'dataURL') {
          cov_24le79ckgu().b[32][0]++;
          var images = (cov_24le79ckgu().s[148]++, this.canvases.map(function (entry) {
            cov_24le79ckgu().f[30]++;
            cov_24le79ckgu().s[149]++;
            return entry.getImage(format, quality, type);
          }));
          cov_24le79ckgu().s[150]++;
          return images.length > 1 ? (cov_24le79ckgu().b[33][0]++, images) : (cov_24le79ckgu().b[33][1]++, images[0]);
        } else {
          cov_24le79ckgu().b[32][1]++;
        }
      }
    }
    /**
     * Render the new progress
     *
     * @param {number} position X-offset of progress position in pixels
     */

  }, {
    key: "updateProgress",
    value: function updateProgress(position) {
      cov_24le79ckgu().f[31]++;
      cov_24le79ckgu().s[151]++;
      this.style(this.progressWave, {
        width: position + 'px'
      });
    }
  }]);

  return MultiCanvas;
}(_drawer.default);

exports["default"] = MultiCanvas;
module.exports = exports.default;

/***/ }),

/***/ "./src/mediaelement-webaudio.js":
/*!**************************************!*\
  !*** ./src/mediaelement-webaudio.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _mediaelement = _interopRequireDefault(__webpack_require__(/*! ./mediaelement */ "./src/mediaelement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_76jlkg51n() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/mediaelement-webaudio.js";
  var hash = "d46c5650fe36a1d356bf3c1e459b6a410c936a76";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/mediaelement-webaudio.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 22
        }
      },
      "1": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 29
        }
      },
      "2": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 39
        }
      },
      "3": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 52
        }
      },
      "4": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 27
        }
      },
      "5": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 32
        }
      },
      "6": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 32
        }
      },
      "7": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 34
        }
      },
      "8": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 43
        }
      },
      "9": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 45
        }
      },
      "10": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 59,
          column: 10
        }
      },
      "11": {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 60,
          column: 55
        }
      },
      "12": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 64,
          column: 34
        }
      },
      "13": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 38
        }
      },
      "14": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 24
        }
      },
      "15": {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 75,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        loc: {
          start: {
            line: 18,
            column: 24
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 11
          },
          end: {
            line: 35,
            column: 5
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        loc: {
          start: {
            line: 45,
            column: 33
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 45
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        loc: {
          start: {
            line: 56,
            column: 43
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 56
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        loc: {
          start: {
            line: 63,
            column: 21
          },
          end: {
            line: 66,
            column: 5
          }
        },
        line: 63
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        },
        loc: {
          start: {
            line: 72,
            column: 14
          },
          end: {
            line: 76,
            column: 5
          }
        },
        line: 72
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d46c5650fe36a1d356bf3c1e459b6a410c936a76"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_76jlkg51n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_76jlkg51n();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * MediaElementWebAudio backend: load audio via an HTML5 audio tag, but playback with the WebAudio API.
 * The advantage here is that the html5 <audio> tag can perform range requests on the server and not
 * buffer the entire file in one request, and you still get the filtering and scripting functionality
 * of the webaudio API.
 * Note that in order to use range requests and prevent buffering, you must provide peak data.
 *
 * @since 3.2.0
 */
var MediaElementWebAudio = /*#__PURE__*/function (_MediaElement) {
  _inherits(MediaElementWebAudio, _MediaElement);

  var _super = _createSuper(MediaElementWebAudio);

  /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */
  function MediaElementWebAudio(params) {
    var _this;

    _classCallCheck(this, MediaElementWebAudio);

    cov_76jlkg51n().f[0]++;
    cov_76jlkg51n().s[0]++;
    _this = _super.call(this, params);
    /** @private */

    cov_76jlkg51n().s[1]++;
    _this.params = params;
    /** @private */

    cov_76jlkg51n().s[2]++;
    _this.sourceMediaElement = null;
    return _this;
  }
  /**
   * Initialise the backend, called in `wavesurfer.createBackend()`
   */


  _createClass(MediaElementWebAudio, [{
    key: "init",
    value: function init() {
      cov_76jlkg51n().f[1]++;
      cov_76jlkg51n().s[3]++;
      this.setPlaybackRate(this.params.audioRate);
      cov_76jlkg51n().s[4]++;
      this.createTimer();
      cov_76jlkg51n().s[5]++;
      this.createVolumeNode();
      cov_76jlkg51n().s[6]++;
      this.createScriptNode();
      cov_76jlkg51n().s[7]++;
      this.createAnalyserNode();
    }
    /**
     * Private method called by both `load` (from url)
     * and `loadElt` (existing media element) methods.
     *
     * @param {HTMLMediaElement} media HTML5 Audio or Video element
     * @param {number[]|Number.<Array[]>} peaks Array of peak data
     * @param {string} preload HTML 5 preload attribute value
     * @private
     */

  }, {
    key: "_load",
    value: function _load(media, peaks, preload) {
      cov_76jlkg51n().f[2]++;
      cov_76jlkg51n().s[8]++;

      _get(_getPrototypeOf(MediaElementWebAudio.prototype), "_load", this).call(this, media, peaks, preload);

      cov_76jlkg51n().s[9]++;
      this.createMediaElementSource(media);
    }
    /**
     * Create MediaElementSource node
     *
     * @since 3.2.0
     * @param {HTMLMediaElement} mediaElement HTML5 Audio to load
     */

  }, {
    key: "createMediaElementSource",
    value: function createMediaElementSource(mediaElement) {
      cov_76jlkg51n().f[3]++;
      cov_76jlkg51n().s[10]++;
      this.sourceMediaElement = this.ac.createMediaElementSource(mediaElement);
      cov_76jlkg51n().s[11]++;
      this.sourceMediaElement.connect(this.analyser);
    }
  }, {
    key: "play",
    value: function play(start, end) {
      cov_76jlkg51n().f[4]++;
      cov_76jlkg51n().s[12]++;
      this.resumeAudioContext();
      cov_76jlkg51n().s[13]++;
      return _get(_getPrototypeOf(MediaElementWebAudio.prototype), "play", this).call(this, start, end);
    }
    /**
     * This is called when wavesurfer is destroyed
     *
     */

  }, {
    key: "destroy",
    value: function destroy() {
      cov_76jlkg51n().f[5]++;
      cov_76jlkg51n().s[14]++;

      _get(_getPrototypeOf(MediaElementWebAudio.prototype), "destroy", this).call(this);

      cov_76jlkg51n().s[15]++;
      this.destroyWebAudio();
    }
  }]);

  return MediaElementWebAudio;
}(_mediaelement.default);

exports["default"] = MediaElementWebAudio;
module.exports = exports.default;

/***/ }),

/***/ "./src/mediaelement.js":
/*!*****************************!*\
  !*** ./src/mediaelement.js ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _webaudio = _interopRequireDefault(__webpack_require__(/*! ./webaudio */ "./src/webaudio.js"));

var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_2dqjqai5xo() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/mediaelement.js";
  var hash = "ad0d5d28e6299d99fa56baba01d3390aedb53c05";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/mediaelement.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 22
        }
      },
      "1": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 29
        }
      },
      "2": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 31,
          column: 10
        }
      },
      "3": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 56
        }
      },
      "4": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 36,
          column: 54
        }
      },
      "5": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 26
        }
      },
      "6": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 30
        }
      },
      "7": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 24
        }
      },
      "8": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 29
        }
      },
      "9": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 27
        }
      },
      "10": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 30
        }
      },
      "11": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 33
        }
      },
      "12": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 52
        }
      },
      "13": {
        start: {
          line: 58,
          column: 8
        },
        end: {
          line: 58,
          column: 27
        }
      },
      "14": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 67,
          column: 10
        }
      },
      "15": {
        start: {
          line: 66,
          column: 12
        },
        end: {
          line: 66,
          column: 67
        }
      },
      "16": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 70,
          column: 10
        }
      },
      "17": {
        start: {
          line: 69,
          column: 12
        },
        end: {
          line: 69,
          column: 38
        }
      },
      "18": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 73,
          column: 10
        }
      },
      "19": {
        start: {
          line: 72,
          column: 12
        },
        end: {
          line: 72,
          column: 37
        }
      },
      "20": {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 78,
          column: 10
        }
      },
      "21": {
        start: {
          line: 77,
          column: 12
        },
        end: {
          line: 77,
          column: 35
        }
      },
      "22": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 81,
          column: 10
        }
      },
      "23": {
        start: {
          line: 80,
          column: 12
        },
        end: {
          line: 80,
          column: 36
        }
      },
      "24": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 84,
          column: 10
        }
      },
      "25": {
        start: {
          line: 83,
          column: 12
        },
        end: {
          line: 83,
          column: 35
        }
      },
      "26": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 93,
          column: 10
        }
      },
      "27": {
        start: {
          line: 86,
          column: 12
        },
        end: {
          line: 86,
          column: 44
        }
      },
      "28": {
        start: {
          line: 87,
          column: 12
        },
        end: {
          line: 91,
          column: 13
        }
      },
      "29": {
        start: {
          line: 88,
          column: 16
        },
        end: {
          line: 88,
          column: 32
        }
      },
      "30": {
        start: {
          line: 90,
          column: 16
        },
        end: {
          line: 90,
          column: 48
        }
      },
      "31": {
        start: {
          line: 92,
          column: 12
        },
        end: {
          line: 92,
          column: 37
        }
      },
      "32": {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 99,
          column: 11
        }
      },
      "33": {
        start: {
          line: 97,
          column: 12
        },
        end: {
          line: 97,
          column: 72
        }
      },
      "34": {
        start: {
          line: 98,
          column: 12
        },
        end: {
          line: 98,
          column: 69
        }
      },
      "35": {
        start: {
          line: 106,
          column: 31
        },
        end: {
          line: 114,
          column: 9
        }
      },
      "36": {
        start: {
          line: 107,
          column: 12
        },
        end: {
          line: 109,
          column: 13
        }
      },
      "37": {
        start: {
          line: 108,
          column: 16
        },
        end: {
          line: 108,
          column: 23
        }
      },
      "38": {
        start: {
          line: 110,
          column: 12
        },
        end: {
          line: 110,
          column: 66
        }
      },
      "39": {
        start: {
          line: 113,
          column: 12
        },
        end: {
          line: 113,
          column: 41
        }
      },
      "40": {
        start: {
          line: 116,
          column: 8
        },
        end: {
          line: 116,
          column: 40
        }
      },
      "41": {
        start: {
          line: 120,
          column: 8
        },
        end: {
          line: 122,
          column: 11
        }
      },
      "42": {
        start: {
          line: 121,
          column: 12
        },
        end: {
          line: 121,
          column: 66
        }
      },
      "43": {
        start: {
          line: 137,
          column: 22
        },
        end: {
          line: 137,
          column: 60
        }
      },
      "44": {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 138,
          column: 51
        }
      },
      "45": {
        start: {
          line: 139,
          column: 8
        },
        end: {
          line: 139,
          column: 55
        }
      },
      "46": {
        start: {
          line: 140,
          column: 8
        },
        end: {
          line: 140,
          column: 59
        }
      },
      "47": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 141,
          column: 24
        }
      },
      "48": {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 142,
          column: 35
        }
      },
      "49": {
        start: {
          line: 144,
          column: 26
        },
        end: {
          line: 144,
          column: 65
        }
      },
      "50": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 147,
          column: 9
        }
      },
      "51": {
        start: {
          line: 146,
          column: 12
        },
        end: {
          line: 146,
          column: 45
        }
      },
      "52": {
        start: {
          line: 148,
          column: 8
        },
        end: {
          line: 148,
          column: 37
        }
      },
      "53": {
        start: {
          line: 150,
          column: 8
        },
        end: {
          line: 150,
          column: 42
        }
      },
      "54": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 160,
          column: 49
        }
      },
      "55": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 53
        }
      },
      "56": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 163,
          column: 44
        }
      },
      "57": {
        start: {
          line: 179,
          column: 8
        },
        end: {
          line: 184,
          column: 9
        }
      },
      "58": {
        start: {
          line: 183,
          column: 12
        },
        end: {
          line: 183,
          column: 76
        }
      },
      "59": {
        start: {
          line: 191,
          column: 8
        },
        end: {
          line: 196,
          column: 9
        }
      },
      "60": {
        start: {
          line: 195,
          column: 12
        },
        end: {
          line: 195,
          column: 25
        }
      },
      "61": {
        start: {
          line: 198,
          column: 8
        },
        end: {
          line: 198,
          column: 27
        }
      },
      "62": {
        start: {
          line: 199,
          column: 8
        },
        end: {
          line: 199,
          column: 36
        }
      },
      "63": {
        start: {
          line: 200,
          column: 8
        },
        end: {
          line: 200,
          column: 27
        }
      },
      "64": {
        start: {
          line: 201,
          column: 8
        },
        end: {
          line: 201,
          column: 30
        }
      },
      "65": {
        start: {
          line: 202,
          column: 8
        },
        end: {
          line: 202,
          column: 27
        }
      },
      "66": {
        start: {
          line: 203,
          column: 8
        },
        end: {
          line: 203,
          column: 35
        }
      },
      "67": {
        start: {
          line: 204,
          column: 8
        },
        end: {
          line: 204,
          column: 48
        }
      },
      "68": {
        start: {
          line: 205,
          column: 8
        },
        end: {
          line: 205,
          column: 36
        }
      },
      "69": {
        start: {
          line: 214,
          column: 8
        },
        end: {
          line: 214,
          column: 48
        }
      },
      "70": {
        start: {
          line: 223,
          column: 8
        },
        end: {
          line: 225,
          column: 9
        }
      },
      "71": {
        start: {
          line: 224,
          column: 12
        },
        end: {
          line: 224,
          column: 41
        }
      },
      "72": {
        start: {
          line: 226,
          column: 23
        },
        end: {
          line: 226,
          column: 59
        }
      },
      "73": {
        start: {
          line: 227,
          column: 8
        },
        end: {
          line: 230,
          column: 9
        }
      },
      "74": {
        start: {
          line: 229,
          column: 12
        },
        end: {
          line: 229,
          column: 50
        }
      },
      "75": {
        start: {
          line: 231,
          column: 8
        },
        end: {
          line: 231,
          column: 24
        }
      },
      "76": {
        start: {
          line: 241,
          column: 8
        },
        end: {
          line: 241,
          column: 52
        }
      },
      "77": {
        start: {
          line: 250,
          column: 8
        },
        end: {
          line: 250,
          column: 63
        }
      },
      "78": {
        start: {
          line: 259,
          column: 8
        },
        end: {
          line: 259,
          column: 60
        }
      },
      "79": {
        start: {
          line: 268,
          column: 8
        },
        end: {
          line: 268,
          column: 39
        }
      },
      "80": {
        start: {
          line: 269,
          column: 8
        },
        end: {
          line: 269,
          column: 52
        }
      },
      "81": {
        start: {
          line: 278,
          column: 8
        },
        end: {
          line: 280,
          column: 9
        }
      },
      "82": {
        start: {
          line: 279,
          column: 12
        },
        end: {
          line: 279,
          column: 43
        }
      },
      "83": {
        start: {
          line: 281,
          column: 8
        },
        end: {
          line: 281,
          column: 28
        }
      },
      "84": {
        start: {
          line: 294,
          column: 8
        },
        end: {
          line: 294,
          column: 27
        }
      },
      "85": {
        start: {
          line: 295,
          column: 24
        },
        end: {
          line: 295,
          column: 41
        }
      },
      "86": {
        start: {
          line: 296,
          column: 8
        },
        end: {
          line: 296,
          column: 36
        }
      },
      "87": {
        start: {
          line: 298,
          column: 8
        },
        end: {
          line: 298,
          column: 23
        }
      },
      "88": {
        start: {
          line: 310,
          column: 8
        },
        end: {
          line: 312,
          column: 9
        }
      },
      "89": {
        start: {
          line: 311,
          column: 12
        },
        end: {
          line: 311,
          column: 41
        }
      },
      "90": {
        start: {
          line: 313,
          column: 8
        },
        end: {
          line: 313,
          column: 28
        }
      },
      "91": {
        start: {
          line: 315,
          column: 8
        },
        end: {
          line: 315,
          column: 23
        }
      },
      "92": {
        start: {
          line: 324,
          column: 8
        },
        end: {
          line: 324,
          column: 28
        }
      },
      "93": {
        start: {
          line: 326,
          column: 8
        },
        end: {
          line: 331,
          column: 10
        }
      },
      "94": {
        start: {
          line: 327,
          column: 12
        },
        end: {
          line: 330,
          column: 13
        }
      },
      "95": {
        start: {
          line: 328,
          column: 16
        },
        end: {
          line: 328,
          column: 29
        }
      },
      "96": {
        start: {
          line: 329,
          column: 16
        },
        end: {
          line: 329,
          column: 33
        }
      },
      "97": {
        start: {
          line: 332,
          column: 8
        },
        end: {
          line: 332,
          column: 49
        }
      },
      "98": {
        start: {
          line: 337,
          column: 8
        },
        end: {
          line: 340,
          column: 9
        }
      },
      "99": {
        start: {
          line: 338,
          column: 12
        },
        end: {
          line: 338,
          column: 53
        }
      },
      "100": {
        start: {
          line: 339,
          column: 12
        },
        end: {
          line: 339,
          column: 35
        }
      },
      "101": {
        start: {
          line: 354,
          column: 8
        },
        end: {
          line: 356,
          column: 9
        }
      },
      "102": {
        start: {
          line: 355,
          column: 12
        },
        end: {
          line: 355,
          column: 55
        }
      },
      "103": {
        start: {
          line: 357,
          column: 8
        },
        end: {
          line: 357,
          column: 32
        }
      },
      "104": {
        start: {
          line: 368,
          column: 8
        },
        end: {
          line: 375,
          column: 9
        }
      },
      "105": {
        start: {
          line: 369,
          column: 12
        },
        end: {
          line: 373,
          column: 13
        }
      },
      "106": {
        start: {
          line: 370,
          column: 16
        },
        end: {
          line: 372,
          column: 18
        }
      },
      "107": {
        start: {
          line: 374,
          column: 12
        },
        end: {
          line: 374,
          column: 50
        }
      },
      "108": {
        start: {
          line: 377,
          column: 8
        },
        end: {
          line: 377,
          column: 74
        }
      },
      "109": {
        start: {
          line: 386,
          column: 8
        },
        end: {
          line: 386,
          column: 27
        }
      },
      "110": {
        start: {
          line: 395,
          column: 8
        },
        end: {
          line: 395,
          column: 28
        }
      },
      "111": {
        start: {
          line: 397,
          column: 8
        },
        end: {
          line: 399,
          column: 9
        }
      },
      "112": {
        start: {
          line: 398,
          column: 12
        },
        end: {
          line: 398,
          column: 44
        }
      },
      "113": {
        start: {
          line: 411,
          column: 8
        },
        end: {
          line: 411,
          column: 48
        }
      },
      "114": {
        start: {
          line: 419,
          column: 8
        },
        end: {
          line: 419,
          column: 21
        }
      },
      "115": {
        start: {
          line: 420,
          column: 8
        },
        end: {
          line: 420,
          column: 21
        }
      },
      "116": {
        start: {
          line: 421,
          column: 8
        },
        end: {
          line: 421,
          column: 30
        }
      },
      "117": {
        start: {
          line: 424,
          column: 8
        },
        end: {
          line: 428,
          column: 11
        }
      },
      "118": {
        start: {
          line: 425,
          column: 12
        },
        end: {
          line: 427,
          column: 13
        }
      },
      "119": {
        start: {
          line: 426,
          column: 16
        },
        end: {
          line: 426,
          column: 76
        }
      },
      "120": {
        start: {
          line: 430,
          column: 8
        },
        end: {
          line: 436,
          column: 9
        }
      },
      "121": {
        start: {
          line: 435,
          column: 12
        },
        end: {
          line: 435,
          column: 58
        }
      },
      "122": {
        start: {
          line: 438,
          column: 8
        },
        end: {
          line: 438,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 51,
            column: 5
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 12
          },
          end: {
            line: 28,
            column: 13
          }
        },
        loc: {
          start: {
            line: 28,
            column: 19
          },
          end: {
            line: 28,
            column: 21
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 13
          }
        },
        loc: {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 29,
            column: 22
          }
        },
        line: 29
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        loc: {
          start: {
            line: 56,
            column: 11
          },
          end: {
            line: 59,
            column: 5
          }
        },
        line: 56
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        loc: {
          start: {
            line: 64,
            column: 27
          },
          end: {
            line: 100,
            column: 5
          }
        },
        line: 64
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 65,
            column: 36
          },
          end: {
            line: 65,
            column: 37
          }
        },
        loc: {
          start: {
            line: 65,
            column: 42
          },
          end: {
            line: 67,
            column: 9
          }
        },
        line: 65
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 68,
            column: 38
          },
          end: {
            line: 68,
            column: 39
          }
        },
        loc: {
          start: {
            line: 68,
            column: 44
          },
          end: {
            line: 70,
            column: 9
          }
        },
        line: 68
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 71,
            column: 36
          },
          end: {
            line: 71,
            column: 37
          }
        },
        loc: {
          start: {
            line: 71,
            column: 42
          },
          end: {
            line: 73,
            column: 9
          }
        },
        line: 71
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 76,
            column: 35
          },
          end: {
            line: 76,
            column: 36
          }
        },
        loc: {
          start: {
            line: 76,
            column: 41
          },
          end: {
            line: 78,
            column: 9
          }
        },
        line: 76
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 79,
            column: 36
          },
          end: {
            line: 79,
            column: 37
          }
        },
        loc: {
          start: {
            line: 79,
            column: 42
          },
          end: {
            line: 81,
            column: 9
          }
        },
        line: 79
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 82,
            column: 37
          },
          end: {
            line: 82,
            column: 38
          }
        },
        loc: {
          start: {
            line: 82,
            column: 46
          },
          end: {
            line: 84,
            column: 9
          }
        },
        line: 82
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 85,
            column: 43
          },
          end: {
            line: 85,
            column: 44
          }
        },
        loc: {
          start: {
            line: 85,
            column: 52
          },
          end: {
            line: 93,
            column: 9
          }
        },
        line: 85
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 96,
            column: 49
          },
          end: {
            line: 96,
            column: 50
          }
        },
        loc: {
          start: {
            line: 96,
            column: 55
          },
          end: {
            line: 99,
            column: 9
          }
        },
        line: 96
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        loc: {
          start: {
            line: 105,
            column: 18
          },
          end: {
            line: 123,
            column: 5
          }
        },
        line: 105
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 106,
            column: 31
          },
          end: {
            line: 106,
            column: 32
          }
        },
        loc: {
          start: {
            line: 106,
            column: 37
          },
          end: {
            line: 114,
            column: 9
          }
        },
        line: 106
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 120,
            column: 25
          },
          end: {
            line: 120,
            column: 26
          }
        },
        loc: {
          start: {
            line: 120,
            column: 31
          },
          end: {
            line: 122,
            column: 9
          }
        },
        line: 120
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 136,
            column: 4
          },
          end: {
            line: 136,
            column: 5
          }
        },
        loc: {
          start: {
            line: 136,
            column: 41
          },
          end: {
            line: 151,
            column: 5
          }
        },
        line: 136
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        loc: {
          start: {
            line: 159,
            column: 24
          },
          end: {
            line: 164,
            column: 5
          }
        },
        line: 159
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 5
          }
        },
        loc: {
          start: {
            line: 177,
            column: 33
          },
          end: {
            line: 206,
            column: 5
          }
        },
        line: 177
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 5
          }
        },
        loc: {
          start: {
            line: 213,
            column: 15
          },
          end: {
            line: 215,
            column: 5
          }
        },
        line: 213
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 222,
            column: 5
          }
        },
        loc: {
          start: {
            line: 222,
            column: 18
          },
          end: {
            line: 232,
            column: 5
          }
        },
        line: 222
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 240,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        },
        loc: {
          start: {
            line: 240,
            column: 21
          },
          end: {
            line: 242,
            column: 5
          }
        },
        line: 240
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 249,
            column: 5
          }
        },
        loc: {
          start: {
            line: 249,
            column: 24
          },
          end: {
            line: 251,
            column: 5
          }
        },
        line: 249
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 258,
            column: 5
          }
        },
        loc: {
          start: {
            line: 258,
            column: 22
          },
          end: {
            line: 260,
            column: 5
          }
        },
        line: 258
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 5
          }
        },
        loc: {
          start: {
            line: 267,
            column: 27
          },
          end: {
            line: 270,
            column: 5
          }
        },
        line: 267
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 277,
            column: 5
          }
        },
        loc: {
          start: {
            line: 277,
            column: 18
          },
          end: {
            line: 282,
            column: 5
          }
        },
        line: 277
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 293,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        },
        loc: {
          start: {
            line: 293,
            column: 21
          },
          end: {
            line: 299,
            column: 5
          }
        },
        line: 293
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 307,
            column: 4
          },
          end: {
            line: 307,
            column: 5
          }
        },
        loc: {
          start: {
            line: 307,
            column: 12
          },
          end: {
            line: 316,
            column: 5
          }
        },
        line: 307
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 323,
            column: 4
          },
          end: {
            line: 323,
            column: 5
          }
        },
        loc: {
          start: {
            line: 323,
            column: 20
          },
          end: {
            line: 333,
            column: 5
          }
        },
        line: 323
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 326,
            column: 26
          },
          end: {
            line: 326,
            column: 27
          }
        },
        loc: {
          start: {
            line: 326,
            column: 34
          },
          end: {
            line: 331,
            column: 9
          }
        },
        line: 326
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 336,
            column: 4
          },
          end: {
            line: 336,
            column: 5
          }
        },
        loc: {
          start: {
            line: 336,
            column: 19
          },
          end: {
            line: 341,
            column: 5
          }
        },
        line: 336
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 353,
            column: 4
          },
          end: {
            line: 353,
            column: 5
          }
        },
        loc: {
          start: {
            line: 353,
            column: 34
          },
          end: {
            line: 358,
            column: 5
          }
        },
        line: 353
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 367,
            column: 5
          }
        },
        loc: {
          start: {
            line: 367,
            column: 24
          },
          end: {
            line: 378,
            column: 5
          }
        },
        line: 367
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 385,
            column: 5
          }
        },
        loc: {
          start: {
            line: 385,
            column: 16
          },
          end: {
            line: 387,
            column: 5
          }
        },
        line: 385
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 394,
            column: 4
          },
          end: {
            line: 394,
            column: 5
          }
        },
        loc: {
          start: {
            line: 394,
            column: 21
          },
          end: {
            line: 400,
            column: 5
          }
        },
        line: 394
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 408,
            column: 4
          },
          end: {
            line: 408,
            column: 5
          }
        },
        loc: {
          start: {
            line: 408,
            column: 19
          },
          end: {
            line: 412,
            column: 5
          }
        },
        line: 408
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 418,
            column: 4
          },
          end: {
            line: 418,
            column: 5
          }
        },
        loc: {
          start: {
            line: 418,
            column: 14
          },
          end: {
            line: 439,
            column: 5
          }
        },
        line: 418
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 424,
            column: 49
          },
          end: {
            line: 424,
            column: 50
          }
        },
        loc: {
          start: {
            line: 424,
            column: 55
          },
          end: {
            line: 428,
            column: 9
          }
        },
        line: 424
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 87,
            column: 12
          },
          end: {
            line: 91,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 12
          },
          end: {
            line: 91,
            column: 13
          }
        }, {
          start: {
            line: 89,
            column: 19
          },
          end: {
            line: 91,
            column: 13
          }
        }],
        line: 87
      },
      "1": {
        loc: {
          start: {
            line: 107,
            column: 12
          },
          end: {
            line: 109,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 107,
            column: 12
          },
          end: {
            line: 109,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 107
      },
      "2": {
        loc: {
          start: {
            line: 139,
            column: 25
          },
          end: {
            line: 139,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 139,
            column: 25
          },
          end: {
            line: 139,
            column: 45
          }
        }, {
          start: {
            line: 139,
            column: 49
          },
          end: {
            line: 139,
            column: 54
          }
        }],
        line: 139
      },
      "3": {
        loc: {
          start: {
            line: 140,
            column: 24
          },
          end: {
            line: 140,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 140,
            column: 42
          },
          end: {
            line: 140,
            column: 48
          }
        }, {
          start: {
            line: 140,
            column: 51
          },
          end: {
            line: 140,
            column: 58
          }
        }],
        line: 140
      },
      "4": {
        loc: {
          start: {
            line: 145,
            column: 8
          },
          end: {
            line: 147,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 145,
            column: 8
          },
          end: {
            line: 147,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 145
      },
      "5": {
        loc: {
          start: {
            line: 161,
            column: 23
          },
          end: {
            line: 161,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 161,
            column: 23
          },
          end: {
            line: 161,
            column: 43
          }
        }, {
          start: {
            line: 161,
            column: 47
          },
          end: {
            line: 161,
            column: 52
          }
        }],
        line: 161
      },
      "6": {
        loc: {
          start: {
            line: 179,
            column: 8
          },
          end: {
            line: 184,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 179,
            column: 8
          },
          end: {
            line: 184,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 179
      },
      "7": {
        loc: {
          start: {
            line: 180,
            column: 12
          },
          end: {
            line: 181,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 180,
            column: 12
          },
          end: {
            line: 180,
            column: 48
          }
        }, {
          start: {
            line: 181,
            column: 12
          },
          end: {
            line: 181,
            column: 57
          }
        }],
        line: 180
      },
      "8": {
        loc: {
          start: {
            line: 191,
            column: 8
          },
          end: {
            line: 196,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 191,
            column: 8
          },
          end: {
            line: 196,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 191
      },
      "9": {
        loc: {
          start: {
            line: 191,
            column: 12
          },
          end: {
            line: 191,
            column: 76
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 191,
            column: 12
          },
          end: {
            line: 191,
            column: 43
          }
        }, {
          start: {
            line: 191,
            column: 47
          },
          end: {
            line: 191,
            column: 76
          }
        }],
        line: 191
      },
      "10": {
        loc: {
          start: {
            line: 191,
            column: 49
          },
          end: {
            line: 191,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 191,
            column: 49
          },
          end: {
            line: 191,
            column: 54
          }
        }, {
          start: {
            line: 191,
            column: 58
          },
          end: {
            line: 191,
            column: 75
          }
        }],
        line: 191
      },
      "11": {
        loc: {
          start: {
            line: 214,
            column: 15
          },
          end: {
            line: 214,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 214,
            column: 15
          },
          end: {
            line: 214,
            column: 26
          }
        }, {
          start: {
            line: 214,
            column: 30
          },
          end: {
            line: 214,
            column: 47
          }
        }],
        line: 214
      },
      "12": {
        loc: {
          start: {
            line: 223,
            column: 8
          },
          end: {
            line: 225,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 223,
            column: 8
          },
          end: {
            line: 225,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 223
      },
      "13": {
        loc: {
          start: {
            line: 226,
            column: 24
          },
          end: {
            line: 226,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 226,
            column: 24
          },
          end: {
            line: 226,
            column: 35
          }
        }, {
          start: {
            line: 226,
            column: 39
          },
          end: {
            line: 226,
            column: 49
          }
        }],
        line: 226
      },
      "14": {
        loc: {
          start: {
            line: 227,
            column: 8
          },
          end: {
            line: 230,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 227,
            column: 8
          },
          end: {
            line: 230,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 227
      },
      "15": {
        loc: {
          start: {
            line: 241,
            column: 15
          },
          end: {
            line: 241,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 241,
            column: 15
          },
          end: {
            line: 241,
            column: 25
          }
        }, {
          start: {
            line: 241,
            column: 29
          },
          end: {
            line: 241,
            column: 51
          }
        }],
        line: 241
      },
      "16": {
        loc: {
          start: {
            line: 250,
            column: 15
          },
          end: {
            line: 250,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 250,
            column: 15
          },
          end: {
            line: 250,
            column: 57
          }
        }, {
          start: {
            line: 250,
            column: 61
          },
          end: {
            line: 250,
            column: 62
          }
        }],
        line: 250
      },
      "17": {
        loc: {
          start: {
            line: 259,
            column: 15
          },
          end: {
            line: 259,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 259,
            column: 15
          },
          end: {
            line: 259,
            column: 32
          }
        }, {
          start: {
            line: 259,
            column: 36
          },
          end: {
            line: 259,
            column: 59
          }
        }],
        line: 259
      },
      "18": {
        loc: {
          start: {
            line: 268,
            column: 28
          },
          end: {
            line: 268,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 268,
            column: 28
          },
          end: {
            line: 268,
            column: 33
          }
        }, {
          start: {
            line: 268,
            column: 37
          },
          end: {
            line: 268,
            column: 38
          }
        }],
        line: 268
      },
      "19": {
        loc: {
          start: {
            line: 278,
            column: 8
          },
          end: {
            line: 280,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 278,
            column: 8
          },
          end: {
            line: 280,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 278
      },
      "20": {
        loc: {
          start: {
            line: 278,
            column: 12
          },
          end: {
            line: 278,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 278,
            column: 12
          },
          end: {
            line: 278,
            column: 25
          }
        }, {
          start: {
            line: 278,
            column: 29
          },
          end: {
            line: 278,
            column: 42
          }
        }],
        line: 278
      },
      "21": {
        loc: {
          start: {
            line: 296,
            column: 8
          },
          end: {
            line: 296,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 296,
            column: 8
          },
          end: {
            line: 296,
            column: 11
          }
        }, {
          start: {
            line: 296,
            column: 15
          },
          end: {
            line: 296,
            column: 35
          }
        }],
        line: 296
      },
      "22": {
        loc: {
          start: {
            line: 310,
            column: 8
          },
          end: {
            line: 312,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 310,
            column: 8
          },
          end: {
            line: 312,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 310
      },
      "23": {
        loc: {
          start: {
            line: 327,
            column: 12
          },
          end: {
            line: 330,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 327,
            column: 12
          },
          end: {
            line: 330,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 327
      },
      "24": {
        loc: {
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 340,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 340,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 337
      },
      "25": {
        loc: {
          start: {
            line: 354,
            column: 8
          },
          end: {
            line: 356,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 354,
            column: 8
          },
          end: {
            line: 356,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 354
      },
      "26": {
        loc: {
          start: {
            line: 357,
            column: 15
          },
          end: {
            line: 357,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 357,
            column: 15
          },
          end: {
            line: 357,
            column: 25
          }
        }, {
          start: {
            line: 357,
            column: 29
          },
          end: {
            line: 357,
            column: 31
          }
        }],
        line: 357
      },
      "27": {
        loc: {
          start: {
            line: 368,
            column: 8
          },
          end: {
            line: 375,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 368,
            column: 8
          },
          end: {
            line: 375,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 368
      },
      "28": {
        loc: {
          start: {
            line: 369,
            column: 12
          },
          end: {
            line: 373,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 369,
            column: 12
          },
          end: {
            line: 373,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 369
      },
      "29": {
        loc: {
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 399,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 399,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 397
      },
      "30": {
        loc: {
          start: {
            line: 425,
            column: 12
          },
          end: {
            line: 427,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 425,
            column: 12
          },
          end: {
            line: 427,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 425
      },
      "31": {
        loc: {
          start: {
            line: 430,
            column: 8
          },
          end: {
            line: 436,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 430,
            column: 8
          },
          end: {
            line: 436,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 430
      },
      "32": {
        loc: {
          start: {
            line: 431,
            column: 12
          },
          end: {
            line: 433,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 431,
            column: 12
          },
          end: {
            line: 431,
            column: 51
          }
        }, {
          start: {
            line: 432,
            column: 12
          },
          end: {
            line: 432,
            column: 22
          }
        }, {
          start: {
            line: 433,
            column: 12
          },
          end: {
            line: 433,
            column: 33
          }
        }],
        line: 431
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ad0d5d28e6299d99fa56baba01d3390aedb53c05"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dqjqai5xo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2dqjqai5xo();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * MediaElement backend
 */
var MediaElement = /*#__PURE__*/function (_WebAudio) {
  _inherits(MediaElement, _WebAudio);

  var _super = _createSuper(MediaElement);

  /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */
  function MediaElement(params) {
    var _this;

    _classCallCheck(this, MediaElement);

    cov_2dqjqai5xo().f[0]++;
    cov_2dqjqai5xo().s[0]++;
    _this = _super.call(this, params);
    /** @private */

    cov_2dqjqai5xo().s[1]++;
    _this.params = params;
    /**
     * Initially a dummy media element to catch errors. Once `_load` is
     * called, this will contain the actual `HTMLMediaElement`.
     * @private
     */

    cov_2dqjqai5xo().s[2]++;
    _this.media = {
      currentTime: 0,
      duration: 0,
      paused: true,
      playbackRate: 1,
      play: function play() {
        cov_2dqjqai5xo().f[1]++;
      },
      pause: function pause() {
        cov_2dqjqai5xo().f[2]++;
      },
      volume: 0
    };
    /** @private */

    cov_2dqjqai5xo().s[3]++;
    _this.mediaType = params.mediaType.toLowerCase();
    /** @private */

    cov_2dqjqai5xo().s[4]++;
    _this.elementPosition = params.elementPosition;
    /** @private */

    cov_2dqjqai5xo().s[5]++;
    _this.peaks = null;
    /** @private */

    cov_2dqjqai5xo().s[6]++;
    _this.playbackRate = 1;
    /** @private */

    cov_2dqjqai5xo().s[7]++;
    _this.volume = 1;
    /** @private */

    cov_2dqjqai5xo().s[8]++;
    _this.isMuted = false;
    /** @private */

    cov_2dqjqai5xo().s[9]++;
    _this.buffer = null;
    /** @private */

    cov_2dqjqai5xo().s[10]++;
    _this.onPlayEnd = null;
    /** @private */

    cov_2dqjqai5xo().s[11]++;
    _this.mediaListeners = {};
    return _this;
  }
  /**
   * Initialise the backend, called in `wavesurfer.createBackend()`
   */


  _createClass(MediaElement, [{
    key: "init",
    value: function init() {
      cov_2dqjqai5xo().f[3]++;
      cov_2dqjqai5xo().s[12]++;
      this.setPlaybackRate(this.params.audioRate);
      cov_2dqjqai5xo().s[13]++;
      this.createTimer();
    }
    /**
     * Attach event listeners to media element.
     */

  }, {
    key: "_setupMediaListeners",
    value: function _setupMediaListeners() {
      var _this2 = this;

      cov_2dqjqai5xo().f[4]++;
      cov_2dqjqai5xo().s[14]++;

      this.mediaListeners.error = function () {
        cov_2dqjqai5xo().f[5]++;
        cov_2dqjqai5xo().s[15]++;

        _this2.fireEvent('error', 'Error loading media element');
      };

      cov_2dqjqai5xo().s[16]++;

      this.mediaListeners.canplay = function () {
        cov_2dqjqai5xo().f[6]++;
        cov_2dqjqai5xo().s[17]++;

        _this2.fireEvent('canplay');
      };

      cov_2dqjqai5xo().s[18]++;

      this.mediaListeners.ended = function () {
        cov_2dqjqai5xo().f[7]++;
        cov_2dqjqai5xo().s[19]++;

        _this2.fireEvent('finish');
      }; // listen to and relay play, pause and seeked events to enable
      // playback control from the external media element


      cov_2dqjqai5xo().s[20]++;

      this.mediaListeners.play = function () {
        cov_2dqjqai5xo().f[8]++;
        cov_2dqjqai5xo().s[21]++;

        _this2.fireEvent('play');
      };

      cov_2dqjqai5xo().s[22]++;

      this.mediaListeners.pause = function () {
        cov_2dqjqai5xo().f[9]++;
        cov_2dqjqai5xo().s[23]++;

        _this2.fireEvent('pause');
      };

      cov_2dqjqai5xo().s[24]++;

      this.mediaListeners.seeked = function (event) {
        cov_2dqjqai5xo().f[10]++;
        cov_2dqjqai5xo().s[25]++;

        _this2.fireEvent('seek');
      };

      cov_2dqjqai5xo().s[26]++;

      this.mediaListeners.volumechange = function (event) {
        cov_2dqjqai5xo().f[11]++;
        cov_2dqjqai5xo().s[27]++;
        _this2.isMuted = _this2.media.muted;
        cov_2dqjqai5xo().s[28]++;

        if (_this2.isMuted) {
          cov_2dqjqai5xo().b[0][0]++;
          cov_2dqjqai5xo().s[29]++;
          _this2.volume = 0;
        } else {
          cov_2dqjqai5xo().b[0][1]++;
          cov_2dqjqai5xo().s[30]++;
          _this2.volume = _this2.media.volume;
        }

        cov_2dqjqai5xo().s[31]++;

        _this2.fireEvent('volume');
      }; // reset event listeners


      cov_2dqjqai5xo().s[32]++;
      Object.keys(this.mediaListeners).forEach(function (id) {
        cov_2dqjqai5xo().f[12]++;
        cov_2dqjqai5xo().s[33]++;

        _this2.media.removeEventListener(id, _this2.mediaListeners[id]);

        cov_2dqjqai5xo().s[34]++;

        _this2.media.addEventListener(id, _this2.mediaListeners[id]);
      });
    }
    /**
     * Create a timer to provide a more precise `audioprocess` event.
     */

  }, {
    key: "createTimer",
    value: function createTimer() {
      var _this3 = this;

      cov_2dqjqai5xo().f[13]++;
      cov_2dqjqai5xo().s[35]++;

      var onAudioProcess = function onAudioProcess() {
        cov_2dqjqai5xo().f[14]++;
        cov_2dqjqai5xo().s[36]++;

        if (_this3.isPaused()) {
          cov_2dqjqai5xo().b[1][0]++;
          cov_2dqjqai5xo().s[37]++;
          return;
        } else {
          cov_2dqjqai5xo().b[1][1]++;
        }

        cov_2dqjqai5xo().s[38]++;

        _this3.fireEvent('audioprocess', _this3.getCurrentTime()); // Call again in the next frame


        cov_2dqjqai5xo().s[39]++;
        util.frame(onAudioProcess)();
      };

      cov_2dqjqai5xo().s[40]++;
      this.on('play', onAudioProcess); // Update the progress one more time to prevent it from being stuck in
      // case of lower framerates

      cov_2dqjqai5xo().s[41]++;
      this.on('pause', function () {
        cov_2dqjqai5xo().f[15]++;
        cov_2dqjqai5xo().s[42]++;

        _this3.fireEvent('audioprocess', _this3.getCurrentTime());
      });
    }
    /**
     * Create media element with url as its source,
     * and append to container element.
     *
     * @param {string} url Path to media file
     * @param {HTMLElement} container HTML element
     * @param {number[]|Number.<Array[]>} peaks Array of peak data
     * @param {string} preload HTML 5 preload attribute value
     * @throws Will throw an error if the `url` argument is not a valid media
     * element.
     */

  }, {
    key: "load",
    value: function load(url, container, peaks, preload) {
      cov_2dqjqai5xo().f[16]++;
      var media = (cov_2dqjqai5xo().s[43]++, document.createElement(this.mediaType));
      cov_2dqjqai5xo().s[44]++;
      media.controls = this.params.mediaControls;
      cov_2dqjqai5xo().s[45]++;
      media.autoplay = (cov_2dqjqai5xo().b[2][0]++, this.params.autoplay) || (cov_2dqjqai5xo().b[2][1]++, false);
      cov_2dqjqai5xo().s[46]++;
      media.preload = preload == null ? (cov_2dqjqai5xo().b[3][0]++, 'auto') : (cov_2dqjqai5xo().b[3][1]++, preload);
      cov_2dqjqai5xo().s[47]++;
      media.src = url;
      cov_2dqjqai5xo().s[48]++;
      media.style.width = '100%';
      var prevMedia = (cov_2dqjqai5xo().s[49]++, container.querySelector(this.mediaType));
      cov_2dqjqai5xo().s[50]++;

      if (prevMedia) {
        cov_2dqjqai5xo().b[4][0]++;
        cov_2dqjqai5xo().s[51]++;
        container.removeChild(prevMedia);
      } else {
        cov_2dqjqai5xo().b[4][1]++;
      }

      cov_2dqjqai5xo().s[52]++;
      container.appendChild(media);
      cov_2dqjqai5xo().s[53]++;

      this._load(media, peaks, preload);
    }
    /**
     * Load existing media element.
     *
     * @param {HTMLMediaElement} elt HTML5 Audio or Video element
     * @param {number[]|Number.<Array[]>} peaks Array of peak data
     */

  }, {
    key: "loadElt",
    value: function loadElt(elt, peaks) {
      cov_2dqjqai5xo().f[17]++;
      cov_2dqjqai5xo().s[54]++;
      elt.controls = this.params.mediaControls;
      cov_2dqjqai5xo().s[55]++;
      elt.autoplay = (cov_2dqjqai5xo().b[5][0]++, this.params.autoplay) || (cov_2dqjqai5xo().b[5][1]++, false);
      cov_2dqjqai5xo().s[56]++;

      this._load(elt, peaks, elt.preload);
    }
    /**
     * Method called by both `load` (from url)
     * and `loadElt` (existing media element) methods.
     *
     * @param {HTMLMediaElement} media HTML5 Audio or Video element
     * @param {number[]|Number.<Array[]>} peaks Array of peak data
     * @param {string} preload HTML 5 preload attribute value
     * @throws Will throw an error if the `media` argument is not a valid media
     * element.
     * @private
     */

  }, {
    key: "_load",
    value: function _load(media, peaks, preload) {
      cov_2dqjqai5xo().f[18]++;
      cov_2dqjqai5xo().s[57]++;

      // verify media element is valid
      if ((cov_2dqjqai5xo().b[7][0]++, !(media instanceof HTMLMediaElement)) || (cov_2dqjqai5xo().b[7][1]++, typeof media.addEventListener === 'undefined')) {
        cov_2dqjqai5xo().b[6][0]++;
        cov_2dqjqai5xo().s[58]++;
        throw new Error('media parameter is not a valid media element');
      } else {
        cov_2dqjqai5xo().b[6][1]++;
      } // load must be called manually on iOS, otherwise peaks won't draw
      // until a user interaction triggers load --> 'ready' event
      //
      // note that we avoid calling media.load here when given peaks and preload == 'none'
      // as this almost always triggers some browser fetch of the media.


      cov_2dqjqai5xo().s[59]++;

      if ((cov_2dqjqai5xo().b[9][0]++, typeof media.load == 'function') && (cov_2dqjqai5xo().b[9][1]++, !((cov_2dqjqai5xo().b[10][0]++, peaks) && (cov_2dqjqai5xo().b[10][1]++, preload == 'none')))) {
        cov_2dqjqai5xo().b[8][0]++;
        cov_2dqjqai5xo().s[60]++;
        // Resets the media element and restarts the media resource. Any
        // pending events are discarded. How much media data is fetched is
        // still affected by the preload attribute.
        media.load();
      } else {
        cov_2dqjqai5xo().b[8][1]++;
      }

      cov_2dqjqai5xo().s[61]++;
      this.media = media;
      cov_2dqjqai5xo().s[62]++;

      this._setupMediaListeners();

      cov_2dqjqai5xo().s[63]++;
      this.peaks = peaks;
      cov_2dqjqai5xo().s[64]++;
      this.onPlayEnd = null;
      cov_2dqjqai5xo().s[65]++;
      this.buffer = null;
      cov_2dqjqai5xo().s[66]++;
      this.isMuted = media.muted;
      cov_2dqjqai5xo().s[67]++;
      this.setPlaybackRate(this.playbackRate);
      cov_2dqjqai5xo().s[68]++;
      this.setVolume(this.volume);
    }
    /**
     * Used by `wavesurfer.isPlaying()` and `wavesurfer.playPause()`
     *
     * @return {boolean} Media paused or not
     */

  }, {
    key: "isPaused",
    value: function isPaused() {
      cov_2dqjqai5xo().f[19]++;
      cov_2dqjqai5xo().s[69]++;
      return (cov_2dqjqai5xo().b[11][0]++, !this.media) || (cov_2dqjqai5xo().b[11][1]++, this.media.paused);
    }
    /**
     * Used by `wavesurfer.getDuration()`
     *
     * @return {number} Duration
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      cov_2dqjqai5xo().f[20]++;
      cov_2dqjqai5xo().s[70]++;

      if (this.explicitDuration) {
        cov_2dqjqai5xo().b[12][0]++;
        cov_2dqjqai5xo().s[71]++;
        return this.explicitDuration;
      } else {
        cov_2dqjqai5xo().b[12][1]++;
      }

      var duration = (cov_2dqjqai5xo().s[72]++, ((cov_2dqjqai5xo().b[13][0]++, this.buffer) || (cov_2dqjqai5xo().b[13][1]++, this.media)).duration);
      cov_2dqjqai5xo().s[73]++;

      if (duration >= Infinity) {
        cov_2dqjqai5xo().b[14][0]++;
        cov_2dqjqai5xo().s[74]++;
        // streaming audio
        duration = this.media.seekable.end(0);
      } else {
        cov_2dqjqai5xo().b[14][1]++;
      }

      cov_2dqjqai5xo().s[75]++;
      return duration;
    }
    /**
     * Returns the current time in seconds relative to the audio-clip's
     * duration.
     *
     * @return {number} Current time
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      cov_2dqjqai5xo().f[21]++;
      cov_2dqjqai5xo().s[76]++;
      return (cov_2dqjqai5xo().b[15][0]++, this.media) && (cov_2dqjqai5xo().b[15][1]++, this.media.currentTime);
    }
    /**
     * Get the position from 0 to 1
     *
     * @return {number} Current position
     */

  }, {
    key: "getPlayedPercents",
    value: function getPlayedPercents() {
      cov_2dqjqai5xo().f[22]++;
      cov_2dqjqai5xo().s[77]++;
      return (cov_2dqjqai5xo().b[16][0]++, this.getCurrentTime() / this.getDuration()) || (cov_2dqjqai5xo().b[16][1]++, 0);
    }
    /**
     * Get the audio source playback rate.
     *
     * @return {number} Playback rate
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      cov_2dqjqai5xo().f[23]++;
      cov_2dqjqai5xo().s[78]++;
      return (cov_2dqjqai5xo().b[17][0]++, this.playbackRate) || (cov_2dqjqai5xo().b[17][1]++, this.media.playbackRate);
    }
    /**
     * Set the audio source playback rate.
     *
     * @param {number} value Playback rate
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(value) {
      cov_2dqjqai5xo().f[24]++;
      cov_2dqjqai5xo().s[79]++;
      this.playbackRate = (cov_2dqjqai5xo().b[18][0]++, value) || (cov_2dqjqai5xo().b[18][1]++, 1);
      cov_2dqjqai5xo().s[80]++;
      this.media.playbackRate = this.playbackRate;
    }
    /**
     * Used by `wavesurfer.seekTo()`
     *
     * @param {number} start Position to start at in seconds
     */

  }, {
    key: "seekTo",
    value: function seekTo(start) {
      cov_2dqjqai5xo().f[25]++;
      cov_2dqjqai5xo().s[81]++;

      if ((cov_2dqjqai5xo().b[20][0]++, start != null) && (cov_2dqjqai5xo().b[20][1]++, !isNaN(start))) {
        cov_2dqjqai5xo().b[19][0]++;
        cov_2dqjqai5xo().s[82]++;
        this.media.currentTime = start;
      } else {
        cov_2dqjqai5xo().b[19][1]++;
      }

      cov_2dqjqai5xo().s[83]++;
      this.clearPlayEnd();
    }
    /**
     * Plays the loaded audio region.
     *
     * @param {number} start Start offset in seconds, relative to the beginning
     * of a clip.
     * @param {number} end When to stop, relative to the beginning of a clip.
     * @emits MediaElement#play
     * @return {Promise} Result
     */

  }, {
    key: "play",
    value: function play(start, end) {
      cov_2dqjqai5xo().f[26]++;
      cov_2dqjqai5xo().s[84]++;
      this.seekTo(start);
      var promise = (cov_2dqjqai5xo().s[85]++, this.media.play());
      cov_2dqjqai5xo().s[86]++;
      (cov_2dqjqai5xo().b[21][0]++, end) && (cov_2dqjqai5xo().b[21][1]++, this.setPlayEnd(end));
      cov_2dqjqai5xo().s[87]++;
      return promise;
    }
    /**
     * Pauses the loaded audio.
     *
     * @emits MediaElement#pause
     * @return {Promise} Result
     */

  }, {
    key: "pause",
    value: function pause() {
      cov_2dqjqai5xo().f[27]++;
      var promise;
      cov_2dqjqai5xo().s[88]++;

      if (this.media) {
        cov_2dqjqai5xo().b[22][0]++;
        cov_2dqjqai5xo().s[89]++;
        promise = this.media.pause();
      } else {
        cov_2dqjqai5xo().b[22][1]++;
      }

      cov_2dqjqai5xo().s[90]++;
      this.clearPlayEnd();
      cov_2dqjqai5xo().s[91]++;
      return promise;
    }
    /**
     * Set the play end
     *
     * @param {number} end Where to end
     */

  }, {
    key: "setPlayEnd",
    value: function setPlayEnd(end) {
      var _this4 = this;

      cov_2dqjqai5xo().f[28]++;
      cov_2dqjqai5xo().s[92]++;
      this.clearPlayEnd();
      cov_2dqjqai5xo().s[93]++;

      this._onPlayEnd = function (time) {
        cov_2dqjqai5xo().f[29]++;
        cov_2dqjqai5xo().s[94]++;

        if (time >= end) {
          cov_2dqjqai5xo().b[23][0]++;
          cov_2dqjqai5xo().s[95]++;

          _this4.pause();

          cov_2dqjqai5xo().s[96]++;

          _this4.seekTo(end);
        } else {
          cov_2dqjqai5xo().b[23][1]++;
        }
      };

      cov_2dqjqai5xo().s[97]++;
      this.on('audioprocess', this._onPlayEnd);
    }
    /** @private */

  }, {
    key: "clearPlayEnd",
    value: function clearPlayEnd() {
      cov_2dqjqai5xo().f[30]++;
      cov_2dqjqai5xo().s[98]++;

      if (this._onPlayEnd) {
        cov_2dqjqai5xo().b[24][0]++;
        cov_2dqjqai5xo().s[99]++;
        this.un('audioprocess', this._onPlayEnd);
        cov_2dqjqai5xo().s[100]++;
        this._onPlayEnd = null;
      } else {
        cov_2dqjqai5xo().b[24][1]++;
      }
    }
    /**
     * Compute the max and min value of the waveform when broken into
     * <length> subranges.
     *
     * @param {number} length How many subranges to break the waveform into.
     * @param {number} first First sample in the required range.
     * @param {number} last Last sample in the required range.
     * @return {number[]|Number.<Array[]>} Array of 2*<length> peaks or array of
     * arrays of peaks consisting of (max, min) values for each subrange.
     */

  }, {
    key: "getPeaks",
    value: function getPeaks(length, first, last) {
      cov_2dqjqai5xo().f[31]++;
      cov_2dqjqai5xo().s[101]++;

      if (this.buffer) {
        cov_2dqjqai5xo().b[25][0]++;
        cov_2dqjqai5xo().s[102]++;
        return _get(_getPrototypeOf(MediaElement.prototype), "getPeaks", this).call(this, length, first, last);
      } else {
        cov_2dqjqai5xo().b[25][1]++;
      }

      cov_2dqjqai5xo().s[103]++;
      return (cov_2dqjqai5xo().b[26][0]++, this.peaks) || (cov_2dqjqai5xo().b[26][1]++, []);
    }
    /**
     * Set the sink id for the media player
     *
     * @param {string} deviceId String value representing audio device id.
     * @returns {Promise} A Promise that resolves to `undefined` when there
     * are no errors.
     */

  }, {
    key: "setSinkId",
    value: function setSinkId(deviceId) {
      cov_2dqjqai5xo().f[32]++;
      cov_2dqjqai5xo().s[104]++;

      if (deviceId) {
        cov_2dqjqai5xo().b[27][0]++;
        cov_2dqjqai5xo().s[105]++;

        if (!this.media.setSinkId) {
          cov_2dqjqai5xo().b[28][0]++;
          cov_2dqjqai5xo().s[106]++;
          return Promise.reject(new Error('setSinkId is not supported in your browser'));
        } else {
          cov_2dqjqai5xo().b[28][1]++;
        }

        cov_2dqjqai5xo().s[107]++;
        return this.media.setSinkId(deviceId);
      } else {
        cov_2dqjqai5xo().b[27][1]++;
      }

      cov_2dqjqai5xo().s[108]++;
      return Promise.reject(new Error('Invalid deviceId: ' + deviceId));
    }
    /**
     * Get the current volume
     *
     * @return {number} value A floating point value between 0 and 1.
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      cov_2dqjqai5xo().f[33]++;
      cov_2dqjqai5xo().s[109]++;
      return this.volume;
    }
    /**
     * Set the audio volume
     *
     * @param {number} value A floating point value between 0 and 1.
     */

  }, {
    key: "setVolume",
    value: function setVolume(value) {
      cov_2dqjqai5xo().f[34]++;
      cov_2dqjqai5xo().s[110]++;
      this.volume = value; // no need to change when it's already at that volume

      cov_2dqjqai5xo().s[111]++;

      if (this.media.volume !== this.volume) {
        cov_2dqjqai5xo().b[29][0]++;
        cov_2dqjqai5xo().s[112]++;
        this.media.volume = this.volume;
      } else {
        cov_2dqjqai5xo().b[29][1]++;
      }
    }
    /**
     * Enable or disable muted audio
     *
     * @since 4.0.0
     * @param {boolean} muted Specify `true` to mute audio.
     */

  }, {
    key: "setMute",
    value: function setMute(muted) {
      cov_2dqjqai5xo().f[35]++;
      cov_2dqjqai5xo().s[113]++;
      // This causes a volume change to be emitted too through the
      // volumechange event listener.
      this.isMuted = this.media.muted = muted;
    }
    /**
     * This is called when wavesurfer is destroyed
     *
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      cov_2dqjqai5xo().f[36]++;
      cov_2dqjqai5xo().s[114]++;
      this.pause();
      cov_2dqjqai5xo().s[115]++;
      this.unAll();
      cov_2dqjqai5xo().s[116]++;
      this.destroyed = true; // cleanup media event listeners

      cov_2dqjqai5xo().s[117]++;
      Object.keys(this.mediaListeners).forEach(function (id) {
        cov_2dqjqai5xo().f[37]++;
        cov_2dqjqai5xo().s[118]++;

        if (_this5.media) {
          cov_2dqjqai5xo().b[30][0]++;
          cov_2dqjqai5xo().s[119]++;

          _this5.media.removeEventListener(id, _this5.mediaListeners[id]);
        } else {
          cov_2dqjqai5xo().b[30][1]++;
        }
      });
      cov_2dqjqai5xo().s[120]++;

      if ((cov_2dqjqai5xo().b[32][0]++, this.params.removeMediaElementOnDestroy) && (cov_2dqjqai5xo().b[32][1]++, this.media) && (cov_2dqjqai5xo().b[32][2]++, this.media.parentNode)) {
        cov_2dqjqai5xo().b[31][0]++;
        cov_2dqjqai5xo().s[121]++;
        this.media.parentNode.removeChild(this.media);
      } else {
        cov_2dqjqai5xo().b[31][1]++;
      }

      cov_2dqjqai5xo().s[122]++;
      this.media = null;
    }
  }]);

  return MediaElement;
}(_webaudio.default);

exports["default"] = MediaElement;
module.exports = exports.default;

/***/ }),

/***/ "./src/peakcache.js":
/*!**************************!*\
  !*** ./src/peakcache.js ***!
  \**************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

function cov_okj2et6by() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/peakcache.js";
  var hash = "8c945ca517368f245f8f122eec80005fe7b06807";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/peakcache.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 30
        }
      },
      "1": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 34
        }
      },
      "2": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 34
        }
      },
      "3": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 45,
          column: 9
        }
      },
      "4": {
        start: {
          line: 43,
          column: 12
        },
        end: {
          line: 43,
          column: 34
        }
      },
      "5": {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 44,
          column: 42
        }
      },
      "6": {
        start: {
          line: 48,
          column: 29
        },
        end: {
          line: 48,
          column: 31
        }
      },
      "7": {
        start: {
          line: 49,
          column: 16
        },
        end: {
          line: 49,
          column: 17
        }
      },
      "8": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 56,
          column: 9
        }
      },
      "9": {
        start: {
          line: 55,
          column: 12
        },
        end: {
          line: 55,
          column: 16
        }
      },
      "10": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 63,
          column: 9
        }
      },
      "11": {
        start: {
          line: 62,
          column: 12
        },
        end: {
          line: 62,
          column: 39
        }
      },
      "12": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 70,
          column: 9
        }
      },
      "13": {
        start: {
          line: 68,
          column: 12
        },
        end: {
          line: 68,
          column: 57
        }
      },
      "14": {
        start: {
          line: 69,
          column: 12
        },
        end: {
          line: 69,
          column: 16
        }
      },
      "15": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 74,
          column: 9
        }
      },
      "16": {
        start: {
          line: 73,
          column: 12
        },
        end: {
          line: 73,
          column: 37
        }
      },
      "17": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 84,
          column: 11
        }
      },
      "18": {
        start: {
          line: 78,
          column: 12
        },
        end: {
          line: 82,
          column: 13
        }
      },
      "19": {
        start: {
          line: 79,
          column: 16
        },
        end: {
          line: 79,
          column: 44
        }
      },
      "20": {
        start: {
          line: 80,
          column: 19
        },
        end: {
          line: 82,
          column: 13
        }
      },
      "21": {
        start: {
          line: 81,
          column: 16
        },
        end: {
          line: 81,
          column: 44
        }
      },
      "22": {
        start: {
          line: 83,
          column: 12
        },
        end: {
          line: 83,
          column: 64
        }
      },
      "23": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 89,
          column: 75
        }
      },
      "24": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 99,
          column: 15
        }
      },
      "25": {
        start: {
          line: 91,
          column: 28
        },
        end: {
          line: 91,
          column: 33
        }
      },
      "26": {
        start: {
          line: 93,
          column: 16
        },
        end: {
          line: 97,
          column: 17
        }
      },
      "27": {
        start: {
          line: 94,
          column: 20
        },
        end: {
          line: 94,
          column: 48
        }
      },
      "28": {
        start: {
          line: 95,
          column: 23
        },
        end: {
          line: 97,
          column: 17
        }
      },
      "29": {
        start: {
          line: 96,
          column: 20
        },
        end: {
          line: 96,
          column: 48
        }
      },
      "30": {
        start: {
          line: 98,
          column: 16
        },
        end: {
          line: 98,
          column: 68
        }
      },
      "31": {
        start: {
          line: 103,
          column: 35
        },
        end: {
          line: 103,
          column: 37
        }
      },
      "32": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 106,
          column: 9
        }
      },
      "33": {
        start: {
          line: 105,
          column: 12
        },
        end: {
          line: 105,
          column: 80
        }
      },
      "34": {
        start: {
          line: 108,
          column: 8
        },
        end: {
          line: 108,
          column: 34
        }
      },
      "35": {
        start: {
          line: 117,
          column: 36
        },
        end: {
          line: 117,
          column: 38
        }
      },
      "36": {
        start: {
          line: 119,
          column: 8
        },
        end: {
          line: 124,
          column: 9
        }
      },
      "37": {
        start: {
          line: 120,
          column: 12
        },
        end: {
          line: 123,
          column: 15
        }
      },
      "38": {
        start: {
          line: 125,
          column: 8
        },
        end: {
          line: 125,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 18
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 21
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        loc: {
          start: {
            line: 41,
            column: 44
          },
          end: {
            line: 109,
            column: 5
          }
        },
        line: 41
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 77,
            column: 47
          },
          end: {
            line: 77,
            column: 48
          }
        },
        loc: {
          start: {
            line: 77,
            column: 67
          },
          end: {
            line: 84,
            column: 9
          }
        },
        line: 77
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 91,
            column: 18
          },
          end: {
            line: 91,
            column: 19
          }
        },
        loc: {
          start: {
            line: 91,
            column: 28
          },
          end: {
            line: 91,
            column: 33
          }
        },
        line: 91
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 92,
            column: 20
          },
          end: {
            line: 92,
            column: 21
          }
        },
        loc: {
          start: {
            line: 92,
            column: 40
          },
          end: {
            line: 99,
            column: 13
          }
        },
        line: 92
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        loc: {
          start: {
            line: 116,
            column: 21
          },
          end: {
            line: 126,
            column: 5
          }
        },
        line: 116
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 45,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 45,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 42
      },
      "1": {
        loc: {
          start: {
            line: 52,
            column: 12
          },
          end: {
            line: 53,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 52,
            column: 12
          },
          end: {
            line: 52,
            column: 43
          }
        }, {
          start: {
            line: 53,
            column: 12
          },
          end: {
            line: 53,
            column: 43
          }
        }],
        line: 52
      },
      "2": {
        loc: {
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 63,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 63,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 61
      },
      "3": {
        loc: {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 66,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 65,
            column: 43
          }
        }, {
          start: {
            line: 66,
            column: 12
          },
          end: {
            line: 66,
            column: 42
          }
        }],
        line: 65
      },
      "4": {
        loc: {
          start: {
            line: 72,
            column: 8
          },
          end: {
            line: 74,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 72,
            column: 8
          },
          end: {
            line: 74,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 72
      },
      "5": {
        loc: {
          start: {
            line: 78,
            column: 12
          },
          end: {
            line: 82,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 78,
            column: 12
          },
          end: {
            line: 82,
            column: 13
          }
        }, {
          start: {
            line: 80,
            column: 19
          },
          end: {
            line: 82,
            column: 13
          }
        }],
        line: 78
      },
      "6": {
        loc: {
          start: {
            line: 80,
            column: 19
          },
          end: {
            line: 82,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 19
          },
          end: {
            line: 82,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 80
      },
      "7": {
        loc: {
          start: {
            line: 83,
            column: 19
          },
          end: {
            line: 83,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 83,
            column: 19
          },
          end: {
            line: 83,
            column: 39
          }
        }, {
          start: {
            line: 83,
            column: 43
          },
          end: {
            line: 83,
            column: 63
          }
        }],
        line: 83
      },
      "8": {
        loc: {
          start: {
            line: 93,
            column: 16
          },
          end: {
            line: 97,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 93,
            column: 16
          },
          end: {
            line: 97,
            column: 17
          }
        }, {
          start: {
            line: 95,
            column: 23
          },
          end: {
            line: 97,
            column: 17
          }
        }],
        line: 93
      },
      "9": {
        loc: {
          start: {
            line: 95,
            column: 23
          },
          end: {
            line: 97,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 95,
            column: 23
          },
          end: {
            line: 97,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 95
      },
      "10": {
        loc: {
          start: {
            line: 98,
            column: 23
          },
          end: {
            line: 98,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 98,
            column: 23
          },
          end: {
            line: 98,
            column: 43
          }
        }, {
          start: {
            line: 98,
            column: 47
          },
          end: {
            line: 98,
            column: 67
          }
        }],
        line: 98
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8c945ca517368f245f8f122eec80005fe7b06807"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_okj2et6by = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_okj2et6by();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Caches the decoded peaks data to improve rendering speed for large audio
 *
 * Is used if the option parameter `partialRender` is set to `true`
 */
var PeakCache = /*#__PURE__*/function () {
  /**
   * Instantiate cache
   */
  function PeakCache() {
    _classCallCheck(this, PeakCache);

    cov_okj2et6by().f[0]++;
    cov_okj2et6by().s[0]++;
    this.clearPeakCache();
  }
  /**
   * Empty the cache
   */


  _createClass(PeakCache, [{
    key: "clearPeakCache",
    value: function clearPeakCache() {
      cov_okj2et6by().f[1]++;
      cov_okj2et6by().s[1]++;

      /**
       * Flat array with entries that are always in pairs to mark the
       * beginning and end of each subrange.  This is a convenience so we can
       * iterate over the pairs for easy set difference operations.
       * @private
       */
      this.peakCacheRanges = [];
      /**
       * Length of the entire cachable region, used for resetting the cache
       * when this changes (zoom events, for instance).
       * @private
       */

      cov_okj2et6by().s[2]++;
      this.peakCacheLength = -1;
    }
    /**
     * Add a range of peaks to the cache
     *
     * @param {number} length The length of the range
     * @param {number} start The x offset of the start of the range
     * @param {number} end The x offset of the end of the range
     * @return {Number.<Array[]>} Array with arrays of numbers
     */

  }, {
    key: "addRangeToPeakCache",
    value: function addRangeToPeakCache(length, start, end) {
      cov_okj2et6by().f[2]++;
      cov_okj2et6by().s[3]++;

      if (length != this.peakCacheLength) {
        cov_okj2et6by().b[0][0]++;
        cov_okj2et6by().s[4]++;
        this.clearPeakCache();
        cov_okj2et6by().s[5]++;
        this.peakCacheLength = length;
      } else {
        cov_okj2et6by().b[0][1]++;
      } // Return ranges that weren't in the cache before the call.


      var uncachedRanges = (cov_okj2et6by().s[6]++, []);
      var i = (cov_okj2et6by().s[7]++, 0); // Skip ranges before the current start.

      cov_okj2et6by().s[8]++;

      while ((cov_okj2et6by().b[1][0]++, i < this.peakCacheRanges.length) && (cov_okj2et6by().b[1][1]++, this.peakCacheRanges[i] < start)) {
        cov_okj2et6by().s[9]++;
        i++;
      } // If |i| is even, |start| falls after an existing range.  Otherwise,
      // |start| falls between an existing range, and the uncached region
      // starts when we encounter the next node in |peakCacheRanges| or
      // |end|, whichever comes first.


      cov_okj2et6by().s[10]++;

      if (i % 2 == 0) {
        cov_okj2et6by().b[2][0]++;
        cov_okj2et6by().s[11]++;
        uncachedRanges.push(start);
      } else {
        cov_okj2et6by().b[2][1]++;
      }

      cov_okj2et6by().s[12]++;

      while ((cov_okj2et6by().b[3][0]++, i < this.peakCacheRanges.length) && (cov_okj2et6by().b[3][1]++, this.peakCacheRanges[i] <= end)) {
        cov_okj2et6by().s[13]++;
        uncachedRanges.push(this.peakCacheRanges[i]);
        cov_okj2et6by().s[14]++;
        i++;
      } // If |i| is even, |end| is after all existing ranges.


      cov_okj2et6by().s[15]++;

      if (i % 2 == 0) {
        cov_okj2et6by().b[4][0]++;
        cov_okj2et6by().s[16]++;
        uncachedRanges.push(end);
      } else {
        cov_okj2et6by().b[4][1]++;
      } // Filter out the 0-length ranges.


      cov_okj2et6by().s[17]++;
      uncachedRanges = uncachedRanges.filter(function (item, pos, arr) {
        cov_okj2et6by().f[3]++;
        cov_okj2et6by().s[18]++;

        if (pos == 0) {
          cov_okj2et6by().b[5][0]++;
          cov_okj2et6by().s[19]++;
          return item != arr[pos + 1];
        } else {
          cov_okj2et6by().b[5][1]++;
          cov_okj2et6by().s[20]++;

          if (pos == arr.length - 1) {
            cov_okj2et6by().b[6][0]++;
            cov_okj2et6by().s[21]++;
            return item != arr[pos - 1];
          } else {
            cov_okj2et6by().b[6][1]++;
          }
        }

        cov_okj2et6by().s[22]++;
        return (cov_okj2et6by().b[7][0]++, item != arr[pos - 1]) && (cov_okj2et6by().b[7][1]++, item != arr[pos + 1]);
      }); // Merge the two ranges together, uncachedRanges will either contain
      // wholly new points, or duplicates of points in peakCacheRanges.  If
      // duplicates are detected, remove both and extend the range.

      cov_okj2et6by().s[23]++;
      this.peakCacheRanges = this.peakCacheRanges.concat(uncachedRanges);
      cov_okj2et6by().s[24]++;
      this.peakCacheRanges = this.peakCacheRanges.sort(function (a, b) {
        cov_okj2et6by().f[4]++;
        cov_okj2et6by().s[25]++;
        return a - b;
      }).filter(function (item, pos, arr) {
        cov_okj2et6by().f[5]++;
        cov_okj2et6by().s[26]++;

        if (pos == 0) {
          cov_okj2et6by().b[8][0]++;
          cov_okj2et6by().s[27]++;
          return item != arr[pos + 1];
        } else {
          cov_okj2et6by().b[8][1]++;
          cov_okj2et6by().s[28]++;

          if (pos == arr.length - 1) {
            cov_okj2et6by().b[9][0]++;
            cov_okj2et6by().s[29]++;
            return item != arr[pos - 1];
          } else {
            cov_okj2et6by().b[9][1]++;
          }
        }

        cov_okj2et6by().s[30]++;
        return (cov_okj2et6by().b[10][0]++, item != arr[pos - 1]) && (cov_okj2et6by().b[10][1]++, item != arr[pos + 1]);
      }); // Push the uncached ranges into an array of arrays for ease of
      // iteration in the functions that call this.

      var uncachedRangePairs = (cov_okj2et6by().s[31]++, []);
      cov_okj2et6by().s[32]++;

      for (i = 0; i < uncachedRanges.length; i += 2) {
        cov_okj2et6by().s[33]++;
        uncachedRangePairs.push([uncachedRanges[i], uncachedRanges[i + 1]]);
      }

      cov_okj2et6by().s[34]++;
      return uncachedRangePairs;
    }
    /**
     * For testing
     *
     * @return {Number.<Array[]>} Array with arrays of numbers
     */

  }, {
    key: "getCacheRanges",
    value: function getCacheRanges() {
      cov_okj2et6by().f[6]++;
      var peakCacheRangePairs = (cov_okj2et6by().s[35]++, []);
      var i;
      cov_okj2et6by().s[36]++;

      for (i = 0; i < this.peakCacheRanges.length; i += 2) {
        cov_okj2et6by().s[37]++;
        peakCacheRangePairs.push([this.peakCacheRanges[i], this.peakCacheRanges[i + 1]]);
      }

      cov_okj2et6by().s[38]++;
      return peakCacheRangePairs;
    }
  }]);

  return PeakCache;
}();

exports["default"] = PeakCache;
module.exports = exports.default;

/***/ }),

/***/ "./src/util/absMax.js":
/*!****************************!*\
  !*** ./src/util/absMax.js ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = absMax;

var _max = _interopRequireDefault(__webpack_require__(/*! ./max */ "./src/util/max.js"));

var _min = _interopRequireDefault(__webpack_require__(/*! ./min */ "./src/util/min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_x2gqplkm6() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/absMax.js";
  var hash = "2934f2fe904d6325b11df2e27d184e6c56b1e918";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/absMax.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 16
        },
        end: {
          line: 13,
          column: 31
        }
      },
      "1": {
        start: {
          line: 14,
          column: 16
        },
        end: {
          line: 14,
          column: 31
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "absMax",
        decl: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 12,
            column: 30
          }
        },
        loc: {
          start: {
            line: 12,
            column: 39
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 11
          },
          end: {
            line: 15,
            column: 34
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 28
          }
        }, {
          start: {
            line: 15,
            column: 31
          },
          end: {
            line: 15,
            column: 34
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2934f2fe904d6325b11df2e27d184e6c56b1e918"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_x2gqplkm6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_x2gqplkm6();

/**
 * Get the largest absolute value in an array
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Largest number found
 * @example console.log(max([-3, 2, 1]), max([-3, 2, 4])); // logs 3 4
 * @since 4.3.0
 */
function absMax(values) {
  cov_x2gqplkm6().f[0]++;
  var max = (cov_x2gqplkm6().s[0]++, (0, _max.default)(values));
  var min = (cov_x2gqplkm6().s[1]++, (0, _min.default)(values));
  cov_x2gqplkm6().s[2]++;
  return -min > max ? (cov_x2gqplkm6().b[0][0]++, -min) : (cov_x2gqplkm6().b[0][1]++, max);
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/clamp.js":
/*!***************************!*\
  !*** ./src/util/clamp.js ***!
  \***************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = clamp;

function cov_1muiwewd09() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/clamp.js";
  var hash = "5939c9d4da3a1ffa263c7a987ca211254b0276f0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/clamp.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "clamp",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 29
          }
        },
        loc: {
          start: {
            line: 9,
            column: 45
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5939c9d4da3a1ffa263c7a987ca211254b0276f0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1muiwewd09 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1muiwewd09();

/**
 * Returns a number limited to the given range.
 *
 * @param {number} val The number to be limited to a range
 * @param {number} min The lower boundary of the limit range
 * @param {number} max The upper boundary of the limit range
 * @returns {number} A number in the range [min, max]
 */
function clamp(val, min, max) {
  cov_1muiwewd09().f[0]++;
  cov_1muiwewd09().s[0]++;
  return Math.min(Math.max(min, val), max);
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/fetch.js":
/*!***************************!*\
  !*** ./src/util/fetch.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = fetchFile;

var _observer = _interopRequireDefault(__webpack_require__(/*! ./observer */ "./src/util/observer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_2pzypfniv9() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/fetch.js";
  var hash = "5156b346be1b458ab9f8c4774d2c99c78a10ab46";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/fetch.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 33
        }
      },
      "1": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 58
        }
      },
      "2": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 49
        }
      },
      "3": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 24
        }
      },
      "4": {
        start: {
          line: 31,
          column: 21
        },
        end: {
          line: 67,
          column: 9
        }
      },
      "5": {
        start: {
          line: 34,
          column: 12
        },
        end: {
          line: 66,
          column: 19
        }
      },
      "6": {
        start: {
          line: 40,
          column: 20
        },
        end: {
          line: 52,
          column: 21
        }
      },
      "7": {
        start: {
          line: 42,
          column: 24
        },
        end: {
          line: 48,
          column: 25
        }
      },
      "8": {
        start: {
          line: 43,
          column: 28
        },
        end: {
          line: 47,
          column: 31
        }
      },
      "9": {
        start: {
          line: 50,
          column: 24
        },
        end: {
          line: 50,
          column: 43
        }
      },
      "10": {
        start: {
          line: 51,
          column: 24
        },
        end: {
          line: 51,
          column: 31
        }
      },
      "11": {
        start: {
          line: 54,
          column: 20
        },
        end: {
          line: 54,
          column: 52
        }
      },
      "12": {
        start: {
          line: 55,
          column: 20
        },
        end: {
          line: 59,
          column: 23
        }
      },
      "13": {
        start: {
          line: 61,
          column: 20
        },
        end: {
          line: 61,
          column: 46
        }
      },
      "14": {
        start: {
          line: 62,
          column: 20
        },
        end: {
          line: 62,
          column: 27
        }
      },
      "15": {
        start: {
          line: 65,
          column: 20
        },
        end: {
          line: 65,
          column: 44
        }
      },
      "16": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 15
        }
      },
      "17": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 119,
          column: 5
        }
      },
      "18": {
        start: {
          line: 116,
          column: 8
        },
        end: {
          line: 116,
          column: 49
        }
      },
      "19": {
        start: {
          line: 117,
          column: 11
        },
        end: {
          line: 119,
          column: 5
        }
      },
      "20": {
        start: {
          line: 118,
          column: 8
        },
        end: {
          line: 118,
          column: 45
        }
      },
      "21": {
        start: {
          line: 120,
          column: 21
        },
        end: {
          line: 120,
          column: 35
        }
      },
      "22": {
        start: {
          line: 121,
          column: 25
        },
        end: {
          line: 121,
          column: 38
        }
      },
      "23": {
        start: {
          line: 122,
          column: 25
        },
        end: {
          line: 122,
          column: 49
        }
      },
      "24": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 125,
          column: 48
        }
      },
      "25": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 133,
          column: 5
        }
      },
      "26": {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 132,
          column: 11
        }
      },
      "27": {
        start: {
          line: 131,
          column: 12
        },
        end: {
          line: 131,
          column: 58
        }
      },
      "28": {
        start: {
          line: 136,
          column: 25
        },
        end: {
          line: 136,
          column: 55
        }
      },
      "29": {
        start: {
          line: 137,
          column: 25
        },
        end: {
          line: 146,
          column: 5
        }
      },
      "30": {
        start: {
          line: 148,
          column: 4
        },
        end: {
          line: 217,
          column: 11
        }
      },
      "31": {
        start: {
          line: 151,
          column: 12
        },
        end: {
          line: 151,
          column: 41
        }
      },
      "32": {
        start: {
          line: 153,
          column: 36
        },
        end: {
          line: 153,
          column: 40
        }
      },
      "33": {
        start: {
          line: 154,
          column: 12
        },
        end: {
          line: 158,
          column: 13
        }
      },
      "34": {
        start: {
          line: 157,
          column: 16
        },
        end: {
          line: 157,
          column: 42
        }
      },
      "35": {
        start: {
          line: 161,
          column: 34
        },
        end: {
          line: 161,
          column: 72
        }
      },
      "36": {
        start: {
          line: 162,
          column: 12
        },
        end: {
          line: 167,
          column: 13
        }
      },
      "37": {
        start: {
          line: 166,
          column: 16
        },
        end: {
          line: 166,
          column: 42
        }
      },
      "38": {
        start: {
          line: 169,
          column: 12
        },
        end: {
          line: 172,
          column: 13
        }
      },
      "39": {
        start: {
          line: 171,
          column: 16
        },
        end: {
          line: 171,
          column: 32
        }
      },
      "40": {
        start: {
          line: 175,
          column: 12
        },
        end: {
          line: 177,
          column: 14
        }
      },
      "41": {
        start: {
          line: 176,
          column: 16
        },
        end: {
          line: 176,
          column: 50
        }
      },
      "42": {
        start: {
          line: 179,
          column: 12
        },
        end: {
          line: 184,
          column: 14
        }
      },
      "43": {
        start: {
          line: 188,
          column: 12
        },
        end: {
          line: 206,
          column: 13
        }
      },
      "44": {
        start: {
          line: 189,
          column: 16
        },
        end: {
          line: 205,
          column: 17
        }
      },
      "45": {
        start: {
          line: 191,
          column: 24
        },
        end: {
          line: 191,
          column: 54
        }
      },
      "46": {
        start: {
          line: 194,
          column: 24
        },
        end: {
          line: 194,
          column: 47
        }
      },
      "47": {
        start: {
          line: 197,
          column: 24
        },
        end: {
          line: 197,
          column: 47
        }
      },
      "48": {
        start: {
          line: 200,
          column: 24
        },
        end: {
          line: 200,
          column: 47
        }
      },
      "49": {
        start: {
          line: 203,
          column: 24
        },
        end: {
          line: 203,
          column: 73
        }
      },
      "50": {
        start: {
          line: 204,
          column: 24
        },
        end: {
          line: 204,
          column: 30
        }
      },
      "51": {
        start: {
          line: 207,
          column: 12
        },
        end: {
          line: 209,
          column: 13
        }
      },
      "52": {
        start: {
          line: 208,
          column: 16
        },
        end: {
          line: 208,
          column: 65
        }
      },
      "53": {
        start: {
          line: 210,
          column: 12
        },
        end: {
          line: 210,
          column: 36
        }
      },
      "54": {
        start: {
          line: 213,
          column: 12
        },
        end: {
          line: 213,
          column: 52
        }
      },
      "55": {
        start: {
          line: 216,
          column: 12
        },
        end: {
          line: 216,
          column: 47
        }
      },
      "56": {
        start: {
          line: 220,
          column: 4
        },
        end: {
          line: 220,
          column: 41
        }
      },
      "57": {
        start: {
          line: 221,
          column: 4
        },
        end: {
          line: 221,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 51
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        loc: {
          start: {
            line: 30,
            column: 22
          },
          end: {
            line: 70,
            column: 5
          }
        },
        line: 30
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 31,
            column: 21
          },
          end: {
            line: 31,
            column: 22
          }
        },
        loc: {
          start: {
            line: 31,
            column: 27
          },
          end: {
            line: 67,
            column: 9
          }
        },
        line: 31
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 36,
            column: 22
          },
          end: {
            line: 36,
            column: 23
          }
        },
        loc: {
          start: {
            line: 36,
            column: 43
          },
          end: {
            line: 63,
            column: 17
          }
        },
        line: 36
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 64,
            column: 23
          },
          end: {
            line: 64,
            column: 24
          }
        },
        loc: {
          start: {
            line: 64,
            column: 32
          },
          end: {
            line: 66,
            column: 17
          }
        },
        line: 64
      },
      "5": {
        name: "fetchFile",
        decl: {
          start: {
            line: 114,
            column: 24
          },
          end: {
            line: 114,
            column: 33
          }
        },
        loc: {
          start: {
            line: 114,
            column: 43
          },
          end: {
            line: 222,
            column: 1
          }
        },
        line: 114
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 130,
            column: 39
          },
          end: {
            line: 130,
            column: 40
          }
        },
        loc: {
          start: {
            line: 130,
            column: 49
          },
          end: {
            line: 132,
            column: 9
          }
        },
        line: 130
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 149,
            column: 14
          },
          end: {
            line: 149,
            column: 15
          }
        },
        loc: {
          start: {
            line: 149,
            column: 26
          },
          end: {
            line: 185,
            column: 9
          }
        },
        line: 149
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 175,
            column: 34
          },
          end: {
            line: 175,
            column: 35
          }
        },
        loc: {
          start: {
            line: 175,
            column: 39
          },
          end: {
            line: 177,
            column: 13
          }
        },
        line: 175
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 186,
            column: 14
          },
          end: {
            line: 186,
            column: 15
          }
        },
        loc: {
          start: {
            line: 186,
            column: 26
          },
          end: {
            line: 211,
            column: 9
          }
        },
        line: 186
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 212,
            column: 14
          },
          end: {
            line: 212,
            column: 15
          }
        },
        loc: {
          start: {
            line: 212,
            column: 26
          },
          end: {
            line: 214,
            column: 9
          }
        },
        line: 212
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 215,
            column: 15
          },
          end: {
            line: 215,
            column: 16
          }
        },
        loc: {
          start: {
            line: 215,
            column: 24
          },
          end: {
            line: 217,
            column: 9
          }
        },
        line: 215
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 40,
            column: 20
          },
          end: {
            line: 52,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 20
          },
          end: {
            line: 52,
            column: 21
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 40
      },
      "1": {
        loc: {
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 48,
            column: 25
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 48,
            column: 25
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 42
      },
      "2": {
        loc: {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        }, {
          start: {
            line: 117,
            column: 11
          },
          end: {
            line: 119,
            column: 5
          }
        }],
        line: 115
      },
      "3": {
        loc: {
          start: {
            line: 117,
            column: 11
          },
          end: {
            line: 119,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 11
          },
          end: {
            line: 119,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 117
      },
      "4": {
        loc: {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 128
      },
      "5": {
        loc: {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 15
          }
        }, {
          start: {
            line: 128,
            column: 19
          },
          end: {
            line: 128,
            column: 41
          }
        }],
        line: 128
      },
      "6": {
        loc: {
          start: {
            line: 136,
            column: 25
          },
          end: {
            line: 136,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 136,
            column: 25
          },
          end: {
            line: 136,
            column: 45
          }
        }, {
          start: {
            line: 136,
            column: 49
          },
          end: {
            line: 136,
            column: 55
          }
        }],
        line: 136
      },
      "7": {
        loc: {
          start: {
            line: 138,
            column: 16
          },
          end: {
            line: 138,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 138,
            column: 16
          },
          end: {
            line: 138,
            column: 30
          }
        }, {
          start: {
            line: 138,
            column: 34
          },
          end: {
            line: 138,
            column: 39
          }
        }],
        line: 138
      },
      "8": {
        loc: {
          start: {
            line: 140,
            column: 14
          },
          end: {
            line: 140,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 140,
            column: 14
          },
          end: {
            line: 140,
            column: 26
          }
        }, {
          start: {
            line: 140,
            column: 30
          },
          end: {
            line: 140,
            column: 36
          }
        }],
        line: 140
      },
      "9": {
        loc: {
          start: {
            line: 141,
            column: 21
          },
          end: {
            line: 141,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 141,
            column: 21
          },
          end: {
            line: 141,
            column: 40
          }
        }, {
          start: {
            line: 141,
            column: 44
          },
          end: {
            line: 141,
            column: 57
          }
        }],
        line: 141
      },
      "10": {
        loc: {
          start: {
            line: 142,
            column: 15
          },
          end: {
            line: 142,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 142,
            column: 15
          },
          end: {
            line: 142,
            column: 28
          }
        }, {
          start: {
            line: 142,
            column: 32
          },
          end: {
            line: 142,
            column: 41
          }
        }],
        line: 142
      },
      "11": {
        loc: {
          start: {
            line: 143,
            column: 18
          },
          end: {
            line: 143,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 143,
            column: 18
          },
          end: {
            line: 143,
            column: 34
          }
        }, {
          start: {
            line: 143,
            column: 38
          },
          end: {
            line: 143,
            column: 46
          }
        }],
        line: 143
      },
      "12": {
        loc: {
          start: {
            line: 144,
            column: 18
          },
          end: {
            line: 144,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 144,
            column: 18
          },
          end: {
            line: 144,
            column: 34
          }
        }, {
          start: {
            line: 144,
            column: 38
          },
          end: {
            line: 144,
            column: 46
          }
        }],
        line: 144
      },
      "13": {
        loc: {
          start: {
            line: 154,
            column: 12
          },
          end: {
            line: 158,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 12
          },
          end: {
            line: 158,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 154
      },
      "14": {
        loc: {
          start: {
            line: 162,
            column: 12
          },
          end: {
            line: 167,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 162,
            column: 12
          },
          end: {
            line: 167,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 162
      },
      "15": {
        loc: {
          start: {
            line: 169,
            column: 12
          },
          end: {
            line: 172,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 169,
            column: 12
          },
          end: {
            line: 172,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 169
      },
      "16": {
        loc: {
          start: {
            line: 188,
            column: 12
          },
          end: {
            line: 206,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 12
          },
          end: {
            line: 206,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 188
      },
      "17": {
        loc: {
          start: {
            line: 189,
            column: 16
          },
          end: {
            line: 205,
            column: 17
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 190,
            column: 20
          },
          end: {
            line: 191,
            column: 54
          }
        }, {
          start: {
            line: 193,
            column: 20
          },
          end: {
            line: 194,
            column: 47
          }
        }, {
          start: {
            line: 196,
            column: 20
          },
          end: {
            line: 197,
            column: 47
          }
        }, {
          start: {
            line: 199,
            column: 20
          },
          end: {
            line: 200,
            column: 47
          }
        }, {
          start: {
            line: 202,
            column: 20
          },
          end: {
            line: 204,
            column: 30
          }
        }],
        line: 189
      },
      "18": {
        loc: {
          start: {
            line: 207,
            column: 12
          },
          end: {
            line: 209,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 207,
            column: 12
          },
          end: {
            line: 209,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 207
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0, 0, 0, 0],
      "18": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5156b346be1b458ab9f8c4774d2c99c78a10ab46"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pzypfniv9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2pzypfniv9();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ProgressHandler = /*#__PURE__*/function () {
  /**
   * Instantiate ProgressHandler
   *
   * @param {Observer} instance The `fetchFile` observer instance.
   * @param {Number} contentLength Content length.
   * @param {Response} response Response object.
   */
  function ProgressHandler(instance, contentLength, response) {
    _classCallCheck(this, ProgressHandler);

    cov_2pzypfniv9().f[0]++;
    cov_2pzypfniv9().s[0]++;
    this.instance = instance;
    cov_2pzypfniv9().s[1]++;
    this.instance._reader = response.body.getReader();
    cov_2pzypfniv9().s[2]++;
    this.total = parseInt(contentLength, 10);
    cov_2pzypfniv9().s[3]++;
    this.loaded = 0;
  }
  /**
   * A method that is called once, immediately after the `ReadableStream``
   * is constructed.
   *
   * @param {ReadableStreamDefaultController} controller Controller instance
   *     used to control the stream.
   */


  _createClass(ProgressHandler, [{
    key: "start",
    value: function start(controller) {
      var _this = this;

      cov_2pzypfniv9().f[1]++;
      cov_2pzypfniv9().s[4]++;

      var read = function read() {
        cov_2pzypfniv9().f[2]++;
        cov_2pzypfniv9().s[5]++;

        // instance._reader.read() returns a promise that resolves
        // when a value has been received
        _this.instance._reader.read().then(function (_ref) {
          var done = _ref.done,
              value = _ref.value;
          cov_2pzypfniv9().f[3]++;
          cov_2pzypfniv9().s[6]++;

          // result objects contain two properties:
          // done  - true if the stream has already given you all its data.
          // value - some data. Always undefined when done is true.
          if (done) {
            cov_2pzypfniv9().b[0][0]++;
            cov_2pzypfniv9().s[7]++;

            // ensure onProgress called when content-length=0
            if (_this.total === 0) {
              cov_2pzypfniv9().b[1][0]++;
              cov_2pzypfniv9().s[8]++;

              _this.instance.onProgress.call(_this.instance, {
                loaded: _this.loaded,
                total: _this.total,
                lengthComputable: false
              });
            } else {
              cov_2pzypfniv9().b[1][1]++;
            } // no more data needs to be consumed, close the stream


            cov_2pzypfniv9().s[9]++;
            controller.close();
            cov_2pzypfniv9().s[10]++;
            return;
          } else {
            cov_2pzypfniv9().b[0][1]++;
          }

          cov_2pzypfniv9().s[11]++;
          _this.loaded += value.byteLength;
          cov_2pzypfniv9().s[12]++;

          _this.instance.onProgress.call(_this.instance, {
            loaded: _this.loaded,
            total: _this.total,
            lengthComputable: !(_this.total === 0)
          }); // enqueue the next data chunk into our target stream


          cov_2pzypfniv9().s[13]++;
          controller.enqueue(value);
          cov_2pzypfniv9().s[14]++;
          read();
        }).catch(function (error) {
          cov_2pzypfniv9().f[4]++;
          cov_2pzypfniv9().s[15]++;
          controller.error(error);
        });
      };

      cov_2pzypfniv9().s[16]++;
      read();
    }
  }]);

  return ProgressHandler;
}();
/**
 * Load a file using `fetch`.
 *
 * @param {object} options Request options to use. See example below.
 * @returns {Observer} Observer instance
 * @example
 * // default options
 * let options = {
 *     url: undefined,
 *     method: 'GET',
 *     mode: 'cors',
 *     credentials: 'same-origin',
 *     cache: 'default',
 *     responseType: 'json',
 *     requestHeaders: [],
 *     redirect: 'follow',
 *     referrer: 'client'
 * };
 *
 * // override some options
 * options.url = '../media/demo.wav';

 * // available types: 'arraybuffer', 'blob', 'json' or 'text'
 * options.responseType = 'arraybuffer';
 *
 * // make fetch call
 * let request = util.fetchFile(options);
 *
 * // listen for events
 * request.on('progress', e => {
 *     console.log('progress', e);
 * });
 *
 * request.on('success', data => {
 *     console.log('success!', data);
 * });
 *
 * request.on('error', e => {
 *     console.warn('fetchFile error: ', e);
 * });
 */


function fetchFile(options) {
  cov_2pzypfniv9().f[5]++;
  cov_2pzypfniv9().s[17]++;

  if (!options) {
    cov_2pzypfniv9().b[2][0]++;
    cov_2pzypfniv9().s[18]++;
    throw new Error('fetch options missing');
  } else {
    cov_2pzypfniv9().b[2][1]++;
    cov_2pzypfniv9().s[19]++;

    if (!options.url) {
      cov_2pzypfniv9().b[3][0]++;
      cov_2pzypfniv9().s[20]++;
      throw new Error('fetch url missing');
    } else {
      cov_2pzypfniv9().b[3][1]++;
    }
  }

  var instance = (cov_2pzypfniv9().s[21]++, new _observer.default());
  var fetchHeaders = (cov_2pzypfniv9().s[22]++, new Headers());
  var fetchRequest = (cov_2pzypfniv9().s[23]++, new Request(options.url)); // add ability to abort

  cov_2pzypfniv9().s[24]++;
  instance.controller = new AbortController(); // check if headers have to be added

  cov_2pzypfniv9().s[25]++;

  if ((cov_2pzypfniv9().b[5][0]++, options) && (cov_2pzypfniv9().b[5][1]++, options.requestHeaders)) {
    cov_2pzypfniv9().b[4][0]++;
    cov_2pzypfniv9().s[26]++;
    // add custom request headers
    options.requestHeaders.forEach(function (header) {
      cov_2pzypfniv9().f[6]++;
      cov_2pzypfniv9().s[27]++;
      fetchHeaders.append(header.key, header.value);
    });
  } else {
    cov_2pzypfniv9().b[4][1]++;
  } // parse fetch options


  var responseType = (cov_2pzypfniv9().s[28]++, (cov_2pzypfniv9().b[6][0]++, options.responseType) || (cov_2pzypfniv9().b[6][1]++, 'json'));
  var fetchOptions = (cov_2pzypfniv9().s[29]++, {
    method: (cov_2pzypfniv9().b[7][0]++, options.method) || (cov_2pzypfniv9().b[7][1]++, 'GET'),
    headers: fetchHeaders,
    mode: (cov_2pzypfniv9().b[8][0]++, options.mode) || (cov_2pzypfniv9().b[8][1]++, 'cors'),
    credentials: (cov_2pzypfniv9().b[9][0]++, options.credentials) || (cov_2pzypfniv9().b[9][1]++, 'same-origin'),
    cache: (cov_2pzypfniv9().b[10][0]++, options.cache) || (cov_2pzypfniv9().b[10][1]++, 'default'),
    redirect: (cov_2pzypfniv9().b[11][0]++, options.redirect) || (cov_2pzypfniv9().b[11][1]++, 'follow'),
    referrer: (cov_2pzypfniv9().b[12][0]++, options.referrer) || (cov_2pzypfniv9().b[12][1]++, 'client'),
    signal: instance.controller.signal
  });
  cov_2pzypfniv9().s[30]++;
  fetch(fetchRequest, fetchOptions).then(function (response) {
    cov_2pzypfniv9().f[7]++;
    cov_2pzypfniv9().s[31]++;
    // store response reference
    instance.response = response;
    var progressAvailable = (cov_2pzypfniv9().s[32]++, true);
    cov_2pzypfniv9().s[33]++;

    if (!response.body) {
      cov_2pzypfniv9().b[13][0]++;
      cov_2pzypfniv9().s[34]++;
      // ReadableStream is not yet supported in this browser
      // see https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
      progressAvailable = false;
    } else {
      cov_2pzypfniv9().b[13][1]++;
    } // Server must send CORS header "Access-Control-Expose-Headers: content-length"


    var contentLength = (cov_2pzypfniv9().s[35]++, response.headers.get('content-length'));
    cov_2pzypfniv9().s[36]++;

    if (contentLength === null) {
      cov_2pzypfniv9().b[14][0]++;
      cov_2pzypfniv9().s[37]++;
      // Content-Length server response header missing.
      // Don't evaluate download progress if we can't compare against a total size
      // see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Access-Control-Expose-Headers
      progressAvailable = false;
    } else {
      cov_2pzypfniv9().b[14][1]++;
    }

    cov_2pzypfniv9().s[38]++;

    if (!progressAvailable) {
      cov_2pzypfniv9().b[15][0]++;
      cov_2pzypfniv9().s[39]++;
      // not able to check download progress so skip it
      return response;
    } else {
      cov_2pzypfniv9().b[15][1]++;
    } // fire progress event when during load


    cov_2pzypfniv9().s[40]++;

    instance.onProgress = function (e) {
      cov_2pzypfniv9().f[8]++;
      cov_2pzypfniv9().s[41]++;
      instance.fireEvent('progress', e);
    };

    cov_2pzypfniv9().s[42]++;
    return new Response(new ReadableStream(new ProgressHandler(instance, contentLength, response)), fetchOptions);
  }).then(function (response) {
    cov_2pzypfniv9().f[9]++;
    var errMsg;
    cov_2pzypfniv9().s[43]++;

    if (response.ok) {
      cov_2pzypfniv9().b[16][0]++;
      cov_2pzypfniv9().s[44]++;

      switch (responseType) {
        case 'arraybuffer':
          cov_2pzypfniv9().b[17][0]++;
          cov_2pzypfniv9().s[45]++;
          return response.arrayBuffer();

        case 'json':
          cov_2pzypfniv9().b[17][1]++;
          cov_2pzypfniv9().s[46]++;
          return response.json();

        case 'blob':
          cov_2pzypfniv9().b[17][2]++;
          cov_2pzypfniv9().s[47]++;
          return response.blob();

        case 'text':
          cov_2pzypfniv9().b[17][3]++;
          cov_2pzypfniv9().s[48]++;
          return response.text();

        default:
          cov_2pzypfniv9().b[17][4]++;
          cov_2pzypfniv9().s[49]++;
          errMsg = 'Unknown responseType: ' + responseType;
          cov_2pzypfniv9().s[50]++;
          break;
      }
    } else {
      cov_2pzypfniv9().b[16][1]++;
    }

    cov_2pzypfniv9().s[51]++;

    if (!errMsg) {
      cov_2pzypfniv9().b[18][0]++;
      cov_2pzypfniv9().s[52]++;
      errMsg = 'HTTP error status: ' + response.status;
    } else {
      cov_2pzypfniv9().b[18][1]++;
    }

    cov_2pzypfniv9().s[53]++;
    throw new Error(errMsg);
  }).then(function (response) {
    cov_2pzypfniv9().f[10]++;
    cov_2pzypfniv9().s[54]++;
    instance.fireEvent('success', response);
  }).catch(function (error) {
    cov_2pzypfniv9().f[11]++;
    cov_2pzypfniv9().s[55]++;
    instance.fireEvent('error', error);
  }); // return the fetch request

  cov_2pzypfniv9().s[56]++;
  instance.fetchRequest = fetchRequest;
  cov_2pzypfniv9().s[57]++;
  return instance;
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/frame.js":
/*!***************************!*\
  !*** ./src/util/frame.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = frame;

var _requestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! ./request-animation-frame */ "./src/util/request-animation-frame.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_bm8v6kuh6() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/frame.js";
  var hash = "cf02a3ed0214416fcff0fef98be57d92e8aef1bd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/frame.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 63
        }
      },
      "1": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 12,
          column: 62
        }
      },
      "2": {
        start: {
          line: 12,
          column: 48
        },
        end: {
          line: 12,
          column: 61
        }
      }
    },
    fnMap: {
      "0": {
        name: "frame",
        decl: {
          start: {
            line: 11,
            column: 24
          },
          end: {
            line: 11,
            column: 29
          }
        },
        loc: {
          start: {
            line: 11,
            column: 36
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 11
          },
          end: {
            line: 12,
            column: 12
          }
        },
        loc: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 12,
            column: 62
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 42
          },
          end: {
            line: 12,
            column: 43
          }
        },
        loc: {
          start: {
            line: 12,
            column: 48
          },
          end: {
            line: 12,
            column: 61
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cf02a3ed0214416fcff0fef98be57d92e8aef1bd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bm8v6kuh6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_bm8v6kuh6();

/**
 * Create a function which will be called at the next requestAnimationFrame
 * cycle
 *
 * @param {function} func The function to call
 *
 * @return {func} The function wrapped within a requestAnimationFrame
 */
function frame(func) {
  cov_bm8v6kuh6().f[0]++;
  cov_bm8v6kuh6().s[0]++;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cov_bm8v6kuh6().f[1]++;
    cov_bm8v6kuh6().s[1]++;
    return (0, _requestAnimationFrame.default)(function () {
      cov_bm8v6kuh6().f[2]++;
      cov_bm8v6kuh6().s[2]++;
      return func.apply(void 0, args);
    });
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/get-id.js":
/*!****************************!*\
  !*** ./src/util/get-id.js ***!
  \****************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getId;

function cov_1njsfp1100() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/get-id.js";
  var hash = "4e70d02daaff2dedacf8c0e03edd537947d65382";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/get-id.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "1": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 31
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 21,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "getId",
        decl: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 12,
            column: 29
          }
        },
        loc: {
          start: {
            line: 12,
            column: 38
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4e70d02daaff2dedacf8c0e03edd537947d65382"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1njsfp1100 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1njsfp1100();

/**
 * Get a random prefixed ID
 *
 * @param {String} prefix Prefix to use. Default is `'wavesurfer_'`.
 * @returns {String} Random prefixed ID
 * @example
 * console.log(getId()); // logs 'wavesurfer_b5pors4ru6g'
 *
 * let prefix = 'foo-';
 * console.log(getId(prefix)); // logs 'foo-b5pors4ru6g'
 */
function getId(prefix) {
  cov_1njsfp1100().f[0]++;
  cov_1njsfp1100().s[0]++;

  if (prefix === undefined) {
    cov_1njsfp1100().b[0][0]++;
    cov_1njsfp1100().s[1]++;
    prefix = 'wavesurfer_';
  } else {
    cov_1njsfp1100().b[0][1]++;
  }

  cov_1njsfp1100().s[2]++;
  return prefix + Math.random().toString(32).substring(2);
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Observer", ({
  enumerable: true,
  get: function get() {
    return _observer.default;
  }
}));
Object.defineProperty(exports, "absMax", ({
  enumerable: true,
  get: function get() {
    return _absMax.default;
  }
}));
Object.defineProperty(exports, "clamp", ({
  enumerable: true,
  get: function get() {
    return _clamp.default;
  }
}));
Object.defineProperty(exports, "debounce", ({
  enumerable: true,
  get: function get() {
    return _debounce.default;
  }
}));
Object.defineProperty(exports, "fetchFile", ({
  enumerable: true,
  get: function get() {
    return _fetch.default;
  }
}));
Object.defineProperty(exports, "frame", ({
  enumerable: true,
  get: function get() {
    return _frame.default;
  }
}));
Object.defineProperty(exports, "getId", ({
  enumerable: true,
  get: function get() {
    return _getId.default;
  }
}));
Object.defineProperty(exports, "ignoreSilenceMode", ({
  enumerable: true,
  get: function get() {
    return _silenceMode.default;
  }
}));
Object.defineProperty(exports, "max", ({
  enumerable: true,
  get: function get() {
    return _max.default;
  }
}));
Object.defineProperty(exports, "min", ({
  enumerable: true,
  get: function get() {
    return _min.default;
  }
}));
Object.defineProperty(exports, "preventClick", ({
  enumerable: true,
  get: function get() {
    return _preventClick.default;
  }
}));
Object.defineProperty(exports, "requestAnimationFrame", ({
  enumerable: true,
  get: function get() {
    return _requestAnimationFrame.default;
  }
}));
Object.defineProperty(exports, "style", ({
  enumerable: true,
  get: function get() {
    return _style.default;
  }
}));
Object.defineProperty(exports, "withOrientation", ({
  enumerable: true,
  get: function get() {
    return _orientation.default;
  }
}));

var _getId = _interopRequireDefault(__webpack_require__(/*! ./get-id */ "./src/util/get-id.js"));

var _max = _interopRequireDefault(__webpack_require__(/*! ./max */ "./src/util/max.js"));

var _min = _interopRequireDefault(__webpack_require__(/*! ./min */ "./src/util/min.js"));

var _absMax = _interopRequireDefault(__webpack_require__(/*! ./absMax */ "./src/util/absMax.js"));

var _observer = _interopRequireDefault(__webpack_require__(/*! ./observer */ "./src/util/observer.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./src/util/style.js"));

var _requestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! ./request-animation-frame */ "./src/util/request-animation-frame.js"));

var _frame = _interopRequireDefault(__webpack_require__(/*! ./frame */ "./src/util/frame.js"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! debounce */ "./node_modules/debounce/index.js"));

var _preventClick = _interopRequireDefault(__webpack_require__(/*! ./prevent-click */ "./src/util/prevent-click.js"));

var _fetch = _interopRequireDefault(__webpack_require__(/*! ./fetch */ "./src/util/fetch.js"));

var _clamp = _interopRequireDefault(__webpack_require__(/*! ./clamp */ "./src/util/clamp.js"));

var _orientation = _interopRequireDefault(__webpack_require__(/*! ./orientation */ "./src/util/orientation.js"));

var _silenceMode = _interopRequireDefault(__webpack_require__(/*! ./silence-mode */ "./src/util/silence-mode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cov_1f89gddx7w() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/index.js";
  var hash = "c83af30f62e0c683dbda6e1e9541a5f3b7fd0376";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c83af30f62e0c683dbda6e1e9541a5f3b7fd0376"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1f89gddx7w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1f89gddx7w();

/***/ }),

/***/ "./src/util/max.js":
/*!*************************!*\
  !*** ./src/util/max.js ***!
  \*************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = max;

function cov_kbm7carto() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/max.js";
  var hash = "6c883dc281774a47619e923d7dfdf23603bfbf7f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/max.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 9,
          column: 27
        }
      },
      "1": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 7
        }
      },
      "2": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 13,
          column: 9
        }
      },
      "3": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 32
        }
      },
      "4": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "max",
        decl: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 27
          }
        },
        loc: {
          start: {
            line: 8,
            column: 36
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 32
          },
          end: {
            line: 10,
            column: 33
          }
        },
        loc: {
          start: {
            line: 10,
            column: 37
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 13,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 13,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6c883dc281774a47619e923d7dfdf23603bfbf7f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kbm7carto = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_kbm7carto();

/**
 * Get the largest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Largest number found
 * @example console.log(max([1, 2, 3])); // logs 3
 */
function max(values) {
  cov_kbm7carto().f[0]++;
  var largest = (cov_kbm7carto().s[0]++, -Infinity);
  cov_kbm7carto().s[1]++;
  Object.keys(values).forEach(function (i) {
    cov_kbm7carto().f[1]++;
    cov_kbm7carto().s[2]++;

    if (values[i] > largest) {
      cov_kbm7carto().b[0][0]++;
      cov_kbm7carto().s[3]++;
      largest = values[i];
    } else {
      cov_kbm7carto().b[0][1]++;
    }
  });
  cov_kbm7carto().s[4]++;
  return largest;
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/min.js":
/*!*************************!*\
  !*** ./src/util/min.js ***!
  \*************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = min;

function cov_2ik59a84x9() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/min.js";
  var hash = "622bbad06015a3ab9b4d41d1c223b54080ec3082";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/min.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 19
        },
        end: {
          line: 9,
          column: 35
        }
      },
      "1": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 7
        }
      },
      "2": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 13,
          column: 9
        }
      },
      "3": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 33
        }
      },
      "4": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "min",
        decl: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 27
          }
        },
        loc: {
          start: {
            line: 8,
            column: 36
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 32
          },
          end: {
            line: 10,
            column: 33
          }
        },
        loc: {
          start: {
            line: 10,
            column: 37
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 13,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 13,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "622bbad06015a3ab9b4d41d1c223b54080ec3082"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ik59a84x9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ik59a84x9();

/**
 * Get the smallest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Smallest number found
 * @example console.log(min([1, 2, 3])); // logs 1
 */
function min(values) {
  cov_2ik59a84x9().f[0]++;
  var smallest = (cov_2ik59a84x9().s[0]++, Number(Infinity));
  cov_2ik59a84x9().s[1]++;
  Object.keys(values).forEach(function (i) {
    cov_2ik59a84x9().f[1]++;
    cov_2ik59a84x9().s[2]++;

    if (values[i] < smallest) {
      cov_2ik59a84x9().b[0][0]++;
      cov_2ik59a84x9().s[3]++;
      smallest = values[i];
    } else {
      cov_2ik59a84x9().b[0][1]++;
    }
  });
  cov_2ik59a84x9().s[4]++;
  return smallest;
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/observer.js":
/*!******************************!*\
  !*** ./src/util/observer.js ***!
  \******************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

function cov_1kmmnzc6i5() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/observer.js";
  var hash = "df9e49fa2ef5d3abfd9854c8d29b66daf6424035";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/observer.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 42
        }
      },
      "1": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 29
        }
      },
      "2": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 34,
          column: 9
        }
      },
      "3": {
        start: {
          line: 33,
          column: 12
        },
        end: {
          line: 33,
          column: 31
        }
      },
      "4": {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 36,
          column: 43
        }
      },
      "5": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "6": {
        start: {
          line: 38,
          column: 12
        },
        end: {
          line: 38,
          column: 49
        }
      },
      "7": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 26
        }
      },
      "8": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 47,
          column: 10
        }
      },
      "9": {
        start: {
          line: 46,
          column: 27
        },
        end: {
          line: 46,
          column: 41
        }
      },
      "10": {
        start: {
          line: 58,
          column: 8
        },
        end: {
          line: 60,
          column: 9
        }
      },
      "11": {
        start: {
          line: 59,
          column: 12
        },
        end: {
          line: 59,
          column: 19
        }
      },
      "12": {
        start: {
          line: 62,
          column: 25
        },
        end: {
          line: 62,
          column: 45
        }
      },
      "13": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 74,
          column: 9
        }
      },
      "14": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 73,
          column: 13
        }
      },
      "15": {
        start: {
          line: 66,
          column: 16
        },
        end: {
          line: 70,
          column: 17
        }
      },
      "16": {
        start: {
          line: 67,
          column: 20
        },
        end: {
          line: 69,
          column: 21
        }
      },
      "17": {
        start: {
          line: 68,
          column: 24
        },
        end: {
          line: 68,
          column: 46
        }
      },
      "18": {
        start: {
          line: 72,
          column: 16
        },
        end: {
          line: 72,
          column: 36
        }
      },
      "19": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 81,
          column: 29
        }
      },
      "20": {
        start: {
          line: 93,
          column: 19
        },
        end: {
          line: 100,
          column: 9
        }
      },
      "21": {
        start: {
          line: 95,
          column: 12
        },
        end: {
          line: 95,
          column: 38
        }
      },
      "22": {
        start: {
          line: 97,
          column: 12
        },
        end: {
          line: 99,
          column: 18
        }
      },
      "23": {
        start: {
          line: 98,
          column: 16
        },
        end: {
          line: 98,
          column: 35
        }
      },
      "24": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 101,
          column: 34
        }
      },
      "25": {
        start: {
          line: 115,
          column: 8
        },
        end: {
          line: 115,
          column: 50
        }
      },
      "26": {
        start: {
          line: 124,
          column: 8
        },
        end: {
          line: 124,
          column: 92
        }
      },
      "27": {
        start: {
          line: 134,
          column: 8
        },
        end: {
          line: 136,
          column: 9
        }
      },
      "28": {
        start: {
          line: 135,
          column: 12
        },
        end: {
          line: 135,
          column: 19
        }
      },
      "29": {
        start: {
          line: 138,
          column: 25
        },
        end: {
          line: 138,
          column: 45
        }
      },
      "30": {
        start: {
          line: 139,
          column: 8
        },
        end: {
          line: 142,
          column: 15
        }
      },
      "31": {
        start: {
          line: 141,
          column: 16
        },
        end: {
          line: 141,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 18
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        loc: {
          start: {
            line: 31,
            column: 18
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 16
          },
          end: {
            line: 46,
            column: 17
          }
        },
        loc: {
          start: {
            line: 46,
            column: 27
          },
          end: {
            line: 46,
            column: 41
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        loc: {
          start: {
            line: 57,
            column: 18
          },
          end: {
            line: 75,
            column: 5
          }
        },
        line: 57
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        loc: {
          start: {
            line: 80,
            column: 12
          },
          end: {
            line: 82,
            column: 5
          }
        },
        line: 80
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 92,
            column: 5
          }
        },
        loc: {
          start: {
            line: 92,
            column: 25
          },
          end: {
            line: 102,
            column: 5
          }
        },
        line: 92
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 93,
            column: 19
          },
          end: {
            line: 93,
            column: 20
          }
        },
        loc: {
          start: {
            line: 93,
            column: 32
          },
          end: {
            line: 100,
            column: 9
          }
        },
        line: 93
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 97,
            column: 23
          },
          end: {
            line: 97,
            column: 24
          }
        },
        loc: {
          start: {
            line: 97,
            column: 29
          },
          end: {
            line: 99,
            column: 13
          }
        },
        line: 97
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 5
          }
        },
        loc: {
          start: {
            line: 114,
            column: 42
          },
          end: {
            line: 116,
            column: 5
          }
        },
        line: 114
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 5
          }
        },
        loc: {
          start: {
            line: 123,
            column: 36
          },
          end: {
            line: 125,
            column: 5
          }
        },
        line: 123
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        loc: {
          start: {
            line: 133,
            column: 30
          },
          end: {
            line: 143,
            column: 5
          }
        },
        line: 133
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 140,
            column: 29
          },
          end: {
            line: 140,
            column: 30
          }
        },
        loc: {
          start: {
            line: 140,
            column: 35
          },
          end: {
            line: 142,
            column: 13
          }
        },
        line: 140
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 34,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 34,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 32
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 58,
            column: 8
          },
          end: {
            line: 60,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 8
          },
          end: {
            line: 60,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 58
      },
      "3": {
        loc: {
          start: {
            line: 64,
            column: 8
          },
          end: {
            line: 74,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 8
          },
          end: {
            line: 74,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 64
      },
      "4": {
        loc: {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 73,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 73,
            column: 13
          }
        }, {
          start: {
            line: 71,
            column: 19
          },
          end: {
            line: 73,
            column: 13
          }
        }],
        line: 65
      },
      "5": {
        loc: {
          start: {
            line: 67,
            column: 20
          },
          end: {
            line: 69,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 67,
            column: 20
          },
          end: {
            line: 69,
            column: 21
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 67
      },
      "6": {
        loc: {
          start: {
            line: 124,
            column: 15
          },
          end: {
            line: 124,
            column: 91
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 124,
            column: 15
          },
          end: {
            line: 124,
            column: 43
          }
        }, {
          start: {
            line: 124,
            column: 47
          },
          end: {
            line: 124,
            column: 91
          }
        }],
        line: 124
      },
      "7": {
        loc: {
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 136,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 136,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 134
      },
      "8": {
        loc: {
          start: {
            line: 134,
            column: 12
          },
          end: {
            line: 134,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 134,
            column: 12
          },
          end: {
            line: 134,
            column: 26
          }
        }, {
          start: {
            line: 134,
            column: 30
          },
          end: {
            line: 134,
            column: 66
          }
        }],
        line: 134
      },
      "9": {
        loc: {
          start: {
            line: 139,
            column: 8
          },
          end: {
            line: 142,
            column: 14
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 139,
            column: 8
          },
          end: {
            line: 139,
            column: 16
          }
        }, {
          start: {
            line: 140,
            column: 12
          },
          end: {
            line: 142,
            column: 14
          }
        }],
        line: 139
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "df9e49fa2ef5d3abfd9854c8d29b66daf6424035"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1kmmnzc6i5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1kmmnzc6i5();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * @typedef {Object} ListenerDescriptor
 * @property {string} name The name of the event
 * @property {function} callback The callback
 * @property {function} un The function to call to remove the listener
 */

/**
 * Observer class
 */
var Observer = /*#__PURE__*/function () {
  /**
   * Instantiate Observer
   */
  function Observer() {
    _classCallCheck(this, Observer);

    cov_1kmmnzc6i5().f[0]++;
    cov_1kmmnzc6i5().s[0]++;

    /**
     * @private
     * @todo Initialise the handlers here already and remove the conditional
     * assignment in `on()`
     */
    this._disabledEventEmissions = [];
    cov_1kmmnzc6i5().s[1]++;
    this.handlers = null;
  }
  /**
   * Attach a handler function for an event.
   *
   * @param {string} event Name of the event to listen to
   * @param {function} fn The callback to trigger when the event is fired
   * @return {ListenerDescriptor} The event descriptor
   */


  _createClass(Observer, [{
    key: "on",
    value: function on(event, fn) {
      var _this = this;

      cov_1kmmnzc6i5().f[1]++;
      cov_1kmmnzc6i5().s[2]++;

      if (!this.handlers) {
        cov_1kmmnzc6i5().b[0][0]++;
        cov_1kmmnzc6i5().s[3]++;
        this.handlers = {};
      } else {
        cov_1kmmnzc6i5().b[0][1]++;
      }

      var handlers = (cov_1kmmnzc6i5().s[4]++, this.handlers[event]);
      cov_1kmmnzc6i5().s[5]++;

      if (!handlers) {
        cov_1kmmnzc6i5().b[1][0]++;
        cov_1kmmnzc6i5().s[6]++;
        handlers = this.handlers[event] = [];
      } else {
        cov_1kmmnzc6i5().b[1][1]++;
      }

      cov_1kmmnzc6i5().s[7]++;
      handlers.push(fn); // Return an event descriptor

      cov_1kmmnzc6i5().s[8]++;
      return {
        name: event,
        callback: fn,
        un: function un(e, fn) {
          cov_1kmmnzc6i5().f[2]++;
          cov_1kmmnzc6i5().s[9]++;
          return _this.un(e, fn);
        }
      };
    }
    /**
     * Remove an event handler.
     *
     * @param {string} event Name of the event the listener that should be
     * removed listens to
     * @param {function} fn The callback that should be removed
     */

  }, {
    key: "un",
    value: function un(event, fn) {
      cov_1kmmnzc6i5().f[3]++;
      cov_1kmmnzc6i5().s[10]++;

      if (!this.handlers) {
        cov_1kmmnzc6i5().b[2][0]++;
        cov_1kmmnzc6i5().s[11]++;
        return;
      } else {
        cov_1kmmnzc6i5().b[2][1]++;
      }

      var handlers = (cov_1kmmnzc6i5().s[12]++, this.handlers[event]);
      var i;
      cov_1kmmnzc6i5().s[13]++;

      if (handlers) {
        cov_1kmmnzc6i5().b[3][0]++;
        cov_1kmmnzc6i5().s[14]++;

        if (fn) {
          cov_1kmmnzc6i5().b[4][0]++;
          cov_1kmmnzc6i5().s[15]++;

          for (i = handlers.length - 1; i >= 0; i--) {
            cov_1kmmnzc6i5().s[16]++;

            if (handlers[i] == fn) {
              cov_1kmmnzc6i5().b[5][0]++;
              cov_1kmmnzc6i5().s[17]++;
              handlers.splice(i, 1);
            } else {
              cov_1kmmnzc6i5().b[5][1]++;
            }
          }
        } else {
          cov_1kmmnzc6i5().b[4][1]++;
          cov_1kmmnzc6i5().s[18]++;
          handlers.length = 0;
        }
      } else {
        cov_1kmmnzc6i5().b[3][1]++;
      }
    }
    /**
     * Remove all event handlers.
     */

  }, {
    key: "unAll",
    value: function unAll() {
      cov_1kmmnzc6i5().f[4]++;
      cov_1kmmnzc6i5().s[19]++;
      this.handlers = null;
    }
    /**
     * Attach a handler to an event. The handler is executed at most once per
     * event type.
     *
     * @param {string} event The event to listen to
     * @param {function} handler The callback that is only to be called once
     * @return {ListenerDescriptor} The event descriptor
     */

  }, {
    key: "once",
    value: function once(event, handler) {
      var _this2 = this;

      cov_1kmmnzc6i5().f[5]++;
      cov_1kmmnzc6i5().s[20]++;

      var fn = function fn() {
        cov_1kmmnzc6i5().f[6]++;
        cov_1kmmnzc6i5().s[21]++;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        /*  eslint-disable no-invalid-this */
        handler.apply(_this2, args);
        /*  eslint-enable no-invalid-this */

        cov_1kmmnzc6i5().s[22]++;
        setTimeout(function () {
          cov_1kmmnzc6i5().f[7]++;
          cov_1kmmnzc6i5().s[23]++;

          _this2.un(event, fn);
        }, 0);
      };

      cov_1kmmnzc6i5().s[24]++;
      return this.on(event, fn);
    }
    /**
     * Disable firing a list of events by name. When specified, event handlers for any event type
     * passed in here will not be called.
     *
     * @since 4.0.0
     * @param {string[]} eventNames an array of event names to disable emissions for
     * @example
     * // disable seek and interaction events
     * wavesurfer.setDisabledEventEmissions(['seek', 'interaction']);
     */

  }, {
    key: "setDisabledEventEmissions",
    value: function setDisabledEventEmissions(eventNames) {
      cov_1kmmnzc6i5().f[8]++;
      cov_1kmmnzc6i5().s[25]++;
      this._disabledEventEmissions = eventNames;
    }
    /**
     * plugins borrow part of this class without calling the constructor,
     * so we have to be careful about _disabledEventEmissions
     */

  }, {
    key: "_isDisabledEventEmission",
    value: function _isDisabledEventEmission(event) {
      cov_1kmmnzc6i5().f[9]++;
      cov_1kmmnzc6i5().s[26]++;
      return (cov_1kmmnzc6i5().b[6][0]++, this._disabledEventEmissions) && (cov_1kmmnzc6i5().b[6][1]++, this._disabledEventEmissions.includes(event));
    }
    /**
     * Manually fire an event
     *
     * @param {string} event The event to fire manually
     * @param {...any} args The arguments with which to call the listeners
     */

  }, {
    key: "fireEvent",
    value: function fireEvent(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      cov_1kmmnzc6i5().f[10]++;
      cov_1kmmnzc6i5().s[27]++;

      if ((cov_1kmmnzc6i5().b[8][0]++, !this.handlers) || (cov_1kmmnzc6i5().b[8][1]++, this._isDisabledEventEmission(event))) {
        cov_1kmmnzc6i5().b[7][0]++;
        cov_1kmmnzc6i5().s[28]++;
        return;
      } else {
        cov_1kmmnzc6i5().b[7][1]++;
      }

      var handlers = (cov_1kmmnzc6i5().s[29]++, this.handlers[event]);
      cov_1kmmnzc6i5().s[30]++;
      (cov_1kmmnzc6i5().b[9][0]++, handlers) && (cov_1kmmnzc6i5().b[9][1]++, handlers.forEach(function (fn) {
        cov_1kmmnzc6i5().f[11]++;
        cov_1kmmnzc6i5().s[31]++;
        fn.apply(void 0, args);
      }));
    }
  }]);

  return Observer;
}();

exports["default"] = Observer;
module.exports = exports.default;

/***/ }),

/***/ "./src/util/orientation.js":
/*!*********************************!*\
  !*** ./src/util/orientation.js ***!
  \*********************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = withOrientation;

function cov_1bj28ll2xr() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/orientation.js";
  var hash = "b80f9bae375fe4507a780a90483682d1793ea0f9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/orientation.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "1": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 44,
          column: 5
        }
      },
      "2": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 41,
          column: 55
        }
      },
      "3": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 20
        }
      },
      "4": {
        start: {
          line: 47,
          column: 16
        },
        end: {
          line: 47,
          column: 33
        }
      },
      "5": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 97,
          column: 5
        }
      },
      "6": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 22
        }
      },
      "7": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 96,
          column: 10
        }
      },
      "8": {
        start: {
          line: 70,
          column: 20
        },
        end: {
          line: 89,
          column: 21
        }
      },
      "9": {
        start: {
          line: 71,
          column: 24
        },
        end: {
          line: 71,
          column: 36
        }
      },
      "10": {
        start: {
          line: 72,
          column: 27
        },
        end: {
          line: 89,
          column: 21
        }
      },
      "11": {
        start: {
          line: 73,
          column: 24
        },
        end: {
          line: 73,
          column: 35
        }
      },
      "12": {
        start: {
          line: 74,
          column: 27
        },
        end: {
          line: 89,
          column: 21
        }
      },
      "13": {
        start: {
          line: 75,
          column: 24
        },
        end: {
          line: 75,
          column: 68
        }
      },
      "14": {
        start: {
          line: 76,
          column: 27
        },
        end: {
          line: 89,
          column: 21
        }
      },
      "15": {
        start: {
          line: 77,
          column: 24
        },
        end: {
          line: 77,
          column: 69
        }
      },
      "16": {
        start: {
          line: 78,
          column: 27
        },
        end: {
          line: 89,
          column: 21
        }
      },
      "17": {
        start: {
          line: 79,
          column: 24
        },
        end: {
          line: 81,
          column: 26
        }
      },
      "18": {
        start: {
          line: 80,
          column: 28
        },
        end: {
          line: 80,
          column: 97
        }
      },
      "19": {
        start: {
          line: 82,
          column: 27
        },
        end: {
          line: 89,
          column: 21
        }
      },
      "20": {
        start: {
          line: 83,
          column: 24
        },
        end: {
          line: 85,
          column: 26
        }
      },
      "21": {
        start: {
          line: 84,
          column: 28
        },
        end: {
          line: 84,
          column: 86
        }
      },
      "22": {
        start: {
          line: 87,
          column: 36
        },
        end: {
          line: 87,
          column: 64
        }
      },
      "23": {
        start: {
          line: 88,
          column: 24
        },
        end: {
          line: 88,
          column: 84
        }
      },
      "24": {
        start: {
          line: 92,
          column: 20
        },
        end: {
          line: 92,
          column: 57
        }
      },
      "25": {
        start: {
          line: 93,
          column: 20
        },
        end: {
          line: 93,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "mapProp",
        decl: {
          start: {
            line: 39,
            column: 9
          },
          end: {
            line: 39,
            column: 16
          }
        },
        loc: {
          start: {
            line: 39,
            column: 33
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 39
      },
      "1": {
        name: "withOrientation",
        decl: {
          start: {
            line: 63,
            column: 24
          },
          end: {
            line: 63,
            column: 39
          }
        },
        loc: {
          start: {
            line: 63,
            column: 58
          },
          end: {
            line: 98,
            column: 1
          }
        },
        line: 63
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 69,
            column: 21
          },
          end: {
            line: 69,
            column: 22
          }
        },
        loc: {
          start: {
            line: 69,
            column: 51
          },
          end: {
            line: 90,
            column: 17
          }
        },
        line: 69
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 79,
            column: 31
          },
          end: {
            line: 79,
            column: 32
          }
        },
        loc: {
          start: {
            line: 79,
            column: 49
          },
          end: {
            line: 81,
            column: 25
          }
        },
        line: 79
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 83,
            column: 31
          },
          end: {
            line: 83,
            column: 32
          }
        },
        loc: {
          start: {
            line: 83,
            column: 49
          },
          end: {
            line: 85,
            column: 25
          }
        },
        line: 83
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 91,
            column: 21
          },
          end: {
            line: 91,
            column: 22
          }
        },
        loc: {
          start: {
            line: 91,
            column: 48
          },
          end: {
            line: 94,
            column: 17
          }
        },
        line: 91
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        }, {
          start: {
            line: 42,
            column: 11
          },
          end: {
            line: 44,
            column: 5
          }
        }],
        line: 40
      },
      "1": {
        loc: {
          start: {
            line: 41,
            column: 15
          },
          end: {
            line: 41,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 41,
            column: 26
          },
          end: {
            line: 41,
            column: 47
          }
        }, {
          start: {
            line: 41,
            column: 50
          },
          end: {
            line: 41,
            column: 54
          }
        }],
        line: 41
      },
      "2": {
        loc: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 97,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 97,
            column: 5
          }
        }, {
          start: {
            line: 66,
            column: 11
          },
          end: {
            line: 97,
            column: 5
          }
        }],
        line: 64
      },
      "3": {
        loc: {
          start: {
            line: 70,
            column: 20
          },
          end: {
            line: 89,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 70,
            column: 20
          },
          end: {
            line: 89,
            column: 21
          }
        }, {
          start: {
            line: 72,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }],
        line: 70
      },
      "4": {
        loc: {
          start: {
            line: 72,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 72,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }, {
          start: {
            line: 74,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }],
        line: 72
      },
      "5": {
        loc: {
          start: {
            line: 74,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 74,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }, {
          start: {
            line: 76,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }],
        line: 74
      },
      "6": {
        loc: {
          start: {
            line: 76,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }, {
          start: {
            line: 78,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }],
        line: 76
      },
      "7": {
        loc: {
          start: {
            line: 78,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 78,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }, {
          start: {
            line: 82,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }],
        line: 78
      },
      "8": {
        loc: {
          start: {
            line: 82,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }, {
          start: {
            line: 86,
            column: 27
          },
          end: {
            line: 89,
            column: 21
          }
        }],
        line: 82
      },
      "9": {
        loc: {
          start: {
            line: 88,
            column: 31
          },
          end: {
            line: 88,
            column: 83
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 88,
            column: 60
          },
          end: {
            line: 88,
            column: 75
          }
        }, {
          start: {
            line: 88,
            column: 78
          },
          end: {
            line: 88,
            column: 83
          }
        }],
        line: 88
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b80f9bae375fe4507a780a90483682d1793ea0f9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bj28ll2xr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1bj28ll2xr();
var verticalPropMap = (cov_1bj28ll2xr().s[0]++, {
  width: 'height',
  height: 'width',
  overflowX: 'overflowY',
  overflowY: 'overflowX',
  clientWidth: 'clientHeight',
  clientHeight: 'clientWidth',
  clientX: 'clientY',
  clientY: 'clientX',
  scrollWidth: 'scrollHeight',
  scrollLeft: 'scrollTop',
  offsetLeft: 'offsetTop',
  offsetTop: 'offsetLeft',
  offsetHeight: 'offsetWidth',
  offsetWidth: 'offsetHeight',
  left: 'top',
  right: 'bottom',
  top: 'left',
  bottom: 'right',
  borderRightStyle: 'borderBottomStyle',
  borderRightWidth: 'borderBottomWidth',
  borderRightColor: 'borderBottomColor'
});
/**
 * Convert a horizontally-oriented property name to a vertical one.
 *
 * @param {string} prop A property name
 * @param {bool} vertical Whether the element is oriented vertically
 * @returns {string} prop, converted appropriately
 */

function mapProp(prop, vertical) {
  cov_1bj28ll2xr().f[0]++;
  cov_1bj28ll2xr().s[1]++;

  if (Object.prototype.hasOwnProperty.call(verticalPropMap, prop)) {
    cov_1bj28ll2xr().b[0][0]++;
    cov_1bj28ll2xr().s[2]++;
    return vertical ? (cov_1bj28ll2xr().b[1][0]++, verticalPropMap[prop]) : (cov_1bj28ll2xr().b[1][1]++, prop);
  } else {
    cov_1bj28ll2xr().b[0][1]++;
    cov_1bj28ll2xr().s[3]++;
    return prop;
  }
}

var isProxy = (cov_1bj28ll2xr().s[4]++, Symbol("isProxy"));
/**
 * Returns an appropriately oriented object based on vertical.
 * If vertical is true, attribute getting and setting will be mapped through
 * verticalPropMap, so that e.g. getting the object's .width will give its
 * .height instead.
 * Certain methods of an oriented object will return oriented objects as well.
 * Oriented objects can't be added to the DOM directly since they are Proxy objects
 * and thus fail typechecks. Use domElement to get the actual element for this.
 *
 * @param {object} target The object to be wrapped and oriented
 * @param {bool} vertical Whether the element is oriented vertically
 * @returns {Proxy} An oriented object with attr translation via verticalAttrMap
 * @since 5.0.0
 */

function withOrientation(target, vertical) {
  cov_1bj28ll2xr().f[1]++;
  cov_1bj28ll2xr().s[5]++;

  if (target[isProxy]) {
    cov_1bj28ll2xr().b[2][0]++;
    cov_1bj28ll2xr().s[6]++;
    return target;
  } else {
    cov_1bj28ll2xr().b[2][1]++;
    cov_1bj28ll2xr().s[7]++;
    return new Proxy(target, {
      get: function get(obj, prop, receiver) {
        cov_1bj28ll2xr().f[2]++;
        cov_1bj28ll2xr().s[8]++;

        if (prop === isProxy) {
          cov_1bj28ll2xr().b[3][0]++;
          cov_1bj28ll2xr().s[9]++;
          return true;
        } else {
          cov_1bj28ll2xr().b[3][1]++;
          cov_1bj28ll2xr().s[10]++;

          if (prop === 'domElement') {
            cov_1bj28ll2xr().b[4][0]++;
            cov_1bj28ll2xr().s[11]++;
            return obj;
          } else {
            cov_1bj28ll2xr().b[4][1]++;
            cov_1bj28ll2xr().s[12]++;

            if (prop === 'style') {
              cov_1bj28ll2xr().b[5][0]++;
              cov_1bj28ll2xr().s[13]++;
              return withOrientation(obj.style, vertical);
            } else {
              cov_1bj28ll2xr().b[5][1]++;
              cov_1bj28ll2xr().s[14]++;

              if (prop === 'canvas') {
                cov_1bj28ll2xr().b[6][0]++;
                cov_1bj28ll2xr().s[15]++;
                return withOrientation(obj.canvas, vertical);
              } else {
                cov_1bj28ll2xr().b[6][1]++;
                cov_1bj28ll2xr().s[16]++;

                if (prop === 'getBoundingClientRect') {
                  cov_1bj28ll2xr().b[7][0]++;
                  cov_1bj28ll2xr().s[17]++;
                  return function () {
                    cov_1bj28ll2xr().f[3]++;
                    cov_1bj28ll2xr().s[18]++;
                    return withOrientation(obj.getBoundingClientRect.apply(obj, arguments), vertical);
                  };
                } else {
                  cov_1bj28ll2xr().b[7][1]++;
                  cov_1bj28ll2xr().s[19]++;

                  if (prop === 'getContext') {
                    cov_1bj28ll2xr().b[8][0]++;
                    cov_1bj28ll2xr().s[20]++;
                    return function () {
                      cov_1bj28ll2xr().f[4]++;
                      cov_1bj28ll2xr().s[21]++;
                      return withOrientation(obj.getContext.apply(obj, arguments), vertical);
                    };
                  } else {
                    cov_1bj28ll2xr().b[8][1]++;
                    var value = (cov_1bj28ll2xr().s[22]++, obj[mapProp(prop, vertical)]);
                    cov_1bj28ll2xr().s[23]++;
                    return typeof value == 'function' ? (cov_1bj28ll2xr().b[9][0]++, value.bind(obj)) : (cov_1bj28ll2xr().b[9][1]++, value);
                  }
                }
              }
            }
          }
        }
      },
      set: function set(obj, prop, value) {
        cov_1bj28ll2xr().f[5]++;
        cov_1bj28ll2xr().s[24]++;
        obj[mapProp(prop, vertical)] = value;
        cov_1bj28ll2xr().s[25]++;
        return true;
      }
    });
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/prevent-click.js":
/*!***********************************!*\
  !*** ./src/util/prevent-click.js ***!
  \***********************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = preventClick;

function cov_2ftmct9bmj() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/prevent-click.js";
  var hash = "7981f7e13c9654e94ed3124b503c2feda8c6dfb5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/prevent-click.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 28
        }
      },
      "1": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 74
        }
      },
      "2": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 71
        }
      }
    },
    fnMap: {
      "0": {
        name: "preventClickHandler",
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 28
          }
        },
        loc: {
          start: {
            line: 7,
            column: 36
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "preventClick",
        decl: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 36
          }
        },
        loc: {
          start: {
            line: 17,
            column: 45
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7981f7e13c9654e94ed3124b503c2feda8c6dfb5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ftmct9bmj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ftmct9bmj();

/**
 * Stops propagation of click event and removes event listener
 *
 * @private
 * @param {object} event The click event
 */
function preventClickHandler(event) {
  cov_2ftmct9bmj().f[0]++;
  cov_2ftmct9bmj().s[0]++;
  event.stopPropagation();
  cov_2ftmct9bmj().s[1]++;
  document.body.removeEventListener('click', preventClickHandler, true);
}
/**
 * Starts listening for click event and prevent propagation
 *
 * @param {object} values Values
 */


function preventClick(values) {
  cov_2ftmct9bmj().f[1]++;
  cov_2ftmct9bmj().s[2]++;
  document.body.addEventListener('click', preventClickHandler, true);
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/request-animation-frame.js":
/*!*********************************************!*\
  !*** ./src/util/request-animation-frame.js ***!
  \*********************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

function cov_nduho62e8() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/request-animation-frame.js";
  var hash = "6e5a83d0d1b02ed08228888f1fd2ff5289f61e8e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/request-animation-frame.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 28
        },
        end: {
          line: 14,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 5
          },
          end: {
            line: 14,
            column: 6
          }
        },
        loc: {
          start: {
            line: 14,
            column: 28
          },
          end: {
            line: 14,
            column: 59
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 14,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 32
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 38
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 35
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 33
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 34
          }
        }, {
          start: {
            line: 14,
            column: 5
          },
          end: {
            line: 14,
            column: 59
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6e5a83d0d1b02ed08228888f1fd2ff5289f61e8e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nduho62e8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_nduho62e8();

/* eslint-disable valid-jsdoc */

/**
 * Returns the `requestAnimationFrame` function for the browser, or a shim with
 * `setTimeout` if the function is not found
 *
 * @return {function} Available `requestAnimationFrame` function for the browser
 */
var _default = ((cov_nduho62e8().b[0][0]++, window.requestAnimationFrame) || (cov_nduho62e8().b[0][1]++, window.webkitRequestAnimationFrame) || (cov_nduho62e8().b[0][2]++, window.mozRequestAnimationFrame) || (cov_nduho62e8().b[0][3]++, window.oRequestAnimationFrame) || (cov_nduho62e8().b[0][4]++, window.msRequestAnimationFrame) || (cov_nduho62e8().b[0][5]++, function (callback, element) {
  cov_nduho62e8().f[0]++;
  cov_nduho62e8().s[0]++;
  return setTimeout(callback, 1000 / 60);
})).bind(window);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/util/silence-mode.js":
/*!**********************************!*\
  !*** ./src/util/silence-mode.js ***!
  \**********************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ignoreSilenceMode;

function cov_1usyknp9n() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/silence-mode.js";
  var hash = "c7447ef1be4711e0c10ca365bc1fa0f2fa320428";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/silence-mode.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 22
        },
        end: {
          line: 17,
          column: 883
        }
      },
      "1": {
        start: {
          line: 20,
          column: 14
        },
        end: {
          line: 20,
          column: 43
        }
      },
      "2": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 62
        }
      },
      "3": {
        start: {
          line: 23,
          column: 26
        },
        end: {
          line: 23,
          column: 46
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 36
        }
      },
      "5": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 37
        }
      },
      "6": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 40
        }
      },
      "7": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 49
        }
      },
      "8": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 27
        }
      },
      "9": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 29
        }
      },
      "10": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "ignoreSilenceMode",
        decl: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 12,
            column: 41
          }
        },
        loc: {
          start: {
            line: 12,
            column: 44
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c7447ef1be4711e0c10ca365bc1fa0f2fa320428"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1usyknp9n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1usyknp9n();

/**
 * Ignores device silence mode when using the `WebAudio` backend.
 *
 * Many mobile devices contain a hardware button to mute the ringtone for incoming
 * calls and messages. Unfortunately, on some platforms like iOS, this also mutes
 * wavesurfer's audio when using the `WebAudio` backend. This function creates a
 * temporary `<audio>` element that makes sure the WebAudio backend keeps playing
 * when muting the device ringer.
 *
 * @since 5.2.0
 */
function ignoreSilenceMode() {
  cov_1usyknp9n().f[0]++;
  // Set the src to a short bit of url encoded as a silent mp3
  // NOTE The silence MP3 must be high quality, when web audio sounds are played
  // in parallel the web audio sound is mixed to match the bitrate of the html sound
  // 0.01 seconds of silence VBR220-260 Joint Stereo 859B
  var audioData = (cov_1usyknp9n().s[0]++, "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//////////////////////////////////////////////////////////////////8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADgnABGiAAQBCqgCRMAAgEAH///////////////7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq//////////////////9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="); // disable iOS Airplay (setting the attribute in js doesn't work)

  var tmp = (cov_1usyknp9n().s[1]++, document.createElement("div"));
  cov_1usyknp9n().s[2]++;
  tmp.innerHTML = '<audio x-webkit-airplay="deny"></audio>';
  var audioSilentMode = (cov_1usyknp9n().s[3]++, tmp.children.item(0));
  cov_1usyknp9n().s[4]++;
  audioSilentMode.src = audioData;
  cov_1usyknp9n().s[5]++;
  audioSilentMode.preload = "auto";
  cov_1usyknp9n().s[6]++;
  audioSilentMode.type = "audio/mpeg";
  cov_1usyknp9n().s[7]++;
  audioSilentMode.disableRemotePlayback = true; // play

  cov_1usyknp9n().s[8]++;
  audioSilentMode.play(); // cleanup

  cov_1usyknp9n().s[9]++;
  audioSilentMode.remove();
  cov_1usyknp9n().s[10]++;
  tmp.remove();
}

module.exports = exports.default;

/***/ }),

/***/ "./src/util/style.js":
/*!***************************!*\
  !*** ./src/util/style.js ***!
  \***************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = style;

function cov_2gfc18navy() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/style.js";
  var hash = "95d3127e1a5e5ef52b9f388629b79eb8332db66a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/util/style.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 7
        }
      },
      "1": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 13,
          column: 9
        }
      },
      "2": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 42
        }
      },
      "3": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "style",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 29
          }
        },
        loc: {
          start: {
            line: 9,
            column: 42
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 32
          },
          end: {
            line: 10,
            column: 33
          }
        },
        loc: {
          start: {
            line: 10,
            column: 40
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 13,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 13,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "95d3127e1a5e5ef52b9f388629b79eb8332db66a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2gfc18navy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2gfc18navy();

/**
 * Apply a map of styles to an element
 *
 * @param {HTMLElement} el The element that the styles will be applied to
 * @param {Object} styles The map of propName: attribute, both are used as-is
 *
 * @return {HTMLElement} el
 */
function style(el, styles) {
  cov_2gfc18navy().f[0]++;
  cov_2gfc18navy().s[0]++;
  Object.keys(styles).forEach(function (prop) {
    cov_2gfc18navy().f[1]++;
    cov_2gfc18navy().s[1]++;

    if (el.style[prop] !== styles[prop]) {
      cov_2gfc18navy().b[0][0]++;
      cov_2gfc18navy().s[2]++;
      el.style[prop] = styles[prop];
    } else {
      cov_2gfc18navy().b[0][1]++;
    }
  });
  cov_2gfc18navy().s[3]++;
  return el;
}

module.exports = exports.default;

/***/ }),

/***/ "./src/wavesurfer.js":
/*!***************************!*\
  !*** ./src/wavesurfer.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));

var _drawer = _interopRequireDefault(__webpack_require__(/*! ./drawer.multicanvas */ "./src/drawer.multicanvas.js"));

var _webaudio = _interopRequireDefault(__webpack_require__(/*! ./webaudio */ "./src/webaudio.js"));

var _mediaelement = _interopRequireDefault(__webpack_require__(/*! ./mediaelement */ "./src/mediaelement.js"));

var _peakcache = _interopRequireDefault(__webpack_require__(/*! ./peakcache */ "./src/peakcache.js"));

var _mediaelementWebaudio = _interopRequireDefault(__webpack_require__(/*! ./mediaelement-webaudio */ "./src/mediaelement-webaudio.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function cov_2dzrqndzkl() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/wavesurfer.js";
  var hash = "ead25fe7d8a16f886cec9b16b758c51cbcab2c94";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/wavesurfer.js",
    statementMap: {
      "0": {
        start: {
          line: 247,
          column: 20
        },
        end: {
          line: 306,
          column: 5
        }
      },
      "1": {
        start: {
          line: 309,
          column: 15
        },
        end: {
          line: 313,
          column: 5
        }
      },
      "2": {
        start: {
          line: 323,
          column: 27
        },
        end: {
          line: 323,
          column: 49
        }
      },
      "3": {
        start: {
          line: 324,
          column: 8
        },
        end: {
          line: 324,
          column: 33
        }
      },
      "4": {
        start: {
          line: 335,
          column: 21
        },
        end: {
          line: 335,
          column: 32
        }
      },
      "5": {
        start: {
          line: 346,
          column: 11
        },
        end: {
          line: 346,
          column: 15
        }
      },
      "6": {
        start: {
          line: 356,
          column: 18
        },
        end: {
          line: 356,
          column: 22
        }
      },
      "7": {
        start: {
          line: 367,
          column: 8
        },
        end: {
          line: 367,
          column: 16
        }
      },
      "8": {
        start: {
          line: 372,
          column: 8
        },
        end: {
          line: 372,
          column: 68
        }
      },
      "9": {
        start: {
          line: 373,
          column: 8
        },
        end: {
          line: 377,
          column: 10
        }
      },
      "10": {
        start: {
          line: 379,
          column: 8
        },
        end: {
          line: 382,
          column: 40
        }
      },
      "11": {
        start: {
          line: 384,
          column: 8
        },
        end: {
          line: 386,
          column: 9
        }
      },
      "12": {
        start: {
          line: 385,
          column: 12
        },
        end: {
          line: 385,
          column: 59
        }
      },
      "13": {
        start: {
          line: 388,
          column: 8
        },
        end: {
          line: 399,
          column: 9
        }
      },
      "14": {
        start: {
          line: 390,
          column: 12
        },
        end: {
          line: 390,
          column: 49
        }
      },
      "15": {
        start: {
          line: 391,
          column: 15
        },
        end: {
          line: 399,
          column: 9
        }
      },
      "16": {
        start: {
          line: 393,
          column: 12
        },
        end: {
          line: 395,
          column: 14
        }
      },
      "17": {
        start: {
          line: 398,
          column: 12
        },
        end: {
          line: 398,
          column: 61
        }
      },
      "18": {
        start: {
          line: 401,
          column: 8
        },
        end: {
          line: 403,
          column: 9
        }
      },
      "19": {
        start: {
          line: 402,
          column: 12
        },
        end: {
          line: 402,
          column: 65
        }
      },
      "20": {
        start: {
          line: 405,
          column: 8
        },
        end: {
          line: 409,
          column: 9
        }
      },
      "21": {
        start: {
          line: 406,
          column: 12
        },
        end: {
          line: 406,
          column: 69
        }
      },
      "22": {
        start: {
          line: 407,
          column: 15
        },
        end: {
          line: 409,
          column: 9
        }
      },
      "23": {
        start: {
          line: 408,
          column: 12
        },
        end: {
          line: 408,
          column: 69
        }
      },
      "24": {
        start: {
          line: 411,
          column: 8
        },
        end: {
          line: 417,
          column: 9
        }
      },
      "25": {
        start: {
          line: 412,
          column: 12
        },
        end: {
          line: 416,
          column: 13
        }
      },
      "26": {
        start: {
          line: 413,
          column: 16
        },
        end: {
          line: 413,
          column: 77
        }
      },
      "27": {
        start: {
          line: 415,
          column: 16
        },
        end: {
          line: 415,
          column: 77
        }
      },
      "28": {
        start: {
          line: 419,
          column: 8
        },
        end: {
          line: 421,
          column: 9
        }
      },
      "29": {
        start: {
          line: 420,
          column: 12
        },
        end: {
          line: 420,
          column: 65
        }
      },
      "30": {
        start: {
          line: 428,
          column: 8
        },
        end: {
          line: 428,
          column: 29
        }
      },
      "31": {
        start: {
          line: 434,
          column: 8
        },
        end: {
          line: 434,
          column: 29
        }
      },
      "32": {
        start: {
          line: 441,
          column: 8
        },
        end: {
          line: 441,
          column: 28
        }
      },
      "33": {
        start: {
          line: 447,
          column: 8
        },
        end: {
          line: 447,
          column: 35
        }
      },
      "34": {
        start: {
          line: 449,
          column: 8
        },
        end: {
          line: 449,
          column: 32
        }
      },
      "35": {
        start: {
          line: 451,
          column: 8
        },
        end: {
          line: 451,
          column: 27
        }
      },
      "36": {
        start: {
          line: 453,
          column: 8
        },
        end: {
          line: 453,
          column: 28
        }
      },
      "37": {
        start: {
          line: 455,
          column: 8
        },
        end: {
          line: 455,
          column: 30
        }
      },
      "38": {
        start: {
          line: 458,
          column: 8
        },
        end: {
          line: 460,
          column: 9
        }
      },
      "39": {
        start: {
          line: 459,
          column: 12
        },
        end: {
          line: 459,
          column: 61
        }
      },
      "40": {
        start: {
          line: 464,
          column: 8
        },
        end: {
          line: 464,
          column: 43
        }
      },
      "41": {
        start: {
          line: 469,
          column: 8
        },
        end: {
          line: 471,
          column: 9
        }
      },
      "42": {
        start: {
          line: 470,
          column: 12
        },
        end: {
          line: 470,
          column: 49
        }
      },
      "43": {
        start: {
          line: 473,
          column: 8
        },
        end: {
          line: 479,
          column: 9
        }
      },
      "44": {
        start: {
          line: 478,
          column: 12
        },
        end: {
          line: 478,
          column: 49
        }
      },
      "45": {
        start: {
          line: 480,
          column: 8
        },
        end: {
          line: 480,
          column: 58
        }
      },
      "46": {
        start: {
          line: 485,
          column: 8
        },
        end: {
          line: 485,
          column: 40
        }
      },
      "47": {
        start: {
          line: 487,
          column: 8
        },
        end: {
          line: 487,
          column: 33
        }
      },
      "48": {
        start: {
          line: 495,
          column: 8
        },
        end: {
          line: 495,
          column: 29
        }
      },
      "49": {
        start: {
          line: 500,
          column: 24
        },
        end: {
          line: 500,
          column: 25
        }
      },
      "50": {
        start: {
          line: 501,
          column: 8
        },
        end: {
          line: 514,
          column: 10
        }
      },
      "51": {
        start: {
          line: 503,
          column: 16
        },
        end: {
          line: 509,
          column: 17
        }
      },
      "52": {
        start: {
          line: 507,
          column: 20
        },
        end: {
          line: 507,
          column: 64
        }
      },
      "53": {
        start: {
          line: 508,
          column: 20
        },
        end: {
          line: 508,
          column: 52
        }
      },
      "54": {
        start: {
          line: 516,
          column: 8
        },
        end: {
          line: 516,
          column: 20
        }
      },
      "55": {
        start: {
          line: 528,
          column: 8
        },
        end: {
          line: 528,
          column: 50
        }
      },
      "56": {
        start: {
          line: 529,
          column: 8
        },
        end: {
          line: 529,
          column: 28
        }
      },
      "57": {
        start: {
          line: 530,
          column: 8
        },
        end: {
          line: 530,
          column: 29
        }
      },
      "58": {
        start: {
          line: 531,
          column: 8
        },
        end: {
          line: 531,
          column: 31
        }
      },
      "59": {
        start: {
          line: 532,
          column: 8
        },
        end: {
          line: 532,
          column: 20
        }
      },
      "60": {
        start: {
          line: 545,
          column: 8
        },
        end: {
          line: 545,
          column: 58
        }
      },
      "61": {
        start: {
          line: 545,
          column: 34
        },
        end: {
          line: 545,
          column: 56
        }
      },
      "62": {
        start: {
          line: 548,
          column: 8
        },
        end: {
          line: 554,
          column: 11
        }
      },
      "63": {
        start: {
          line: 551,
          column: 12
        },
        end: {
          line: 553,
          column: 13
        }
      },
      "64": {
        start: {
          line: 552,
          column: 16
        },
        end: {
          line: 552,
          column: 45
        }
      },
      "65": {
        start: {
          line: 555,
          column: 8
        },
        end: {
          line: 555,
          column: 54
        }
      },
      "66": {
        start: {
          line: 556,
          column: 8
        },
        end: {
          line: 556,
          column: 20
        }
      },
      "67": {
        start: {
          line: 566,
          column: 8
        },
        end: {
          line: 566,
          column: 42
        }
      },
      "68": {
        start: {
          line: 578,
          column: 8
        },
        end: {
          line: 580,
          column: 9
        }
      },
      "69": {
        start: {
          line: 579,
          column: 12
        },
        end: {
          line: 579,
          column: 60
        }
      },
      "70": {
        start: {
          line: 581,
          column: 8
        },
        end: {
          line: 585,
          column: 9
        }
      },
      "71": {
        start: {
          line: 582,
          column: 12
        },
        end: {
          line: 584,
          column: 14
        }
      },
      "72": {
        start: {
          line: 588,
          column: 8
        },
        end: {
          line: 596,
          column: 9
        }
      },
      "73": {
        start: {
          line: 589,
          column: 12
        },
        end: {
          line: 595,
          column: 15
        }
      },
      "74": {
        start: {
          line: 594,
          column: 16
        },
        end: {
          line: 594,
          column: 78
        }
      },
      "75": {
        start: {
          line: 598,
          column: 25
        },
        end: {
          line: 598,
          column: 40
        }
      },
      "76": {
        start: {
          line: 601,
          column: 38
        },
        end: {
          line: 603,
          column: 9
        }
      },
      "77": {
        start: {
          line: 604,
          column: 8
        },
        end: {
          line: 606,
          column: 11
        }
      },
      "78": {
        start: {
          line: 605,
          column: 12
        },
        end: {
          line: 605,
          column: 67
        }
      },
      "79": {
        start: {
          line: 613,
          column: 8
        },
        end: {
          line: 613,
          column: 68
        }
      },
      "80": {
        start: {
          line: 614,
          column: 8
        },
        end: {
          line: 614,
          column: 52
        }
      },
      "81": {
        start: {
          line: 615,
          column: 8
        },
        end: {
          line: 615,
          column: 20
        }
      },
      "82": {
        start: {
          line: 627,
          column: 8
        },
        end: {
          line: 629,
          column: 9
        }
      },
      "83": {
        start: {
          line: 628,
          column: 12
        },
        end: {
          line: 628,
          column: 70
        }
      },
      "84": {
        start: {
          line: 630,
          column: 8
        },
        end: {
          line: 633,
          column: 9
        }
      },
      "85": {
        start: {
          line: 632,
          column: 12
        },
        end: {
          line: 632,
          column: 37
        }
      },
      "86": {
        start: {
          line: 634,
          column: 8
        },
        end: {
          line: 634,
          column: 26
        }
      },
      "87": {
        start: {
          line: 635,
          column: 8
        },
        end: {
          line: 635,
          column: 48
        }
      },
      "88": {
        start: {
          line: 636,
          column: 8
        },
        end: {
          line: 636,
          column: 51
        }
      },
      "89": {
        start: {
          line: 637,
          column: 8
        },
        end: {
          line: 637,
          column: 20
        }
      },
      "90": {
        start: {
          line: 649,
          column: 8
        },
        end: {
          line: 653,
          column: 9
        }
      },
      "91": {
        start: {
          line: 650,
          column: 12
        },
        end: {
          line: 652,
          column: 14
        }
      },
      "92": {
        start: {
          line: 654,
          column: 8
        },
        end: {
          line: 658,
          column: 9
        }
      },
      "93": {
        start: {
          line: 655,
          column: 12
        },
        end: {
          line: 657,
          column: 14
        }
      },
      "94": {
        start: {
          line: 659,
          column: 8
        },
        end: {
          line: 661,
          column: 9
        }
      },
      "95": {
        start: {
          line: 660,
          column: 12
        },
        end: {
          line: 660,
          column: 80
        }
      },
      "96": {
        start: {
          line: 663,
          column: 8
        },
        end: {
          line: 663,
          column: 29
        }
      },
      "97": {
        start: {
          line: 664,
          column: 8
        },
        end: {
          line: 664,
          column: 48
        }
      },
      "98": {
        start: {
          line: 665,
          column: 8
        },
        end: {
          line: 665,
          column: 49
        }
      },
      "99": {
        start: {
          line: 666,
          column: 8
        },
        end: {
          line: 666,
          column: 20
        }
      },
      "100": {
        start: {
          line: 676,
          column: 8
        },
        end: {
          line: 678,
          column: 10
        }
      },
      "101": {
        start: {
          line: 677,
          column: 12
        },
        end: {
          line: 677,
          column: 36
        }
      },
      "102": {
        start: {
          line: 688,
          column: 8
        },
        end: {
          line: 688,
          column: 67
        }
      },
      "103": {
        start: {
          line: 689,
          column: 8
        },
        end: {
          line: 689,
          column: 27
        }
      },
      "104": {
        start: {
          line: 690,
          column: 8
        },
        end: {
          line: 690,
          column: 54
        }
      },
      "105": {
        start: {
          line: 692,
          column: 8
        },
        end: {
          line: 695,
          column: 9
        }
      },
      "106": {
        start: {
          line: 693,
          column: 12
        },
        end: {
          line: 693,
          column: 68
        }
      },
      "107": {
        start: {
          line: 694,
          column: 12
        },
        end: {
          line: 694,
          column: 79
        }
      },
      "108": {
        start: {
          line: 697,
          column: 8
        },
        end: {
          line: 700,
          column: 11
        }
      },
      "109": {
        start: {
          line: 698,
          column: 12
        },
        end: {
          line: 698,
          column: 30
        }
      },
      "110": {
        start: {
          line: 699,
          column: 12
        },
        end: {
          line: 699,
          column: 67
        }
      },
      "111": {
        start: {
          line: 703,
          column: 8
        },
        end: {
          line: 705,
          column: 11
        }
      },
      "112": {
        start: {
          line: 704,
          column: 12
        },
        end: {
          line: 704,
          column: 55
        }
      },
      "113": {
        start: {
          line: 704,
          column: 29
        },
        end: {
          line: 704,
          column: 50
        }
      },
      "114": {
        start: {
          line: 708,
          column: 8
        },
        end: {
          line: 713,
          column: 11
        }
      },
      "115": {
        start: {
          line: 709,
          column: 12
        },
        end: {
          line: 711,
          column: 13
        }
      },
      "116": {
        start: {
          line: 710,
          column: 16
        },
        end: {
          line: 710,
          column: 34
        }
      },
      "117": {
        start: {
          line: 712,
          column: 12
        },
        end: {
          line: 712,
          column: 40
        }
      },
      "118": {
        start: {
          line: 723,
          column: 8
        },
        end: {
          line: 725,
          column: 9
        }
      },
      "119": {
        start: {
          line: 724,
          column: 12
        },
        end: {
          line: 724,
          column: 35
        }
      },
      "120": {
        start: {
          line: 727,
          column: 8
        },
        end: {
          line: 727,
          column: 53
        }
      },
      "121": {
        start: {
          line: 728,
          column: 8
        },
        end: {
          line: 728,
          column: 28
        }
      },
      "122": {
        start: {
          line: 729,
          column: 8
        },
        end: {
          line: 729,
          column: 56
        }
      },
      "123": {
        start: {
          line: 731,
          column: 8
        },
        end: {
          line: 734,
          column: 11
        }
      },
      "124": {
        start: {
          line: 732,
          column: 12
        },
        end: {
          line: 732,
          column: 67
        }
      },
      "125": {
        start: {
          line: 733,
          column: 12
        },
        end: {
          line: 733,
          column: 37
        }
      },
      "126": {
        start: {
          line: 735,
          column: 8
        },
        end: {
          line: 735,
          column: 62
        }
      },
      "127": {
        start: {
          line: 735,
          column: 38
        },
        end: {
          line: 735,
          column: 60
        }
      },
      "128": {
        start: {
          line: 736,
          column: 8
        },
        end: {
          line: 736,
          column: 64
        }
      },
      "129": {
        start: {
          line: 736,
          column: 39
        },
        end: {
          line: 736,
          column: 62
        }
      },
      "130": {
        start: {
          line: 738,
          column: 8
        },
        end: {
          line: 741,
          column: 11
        }
      },
      "131": {
        start: {
          line: 739,
          column: 12
        },
        end: {
          line: 739,
          column: 67
        }
      },
      "132": {
        start: {
          line: 740,
          column: 12
        },
        end: {
          line: 740,
          column: 49
        }
      },
      "133": {
        start: {
          line: 744,
          column: 8
        },
        end: {
          line: 761,
          column: 9
        }
      },
      "134": {
        start: {
          line: 748,
          column: 12
        },
        end: {
          line: 750,
          column: 15
        }
      },
      "135": {
        start: {
          line: 749,
          column: 16
        },
        end: {
          line: 749,
          column: 71
        }
      },
      "136": {
        start: {
          line: 752,
          column: 12
        },
        end: {
          line: 760,
          column: 15
        }
      },
      "137": {
        start: {
          line: 753,
          column: 32
        },
        end: {
          line: 753,
          column: 48
        }
      },
      "138": {
        start: {
          line: 754,
          column: 16
        },
        end: {
          line: 754,
          column: 52
        }
      },
      "139": {
        start: {
          line: 756,
          column: 16
        },
        end: {
          line: 759,
          column: 17
        }
      },
      "140": {
        start: {
          line: 757,
          column: 20
        },
        end: {
          line: 757,
          column: 56
        }
      },
      "141": {
        start: {
          line: 758,
          column: 20
        },
        end: {
          line: 758,
          column: 57
        }
      },
      "142": {
        start: {
          line: 770,
          column: 8
        },
        end: {
          line: 772,
          column: 9
        }
      },
      "143": {
        start: {
          line: 771,
          column: 12
        },
        end: {
          line: 771,
          column: 45
        }
      },
      "144": {
        start: {
          line: 782,
          column: 8
        },
        end: {
          line: 782,
          column: 42
        }
      },
      "145": {
        start: {
          line: 792,
          column: 8
        },
        end: {
          line: 792,
          column: 45
        }
      },
      "146": {
        start: {
          line: 802,
          column: 8
        },
        end: {
          line: 806,
          column: 9
        }
      },
      "147": {
        start: {
          line: 803,
          column: 12
        },
        end: {
          line: 803,
          column: 27
        }
      },
      "148": {
        start: {
          line: 805,
          column: 12
        },
        end: {
          line: 805,
          column: 54
        }
      },
      "149": {
        start: {
          line: 822,
          column: 8
        },
        end: {
          line: 825,
          column: 9
        }
      },
      "150": {
        start: {
          line: 824,
          column: 12
        },
        end: {
          line: 824,
          column: 37
        }
      },
      "151": {
        start: {
          line: 827,
          column: 8
        },
        end: {
          line: 827,
          column: 67
        }
      },
      "152": {
        start: {
          line: 827,
          column: 44
        },
        end: {
          line: 827,
          column: 65
        }
      },
      "153": {
        start: {
          line: 828,
          column: 8
        },
        end: {
          line: 828,
          column: 45
        }
      },
      "154": {
        start: {
          line: 838,
          column: 8
        },
        end: {
          line: 838,
          column: 42
        }
      },
      "155": {
        start: {
          line: 848,
          column: 8
        },
        end: {
          line: 850,
          column: 9
        }
      },
      "156": {
        start: {
          line: 849,
          column: 12
        },
        end: {
          line: 849,
          column: 40
        }
      },
      "157": {
        start: {
          line: 860,
          column: 8
        },
        end: {
          line: 860,
          column: 68
        }
      },
      "158": {
        start: {
          line: 870,
          column: 8
        },
        end: {
          line: 870,
          column: 40
        }
      },
      "159": {
        start: {
          line: 881,
          column: 8
        },
        end: {
          line: 881,
          column: 55
        }
      },
      "160": {
        start: {
          line: 892,
          column: 8
        },
        end: {
          line: 892,
          column: 53
        }
      },
      "161": {
        start: {
          line: 905,
          column: 25
        },
        end: {
          line: 905,
          column: 48
        }
      },
      "162": {
        start: {
          line: 906,
          column: 23
        },
        end: {
          line: 906,
          column: 49
        }
      },
      "163": {
        start: {
          line: 907,
          column: 8
        },
        end: {
          line: 907,
          column: 77
        }
      },
      "164": {
        start: {
          line: 908,
          column: 8
        },
        end: {
          line: 908,
          column: 48
        }
      },
      "165": {
        start: {
          line: 920,
          column: 8
        },
        end: {
          line: 920,
          column: 30
        }
      },
      "166": {
        start: {
          line: 921,
          column: 8
        },
        end: {
          line: 921,
          column: 39
        }
      },
      "167": {
        start: {
          line: 936,
          column: 8
        },
        end: {
          line: 945,
          column: 9
        }
      },
      "168": {
        start: {
          line: 942,
          column: 12
        },
        end: {
          line: 944,
          column: 14
        }
      },
      "169": {
        start: {
          line: 946,
          column: 8
        },
        end: {
          line: 946,
          column: 67
        }
      },
      "170": {
        start: {
          line: 946,
          column: 44
        },
        end: {
          line: 946,
          column: 65
        }
      },
      "171": {
        start: {
          line: 948,
          column: 34
        },
        end: {
          line: 948,
          column: 68
        }
      },
      "172": {
        start: {
          line: 949,
          column: 23
        },
        end: {
          line: 949,
          column: 46
        }
      },
      "173": {
        start: {
          line: 951,
          column: 8
        },
        end: {
          line: 953,
          column: 9
        }
      },
      "174": {
        start: {
          line: 952,
          column: 12
        },
        end: {
          line: 952,
          column: 33
        }
      },
      "175": {
        start: {
          line: 956,
          column: 32
        },
        end: {
          line: 956,
          column: 56
        }
      },
      "176": {
        start: {
          line: 957,
          column: 8
        },
        end: {
          line: 957,
          column: 41
        }
      },
      "177": {
        start: {
          line: 958,
          column: 8
        },
        end: {
          line: 958,
          column: 59
        }
      },
      "178": {
        start: {
          line: 959,
          column: 8
        },
        end: {
          line: 959,
          column: 39
        }
      },
      "179": {
        start: {
          line: 961,
          column: 8
        },
        end: {
          line: 963,
          column: 9
        }
      },
      "180": {
        start: {
          line: 962,
          column: 12
        },
        end: {
          line: 962,
          column: 32
        }
      },
      "181": {
        start: {
          line: 965,
          column: 8
        },
        end: {
          line: 965,
          column: 51
        }
      },
      "182": {
        start: {
          line: 966,
          column: 8
        },
        end: {
          line: 966,
          column: 41
        }
      },
      "183": {
        start: {
          line: 975,
          column: 8
        },
        end: {
          line: 975,
          column: 21
        }
      },
      "184": {
        start: {
          line: 976,
          column: 8
        },
        end: {
          line: 976,
          column: 23
        }
      },
      "185": {
        start: {
          line: 977,
          column: 8
        },
        end: {
          line: 977,
          column: 32
        }
      },
      "186": {
        start: {
          line: 989,
          column: 8
        },
        end: {
          line: 989,
          column: 48
        }
      },
      "187": {
        start: {
          line: 1000,
          column: 8
        },
        end: {
          line: 1000,
          column: 42
        }
      },
      "188": {
        start: {
          line: 1001,
          column: 8
        },
        end: {
          line: 1001,
          column: 44
        }
      },
      "189": {
        start: {
          line: 1011,
          column: 8
        },
        end: {
          line: 1011,
          column: 40
        }
      },
      "190": {
        start: {
          line: 1022,
          column: 8
        },
        end: {
          line: 1022,
          column: 43
        }
      },
      "191": {
        start: {
          line: 1031,
          column: 8
        },
        end: {
          line: 1031,
          column: 46
        }
      },
      "192": {
        start: {
          line: 1043,
          column: 8
        },
        end: {
          line: 1043,
          column: 36
        }
      },
      "193": {
        start: {
          line: 1059,
          column: 8
        },
        end: {
          line: 1062,
          column: 9
        }
      },
      "194": {
        start: {
          line: 1060,
          column: 12
        },
        end: {
          line: 1060,
          column: 49
        }
      },
      "195": {
        start: {
          line: 1061,
          column: 12
        },
        end: {
          line: 1061,
          column: 19
        }
      },
      "196": {
        start: {
          line: 1064,
          column: 8
        },
        end: {
          line: 1084,
          column: 9
        }
      },
      "197": {
        start: {
          line: 1067,
          column: 12
        },
        end: {
          line: 1067,
          column: 39
        }
      },
      "198": {
        start: {
          line: 1068,
          column: 12
        },
        end: {
          line: 1068,
          column: 32
        }
      },
      "199": {
        start: {
          line: 1070,
          column: 12
        },
        end: {
          line: 1083,
          column: 13
        }
      },
      "200": {
        start: {
          line: 1073,
          column: 16
        },
        end: {
          line: 1073,
          column: 60
        }
      },
      "201": {
        start: {
          line: 1074,
          column: 16
        },
        end: {
          line: 1074,
          column: 42
        }
      },
      "202": {
        start: {
          line: 1075,
          column: 16
        },
        end: {
          line: 1075,
          column: 36
        }
      },
      "203": {
        start: {
          line: 1076,
          column: 16
        },
        end: {
          line: 1076,
          column: 44
        }
      },
      "204": {
        start: {
          line: 1080,
          column: 16
        },
        end: {
          line: 1080,
          column: 57
        }
      },
      "205": {
        start: {
          line: 1081,
          column: 16
        },
        end: {
          line: 1081,
          column: 37
        }
      },
      "206": {
        start: {
          line: 1082,
          column: 16
        },
        end: {
          line: 1082,
          column: 59
        }
      },
      "207": {
        start: {
          line: 1085,
          column: 8
        },
        end: {
          line: 1085,
          column: 45
        }
      },
      "208": {
        start: {
          line: 1095,
          column: 8
        },
        end: {
          line: 1095,
          column: 28
        }
      },
      "209": {
        start: {
          line: 1106,
          column: 8
        },
        end: {
          line: 1106,
          column: 42
        }
      },
      "210": {
        start: {
          line: 1115,
          column: 8
        },
        end: {
          line: 1115,
          column: 61
        }
      },
      "211": {
        start: {
          line: 1116,
          column: 8
        },
        end: {
          line: 1116,
          column: 26
        }
      },
      "212": {
        start: {
          line: 1125,
          column: 8
        },
        end: {
          line: 1125,
          column: 53
        }
      },
      "213": {
        start: {
          line: 1135,
          column: 8
        },
        end: {
          line: 1137,
          column: 9
        }
      },
      "214": {
        start: {
          line: 1136,
          column: 12
        },
        end: {
          line: 1136,
          column: 88
        }
      },
      "215": {
        start: {
          line: 1138,
          column: 8
        },
        end: {
          line: 1138,
          column: 37
        }
      },
      "216": {
        start: {
          line: 1149,
          column: 8
        },
        end: {
          line: 1153,
          column: 9
        }
      },
      "217": {
        start: {
          line: 1150,
          column: 12
        },
        end: {
          line: 1150,
          column: 89
        }
      },
      "218": {
        start: {
          line: 1152,
          column: 12
        },
        end: {
          line: 1152,
          column: 42
        }
      },
      "219": {
        start: {
          line: 1154,
          column: 8
        },
        end: {
          line: 1154,
          column: 26
        }
      },
      "220": {
        start: {
          line: 1164,
          column: 8
        },
        end: {
          line: 1166,
          column: 9
        }
      },
      "221": {
        start: {
          line: 1165,
          column: 12
        },
        end: {
          line: 1165,
          column: 92
        }
      },
      "222": {
        start: {
          line: 1167,
          column: 8
        },
        end: {
          line: 1167,
          column: 41
        }
      },
      "223": {
        start: {
          line: 1178,
          column: 8
        },
        end: {
          line: 1182,
          column: 9
        }
      },
      "224": {
        start: {
          line: 1179,
          column: 12
        },
        end: {
          line: 1179,
          column: 93
        }
      },
      "225": {
        start: {
          line: 1181,
          column: 12
        },
        end: {
          line: 1181,
          column: 46
        }
      },
      "226": {
        start: {
          line: 1183,
          column: 8
        },
        end: {
          line: 1183,
          column: 26
        }
      },
      "227": {
        start: {
          line: 1192,
          column: 8
        },
        end: {
          line: 1192,
          column: 43
        }
      },
      "228": {
        start: {
          line: 1202,
          column: 8
        },
        end: {
          line: 1202,
          column: 44
        }
      },
      "229": {
        start: {
          line: 1203,
          column: 8
        },
        end: {
          line: 1203,
          column: 80
        }
      },
      "230": {
        start: {
          line: 1213,
          column: 8
        },
        end: {
          line: 1213,
          column: 39
        }
      },
      "231": {
        start: {
          line: 1224,
          column: 8
        },
        end: {
          line: 1224,
          column: 40
        }
      },
      "232": {
        start: {
          line: 1225,
          column: 8
        },
        end: {
          line: 1225,
          column: 35
        }
      },
      "233": {
        start: {
          line: 1234,
          column: 8
        },
        end: {
          line: 1234,
          column: 34
        }
      },
      "234": {
        start: {
          line: 1244,
          column: 8
        },
        end: {
          line: 1244,
          column: 36
        }
      },
      "235": {
        start: {
          line: 1245,
          column: 8
        },
        end: {
          line: 1245,
          column: 63
        }
      },
      "236": {
        start: {
          line: 1246,
          column: 8
        },
        end: {
          line: 1246,
          column: 26
        }
      },
      "237": {
        start: {
          line: 1263,
          column: 8
        },
        end: {
          line: 1263,
          column: 73
        }
      },
      "238": {
        start: {
          line: 1264,
          column: 8
        },
        end: {
          line: 1264,
          column: 26
        }
      },
      "239": {
        start: {
          line: 1274,
          column: 29
        },
        end: {
          line: 1278,
          column: 9
        }
      },
      "240": {
        start: {
          line: 1279,
          column: 28
        },
        end: {
          line: 1279,
          column: 50
        }
      },
      "241": {
        start: {
          line: 1280,
          column: 20
        },
        end: {
          line: 1280,
          column: 32
        }
      },
      "242": {
        start: {
          line: 1282,
          column: 20
        },
        end: {
          line: 1282,
          column: 21
        }
      },
      "243": {
        start: {
          line: 1283,
          column: 18
        },
        end: {
          line: 1283,
          column: 54
        }
      },
      "244": {
        start: {
          line: 1285,
          column: 8
        },
        end: {
          line: 1292,
          column: 9
        }
      },
      "245": {
        start: {
          line: 1289,
          column: 12
        },
        end: {
          line: 1289,
          column: 32
        }
      },
      "246": {
        start: {
          line: 1290,
          column: 12
        },
        end: {
          line: 1290,
          column: 22
        }
      },
      "247": {
        start: {
          line: 1291,
          column: 12
        },
        end: {
          line: 1291,
          column: 24
        }
      },
      "248": {
        start: {
          line: 1295,
          column: 8
        },
        end: {
          line: 1318,
          column: 9
        }
      },
      "249": {
        start: {
          line: 1296,
          column: 30
        },
        end: {
          line: 1300,
          column: 13
        }
      },
      "250": {
        start: {
          line: 1302,
          column: 12
        },
        end: {
          line: 1314,
          column: 13
        }
      },
      "251": {
        start: {
          line: 1303,
          column: 16
        },
        end: {
          line: 1307,
          column: 18
        }
      },
      "252": {
        start: {
          line: 1308,
          column: 16
        },
        end: {
          line: 1313,
          column: 18
        }
      },
      "253": {
        start: {
          line: 1316,
          column: 12
        },
        end: {
          line: 1316,
          column: 61
        }
      },
      "254": {
        start: {
          line: 1317,
          column: 12
        },
        end: {
          line: 1317,
          column: 60
        }
      },
      "255": {
        start: {
          line: 1319,
          column: 8
        },
        end: {
          line: 1319,
          column: 47
        }
      },
      "256": {
        start: {
          line: 1333,
          column: 8
        },
        end: {
          line: 1339,
          column: 9
        }
      },
      "257": {
        start: {
          line: 1334,
          column: 12
        },
        end: {
          line: 1334,
          column: 69
        }
      },
      "258": {
        start: {
          line: 1335,
          column: 12
        },
        end: {
          line: 1335,
          column: 45
        }
      },
      "259": {
        start: {
          line: 1337,
          column: 12
        },
        end: {
          line: 1337,
          column: 47
        }
      },
      "260": {
        start: {
          line: 1338,
          column: 12
        },
        end: {
          line: 1338,
          column: 44
        }
      },
      "261": {
        start: {
          line: 1341,
          column: 8
        },
        end: {
          line: 1341,
          column: 26
        }
      },
      "262": {
        start: {
          line: 1342,
          column: 8
        },
        end: {
          line: 1342,
          column: 63
        }
      },
      "263": {
        start: {
          line: 1344,
          column: 8
        },
        end: {
          line: 1344,
          column: 73
        }
      },
      "264": {
        start: {
          line: 1345,
          column: 8
        },
        end: {
          line: 1345,
          column: 41
        }
      },
      "265": {
        start: {
          line: 1355,
          column: 8
        },
        end: {
          line: 1359,
          column: 11
        }
      },
      "266": {
        start: {
          line: 1356,
          column: 12
        },
        end: {
          line: 1358,
          column: 13
        }
      },
      "267": {
        start: {
          line: 1357,
          column: 16
        },
        end: {
          line: 1357,
          column: 45
        }
      },
      "268": {
        start: {
          line: 1370,
          column: 8
        },
        end: {
          line: 1370,
          column: 34
        }
      },
      "269": {
        start: {
          line: 1371,
          column: 8
        },
        end: {
          line: 1371,
          column: 26
        }
      },
      "270": {
        start: {
          line: 1372,
          column: 8
        },
        end: {
          line: 1372,
          column: 28
        }
      },
      "271": {
        start: {
          line: 1373,
          column: 8
        },
        end: {
          line: 1373,
          column: 32
        }
      },
      "272": {
        start: {
          line: 1384,
          column: 23
        },
        end: {
          line: 1384,
          column: 39
        }
      },
      "273": {
        start: {
          line: 1385,
          column: 8
        },
        end: {
          line: 1385,
          column: 69
        }
      },
      "274": {
        start: {
          line: 1385,
          column: 49
        },
        end: {
          line: 1385,
          column: 67
        }
      },
      "275": {
        start: {
          line: 1386,
          column: 8
        },
        end: {
          line: 1388,
          column: 10
        }
      },
      "276": {
        start: {
          line: 1387,
          column: 12
        },
        end: {
          line: 1387,
          column: 49
        }
      },
      "277": {
        start: {
          line: 1389,
          column: 8
        },
        end: {
          line: 1391,
          column: 10
        }
      },
      "278": {
        start: {
          line: 1390,
          column: 12
        },
        end: {
          line: 1390,
          column: 57
        }
      },
      "279": {
        start: {
          line: 1392,
          column: 8
        },
        end: {
          line: 1392,
          column: 39
        }
      },
      "280": {
        start: {
          line: 1393,
          column: 8
        },
        end: {
          line: 1393,
          column: 21
        }
      },
      "281": {
        start: {
          line: 1424,
          column: 8
        },
        end: {
          line: 1426,
          column: 9
        }
      },
      "282": {
        start: {
          line: 1425,
          column: 12
        },
        end: {
          line: 1425,
          column: 61
        }
      },
      "283": {
        start: {
          line: 1427,
          column: 8
        },
        end: {
          line: 1427,
          column: 21
        }
      },
      "284": {
        start: {
          line: 1428,
          column: 8
        },
        end: {
          line: 1453,
          column: 9
        }
      },
      "285": {
        start: {
          line: 1431,
          column: 41
        },
        end: {
          line: 1440,
          column: 13
        }
      },
      "286": {
        start: {
          line: 1441,
          column: 34
        },
        end: {
          line: 1443,
          column: 13
        }
      },
      "287": {
        start: {
          line: 1442,
          column: 26
        },
        end: {
          line: 1442,
          column: 54
        }
      },
      "288": {
        start: {
          line: 1444,
          column: 12
        },
        end: {
          line: 1452,
          column: 13
        }
      },
      "289": {
        start: {
          line: 1446,
          column: 16
        },
        end: {
          line: 1449,
          column: 18
        }
      },
      "290": {
        start: {
          line: 1451,
          column: 16
        },
        end: {
          line: 1451,
          column: 31
        }
      },
      "291": {
        start: {
          line: 1457,
          column: 8
        },
        end: {
          line: 1459,
          column: 9
        }
      },
      "292": {
        start: {
          line: 1458,
          column: 12
        },
        end: {
          line: 1458,
          column: 26
        }
      },
      "293": {
        start: {
          line: 1461,
          column: 8
        },
        end: {
          line: 1467,
          column: 9
        }
      },
      "294": {
        start: {
          line: 1463,
          column: 16
        },
        end: {
          line: 1463,
          column: 61
        }
      },
      "295": {
        start: {
          line: 1466,
          column: 16
        },
        end: {
          line: 1466,
          column: 76
        }
      },
      "296": {
        start: {
          line: 1481,
          column: 21
        },
        end: {
          line: 1486,
          column: 9
        }
      },
      "297": {
        start: {
          line: 1482,
          column: 12
        },
        end: {
          line: 1484,
          column: 13
        }
      },
      "298": {
        start: {
          line: 1483,
          column: 16
        },
        end: {
          line: 1483,
          column: 64
        }
      },
      "299": {
        start: {
          line: 1485,
          column: 12
        },
        end: {
          line: 1485,
          column: 80
        }
      },
      "300": {
        start: {
          line: 1485,
          column: 52
        },
        end: {
          line: 1485,
          column: 78
        }
      },
      "301": {
        start: {
          line: 1488,
          column: 8
        },
        end: {
          line: 1495,
          column: 9
        }
      },
      "302": {
        start: {
          line: 1489,
          column: 12
        },
        end: {
          line: 1489,
          column: 51
        }
      },
      "303": {
        start: {
          line: 1490,
          column: 12
        },
        end: {
          line: 1490,
          column: 30
        }
      },
      "304": {
        start: {
          line: 1491,
          column: 12
        },
        end: {
          line: 1491,
          column: 45
        }
      },
      "305": {
        start: {
          line: 1492,
          column: 12
        },
        end: {
          line: 1492,
          column: 64
        }
      },
      "306": {
        start: {
          line: 1494,
          column: 12
        },
        end: {
          line: 1494,
          column: 26
        }
      },
      "307": {
        start: {
          line: 1512,
          column: 18
        },
        end: {
          line: 1512,
          column: 26
        }
      },
      "308": {
        start: {
          line: 1514,
          column: 8
        },
        end: {
          line: 1523,
          column: 9
        }
      },
      "309": {
        start: {
          line: 1515,
          column: 12
        },
        end: {
          line: 1515,
          column: 72
        }
      },
      "310": {
        start: {
          line: 1517,
          column: 24
        },
        end: {
          line: 1517,
          column: 32
        }
      },
      "311": {
        start: {
          line: 1518,
          column: 12
        },
        end: {
          line: 1518,
          column: 45
        }
      },
      "312": {
        start: {
          line: 1522,
          column: 12
        },
        end: {
          line: 1522,
          column: 26
        }
      },
      "313": {
        start: {
          line: 1525,
          column: 8
        },
        end: {
          line: 1535,
          column: 10
        }
      },
      "314": {
        start: {
          line: 1528,
          column: 16
        },
        end: {
          line: 1532,
          column: 17
        }
      },
      "315": {
        start: {
          line: 1529,
          column: 20
        },
        end: {
          line: 1529,
          column: 38
        }
      },
      "316": {
        start: {
          line: 1530,
          column: 20
        },
        end: {
          line: 1530,
          column: 40
        }
      },
      "317": {
        start: {
          line: 1531,
          column: 20
        },
        end: {
          line: 1531,
          column: 44
        }
      },
      "318": {
        start: {
          line: 1534,
          column: 46
        },
        end: {
          line: 1534,
          column: 74
        }
      },
      "319": {
        start: {
          line: 1538,
          column: 8
        },
        end: {
          line: 1542,
          column: 9
        }
      },
      "320": {
        start: {
          line: 1539,
          column: 12
        },
        end: {
          line: 1539,
          column: 51
        }
      },
      "321": {
        start: {
          line: 1540,
          column: 12
        },
        end: {
          line: 1540,
          column: 30
        }
      },
      "322": {
        start: {
          line: 1541,
          column: 12
        },
        end: {
          line: 1541,
          column: 45
        }
      },
      "323": {
        start: {
          line: 1547,
          column: 8
        },
        end: {
          line: 1559,
          column: 9
        }
      },
      "324": {
        start: {
          line: 1551,
          column: 12
        },
        end: {
          line: 1558,
          column: 15
        }
      },
      "325": {
        start: {
          line: 1552,
          column: 16
        },
        end: {
          line: 1557,
          column: 19
        }
      },
      "326": {
        start: {
          line: 1553,
          column: 20
        },
        end: {
          line: 1553,
          column: 49
        }
      },
      "327": {
        start: {
          line: 1554,
          column: 20
        },
        end: {
          line: 1554,
          column: 48
        }
      },
      "328": {
        start: {
          line: 1555,
          column: 20
        },
        end: {
          line: 1555,
          column: 38
        }
      },
      "329": {
        start: {
          line: 1556,
          column: 20
        },
        end: {
          line: 1556,
          column: 53
        }
      },
      "330": {
        start: {
          line: 1570,
          column: 8
        },
        end: {
          line: 1584,
          column: 9
        }
      },
      "331": {
        start: {
          line: 1571,
          column: 12
        },
        end: {
          line: 1571,
          column: 43
        }
      },
      "332": {
        start: {
          line: 1572,
          column: 12
        },
        end: {
          line: 1583,
          column: 14
        }
      },
      "333": {
        start: {
          line: 1577,
          column: 20
        },
        end: {
          line: 1580,
          column: 21
        }
      },
      "334": {
        start: {
          line: 1578,
          column: 24
        },
        end: {
          line: 1578,
          column: 39
        }
      },
      "335": {
        start: {
          line: 1579,
          column: 24
        },
        end: {
          line: 1579,
          column: 48
        }
      },
      "336": {
        start: {
          line: 1582,
          column: 22
        },
        end: {
          line: 1582,
          column: 75
        }
      },
      "337": {
        start: {
          line: 1596,
          column: 22
        },
        end: {
          line: 1602,
          column: 9
        }
      },
      "338": {
        start: {
          line: 1603,
          column: 24
        },
        end: {
          line: 1603,
          column: 47
        }
      },
      "339": {
        start: {
          line: 1605,
          column: 8
        },
        end: {
          line: 1605,
          column: 38
        }
      },
      "340": {
        start: {
          line: 1607,
          column: 8
        },
        end: {
          line: 1619,
          column: 10
        }
      },
      "341": {
        start: {
          line: 1609,
          column: 16
        },
        end: {
          line: 1609,
          column: 35
        }
      },
      "342": {
        start: {
          line: 1612,
          column: 16
        },
        end: {
          line: 1612,
          column: 31
        }
      },
      "343": {
        start: {
          line: 1613,
          column: 16
        },
        end: {
          line: 1613,
          column: 43
        }
      },
      "344": {
        start: {
          line: 1616,
          column: 16
        },
        end: {
          line: 1616,
          column: 43
        }
      },
      "345": {
        start: {
          line: 1617,
          column: 16
        },
        end: {
          line: 1617,
          column: 43
        }
      },
      "346": {
        start: {
          line: 1621,
          column: 8
        },
        end: {
          line: 1621,
          column: 23
        }
      },
      "347": {
        start: {
          line: 1633,
          column: 8
        },
        end: {
          line: 1639,
          column: 9
        }
      },
      "348": {
        start: {
          line: 1634,
          column: 12
        },
        end: {
          line: 1634,
          column: 49
        }
      },
      "349": {
        start: {
          line: 1638,
          column: 12
        },
        end: {
          line: 1638,
          column: 62
        }
      },
      "350": {
        start: {
          line: 1640,
          column: 8
        },
        end: {
          line: 1640,
          column: 79
        }
      },
      "351": {
        start: {
          line: 1656,
          column: 8
        },
        end: {
          line: 1656,
          column: 32
        }
      },
      "352": {
        start: {
          line: 1657,
          column: 8
        },
        end: {
          line: 1657,
          column: 27
        }
      },
      "353": {
        start: {
          line: 1658,
          column: 8
        },
        end: {
          line: 1658,
          column: 37
        }
      },
      "354": {
        start: {
          line: 1659,
          column: 8
        },
        end: {
          line: 1659,
          column: 37
        }
      },
      "355": {
        start: {
          line: 1660,
          column: 22
        },
        end: {
          line: 1660,
          column: 63
        }
      },
      "356": {
        start: {
          line: 1661,
          column: 20
        },
        end: {
          line: 1664,
          column: 9
        }
      },
      "357": {
        start: {
          line: 1663,
          column: 19
        },
        end: {
          line: 1663,
          column: 56
        }
      },
      "358": {
        start: {
          line: 1666,
          column: 8
        },
        end: {
          line: 1677,
          column: 11
        }
      },
      "359": {
        start: {
          line: 1667,
          column: 12
        },
        end: {
          line: 1675,
          column: 13
        }
      },
      "360": {
        start: {
          line: 1668,
          column: 33
        },
        end: {
          line: 1671,
          column: 17
        }
      },
      "361": {
        start: {
          line: 1672,
          column: 31
        },
        end: {
          line: 1672,
          column: 60
        }
      },
      "362": {
        start: {
          line: 1673,
          column: 16
        },
        end: {
          line: 1673,
          column: 36
        }
      },
      "363": {
        start: {
          line: 1674,
          column: 16
        },
        end: {
          line: 1674,
          column: 44
        }
      },
      "364": {
        start: {
          line: 1676,
          column: 12
        },
        end: {
          line: 1676,
          column: 25
        }
      },
      "365": {
        start: {
          line: 1699,
          column: 8
        },
        end: {
          line: 1701,
          column: 9
        }
      },
      "366": {
        start: {
          line: 1700,
          column: 12
        },
        end: {
          line: 1700,
          column: 33
        }
      },
      "367": {
        start: {
          line: 1702,
          column: 8
        },
        end: {
          line: 1704,
          column: 9
        }
      },
      "368": {
        start: {
          line: 1703,
          column: 12
        },
        end: {
          line: 1703,
          column: 24
        }
      },
      "369": {
        start: {
          line: 1705,
          column: 8
        },
        end: {
          line: 1707,
          column: 9
        }
      },
      "370": {
        start: {
          line: 1706,
          column: 12
        },
        end: {
          line: 1706,
          column: 29
        }
      },
      "371": {
        start: {
          line: 1709,
          column: 8
        },
        end: {
          line: 1709,
          column: 59
        }
      },
      "372": {
        start: {
          line: 1716,
          column: 8
        },
        end: {
          line: 1727,
          column: 9
        }
      },
      "373": {
        start: {
          line: 1720,
          column: 12
        },
        end: {
          line: 1723,
          column: 13
        }
      },
      "374": {
        start: {
          line: 1722,
          column: 16
        },
        end: {
          line: 1722,
          column: 70
        }
      },
      "375": {
        start: {
          line: 1725,
          column: 12
        },
        end: {
          line: 1725,
          column: 51
        }
      },
      "376": {
        start: {
          line: 1726,
          column: 12
        },
        end: {
          line: 1726,
          column: 39
        }
      },
      "377": {
        start: {
          line: 1734,
          column: 8
        },
        end: {
          line: 1734,
          column: 44
        }
      },
      "378": {
        start: {
          line: 1734,
          column: 36
        },
        end: {
          line: 1734,
          column: 42
        }
      },
      "379": {
        start: {
          line: 1741,
          column: 8
        },
        end: {
          line: 1744,
          column: 9
        }
      },
      "380": {
        start: {
          line: 1742,
          column: 12
        },
        end: {
          line: 1742,
          column: 24
        }
      },
      "381": {
        start: {
          line: 1743,
          column: 12
        },
        end: {
          line: 1743,
          column: 44
        }
      },
      "382": {
        start: {
          line: 1745,
          column: 8
        },
        end: {
          line: 1745,
          column: 29
        }
      },
      "383": {
        start: {
          line: 1746,
          column: 8
        },
        end: {
          line: 1746,
          column: 26
        }
      },
      "384": {
        start: {
          line: 1747,
          column: 8
        },
        end: {
          line: 1747,
          column: 30
        }
      },
      "385": {
        start: {
          line: 1750,
          column: 8
        },
        end: {
          line: 1750,
          column: 32
        }
      },
      "386": {
        start: {
          line: 1751,
          column: 8
        },
        end: {
          line: 1751,
          column: 32
        }
      },
      "387": {
        start: {
          line: 1752,
          column: 8
        },
        end: {
          line: 1752,
          column: 69
        }
      },
      "388": {
        start: {
          line: 1761,
          column: 8
        },
        end: {
          line: 1761,
          column: 33
        }
      },
      "389": {
        start: {
          line: 1762,
          column: 8
        },
        end: {
          line: 1762,
          column: 34
        }
      },
      "390": {
        start: {
          line: 1763,
          column: 8
        },
        end: {
          line: 1763,
          column: 26
        }
      },
      "391": {
        start: {
          line: 1764,
          column: 8
        },
        end: {
          line: 1764,
          column: 30
        }
      },
      "392": {
        start: {
          line: 1765,
          column: 8
        },
        end: {
          line: 1765,
          column: 21
        }
      },
      "393": {
        start: {
          line: 1766,
          column: 8
        },
        end: {
          line: 1773,
          column: 9
        }
      },
      "394": {
        start: {
          line: 1767,
          column: 12
        },
        end: {
          line: 1767,
          column: 71
        }
      },
      "395": {
        start: {
          line: 1768,
          column: 12
        },
        end: {
          line: 1772,
          column: 14
        }
      },
      "396": {
        start: {
          line: 1774,
          column: 8
        },
        end: {
          line: 1778,
          column: 9
        }
      },
      "397": {
        start: {
          line: 1775,
          column: 12
        },
        end: {
          line: 1775,
          column: 35
        }
      },
      "398": {
        start: {
          line: 1777,
          column: 12
        },
        end: {
          line: 1777,
          column: 32
        }
      },
      "399": {
        start: {
          line: 1779,
          column: 8
        },
        end: {
          line: 1781,
          column: 9
        }
      },
      "400": {
        start: {
          line: 1780,
          column: 12
        },
        end: {
          line: 1780,
          column: 34
        }
      },
      "401": {
        start: {
          line: 1782,
          column: 8
        },
        end: {
          line: 1782,
          column: 32
        }
      },
      "402": {
        start: {
          line: 1783,
          column: 8
        },
        end: {
          line: 1783,
          column: 29
        }
      },
      "403": {
        start: {
          line: 1784,
          column: 8
        },
        end: {
          line: 1784,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 200,
            column: 5
          }
        },
        loc: {
          start: {
            line: 200,
            column: 19
          },
          end: {
            line: 200,
            column: 21
          }
        },
        line: 200
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 5
          }
        },
        loc: {
          start: {
            line: 207,
            column: 28
          },
          end: {
            line: 207,
            column: 30
          }
        },
        line: 207
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 5
          }
        },
        loc: {
          start: {
            line: 214,
            column: 11
          },
          end: {
            line: 214,
            column: 13
          }
        },
        line: 214
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        },
        loc: {
          start: {
            line: 221,
            column: 14
          },
          end: {
            line: 221,
            column: 16
          }
        },
        line: 221
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 322,
            column: 4
          },
          end: {
            line: 322,
            column: 5
          }
        },
        loc: {
          start: {
            line: 322,
            column: 26
          },
          end: {
            line: 325,
            column: 5
          }
        },
        line: 322
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 366,
            column: 4
          },
          end: {
            line: 366,
            column: 5
          }
        },
        loc: {
          start: {
            line: 366,
            column: 24
          },
          end: {
            line: 517,
            column: 5
          }
        },
        line: 366
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 502,
            column: 12
          },
          end: {
            line: 502,
            column: 13
          }
        },
        loc: {
          start: {
            line: 502,
            column: 18
          },
          end: {
            line: 510,
            column: 13
          }
        },
        line: 502
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 527,
            column: 4
          },
          end: {
            line: 527,
            column: 5
          }
        },
        loc: {
          start: {
            line: 527,
            column: 11
          },
          end: {
            line: 533,
            column: 5
          }
        },
        line: 527
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 543,
            column: 4
          },
          end: {
            line: 543,
            column: 5
          }
        },
        loc: {
          start: {
            line: 543,
            column: 29
          },
          end: {
            line: 557,
            column: 5
          }
        },
        line: 543
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 545,
            column: 24
          },
          end: {
            line: 545,
            column: 25
          }
        },
        loc: {
          start: {
            line: 545,
            column: 34
          },
          end: {
            line: 545,
            column: 56
          }
        },
        line: 545
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 548,
            column: 24
          },
          end: {
            line: 548,
            column: 25
          }
        },
        loc: {
          start: {
            line: 548,
            column: 34
          },
          end: {
            line: 554,
            column: 9
          }
        },
        line: 548
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 565,
            column: 4
          },
          end: {
            line: 565,
            column: 5
          }
        },
        loc: {
          start: {
            line: 565,
            column: 23
          },
          end: {
            line: 567,
            column: 5
          }
        },
        line: 565
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 577,
            column: 4
          },
          end: {
            line: 577,
            column: 5
          }
        },
        loc: {
          start: {
            line: 577,
            column: 22
          },
          end: {
            line: 616,
            column: 5
          }
        },
        line: 577
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 589,
            column: 52
          },
          end: {
            line: 589,
            column: 53
          }
        },
        loc: {
          start: {
            line: 589,
            column: 72
          },
          end: {
            line: 595,
            column: 13
          }
        },
        line: 589
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 604,
            column: 38
          },
          end: {
            line: 604,
            column: 39
          }
        },
        loc: {
          start: {
            line: 604,
            column: 45
          },
          end: {
            line: 606,
            column: 9
          }
        },
        line: 604
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 626,
            column: 4
          },
          end: {
            line: 626,
            column: 5
          }
        },
        loc: {
          start: {
            line: 626,
            column: 21
          },
          end: {
            line: 638,
            column: 5
          }
        },
        line: 626
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 648,
            column: 4
          },
          end: {
            line: 648,
            column: 5
          }
        },
        loc: {
          start: {
            line: 648,
            column: 24
          },
          end: {
            line: 667,
            column: 5
          }
        },
        line: 648
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 675,
            column: 4
          },
          end: {
            line: 675,
            column: 5
          }
        },
        loc: {
          start: {
            line: 675,
            column: 24
          },
          end: {
            line: 679,
            column: 5
          }
        },
        line: 675
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 676,
            column: 56
          },
          end: {
            line: 676,
            column: 57
          }
        },
        loc: {
          start: {
            line: 677,
            column: 12
          },
          end: {
            line: 677,
            column: 36
          }
        },
        line: 677
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 687,
            column: 4
          },
          end: {
            line: 687,
            column: 5
          }
        },
        loc: {
          start: {
            line: 687,
            column: 19
          },
          end: {
            line: 714,
            column: 5
          }
        },
        line: 687
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 697,
            column: 33
          },
          end: {
            line: 697,
            column: 34
          }
        },
        loc: {
          start: {
            line: 697,
            column: 39
          },
          end: {
            line: 700,
            column: 9
          }
        },
        line: 697
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 703,
            column: 32
          },
          end: {
            line: 703,
            column: 33
          }
        },
        loc: {
          start: {
            line: 703,
            column: 49
          },
          end: {
            line: 705,
            column: 9
          }
        },
        line: 703
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 704,
            column: 23
          },
          end: {
            line: 704,
            column: 24
          }
        },
        loc: {
          start: {
            line: 704,
            column: 29
          },
          end: {
            line: 704,
            column: 50
          }
        },
        line: 704
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 708,
            column: 33
          },
          end: {
            line: 708,
            column: 34
          }
        },
        loc: {
          start: {
            line: 708,
            column: 38
          },
          end: {
            line: 713,
            column: 9
          }
        },
        line: 708
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 722,
            column: 4
          },
          end: {
            line: 722,
            column: 5
          }
        },
        loc: {
          start: {
            line: 722,
            column: 20
          },
          end: {
            line: 762,
            column: 5
          }
        },
        line: 722
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 731,
            column: 34
          },
          end: {
            line: 731,
            column: 35
          }
        },
        loc: {
          start: {
            line: 731,
            column: 40
          },
          end: {
            line: 734,
            column: 9
          }
        },
        line: 731
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 735,
            column: 32
          },
          end: {
            line: 735,
            column: 33
          }
        },
        loc: {
          start: {
            line: 735,
            column: 38
          },
          end: {
            line: 735,
            column: 60
          }
        },
        line: 735
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 736,
            column: 33
          },
          end: {
            line: 736,
            column: 34
          }
        },
        loc: {
          start: {
            line: 736,
            column: 39
          },
          end: {
            line: 736,
            column: 62
          }
        },
        line: 736
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 738,
            column: 40
          },
          end: {
            line: 738,
            column: 41
          }
        },
        loc: {
          start: {
            line: 738,
            column: 48
          },
          end: {
            line: 741,
            column: 9
          }
        },
        line: 738
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 748,
            column: 36
          },
          end: {
            line: 748,
            column: 37
          }
        },
        loc: {
          start: {
            line: 748,
            column: 42
          },
          end: {
            line: 750,
            column: 13
          }
        },
        line: 748
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 752,
            column: 38
          },
          end: {
            line: 752,
            column: 39
          }
        },
        loc: {
          start: {
            line: 752,
            column: 44
          },
          end: {
            line: 760,
            column: 13
          }
        },
        line: 752
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 769,
            column: 4
          },
          end: {
            line: 769,
            column: 5
          }
        },
        loc: {
          start: {
            line: 769,
            column: 22
          },
          end: {
            line: 773,
            column: 5
          }
        },
        line: 769
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 781,
            column: 4
          },
          end: {
            line: 781,
            column: 5
          }
        },
        loc: {
          start: {
            line: 781,
            column: 18
          },
          end: {
            line: 783,
            column: 5
          }
        },
        line: 781
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 791,
            column: 4
          },
          end: {
            line: 791,
            column: 5
          }
        },
        loc: {
          start: {
            line: 791,
            column: 21
          },
          end: {
            line: 793,
            column: 5
          }
        },
        line: 791
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 801,
            column: 4
          },
          end: {
            line: 801,
            column: 5
          }
        },
        loc: {
          start: {
            line: 801,
            column: 28
          },
          end: {
            line: 807,
            column: 5
          }
        },
        line: 801
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 821,
            column: 4
          },
          end: {
            line: 821,
            column: 5
          }
        },
        loc: {
          start: {
            line: 821,
            column: 21
          },
          end: {
            line: 829,
            column: 5
          }
        },
        line: 821
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 827,
            column: 38
          },
          end: {
            line: 827,
            column: 39
          }
        },
        loc: {
          start: {
            line: 827,
            column: 44
          },
          end: {
            line: 827,
            column: 65
          }
        },
        line: 827
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 837,
            column: 4
          },
          end: {
            line: 837,
            column: 5
          }
        },
        loc: {
          start: {
            line: 837,
            column: 25
          },
          end: {
            line: 839,
            column: 5
          }
        },
        line: 837
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 847,
            column: 4
          },
          end: {
            line: 847,
            column: 5
          }
        },
        loc: {
          start: {
            line: 847,
            column: 12
          },
          end: {
            line: 851,
            column: 5
          }
        },
        line: 847
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 859,
            column: 4
          },
          end: {
            line: 859,
            column: 5
          }
        },
        loc: {
          start: {
            line: 859,
            column: 16
          },
          end: {
            line: 861,
            column: 5
          }
        },
        line: 859
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 869,
            column: 4
          },
          end: {
            line: 869,
            column: 5
          }
        },
        loc: {
          start: {
            line: 869,
            column: 16
          },
          end: {
            line: 871,
            column: 5
          }
        },
        line: 869
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 880,
            column: 4
          },
          end: {
            line: 880,
            column: 5
          }
        },
        loc: {
          start: {
            line: 880,
            column: 26
          },
          end: {
            line: 882,
            column: 5
          }
        },
        line: 880
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 891,
            column: 4
          },
          end: {
            line: 891,
            column: 5
          }
        },
        loc: {
          start: {
            line: 891,
            column: 25
          },
          end: {
            line: 893,
            column: 5
          }
        },
        line: 891
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 904,
            column: 4
          },
          end: {
            line: 904,
            column: 5
          }
        },
        loc: {
          start: {
            line: 904,
            column: 17
          },
          end: {
            line: 909,
            column: 5
          }
        },
        line: 904
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 919,
            column: 4
          },
          end: {
            line: 919,
            column: 5
          }
        },
        loc: {
          start: {
            line: 919,
            column: 28
          },
          end: {
            line: 922,
            column: 5
          }
        },
        line: 919
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 934,
            column: 4
          },
          end: {
            line: 934,
            column: 5
          }
        },
        loc: {
          start: {
            line: 934,
            column: 21
          },
          end: {
            line: 967,
            column: 5
          }
        },
        line: 934
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 946,
            column: 38
          },
          end: {
            line: 946,
            column: 39
          }
        },
        loc: {
          start: {
            line: 946,
            column: 44
          },
          end: {
            line: 946,
            column: 65
          }
        },
        line: 946
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 974,
            column: 4
          },
          end: {
            line: 974,
            column: 5
          }
        },
        loc: {
          start: {
            line: 974,
            column: 11
          },
          end: {
            line: 978,
            column: 5
          }
        },
        line: 974
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 988,
            column: 4
          },
          end: {
            line: 988,
            column: 5
          }
        },
        loc: {
          start: {
            line: 988,
            column: 24
          },
          end: {
            line: 990,
            column: 5
          }
        },
        line: 988
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 999,
            column: 4
          },
          end: {
            line: 999,
            column: 5
          }
        },
        loc: {
          start: {
            line: 999,
            column: 25
          },
          end: {
            line: 1002,
            column: 5
          }
        },
        line: 999
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 1010,
            column: 4
          },
          end: {
            line: 1010,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1010,
            column: 16
          },
          end: {
            line: 1012,
            column: 5
          }
        },
        line: 1010
      },
      "51": {
        name: "(anonymous_51)",
        decl: {
          start: {
            line: 1021,
            column: 4
          },
          end: {
            line: 1021,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1021,
            column: 26
          },
          end: {
            line: 1023,
            column: 5
          }
        },
        line: 1021
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 1030,
            column: 4
          },
          end: {
            line: 1030,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1030,
            column: 22
          },
          end: {
            line: 1032,
            column: 5
          }
        },
        line: 1030
      },
      "53": {
        name: "(anonymous_53)",
        decl: {
          start: {
            line: 1042,
            column: 4
          },
          end: {
            line: 1042,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1042,
            column: 17
          },
          end: {
            line: 1044,
            column: 5
          }
        },
        line: 1042
      },
      "54": {
        name: "(anonymous_54)",
        decl: {
          start: {
            line: 1057,
            column: 4
          },
          end: {
            line: 1057,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1057,
            column: 18
          },
          end: {
            line: 1086,
            column: 5
          }
        },
        line: 1057
      },
      "55": {
        name: "(anonymous_55)",
        decl: {
          start: {
            line: 1094,
            column: 4
          },
          end: {
            line: 1094,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1094,
            column: 14
          },
          end: {
            line: 1096,
            column: 5
          }
        },
        line: 1094
      },
      "56": {
        name: "(anonymous_56)",
        decl: {
          start: {
            line: 1105,
            column: 4
          },
          end: {
            line: 1105,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1105,
            column: 17
          },
          end: {
            line: 1107,
            column: 5
          }
        },
        line: 1105
      },
      "57": {
        name: "(anonymous_57)",
        decl: {
          start: {
            line: 1114,
            column: 4
          },
          end: {
            line: 1114,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1114,
            column: 19
          },
          end: {
            line: 1117,
            column: 5
          }
        },
        line: 1114
      },
      "58": {
        name: "(anonymous_58)",
        decl: {
          start: {
            line: 1124,
            column: 4
          },
          end: {
            line: 1124,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1124,
            column: 24
          },
          end: {
            line: 1126,
            column: 5
          }
        },
        line: 1124
      },
      "59": {
        name: "(anonymous_59)",
        decl: {
          start: {
            line: 1134,
            column: 4
          },
          end: {
            line: 1134,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1134,
            column: 36
          },
          end: {
            line: 1139,
            column: 5
          }
        },
        line: 1134
      },
      "60": {
        name: "(anonymous_60)",
        decl: {
          start: {
            line: 1148,
            column: 4
          },
          end: {
            line: 1148,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1148,
            column: 43
          },
          end: {
            line: 1155,
            column: 5
          }
        },
        line: 1148
      },
      "61": {
        name: "(anonymous_61)",
        decl: {
          start: {
            line: 1163,
            column: 4
          },
          end: {
            line: 1163,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1163,
            column: 40
          },
          end: {
            line: 1168,
            column: 5
          }
        },
        line: 1163
      },
      "62": {
        name: "(anonymous_62)",
        decl: {
          start: {
            line: 1177,
            column: 4
          },
          end: {
            line: 1177,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1177,
            column: 40
          },
          end: {
            line: 1184,
            column: 5
          }
        },
        line: 1177
      },
      "63": {
        name: "(anonymous_63)",
        decl: {
          start: {
            line: 1191,
            column: 4
          },
          end: {
            line: 1191,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1191,
            column: 25
          },
          end: {
            line: 1193,
            column: 5
          }
        },
        line: 1191
      },
      "64": {
        name: "(anonymous_64)",
        decl: {
          start: {
            line: 1201,
            column: 4
          },
          end: {
            line: 1201,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1201,
            column: 30
          },
          end: {
            line: 1204,
            column: 5
          }
        },
        line: 1201
      },
      "65": {
        name: "(anonymous_65)",
        decl: {
          start: {
            line: 1212,
            column: 4
          },
          end: {
            line: 1212,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1212,
            column: 21
          },
          end: {
            line: 1214,
            column: 5
          }
        },
        line: 1212
      },
      "66": {
        name: "(anonymous_66)",
        decl: {
          start: {
            line: 1223,
            column: 4
          },
          end: {
            line: 1223,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1223,
            column: 26
          },
          end: {
            line: 1226,
            column: 5
          }
        },
        line: 1223
      },
      "67": {
        name: "(anonymous_67)",
        decl: {
          start: {
            line: 1233,
            column: 4
          },
          end: {
            line: 1233,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1233,
            column: 16
          },
          end: {
            line: 1235,
            column: 5
          }
        },
        line: 1233
      },
      "68": {
        name: "(anonymous_68)",
        decl: {
          start: {
            line: 1243,
            column: 4
          },
          end: {
            line: 1243,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1243,
            column: 22
          },
          end: {
            line: 1247,
            column: 5
          }
        },
        line: 1243
      },
      "69": {
        name: "(anonymous_69)",
        decl: {
          start: {
            line: 1262,
            column: 4
          },
          end: {
            line: 1262,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1262,
            column: 40
          },
          end: {
            line: 1265,
            column: 5
          }
        },
        line: 1262
      },
      "70": {
        name: "(anonymous_70)",
        decl: {
          start: {
            line: 1273,
            column: 4
          },
          end: {
            line: 1273,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1273,
            column: 17
          },
          end: {
            line: 1320,
            column: 5
          }
        },
        line: 1273
      },
      "71": {
        name: "(anonymous_71)",
        decl: {
          start: {
            line: 1332,
            column: 4
          },
          end: {
            line: 1332,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1332,
            column: 19
          },
          end: {
            line: 1346,
            column: 5
          }
        },
        line: 1332
      },
      "72": {
        name: "(anonymous_72)",
        decl: {
          start: {
            line: 1354,
            column: 4
          },
          end: {
            line: 1354,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1354,
            column: 33
          },
          end: {
            line: 1360,
            column: 5
          }
        },
        line: 1354
      },
      "73": {
        name: "(anonymous_73)",
        decl: {
          start: {
            line: 1355,
            column: 44
          },
          end: {
            line: 1355,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1355,
            column: 52
          },
          end: {
            line: 1359,
            column: 9
          }
        },
        line: 1355
      },
      "74": {
        name: "(anonymous_74)",
        decl: {
          start: {
            line: 1369,
            column: 4
          },
          end: {
            line: 1369,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1369,
            column: 30
          },
          end: {
            line: 1374,
            column: 5
          }
        },
        line: 1369
      },
      "75": {
        name: "(anonymous_75)",
        decl: {
          start: {
            line: 1382,
            column: 4
          },
          end: {
            line: 1382,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1382,
            column: 19
          },
          end: {
            line: 1394,
            column: 5
          }
        },
        line: 1382
      },
      "76": {
        name: "(anonymous_76)",
        decl: {
          start: {
            line: 1385,
            column: 44
          },
          end: {
            line: 1385,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1385,
            column: 49
          },
          end: {
            line: 1385,
            column: 67
          }
        },
        line: 1385
      },
      "77": {
        name: "(anonymous_77)",
        decl: {
          start: {
            line: 1386,
            column: 40
          },
          end: {
            line: 1386,
            column: 41
          }
        },
        loc: {
          start: {
            line: 1387,
            column: 12
          },
          end: {
            line: 1387,
            column: 49
          }
        },
        line: 1387
      },
      "78": {
        name: "(anonymous_78)",
        decl: {
          start: {
            line: 1389,
            column: 41
          },
          end: {
            line: 1389,
            column: 42
          }
        },
        loc: {
          start: {
            line: 1390,
            column: 12
          },
          end: {
            line: 1390,
            column: 57
          }
        },
        line: 1390
      },
      "79": {
        name: "(anonymous_79)",
        decl: {
          start: {
            line: 1423,
            column: 4
          },
          end: {
            line: 1423,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1423,
            column: 40
          },
          end: {
            line: 1468,
            column: 5
          }
        },
        line: 1423
      },
      "80": {
        name: "(anonymous_80)",
        decl: {
          start: {
            line: 1442,
            column: 16
          },
          end: {
            line: 1442,
            column: 17
          }
        },
        loc: {
          start: {
            line: 1442,
            column: 26
          },
          end: {
            line: 1442,
            column: 54
          }
        },
        line: 1442
      },
      "81": {
        name: "(anonymous_81)",
        decl: {
          start: {
            line: 1480,
            column: 4
          },
          end: {
            line: 1480,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1480,
            column: 37
          },
          end: {
            line: 1496,
            column: 5
          }
        },
        line: 1480
      },
      "82": {
        name: "(anonymous_82)",
        decl: {
          start: {
            line: 1481,
            column: 21
          },
          end: {
            line: 1481,
            column: 22
          }
        },
        loc: {
          start: {
            line: 1481,
            column: 31
          },
          end: {
            line: 1486,
            column: 9
          }
        },
        line: 1481
      },
      "83": {
        name: "(anonymous_83)",
        decl: {
          start: {
            line: 1485,
            column: 44
          },
          end: {
            line: 1485,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1485,
            column: 52
          },
          end: {
            line: 1485,
            column: 78
          }
        },
        line: 1485
      },
      "84": {
        name: "(anonymous_84)",
        decl: {
          start: {
            line: 1511,
            column: 4
          },
          end: {
            line: 1511,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1511,
            column: 57
          },
          end: {
            line: 1560,
            column: 5
          }
        },
        line: 1511
      },
      "85": {
        name: "(anonymous_85)",
        decl: {
          start: {
            line: 1526,
            column: 41
          },
          end: {
            line: 1526,
            column: 42
          }
        },
        loc: {
          start: {
            line: 1526,
            column: 47
          },
          end: {
            line: 1533,
            column: 13
          }
        },
        line: 1526
      },
      "86": {
        name: "(anonymous_86)",
        decl: {
          start: {
            line: 1534,
            column: 39
          },
          end: {
            line: 1534,
            column: 40
          }
        },
        loc: {
          start: {
            line: 1534,
            column: 46
          },
          end: {
            line: 1534,
            column: 74
          }
        },
        line: 1534
      },
      "87": {
        name: "(anonymous_87)",
        decl: {
          start: {
            line: 1551,
            column: 37
          },
          end: {
            line: 1551,
            column: 38
          }
        },
        loc: {
          start: {
            line: 1551,
            column: 52
          },
          end: {
            line: 1558,
            column: 13
          }
        },
        line: 1551
      },
      "88": {
        name: "(anonymous_88)",
        decl: {
          start: {
            line: 1552,
            column: 52
          },
          end: {
            line: 1552,
            column: 53
          }
        },
        loc: {
          start: {
            line: 1552,
            column: 62
          },
          end: {
            line: 1557,
            column: 17
          }
        },
        line: 1552
      },
      "89": {
        name: "(anonymous_89)",
        decl: {
          start: {
            line: 1569,
            column: 4
          },
          end: {
            line: 1569,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1569,
            column: 45
          },
          end: {
            line: 1585,
            column: 5
          }
        },
        line: 1569
      },
      "90": {
        name: "(anonymous_90)",
        decl: {
          start: {
            line: 1574,
            column: 16
          },
          end: {
            line: 1574,
            column: 17
          }
        },
        loc: {
          start: {
            line: 1574,
            column: 24
          },
          end: {
            line: 1581,
            column: 17
          }
        },
        line: 1574
      },
      "91": {
        name: "(anonymous_91)",
        decl: {
          start: {
            line: 1582,
            column: 16
          },
          end: {
            line: 1582,
            column: 17
          }
        },
        loc: {
          start: {
            line: 1582,
            column: 22
          },
          end: {
            line: 1582,
            column: 75
          }
        },
        line: 1582
      },
      "92": {
        name: "(anonymous_92)",
        decl: {
          start: {
            line: 1595,
            column: 4
          },
          end: {
            line: 1595,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1595,
            column: 34
          },
          end: {
            line: 1622,
            column: 5
          }
        },
        line: 1595
      },
      "93": {
        name: "(anonymous_93)",
        decl: {
          start: {
            line: 1608,
            column: 35
          },
          end: {
            line: 1608,
            column: 36
          }
        },
        loc: {
          start: {
            line: 1608,
            column: 40
          },
          end: {
            line: 1610,
            column: 13
          }
        },
        line: 1608
      },
      "94": {
        name: "(anonymous_94)",
        decl: {
          start: {
            line: 1611,
            column: 34
          },
          end: {
            line: 1611,
            column: 35
          }
        },
        loc: {
          start: {
            line: 1611,
            column: 42
          },
          end: {
            line: 1614,
            column: 13
          }
        },
        line: 1611
      },
      "95": {
        name: "(anonymous_95)",
        decl: {
          start: {
            line: 1615,
            column: 32
          },
          end: {
            line: 1615,
            column: 33
          }
        },
        loc: {
          start: {
            line: 1615,
            column: 37
          },
          end: {
            line: 1618,
            column: 13
          }
        },
        line: 1615
      },
      "96": {
        name: "(anonymous_96)",
        decl: {
          start: {
            line: 1631,
            column: 4
          },
          end: {
            line: 1631,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1631,
            column: 18
          },
          end: {
            line: 1641,
            column: 5
          }
        },
        line: 1631
      },
      "97": {
        name: "(anonymous_97)",
        decl: {
          start: {
            line: 1655,
            column: 4
          },
          end: {
            line: 1655,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1655,
            column: 54
          },
          end: {
            line: 1678,
            column: 5
          }
        },
        line: 1655
      },
      "98": {
        name: "(anonymous_98)",
        decl: {
          start: {
            line: 1663,
            column: 12
          },
          end: {
            line: 1663,
            column: 13
          }
        },
        loc: {
          start: {
            line: 1663,
            column: 19
          },
          end: {
            line: 1663,
            column: 56
          }
        },
        line: 1663
      },
      "99": {
        name: "(anonymous_99)",
        decl: {
          start: {
            line: 1666,
            column: 27
          },
          end: {
            line: 1666,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1666,
            column: 48
          },
          end: {
            line: 1677,
            column: 9
          }
        },
        line: 1666
      },
      "100": {
        name: "(anonymous_100)",
        decl: {
          start: {
            line: 1698,
            column: 4
          },
          end: {
            line: 1698,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1698,
            column: 39
          },
          end: {
            line: 1710,
            column: 5
          }
        },
        line: 1698
      },
      "101": {
        name: "(anonymous_101)",
        decl: {
          start: {
            line: 1715,
            column: 4
          },
          end: {
            line: 1715,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1715,
            column: 17
          },
          end: {
            line: 1728,
            column: 5
          }
        },
        line: 1715
      },
      "102": {
        name: "(anonymous_102)",
        decl: {
          start: {
            line: 1722,
            column: 59
          },
          end: {
            line: 1722,
            column: 60
          }
        },
        loc: {
          start: {
            line: 1722,
            column: 66
          },
          end: {
            line: 1722,
            column: 68
          }
        },
        line: 1722
      },
      "103": {
        name: "(anonymous_103)",
        decl: {
          start: {
            line: 1733,
            column: 4
          },
          end: {
            line: 1733,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1733,
            column: 21
          },
          end: {
            line: 1735,
            column: 5
          }
        },
        line: 1733
      },
      "104": {
        name: "(anonymous_104)",
        decl: {
          start: {
            line: 1734,
            column: 31
          },
          end: {
            line: 1734,
            column: 32
          }
        },
        loc: {
          start: {
            line: 1734,
            column: 36
          },
          end: {
            line: 1734,
            column: 42
          }
        },
        line: 1734
      },
      "105": {
        name: "(anonymous_105)",
        decl: {
          start: {
            line: 1740,
            column: 4
          },
          end: {
            line: 1740,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1740,
            column: 12
          },
          end: {
            line: 1753,
            column: 5
          }
        },
        line: 1740
      },
      "106": {
        name: "(anonymous_106)",
        decl: {
          start: {
            line: 1760,
            column: 4
          },
          end: {
            line: 1760,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1760,
            column: 14
          },
          end: {
            line: 1785,
            column: 5
          }
        },
        line: 1760
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 287,
            column: 12
          },
          end: {
            line: 287,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 287,
            column: 12
          },
          end: {
            line: 287,
            column: 35
          }
        }, {
          start: {
            line: 287,
            column: 39
          },
          end: {
            line: 287,
            column: 77
          }
        }],
        line: 287
      },
      "1": {
        loc: {
          start: {
            line: 380,
            column: 12
          },
          end: {
            line: 382,
            column: 39
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 381,
            column: 18
          },
          end: {
            line: 381,
            column: 63
          }
        }, {
          start: {
            line: 382,
            column: 18
          },
          end: {
            line: 382,
            column: 39
          }
        }],
        line: 380
      },
      "2": {
        loc: {
          start: {
            line: 384,
            column: 8
          },
          end: {
            line: 386,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 384,
            column: 8
          },
          end: {
            line: 386,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 384
      },
      "3": {
        loc: {
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 399,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 399,
            column: 9
          }
        }, {
          start: {
            line: 391,
            column: 15
          },
          end: {
            line: 399,
            column: 9
          }
        }],
        line: 388
      },
      "4": {
        loc: {
          start: {
            line: 391,
            column: 15
          },
          end: {
            line: 399,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 391,
            column: 15
          },
          end: {
            line: 399,
            column: 9
          }
        }, {
          start: {
            line: 396,
            column: 15
          },
          end: {
            line: 399,
            column: 9
          }
        }],
        line: 391
      },
      "5": {
        loc: {
          start: {
            line: 401,
            column: 8
          },
          end: {
            line: 403,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 401,
            column: 8
          },
          end: {
            line: 403,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 401
      },
      "6": {
        loc: {
          start: {
            line: 405,
            column: 8
          },
          end: {
            line: 409,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 405,
            column: 8
          },
          end: {
            line: 409,
            column: 9
          }
        }, {
          start: {
            line: 407,
            column: 15
          },
          end: {
            line: 409,
            column: 9
          }
        }],
        line: 405
      },
      "7": {
        loc: {
          start: {
            line: 407,
            column: 15
          },
          end: {
            line: 409,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 407,
            column: 15
          },
          end: {
            line: 409,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 407
      },
      "8": {
        loc: {
          start: {
            line: 411,
            column: 8
          },
          end: {
            line: 417,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 411,
            column: 8
          },
          end: {
            line: 417,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 411
      },
      "9": {
        loc: {
          start: {
            line: 412,
            column: 12
          },
          end: {
            line: 416,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 412,
            column: 12
          },
          end: {
            line: 416,
            column: 13
          }
        }, {
          start: {
            line: 414,
            column: 19
          },
          end: {
            line: 416,
            column: 13
          }
        }],
        line: 412
      },
      "10": {
        loc: {
          start: {
            line: 419,
            column: 8
          },
          end: {
            line: 421,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 419,
            column: 8
          },
          end: {
            line: 421,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 419
      },
      "11": {
        loc: {
          start: {
            line: 458,
            column: 8
          },
          end: {
            line: 460,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 458,
            column: 8
          },
          end: {
            line: 460,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 458
      },
      "12": {
        loc: {
          start: {
            line: 469,
            column: 8
          },
          end: {
            line: 471,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 469,
            column: 8
          },
          end: {
            line: 471,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 469
      },
      "13": {
        loc: {
          start: {
            line: 473,
            column: 8
          },
          end: {
            line: 479,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 473,
            column: 8
          },
          end: {
            line: 479,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 473
      },
      "14": {
        loc: {
          start: {
            line: 474,
            column: 12
          },
          end: {
            line: 476,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 474,
            column: 13
          },
          end: {
            line: 474,
            column: 46
          }
        }, {
          start: {
            line: 475,
            column: 16
          },
          end: {
            line: 475,
            column: 62
          }
        }, {
          start: {
            line: 476,
            column: 12
          },
          end: {
            line: 476,
            column: 59
          }
        }],
        line: 474
      },
      "15": {
        loc: {
          start: {
            line: 503,
            column: 16
          },
          end: {
            line: 509,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 503,
            column: 16
          },
          end: {
            line: 509,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 503
      },
      "16": {
        loc: {
          start: {
            line: 504,
            column: 20
          },
          end: {
            line: 505,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 504,
            column: 20
          },
          end: {
            line: 504,
            column: 64
          }
        }, {
          start: {
            line: 505,
            column: 20
          },
          end: {
            line: 505,
            column: 45
          }
        }],
        line: 504
      },
      "17": {
        loc: {
          start: {
            line: 511,
            column: 12
          },
          end: {
            line: 513,
            column: 21
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 512,
            column: 18
          },
          end: {
            line: 512,
            column: 40
          }
        }, {
          start: {
            line: 513,
            column: 18
          },
          end: {
            line: 513,
            column: 21
          }
        }],
        line: 511
      },
      "18": {
        loc: {
          start: {
            line: 551,
            column: 12
          },
          end: {
            line: 553,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 551,
            column: 12
          },
          end: {
            line: 553,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 551
      },
      "19": {
        loc: {
          start: {
            line: 578,
            column: 8
          },
          end: {
            line: 580,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 578,
            column: 8
          },
          end: {
            line: 580,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 578
      },
      "20": {
        loc: {
          start: {
            line: 581,
            column: 8
          },
          end: {
            line: 585,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 581,
            column: 8
          },
          end: {
            line: 585,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 581
      },
      "21": {
        loc: {
          start: {
            line: 588,
            column: 8
          },
          end: {
            line: 596,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 588,
            column: 8
          },
          end: {
            line: 596,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 588
      },
      "22": {
        loc: {
          start: {
            line: 613,
            column: 41
          },
          end: {
            line: 613,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 613,
            column: 41
          },
          end: {
            line: 613,
            column: 54
          }
        }, {
          start: {
            line: 613,
            column: 58
          },
          end: {
            line: 613,
            column: 60
          }
        }],
        line: 613
      },
      "23": {
        loc: {
          start: {
            line: 627,
            column: 8
          },
          end: {
            line: 629,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 627,
            column: 8
          },
          end: {
            line: 629,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 627
      },
      "24": {
        loc: {
          start: {
            line: 630,
            column: 8
          },
          end: {
            line: 633,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 630,
            column: 8
          },
          end: {
            line: 633,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 630
      },
      "25": {
        loc: {
          start: {
            line: 649,
            column: 8
          },
          end: {
            line: 653,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 649,
            column: 8
          },
          end: {
            line: 653,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 649
      },
      "26": {
        loc: {
          start: {
            line: 654,
            column: 8
          },
          end: {
            line: 658,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 654,
            column: 8
          },
          end: {
            line: 658,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 654
      },
      "27": {
        loc: {
          start: {
            line: 659,
            column: 8
          },
          end: {
            line: 661,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 659,
            column: 8
          },
          end: {
            line: 661,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 659
      },
      "28": {
        loc: {
          start: {
            line: 692,
            column: 8
          },
          end: {
            line: 695,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 692,
            column: 8
          },
          end: {
            line: 695,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 692
      },
      "29": {
        loc: {
          start: {
            line: 709,
            column: 12
          },
          end: {
            line: 711,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 709,
            column: 12
          },
          end: {
            line: 711,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 709
      },
      "30": {
        loc: {
          start: {
            line: 723,
            column: 8
          },
          end: {
            line: 725,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 723,
            column: 8
          },
          end: {
            line: 725,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 723
      },
      "31": {
        loc: {
          start: {
            line: 744,
            column: 8
          },
          end: {
            line: 761,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 744,
            column: 8
          },
          end: {
            line: 761,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 744
      },
      "32": {
        loc: {
          start: {
            line: 745,
            column: 12
          },
          end: {
            line: 746,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 745,
            column: 12
          },
          end: {
            line: 745,
            column: 50
          }
        }, {
          start: {
            line: 746,
            column: 12
          },
          end: {
            line: 746,
            column: 58
          }
        }],
        line: 745
      },
      "33": {
        loc: {
          start: {
            line: 756,
            column: 16
          },
          end: {
            line: 759,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 756,
            column: 16
          },
          end: {
            line: 759,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 756
      },
      "34": {
        loc: {
          start: {
            line: 770,
            column: 8
          },
          end: {
            line: 772,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 770,
            column: 8
          },
          end: {
            line: 772,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 770
      },
      "35": {
        loc: {
          start: {
            line: 802,
            column: 8
          },
          end: {
            line: 806,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 802,
            column: 8
          },
          end: {
            line: 806,
            column: 9
          }
        }, {
          start: {
            line: 804,
            column: 15
          },
          end: {
            line: 806,
            column: 9
          }
        }],
        line: 802
      },
      "36": {
        loc: {
          start: {
            line: 822,
            column: 8
          },
          end: {
            line: 825,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 822,
            column: 8
          },
          end: {
            line: 825,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 822
      },
      "37": {
        loc: {
          start: {
            line: 848,
            column: 8
          },
          end: {
            line: 850,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 848,
            column: 8
          },
          end: {
            line: 850,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 848
      },
      "38": {
        loc: {
          start: {
            line: 860,
            column: 15
          },
          end: {
            line: 860,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 860,
            column: 41
          },
          end: {
            line: 860,
            column: 52
          }
        }, {
          start: {
            line: 860,
            column: 55
          },
          end: {
            line: 860,
            column: 67
          }
        }],
        line: 860
      },
      "39": {
        loc: {
          start: {
            line: 881,
            column: 18
          },
          end: {
            line: 881,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 881,
            column: 18
          },
          end: {
            line: 881,
            column: 26
          }
        }, {
          start: {
            line: 881,
            column: 30
          },
          end: {
            line: 881,
            column: 53
          }
        }],
        line: 881
      },
      "40": {
        loc: {
          start: {
            line: 892,
            column: 18
          },
          end: {
            line: 892,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 892,
            column: 18
          },
          end: {
            line: 892,
            column: 25
          }
        }, {
          start: {
            line: 892,
            column: 29
          },
          end: {
            line: 892,
            column: 51
          }
        }],
        line: 892
      },
      "41": {
        loc: {
          start: {
            line: 905,
            column: 25
          },
          end: {
            line: 905,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 905,
            column: 25
          },
          end: {
            line: 905,
            column: 43
          }
        }, {
          start: {
            line: 905,
            column: 47
          },
          end: {
            line: 905,
            column: 48
          }
        }],
        line: 905
      },
      "42": {
        loc: {
          start: {
            line: 906,
            column: 23
          },
          end: {
            line: 906,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 906,
            column: 23
          },
          end: {
            line: 906,
            column: 44
          }
        }, {
          start: {
            line: 906,
            column: 48
          },
          end: {
            line: 906,
            column: 49
          }
        }],
        line: 906
      },
      "43": {
        loc: {
          start: {
            line: 907,
            column: 62
          },
          end: {
            line: 907,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 907,
            column: 62
          },
          end: {
            line: 907,
            column: 68
          }
        }, {
          start: {
            line: 907,
            column: 72
          },
          end: {
            line: 907,
            column: 73
          }
        }],
        line: 907
      },
      "44": {
        loc: {
          start: {
            line: 936,
            column: 8
          },
          end: {
            line: 945,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 936,
            column: 8
          },
          end: {
            line: 945,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 936
      },
      "45": {
        loc: {
          start: {
            line: 937,
            column: 12
          },
          end: {
            line: 940,
            column: 24
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 937,
            column: 12
          },
          end: {
            line: 937,
            column: 40
          }
        }, {
          start: {
            line: 938,
            column: 12
          },
          end: {
            line: 938,
            column: 31
          }
        }, {
          start: {
            line: 939,
            column: 12
          },
          end: {
            line: 939,
            column: 24
          }
        }, {
          start: {
            line: 940,
            column: 12
          },
          end: {
            line: 940,
            column: 24
          }
        }],
        line: 937
      },
      "46": {
        loc: {
          start: {
            line: 951,
            column: 8
          },
          end: {
            line: 953,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 951,
            column: 8
          },
          end: {
            line: 953,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 951
      },
      "47": {
        loc: {
          start: {
            line: 951,
            column: 12
          },
          end: {
            line: 951,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 951,
            column: 12
          },
          end: {
            line: 951,
            column: 29
          }
        }, {
          start: {
            line: 951,
            column: 33
          },
          end: {
            line: 951,
            column: 40
          }
        }],
        line: 951
      },
      "48": {
        loc: {
          start: {
            line: 961,
            column: 8
          },
          end: {
            line: 963,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 961,
            column: 8
          },
          end: {
            line: 963,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 961
      },
      "49": {
        loc: {
          start: {
            line: 961,
            column: 12
          },
          end: {
            line: 961,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 961,
            column: 12
          },
          end: {
            line: 961,
            column: 29
          }
        }, {
          start: {
            line: 961,
            column: 33
          },
          end: {
            line: 961,
            column: 40
          }
        }],
        line: 961
      },
      "50": {
        loc: {
          start: {
            line: 1059,
            column: 8
          },
          end: {
            line: 1062,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1059,
            column: 8
          },
          end: {
            line: 1062,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1059
      },
      "51": {
        loc: {
          start: {
            line: 1064,
            column: 8
          },
          end: {
            line: 1084,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1064,
            column: 8
          },
          end: {
            line: 1084,
            column: 9
          }
        }, {
          start: {
            line: 1069,
            column: 15
          },
          end: {
            line: 1084,
            column: 9
          }
        }],
        line: 1064
      },
      "52": {
        loc: {
          start: {
            line: 1070,
            column: 12
          },
          end: {
            line: 1083,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1070,
            column: 12
          },
          end: {
            line: 1083,
            column: 13
          }
        }, {
          start: {
            line: 1077,
            column: 19
          },
          end: {
            line: 1083,
            column: 13
          }
        }],
        line: 1070
      },
      "53": {
        loc: {
          start: {
            line: 1106,
            column: 15
          },
          end: {
            line: 1106,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1106,
            column: 15
          },
          end: {
            line: 1106,
            column: 35
          }
        }, {
          start: {
            line: 1106,
            column: 39
          },
          end: {
            line: 1106,
            column: 41
          }
        }],
        line: 1106
      },
      "54": {
        loc: {
          start: {
            line: 1134,
            column: 17
          },
          end: {
            line: 1134,
            column: 34
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1134,
            column: 30
          },
          end: {
            line: 1134,
            column: 34
          }
        }],
        line: 1134
      },
      "55": {
        loc: {
          start: {
            line: 1135,
            column: 8
          },
          end: {
            line: 1137,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1135,
            column: 8
          },
          end: {
            line: 1137,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1135
      },
      "56": {
        loc: {
          start: {
            line: 1148,
            column: 24
          },
          end: {
            line: 1148,
            column: 41
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1148,
            column: 37
          },
          end: {
            line: 1148,
            column: 41
          }
        }],
        line: 1148
      },
      "57": {
        loc: {
          start: {
            line: 1149,
            column: 8
          },
          end: {
            line: 1153,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1149,
            column: 8
          },
          end: {
            line: 1153,
            column: 9
          }
        }, {
          start: {
            line: 1151,
            column: 15
          },
          end: {
            line: 1153,
            column: 9
          }
        }],
        line: 1149
      },
      "58": {
        loc: {
          start: {
            line: 1163,
            column: 21
          },
          end: {
            line: 1163,
            column: 38
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1163,
            column: 34
          },
          end: {
            line: 1163,
            column: 38
          }
        }],
        line: 1163
      },
      "59": {
        loc: {
          start: {
            line: 1164,
            column: 8
          },
          end: {
            line: 1166,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1164,
            column: 8
          },
          end: {
            line: 1166,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1164
      },
      "60": {
        loc: {
          start: {
            line: 1178,
            column: 8
          },
          end: {
            line: 1182,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1178,
            column: 8
          },
          end: {
            line: 1182,
            column: 9
          }
        }, {
          start: {
            line: 1180,
            column: 15
          },
          end: {
            line: 1182,
            column: 9
          }
        }],
        line: 1178
      },
      "61": {
        loc: {
          start: {
            line: 1285,
            column: 8
          },
          end: {
            line: 1292,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1285,
            column: 8
          },
          end: {
            line: 1292,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1285
      },
      "62": {
        loc: {
          start: {
            line: 1286,
            column: 12
          },
          end: {
            line: 1287,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1286,
            column: 12
          },
          end: {
            line: 1286,
            column: 34
          }
        }, {
          start: {
            line: 1287,
            column: 13
          },
          end: {
            line: 1287,
            column: 38
          }
        }, {
          start: {
            line: 1287,
            column: 42
          },
          end: {
            line: 1287,
            column: 68
          }
        }],
        line: 1286
      },
      "63": {
        loc: {
          start: {
            line: 1295,
            column: 8
          },
          end: {
            line: 1318,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1295,
            column: 8
          },
          end: {
            line: 1318,
            column: 9
          }
        }, {
          start: {
            line: 1315,
            column: 15
          },
          end: {
            line: 1318,
            column: 9
          }
        }],
        line: 1295
      },
      "64": {
        loc: {
          start: {
            line: 1333,
            column: 8
          },
          end: {
            line: 1339,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1333,
            column: 8
          },
          end: {
            line: 1339,
            column: 9
          }
        }, {
          start: {
            line: 1336,
            column: 15
          },
          end: {
            line: 1339,
            column: 9
          }
        }],
        line: 1333
      },
      "65": {
        loc: {
          start: {
            line: 1356,
            column: 12
          },
          end: {
            line: 1358,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1356,
            column: 12
          },
          end: {
            line: 1358,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1356
      },
      "66": {
        loc: {
          start: {
            line: 1424,
            column: 8
          },
          end: {
            line: 1426,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1424,
            column: 8
          },
          end: {
            line: 1426,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1424
      },
      "67": {
        loc: {
          start: {
            line: 1428,
            column: 8
          },
          end: {
            line: 1453,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1428,
            column: 8
          },
          end: {
            line: 1453,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1428
      },
      "68": {
        loc: {
          start: {
            line: 1444,
            column: 12
          },
          end: {
            line: 1452,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1444,
            column: 12
          },
          end: {
            line: 1452,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1444
      },
      "69": {
        loc: {
          start: {
            line: 1457,
            column: 8
          },
          end: {
            line: 1459,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1457,
            column: 8
          },
          end: {
            line: 1459,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1457
      },
      "70": {
        loc: {
          start: {
            line: 1457,
            column: 12
          },
          end: {
            line: 1457,
            column: 81
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1457,
            column: 12
          },
          end: {
            line: 1457,
            column: 46
          }
        }, {
          start: {
            line: 1457,
            column: 50
          },
          end: {
            line: 1457,
            column: 81
          }
        }],
        line: 1457
      },
      "71": {
        loc: {
          start: {
            line: 1461,
            column: 8
          },
          end: {
            line: 1467,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 1462,
            column: 12
          },
          end: {
            line: 1463,
            column: 61
          }
        }, {
          start: {
            line: 1464,
            column: 12
          },
          end: {
            line: 1464,
            column: 32
          }
        }, {
          start: {
            line: 1465,
            column: 12
          },
          end: {
            line: 1466,
            column: 76
          }
        }],
        line: 1461
      },
      "72": {
        loc: {
          start: {
            line: 1482,
            column: 12
          },
          end: {
            line: 1484,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1482,
            column: 12
          },
          end: {
            line: 1484,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1482
      },
      "73": {
        loc: {
          start: {
            line: 1488,
            column: 8
          },
          end: {
            line: 1495,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1488,
            column: 8
          },
          end: {
            line: 1495,
            column: 9
          }
        }, {
          start: {
            line: 1493,
            column: 15
          },
          end: {
            line: 1495,
            column: 9
          }
        }],
        line: 1488
      },
      "74": {
        loc: {
          start: {
            line: 1514,
            column: 8
          },
          end: {
            line: 1523,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1514,
            column: 8
          },
          end: {
            line: 1523,
            column: 9
          }
        }, {
          start: {
            line: 1516,
            column: 15
          },
          end: {
            line: 1523,
            column: 9
          }
        }],
        line: 1514
      },
      "75": {
        loc: {
          start: {
            line: 1528,
            column: 16
          },
          end: {
            line: 1532,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1528,
            column: 16
          },
          end: {
            line: 1532,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1528
      },
      "76": {
        loc: {
          start: {
            line: 1538,
            column: 8
          },
          end: {
            line: 1542,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1538,
            column: 8
          },
          end: {
            line: 1542,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1538
      },
      "77": {
        loc: {
          start: {
            line: 1547,
            column: 8
          },
          end: {
            line: 1559,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1547,
            column: 8
          },
          end: {
            line: 1559,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1547
      },
      "78": {
        loc: {
          start: {
            line: 1548,
            column: 12
          },
          end: {
            line: 1549,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1548,
            column: 13
          },
          end: {
            line: 1548,
            column: 19
          }
        }, {
          start: {
            line: 1548,
            column: 23
          },
          end: {
            line: 1548,
            column: 46
          }
        }, {
          start: {
            line: 1549,
            column: 12
          },
          end: {
            line: 1549,
            column: 43
          }
        }],
        line: 1548
      },
      "79": {
        loc: {
          start: {
            line: 1570,
            column: 8
          },
          end: {
            line: 1584,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1570,
            column: 8
          },
          end: {
            line: 1584,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1570
      },
      "80": {
        loc: {
          start: {
            line: 1577,
            column: 20
          },
          end: {
            line: 1580,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1577,
            column: 20
          },
          end: {
            line: 1580,
            column: 21
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1577
      },
      "81": {
        loc: {
          start: {
            line: 1577,
            column: 24
          },
          end: {
            line: 1577,
            column: 76
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1577,
            column: 24
          },
          end: {
            line: 1577,
            column: 41
          }
        }, {
          start: {
            line: 1577,
            column: 45
          },
          end: {
            line: 1577,
            column: 76
          }
        }],
        line: 1577
      },
      "82": {
        loc: {
          start: {
            line: 1633,
            column: 8
          },
          end: {
            line: 1639,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1633,
            column: 8
          },
          end: {
            line: 1639,
            column: 9
          }
        }, {
          start: {
            line: 1635,
            column: 15
          },
          end: {
            line: 1639,
            column: 9
          }
        }],
        line: 1633
      },
      "83": {
        loc: {
          start: {
            line: 1656,
            column: 17
          },
          end: {
            line: 1656,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1656,
            column: 17
          },
          end: {
            line: 1656,
            column: 23
          }
        }, {
          start: {
            line: 1656,
            column: 27
          },
          end: {
            line: 1656,
            column: 31
          }
        }],
        line: 1656
      },
      "84": {
        loc: {
          start: {
            line: 1657,
            column: 16
          },
          end: {
            line: 1657,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1657,
            column: 16
          },
          end: {
            line: 1657,
            column: 21
          }
        }, {
          start: {
            line: 1657,
            column: 25
          },
          end: {
            line: 1657,
            column: 26
          }
        }],
        line: 1657
      },
      "85": {
        loc: {
          start: {
            line: 1658,
            column: 19
          },
          end: {
            line: 1658,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1658,
            column: 19
          },
          end: {
            line: 1658,
            column: 27
          }
        }, {
          start: {
            line: 1658,
            column: 31
          },
          end: {
            line: 1658,
            column: 36
          }
        }],
        line: 1658
      },
      "86": {
        loc: {
          start: {
            line: 1659,
            column: 19
          },
          end: {
            line: 1659,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1659,
            column: 19
          },
          end: {
            line: 1659,
            column: 27
          }
        }, {
          start: {
            line: 1659,
            column: 31
          },
          end: {
            line: 1659,
            column: 36
          }
        }],
        line: 1659
      },
      "87": {
        loc: {
          start: {
            line: 1667,
            column: 12
          },
          end: {
            line: 1675,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1667,
            column: 12
          },
          end: {
            line: 1675,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1667
      },
      "88": {
        loc: {
          start: {
            line: 1699,
            column: 8
          },
          end: {
            line: 1701,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1699,
            column: 8
          },
          end: {
            line: 1701,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1699
      },
      "89": {
        loc: {
          start: {
            line: 1702,
            column: 8
          },
          end: {
            line: 1704,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1702,
            column: 8
          },
          end: {
            line: 1704,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1702
      },
      "90": {
        loc: {
          start: {
            line: 1705,
            column: 8
          },
          end: {
            line: 1707,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1705,
            column: 8
          },
          end: {
            line: 1707,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1705
      },
      "91": {
        loc: {
          start: {
            line: 1716,
            column: 8
          },
          end: {
            line: 1727,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1716,
            column: 8
          },
          end: {
            line: 1727,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1716
      },
      "92": {
        loc: {
          start: {
            line: 1716,
            column: 12
          },
          end: {
            line: 1716,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1716,
            column: 12
          },
          end: {
            line: 1716,
            column: 31
          }
        }, {
          start: {
            line: 1716,
            column: 35
          },
          end: {
            line: 1716,
            column: 65
          }
        }],
        line: 1716
      },
      "93": {
        loc: {
          start: {
            line: 1720,
            column: 12
          },
          end: {
            line: 1723,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1720,
            column: 12
          },
          end: {
            line: 1723,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1720
      },
      "94": {
        loc: {
          start: {
            line: 1741,
            column: 8
          },
          end: {
            line: 1744,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1741,
            column: 8
          },
          end: {
            line: 1744,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1741
      },
      "95": {
        loc: {
          start: {
            line: 1766,
            column: 8
          },
          end: {
            line: 1773,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1766,
            column: 8
          },
          end: {
            line: 1773,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1766
      },
      "96": {
        loc: {
          start: {
            line: 1774,
            column: 8
          },
          end: {
            line: 1778,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1774,
            column: 8
          },
          end: {
            line: 1778,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1774
      },
      "97": {
        loc: {
          start: {
            line: 1779,
            column: 8
          },
          end: {
            line: 1781,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1779,
            column: 8
          },
          end: {
            line: 1781,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 1779
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0,
      "253": 0,
      "254": 0,
      "255": 0,
      "256": 0,
      "257": 0,
      "258": 0,
      "259": 0,
      "260": 0,
      "261": 0,
      "262": 0,
      "263": 0,
      "264": 0,
      "265": 0,
      "266": 0,
      "267": 0,
      "268": 0,
      "269": 0,
      "270": 0,
      "271": 0,
      "272": 0,
      "273": 0,
      "274": 0,
      "275": 0,
      "276": 0,
      "277": 0,
      "278": 0,
      "279": 0,
      "280": 0,
      "281": 0,
      "282": 0,
      "283": 0,
      "284": 0,
      "285": 0,
      "286": 0,
      "287": 0,
      "288": 0,
      "289": 0,
      "290": 0,
      "291": 0,
      "292": 0,
      "293": 0,
      "294": 0,
      "295": 0,
      "296": 0,
      "297": 0,
      "298": 0,
      "299": 0,
      "300": 0,
      "301": 0,
      "302": 0,
      "303": 0,
      "304": 0,
      "305": 0,
      "306": 0,
      "307": 0,
      "308": 0,
      "309": 0,
      "310": 0,
      "311": 0,
      "312": 0,
      "313": 0,
      "314": 0,
      "315": 0,
      "316": 0,
      "317": 0,
      "318": 0,
      "319": 0,
      "320": 0,
      "321": 0,
      "322": 0,
      "323": 0,
      "324": 0,
      "325": 0,
      "326": 0,
      "327": 0,
      "328": 0,
      "329": 0,
      "330": 0,
      "331": 0,
      "332": 0,
      "333": 0,
      "334": 0,
      "335": 0,
      "336": 0,
      "337": 0,
      "338": 0,
      "339": 0,
      "340": 0,
      "341": 0,
      "342": 0,
      "343": 0,
      "344": 0,
      "345": 0,
      "346": 0,
      "347": 0,
      "348": 0,
      "349": 0,
      "350": 0,
      "351": 0,
      "352": 0,
      "353": 0,
      "354": 0,
      "355": 0,
      "356": 0,
      "357": 0,
      "358": 0,
      "359": 0,
      "360": 0,
      "361": 0,
      "362": 0,
      "363": 0,
      "364": 0,
      "365": 0,
      "366": 0,
      "367": 0,
      "368": 0,
      "369": 0,
      "370": 0,
      "371": 0,
      "372": 0,
      "373": 0,
      "374": 0,
      "375": 0,
      "376": 0,
      "377": 0,
      "378": 0,
      "379": 0,
      "380": 0,
      "381": 0,
      "382": 0,
      "383": 0,
      "384": 0,
      "385": 0,
      "386": 0,
      "387": 0,
      "388": 0,
      "389": 0,
      "390": 0,
      "391": 0,
      "392": 0,
      "393": 0,
      "394": 0,
      "395": 0,
      "396": 0,
      "397": 0,
      "398": 0,
      "399": 0,
      "400": 0,
      "401": 0,
      "402": 0,
      "403": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0, 0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0],
      "55": [0, 0],
      "56": [0],
      "57": [0, 0],
      "58": [0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0],
      "69": [0, 0],
      "70": [0, 0],
      "71": [0, 0, 0],
      "72": [0, 0],
      "73": [0, 0],
      "74": [0, 0],
      "75": [0, 0],
      "76": [0, 0],
      "77": [0, 0],
      "78": [0, 0, 0],
      "79": [0, 0],
      "80": [0, 0],
      "81": [0, 0],
      "82": [0, 0],
      "83": [0, 0],
      "84": [0, 0],
      "85": [0, 0],
      "86": [0, 0],
      "87": [0, 0],
      "88": [0, 0],
      "89": [0, 0],
      "90": [0, 0],
      "91": [0, 0],
      "92": [0, 0],
      "93": [0, 0],
      "94": [0, 0],
      "95": [0, 0],
      "96": [0, 0],
      "97": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ead25fe7d8a16f886cec9b16b758c51cbcab2c94"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dzrqndzkl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2dzrqndzkl();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
 * This work is licensed under a BSD-3-Clause License.
 */

/** @external {HTMLElement} https://developer.mozilla.org/en/docs/Web/API/HTMLElement */

/** @external {OfflineAudioContext} https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext */

/** @external {File} https://developer.mozilla.org/en-US/docs/Web/API/File */

/** @external {Blob} https://developer.mozilla.org/en-US/docs/Web/API/Blob */

/** @external {CanvasRenderingContext2D} https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D */

/** @external {MediaStreamConstraints} https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints */

/** @external {AudioNode} https://developer.mozilla.org/de/docs/Web/API/AudioNode */

/**
 * @typedef {Object} WavesurferParams
 * @property {AudioContext} audioContext=null Use your own previously
 * initialized AudioContext or leave blank.
 * @property {number} audioRate=1 Speed at which to play audio. Lower number is
 * slower.
 * @property {ScriptProcessorNode} audioScriptProcessor=null Use your own previously
 * initialized ScriptProcessorNode or leave blank.
 * @property {boolean} autoCenter=true If a scrollbar is present, center the
 * waveform on current progress
 * @property {number} autoCenterRate=5 If autoCenter is active, rate at which the
 * waveform is centered
 * @property {boolean} autoCenterImmediately=false If autoCenter is active, immediately
 * center waveform on current progress
 * @property {string} backend='WebAudio' `'WebAudio'|'MediaElement'|'MediaElementWebAudio'` In most cases
 * you don't have to set this manually. MediaElement is a fallback for unsupported browsers.
 * MediaElementWebAudio allows to use WebAudio API also with big audio files, loading audio like with
 * MediaElement backend (HTML5 audio tag). You have to use the same methods of MediaElement backend for loading and
 * playback, giving also peaks, so the audio data are not decoded. In this way you can use WebAudio features, like filters,
 * also with audio with big duration. For example:
 * ` wavesurfer.load(url | HTMLMediaElement, peaks, preload, duration);
 *   wavesurfer.play();
 *   wavesurfer.setFilter(customFilter);
 * `
 * @property {string} backgroundColor=null Change background color of the
 * waveform container.
 * @property {number} barHeight=1 The height of the wave bars.
 * @property {number} barRadius=0 The radius of the wave bars. Makes bars rounded
 * @property {number} barGap=null The optional spacing between bars of the wave,
 * if not provided will be calculated in legacy format.
 * @property {number} barWidth=null Draw the waveform using bars.
 * @property {number} barMinHeight=null If specified, draw at least a bar of this height,
 * eliminating waveform gaps
 * @property {boolean} closeAudioContext=false Close and nullify all audio
 * contexts when the destroy method is called.
 * @property {!string|HTMLElement} container CSS selector or HTML element where
 * the waveform should be drawn. This is the only required parameter.
 * @property {string} cursorColor='#333' The fill color of the cursor indicating
 * the playhead position.
 * @property {number} cursorWidth=1 Measured in pixels.
 * @property {object} drawingContextAttributes={desynchronized: false} Drawing context
 * attributes.
 * @property {number} duration=null Optional audio length so pre-rendered peaks
 * can be display immediately for example.
 * @property {boolean} fillParent=true Whether to fill the entire container or
 * draw only according to `minPxPerSec`.
 * @property {boolean} forceDecode=false Force decoding of audio using web audio
 * when zooming to get a more detailed waveform.
 * @property {number} height=128 The height of the waveform. Measured in
 * pixels.
 * @property {boolean} hideScrollbar=false Whether to hide the horizontal
 * scrollbar when one would normally be shown.
 * @property {boolean} hideCursor=false Whether to hide the mouse cursor
 * when one would normally be shown by default.
 * @property {boolean} ignoreSilenceMode=false If true, ignores device silence mode
 * when using the `WebAudio` backend.
 * @property {boolean} interact=true Whether the mouse interaction will be
 * enabled at initialization. You can switch this parameter at any time later
 * on.
 * @property {boolean} loopSelection=true (Use with regions plugin) Enable
 * looping of selected regions
 * @property {number} maxCanvasWidth=4000 Maximum width of a single canvas in
 * pixels, excluding a small overlap (2 * `pixelRatio`, rounded up to the next
 * even integer). If the waveform is longer than this value, additional canvases
 * will be used to render the waveform, which is useful for very large waveforms
 * that may be too wide for browsers to draw on a single canvas.
 * @property {boolean} mediaControls=false (Use with backend `MediaElement` or `MediaElementWebAudio`)
 * this enables the native controls for the media element
 * @property {string} mediaType='audio' (Use with backend `MediaElement` or `MediaElementWebAudio`)
 * `'audio'|'video'` ('video' only for `MediaElement`)
 * @property {number} minPxPerSec=20 Minimum number of pixels per second of
 * audio.
 * @property {boolean} normalize=false If true, normalize by the maximum peak
 * instead of 1.0.
 * @property {boolean} partialRender=false Use the PeakCache to improve
 * rendering speed of large waveforms
 * @property {number} pixelRatio=window.devicePixelRatio The pixel ratio used to
 * calculate display
 * @property {PluginDefinition[]} plugins=[] An array of plugin definitions to
 * register during instantiation, they will be directly initialised unless they
 * are added with the `deferInit` property set to true.
 * @property {string} progressColor='#555' The fill color of the part of the
 * waveform behind the cursor. When `progressColor` and `waveColor` are the same
 * the progress wave is not rendered at all.
 * @property {boolean} removeMediaElementOnDestroy=true Set to false to keep the
 * media element in the DOM when the player is destroyed. This is useful when
 * reusing an existing media element via the `loadMediaElement` method.
 * @property {Object} renderer=MultiCanvas Can be used to inject a custom
 * renderer.
 * @property {boolean|number} responsive=false If set to `true` resize the
 * waveform, when the window is resized. This is debounced with a `100ms`
 * timeout by default. If this parameter is a number it represents that timeout.
 * @property {boolean} rtl=false If set to `true`, renders waveform from
 * right-to-left.
 * @property {boolean} scrollParent=false Whether to scroll the container with a
 * lengthy waveform. Otherwise the waveform is shrunk to the container width
 * (see fillParent).
 * @property {number} skipLength=2 Number of seconds to skip with the
 * skipForward() and skipBackward() methods.
 * @property {boolean} splitChannels=false Render with separate waveforms for
 * the channels of the audio
 * @property {SplitChannelOptions} splitChannelsOptions={} Options for splitChannel rendering
 * @property {boolean} vertical=false Render the waveform vertically instead of horizontally.
 * @property {string} waveColor='#999' The fill color of the waveform after the
 * cursor.
 * @property {object} xhr={} XHR options. For example:
 * `let xhr = {
 *     cache: 'default',
 *     mode: 'cors',
 *     method: 'GET',
 *     credentials: 'same-origin',
 *     redirect: 'follow',
 *     referrer: 'client',
 *     requestHeaders: [
 *         {
 *             key: 'Authorization',
 *             value: 'my-token'
 *         }
 *     ]
 * };`
 */

/**
 * @typedef {Object} PluginDefinition
 * @desc The Object used to describe a plugin
 * @example wavesurfer.addPlugin(pluginDefinition);
 * @property {string} name The name of the plugin, the plugin instance will be
 * added as a property to the wavesurfer instance under this name
 * @property {?Object} staticProps The properties that should be added to the
 * wavesurfer instance as static properties
 * @property {?boolean} deferInit Don't initialise plugin
 * automatically
 * @property {Object} params={} The plugin parameters, they are the first parameter
 * passed to the plugin class constructor function
 * @property {PluginClass} instance The plugin instance factory, is called with
 * the dependency specified in extends. Returns the plugin class.
 */

/**
 * @typedef {Object} SplitChannelOptions
 * @desc parameters applied when splitChannels option is true
 * @property {boolean} overlay=false determines whether channels are rendered on top of each other or on separate tracks
 * @property {object} channelColors={} object describing color for each channel. Example:
 * {
 *     0: {
 *         progressColor: 'green',
 *         waveColor: 'pink'
 *     },
 *     1: {
 *         progressColor: 'orange',
 *         waveColor: 'purple'
 *     }
 * }
 * @property {number[]} filterChannels=[] indexes of channels to be hidden from rendering
 * @property {boolean} relativeNormalization=false determines whether
 * normalization is done per channel or maintains proportionality between
 * channels. Only applied when normalize and splitChannels are both true.
 * @since 4.3.0
 */

/**
 * @interface PluginClass
 *
 * @desc This is the interface which is implemented by all plugin classes. Note
 * that this only turns into an observer after being passed through
 * `wavesurfer.addPlugin`.
 *
 * @extends {Observer}
 */
var PluginClass = /*#__PURE__*/function () {
  /**
   * Construct the plugin
   *
   * @param {Object} params={} The plugin params (specific to the plugin)
   * @param {Object} ws The wavesurfer instance
   */
  function PluginClass(params, ws) {
    _classCallCheck(this, PluginClass);

    cov_2dzrqndzkl().f[1]++;
  }
  /**
   * Initialise the plugin
   *
   * Start doing something. This is called by
   * `wavesurfer.initPlugin(pluginName)`
   */


  _createClass(PluginClass, [{
    key: "create",
    value:
    /**
     * Plugin definition factory
     *
     * This function must be used to create a plugin definition which can be
     * used by wavesurfer to correctly instantiate the plugin.
     *
     * It returns a `PluginDefinition` object representing the plugin.
     *
     * @param {Object} params={} The plugin params (specific to the plugin)
     */
    function create(params) {
      cov_2dzrqndzkl().f[0]++;
    }
  }, {
    key: "init",
    value: function init() {
      cov_2dzrqndzkl().f[2]++;
    }
    /**
     * Destroy the plugin instance
     *
     * Stop doing something. This is called by
     * `wavesurfer.destroyPlugin(pluginName)`
     */

  }, {
    key: "destroy",
    value: function destroy() {
      cov_2dzrqndzkl().f[3]++;
    }
  }]);

  return PluginClass;
}();
/**
 * WaveSurfer core library class
 *
 * @extends {Observer}
 * @example
 * const params = {
 *   container: '#waveform',
 *   waveColor: 'violet',
 *   progressColor: 'purple'
 * };
 *
 * // initialise like this
 * const wavesurfer = WaveSurfer.create(params);
 *
 * // or like this ...
 * const wavesurfer = new WaveSurfer(params);
 * wavesurfer.init();
 *
 * // load audio file
 * wavesurfer.load('example/media/demo.wav');
 */


var WaveSurfer = /*#__PURE__*/function (_util$Observer) {
  _inherits(WaveSurfer, _util$Observer);

  var _super = _createSuper(WaveSurfer);

  /**
   * Initialise wavesurfer instance
   *
   * @param {WavesurferParams} params Instantiation options for wavesurfer
   * @example
   * const wavesurfer = new WaveSurfer(params);
   * @returns {this} Wavesurfer instance
   */
  function WaveSurfer(params) {
    var _this;

    _classCallCheck(this, WaveSurfer);

    cov_2dzrqndzkl().f[5]++;
    cov_2dzrqndzkl().s[7]++;
    _this = _super.call(this);
    /**
     * Extract relevant parameters (or defaults)
     * @private
     */

    _defineProperty(_assertThisInitialized(_this), "defaultParams", (cov_2dzrqndzkl().s[0]++, {
      audioContext: null,
      audioScriptProcessor: null,
      audioRate: 1,
      autoCenter: true,
      autoCenterRate: 5,
      autoCenterImmediately: false,
      backend: 'WebAudio',
      backgroundColor: null,
      barHeight: 1,
      barRadius: 0,
      barGap: null,
      barMinHeight: null,
      container: null,
      cursorColor: '#333',
      cursorWidth: 1,
      dragSelection: true,
      drawingContextAttributes: {
        // Boolean that hints the user agent to reduce the latency
        // by desynchronizing the canvas paint cycle from the event
        // loop
        desynchronized: false
      },
      duration: null,
      fillParent: true,
      forceDecode: false,
      height: 128,
      hideScrollbar: false,
      hideCursor: false,
      ignoreSilenceMode: false,
      interact: true,
      loopSelection: true,
      maxCanvasWidth: 4000,
      mediaContainer: null,
      mediaControls: false,
      mediaType: 'audio',
      minPxPerSec: 20,
      normalize: false,
      partialRender: false,
      pixelRatio: (cov_2dzrqndzkl().b[0][0]++, window.devicePixelRatio) || (cov_2dzrqndzkl().b[0][1]++, screen.deviceXDPI / screen.logicalXDPI),
      plugins: [],
      progressColor: '#555',
      removeMediaElementOnDestroy: true,
      renderer: _drawer.default,
      responsive: false,
      rtl: false,
      scrollParent: false,
      skipLength: 2,
      splitChannels: false,
      splitChannelsOptions: {
        overlay: false,
        channelColors: {},
        filterChannels: [],
        relativeNormalization: false
      },
      vertical: false,
      waveColor: '#999',
      xhr: {}
    }));

    _defineProperty(_assertThisInitialized(_this), "backends", (cov_2dzrqndzkl().s[1]++, {
      MediaElement: _mediaelement.default,
      WebAudio: _webaudio.default,
      MediaElementWebAudio: _mediaelementWebaudio.default
    }));

    _defineProperty(_assertThisInitialized(_this), "util", (cov_2dzrqndzkl().s[5]++, util));

    cov_2dzrqndzkl().s[8]++;
    _this.params = Object.assign({}, _this.defaultParams, params);
    cov_2dzrqndzkl().s[9]++;
    _this.params.splitChannelsOptions = Object.assign({}, _this.defaultParams.splitChannelsOptions, params.splitChannelsOptions);
    /** @private */

    cov_2dzrqndzkl().s[10]++;
    _this.container = 'string' == typeof params.container ? (cov_2dzrqndzkl().b[1][0]++, document.querySelector(_this.params.container)) : (cov_2dzrqndzkl().b[1][1]++, _this.params.container);
    cov_2dzrqndzkl().s[11]++;

    if (!_this.container) {
      cov_2dzrqndzkl().b[2][0]++;
      cov_2dzrqndzkl().s[12]++;
      throw new Error('Container element not found');
    } else {
      cov_2dzrqndzkl().b[2][1]++;
    }

    cov_2dzrqndzkl().s[13]++;

    if (_this.params.mediaContainer == null) {
      cov_2dzrqndzkl().b[3][0]++;
      cov_2dzrqndzkl().s[14]++;

      /** @private */
      _this.mediaContainer = _this.container;
    } else {
      cov_2dzrqndzkl().b[3][1]++;
      cov_2dzrqndzkl().s[15]++;

      if (typeof _this.params.mediaContainer == 'string') {
        cov_2dzrqndzkl().b[4][0]++;
        cov_2dzrqndzkl().s[16]++;

        /** @private */
        _this.mediaContainer = document.querySelector(_this.params.mediaContainer);
      } else {
        cov_2dzrqndzkl().b[4][1]++;
        cov_2dzrqndzkl().s[17]++;

        /** @private */
        _this.mediaContainer = _this.params.mediaContainer;
      }
    }

    cov_2dzrqndzkl().s[18]++;

    if (!_this.mediaContainer) {
      cov_2dzrqndzkl().b[5][0]++;
      cov_2dzrqndzkl().s[19]++;
      throw new Error('Media Container element not found');
    } else {
      cov_2dzrqndzkl().b[5][1]++;
    }

    cov_2dzrqndzkl().s[20]++;

    if (_this.params.maxCanvasWidth <= 1) {
      cov_2dzrqndzkl().b[6][0]++;
      cov_2dzrqndzkl().s[21]++;
      throw new Error('maxCanvasWidth must be greater than 1');
    } else {
      cov_2dzrqndzkl().b[6][1]++;
      cov_2dzrqndzkl().s[22]++;

      if (_this.params.maxCanvasWidth % 2 == 1) {
        cov_2dzrqndzkl().b[7][0]++;
        cov_2dzrqndzkl().s[23]++;
        throw new Error('maxCanvasWidth must be an even number');
      } else {
        cov_2dzrqndzkl().b[7][1]++;
      }
    }

    cov_2dzrqndzkl().s[24]++;

    if (_this.params.rtl === true) {
      cov_2dzrqndzkl().b[8][0]++;
      cov_2dzrqndzkl().s[25]++;

      if (_this.params.vertical === true) {
        cov_2dzrqndzkl().b[9][0]++;
        cov_2dzrqndzkl().s[26]++;
        util.style(_this.container, {
          transform: 'rotateX(180deg)'
        });
      } else {
        cov_2dzrqndzkl().b[9][1]++;
        cov_2dzrqndzkl().s[27]++;
        util.style(_this.container, {
          transform: 'rotateY(180deg)'
        });
      }
    } else {
      cov_2dzrqndzkl().b[8][1]++;
    }

    cov_2dzrqndzkl().s[28]++;

    if (_this.params.backgroundColor) {
      cov_2dzrqndzkl().b[10][0]++;
      cov_2dzrqndzkl().s[29]++;

      _this.setBackgroundColor(_this.params.backgroundColor);
    } else {
      cov_2dzrqndzkl().b[10][1]++;
    }
    /**
     * @private Used to save the current volume when muting so we can
     * restore once unmuted
     * @type {number}
     */


    cov_2dzrqndzkl().s[30]++;
    _this.savedVolume = 0;
    /**
     * @private The current muted state
     * @type {boolean}
     */

    cov_2dzrqndzkl().s[31]++;
    _this.isMuted = false;
    /**
     * @private Will hold a list of event descriptors that need to be
     * canceled on subsequent loads of audio
     * @type {Object[]}
     */

    cov_2dzrqndzkl().s[32]++;
    _this.tmpEvents = [];
    /**
     * @private Holds any running audio downloads
     * @type {Observer}
     */

    cov_2dzrqndzkl().s[33]++;
    _this.currentRequest = null;
    /** @private */

    cov_2dzrqndzkl().s[34]++;
    _this.arraybuffer = null;
    /** @private */

    cov_2dzrqndzkl().s[35]++;
    _this.drawer = null;
    /** @private */

    cov_2dzrqndzkl().s[36]++;
    _this.backend = null;
    /** @private */

    cov_2dzrqndzkl().s[37]++;
    _this.peakCache = null; // cache constructor objects

    cov_2dzrqndzkl().s[38]++;

    if (typeof _this.params.renderer !== 'function') {
      cov_2dzrqndzkl().b[11][0]++;
      cov_2dzrqndzkl().s[39]++;
      throw new Error('Renderer parameter is invalid');
    } else {
      cov_2dzrqndzkl().b[11][1]++;
    }
    /**
     * @private The uninitialised Drawer class
     */


    cov_2dzrqndzkl().s[40]++;
    _this.Drawer = _this.params.renderer;
    /**
     * @private The uninitialised Backend class
     */
    // Back compat

    cov_2dzrqndzkl().s[41]++;

    if (_this.params.backend == 'AudioElement') {
      cov_2dzrqndzkl().b[12][0]++;
      cov_2dzrqndzkl().s[42]++;
      _this.params.backend = 'MediaElement';
    } else {
      cov_2dzrqndzkl().b[12][1]++;
    }

    cov_2dzrqndzkl().s[43]++;

    if (((cov_2dzrqndzkl().b[14][0]++, _this.params.backend == 'WebAudio') || (cov_2dzrqndzkl().b[14][1]++, _this.params.backend === 'MediaElementWebAudio')) && (cov_2dzrqndzkl().b[14][2]++, !_webaudio.default.prototype.supportsWebAudio.call(null))) {
      cov_2dzrqndzkl().b[13][0]++;
      cov_2dzrqndzkl().s[44]++;
      _this.params.backend = 'MediaElement';
    } else {
      cov_2dzrqndzkl().b[13][1]++;
    }

    cov_2dzrqndzkl().s[45]++;
    _this.Backend = _this.backends[_this.params.backend];
    /**
     * @private map of plugin names that are currently initialised
     */

    cov_2dzrqndzkl().s[46]++;
    _this.initialisedPluginList = {};
    /** @private */

    cov_2dzrqndzkl().s[47]++;
    _this.isDestroyed = false;
    /**
     * Get the current ready status.
     *
     * @example const isReady = wavesurfer.isReady;
     * @return {boolean}
     */

    cov_2dzrqndzkl().s[48]++;
    _this.isReady = false; // responsive debounced event listener. If this.params.responsive is not
    // set, this is never called. Use 100ms or this.params.responsive as
    // timeout for the debounce function.

    var prevWidth = (cov_2dzrqndzkl().s[49]++, 0);
    cov_2dzrqndzkl().s[50]++;
    _this._onResize = util.debounce(function () {
      cov_2dzrqndzkl().f[6]++;
      cov_2dzrqndzkl().s[51]++;

      if ((cov_2dzrqndzkl().b[16][0]++, prevWidth != _this.drawer.wrapper.clientWidth) && (cov_2dzrqndzkl().b[16][1]++, !_this.params.scrollParent)) {
        cov_2dzrqndzkl().b[15][0]++;
        cov_2dzrqndzkl().s[52]++;
        prevWidth = _this.drawer.wrapper.clientWidth;
        cov_2dzrqndzkl().s[53]++;

        _this.drawer.fireEvent('redraw');
      } else {
        cov_2dzrqndzkl().b[15][1]++;
      }
    }, typeof _this.params.responsive === 'number' ? (cov_2dzrqndzkl().b[17][0]++, _this.params.responsive) : (cov_2dzrqndzkl().b[17][1]++, 100));
    cov_2dzrqndzkl().s[54]++;
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }
  /**
   * Initialise the wave
   *
   * @example
   * var wavesurfer = new WaveSurfer(params);
   * wavesurfer.init();
   * @return {this} The wavesurfer instance
   */


  _createClass(WaveSurfer, [{
    key: "init",
    value: function init() {
      cov_2dzrqndzkl().f[7]++;
      cov_2dzrqndzkl().s[55]++;
      this.registerPlugins(this.params.plugins);
      cov_2dzrqndzkl().s[56]++;
      this.createDrawer();
      cov_2dzrqndzkl().s[57]++;
      this.createBackend();
      cov_2dzrqndzkl().s[58]++;
      this.createPeakCache();
      cov_2dzrqndzkl().s[59]++;
      return this;
    }
    /**
     * Add and initialise array of plugins (if `plugin.deferInit` is falsey),
     * this function is called in the init function of wavesurfer
     *
     * @param {PluginDefinition[]} plugins An array of plugin definitions
     * @emits {WaveSurfer#plugins-registered} Called with the array of plugin definitions
     * @return {this} The wavesurfer instance
     */

  }, {
    key: "registerPlugins",
    value: function registerPlugins(plugins) {
      var _this2 = this;

      cov_2dzrqndzkl().f[8]++;
      cov_2dzrqndzkl().s[60]++;
      // first instantiate all the plugins
      plugins.forEach(function (plugin) {
        cov_2dzrqndzkl().f[9]++;
        cov_2dzrqndzkl().s[61]++;
        return _this2.addPlugin(plugin);
      }); // now run the init functions

      cov_2dzrqndzkl().s[62]++;
      plugins.forEach(function (plugin) {
        cov_2dzrqndzkl().f[10]++;
        cov_2dzrqndzkl().s[63]++;

        // call init function of the plugin if deferInit is falsey
        // in that case you would manually use initPlugins()
        if (!plugin.deferInit) {
          cov_2dzrqndzkl().b[18][0]++;
          cov_2dzrqndzkl().s[64]++;

          _this2.initPlugin(plugin.name);
        } else {
          cov_2dzrqndzkl().b[18][1]++;
        }
      });
      cov_2dzrqndzkl().s[65]++;
      this.fireEvent('plugins-registered', plugins);
      cov_2dzrqndzkl().s[66]++;
      return this;
    }
    /**
     * Get a map of plugin names that are currently initialised
     *
     * @example wavesurfer.getPlugins();
     * @return {Object} Object with plugin names
     */

  }, {
    key: "getActivePlugins",
    value: function getActivePlugins() {
      cov_2dzrqndzkl().f[11]++;
      cov_2dzrqndzkl().s[67]++;
      return this.initialisedPluginList;
    }
    /**
     * Add a plugin object to wavesurfer
     *
     * @param {PluginDefinition} plugin A plugin definition
     * @emits {WaveSurfer#plugin-added} Called with the name of the plugin that was added
     * @example wavesurfer.addPlugin(WaveSurfer.minimap());
     * @return {this} The wavesurfer instance
     */

  }, {
    key: "addPlugin",
    value: function addPlugin(plugin) {
      var _this3 = this;

      cov_2dzrqndzkl().f[12]++;
      cov_2dzrqndzkl().s[68]++;

      if (!plugin.name) {
        cov_2dzrqndzkl().b[19][0]++;
        cov_2dzrqndzkl().s[69]++;
        throw new Error('Plugin does not have a name!');
      } else {
        cov_2dzrqndzkl().b[19][1]++;
      }

      cov_2dzrqndzkl().s[70]++;

      if (!plugin.instance) {
        cov_2dzrqndzkl().b[20][0]++;
        cov_2dzrqndzkl().s[71]++;
        throw new Error("Plugin ".concat(plugin.name, " does not have an instance property!"));
      } else {
        cov_2dzrqndzkl().b[20][1]++;
      } // staticProps properties are applied to wavesurfer instance


      cov_2dzrqndzkl().s[72]++;

      if (plugin.staticProps) {
        cov_2dzrqndzkl().b[21][0]++;
        cov_2dzrqndzkl().s[73]++;
        Object.keys(plugin.staticProps).forEach(function (pluginStaticProp) {
          cov_2dzrqndzkl().f[13]++;
          cov_2dzrqndzkl().s[74]++;

          /**
           * Properties defined in a plugin definition's `staticProps` property are added as
           * staticProps properties of the WaveSurfer instance
           */
          _this3[pluginStaticProp] = plugin.staticProps[pluginStaticProp];
        });
      } else {
        cov_2dzrqndzkl().b[21][1]++;
      }

      var Instance = (cov_2dzrqndzkl().s[75]++, plugin.instance); // turn the plugin instance into an observer

      var observerPrototypeKeys = (cov_2dzrqndzkl().s[76]++, Object.getOwnPropertyNames(util.Observer.prototype));
      cov_2dzrqndzkl().s[77]++;
      observerPrototypeKeys.forEach(function (key) {
        cov_2dzrqndzkl().f[14]++;
        cov_2dzrqndzkl().s[78]++;
        Instance.prototype[key] = util.Observer.prototype[key];
      });
      /**
       * Instantiated plugin classes are added as a property of the wavesurfer
       * instance
       * @type {Object}
       */

      cov_2dzrqndzkl().s[79]++;
      this[plugin.name] = new Instance((cov_2dzrqndzkl().b[22][0]++, plugin.params) || (cov_2dzrqndzkl().b[22][1]++, {}), this);
      cov_2dzrqndzkl().s[80]++;
      this.fireEvent('plugin-added', plugin.name);
      cov_2dzrqndzkl().s[81]++;
      return this;
    }
    /**
     * Initialise a plugin
     *
     * @param {string} name A plugin name
     * @emits WaveSurfer#plugin-initialised
     * @example wavesurfer.initPlugin('minimap');
     * @return {this} The wavesurfer instance
     */

  }, {
    key: "initPlugin",
    value: function initPlugin(name) {
      cov_2dzrqndzkl().f[15]++;
      cov_2dzrqndzkl().s[82]++;

      if (!this[name]) {
        cov_2dzrqndzkl().b[23][0]++;
        cov_2dzrqndzkl().s[83]++;
        throw new Error("Plugin ".concat(name, " has not been added yet!"));
      } else {
        cov_2dzrqndzkl().b[23][1]++;
      }

      cov_2dzrqndzkl().s[84]++;

      if (this.initialisedPluginList[name]) {
        cov_2dzrqndzkl().b[24][0]++;
        cov_2dzrqndzkl().s[85]++;
        // destroy any already initialised plugins
        this.destroyPlugin(name);
      } else {
        cov_2dzrqndzkl().b[24][1]++;
      }

      cov_2dzrqndzkl().s[86]++;
      this[name].init();
      cov_2dzrqndzkl().s[87]++;
      this.initialisedPluginList[name] = true;
      cov_2dzrqndzkl().s[88]++;
      this.fireEvent('plugin-initialised', name);
      cov_2dzrqndzkl().s[89]++;
      return this;
    }
    /**
     * Destroy a plugin
     *
     * @param {string} name A plugin name
     * @emits WaveSurfer#plugin-destroyed
     * @example wavesurfer.destroyPlugin('minimap');
     * @returns {this} The wavesurfer instance
     */

  }, {
    key: "destroyPlugin",
    value: function destroyPlugin(name) {
      cov_2dzrqndzkl().f[16]++;
      cov_2dzrqndzkl().s[90]++;

      if (!this[name]) {
        cov_2dzrqndzkl().b[25][0]++;
        cov_2dzrqndzkl().s[91]++;
        throw new Error("Plugin ".concat(name, " has not been added yet and cannot be destroyed!"));
      } else {
        cov_2dzrqndzkl().b[25][1]++;
      }

      cov_2dzrqndzkl().s[92]++;

      if (!this.initialisedPluginList[name]) {
        cov_2dzrqndzkl().b[26][0]++;
        cov_2dzrqndzkl().s[93]++;
        throw new Error("Plugin ".concat(name, " is not active and cannot be destroyed!"));
      } else {
        cov_2dzrqndzkl().b[26][1]++;
      }

      cov_2dzrqndzkl().s[94]++;

      if (typeof this[name].destroy !== 'function') {
        cov_2dzrqndzkl().b[27][0]++;
        cov_2dzrqndzkl().s[95]++;
        throw new Error("Plugin ".concat(name, " does not have a destroy function!"));
      } else {
        cov_2dzrqndzkl().b[27][1]++;
      }

      cov_2dzrqndzkl().s[96]++;
      this[name].destroy();
      cov_2dzrqndzkl().s[97]++;
      delete this.initialisedPluginList[name];
      cov_2dzrqndzkl().s[98]++;
      this.fireEvent('plugin-destroyed', name);
      cov_2dzrqndzkl().s[99]++;
      return this;
    }
    /**
     * Destroy all initialised plugins. Convenience function to use when
     * wavesurfer is removed
     *
     * @private
     */

  }, {
    key: "destroyAllPlugins",
    value: function destroyAllPlugins() {
      var _this4 = this;

      cov_2dzrqndzkl().f[17]++;
      cov_2dzrqndzkl().s[100]++;
      Object.keys(this.initialisedPluginList).forEach(function (name) {
        cov_2dzrqndzkl().f[18]++;
        cov_2dzrqndzkl().s[101]++;
        return _this4.destroyPlugin(name);
      });
    }
    /**
     * Create the drawer and draw the waveform
     *
     * @private
     * @emits WaveSurfer#drawer-created
     */

  }, {
    key: "createDrawer",
    value: function createDrawer() {
      var _this5 = this;

      cov_2dzrqndzkl().f[19]++;
      cov_2dzrqndzkl().s[102]++;
      this.drawer = new this.Drawer(this.container, this.params);
      cov_2dzrqndzkl().s[103]++;
      this.drawer.init();
      cov_2dzrqndzkl().s[104]++;
      this.fireEvent('drawer-created', this.drawer);
      cov_2dzrqndzkl().s[105]++;

      if (this.params.responsive !== false) {
        cov_2dzrqndzkl().b[28][0]++;
        cov_2dzrqndzkl().s[106]++;
        window.addEventListener('resize', this._onResize, true);
        cov_2dzrqndzkl().s[107]++;
        window.addEventListener('orientationchange', this._onResize, true);
      } else {
        cov_2dzrqndzkl().b[28][1]++;
      }

      cov_2dzrqndzkl().s[108]++;
      this.drawer.on('redraw', function () {
        cov_2dzrqndzkl().f[20]++;
        cov_2dzrqndzkl().s[109]++;

        _this5.drawBuffer();

        cov_2dzrqndzkl().s[110]++;

        _this5.drawer.progress(_this5.backend.getPlayedPercents());
      }); // Click-to-seek

      cov_2dzrqndzkl().s[111]++;
      this.drawer.on('click', function (e, progress) {
        cov_2dzrqndzkl().f[21]++;
        cov_2dzrqndzkl().s[112]++;
        setTimeout(function () {
          cov_2dzrqndzkl().f[22]++;
          cov_2dzrqndzkl().s[113]++;
          return _this5.seekTo(progress);
        }, 0);
      }); // Relay the scroll event from the drawer

      cov_2dzrqndzkl().s[114]++;
      this.drawer.on('scroll', function (e) {
        cov_2dzrqndzkl().f[23]++;
        cov_2dzrqndzkl().s[115]++;

        if (_this5.params.partialRender) {
          cov_2dzrqndzkl().b[29][0]++;
          cov_2dzrqndzkl().s[116]++;

          _this5.drawBuffer();
        } else {
          cov_2dzrqndzkl().b[29][1]++;
        }

        cov_2dzrqndzkl().s[117]++;

        _this5.fireEvent('scroll', e);
      });
    }
    /**
     * Create the backend
     *
     * @private
     * @emits WaveSurfer#backend-created
     */

  }, {
    key: "createBackend",
    value: function createBackend() {
      var _this6 = this;

      cov_2dzrqndzkl().f[24]++;
      cov_2dzrqndzkl().s[118]++;

      if (this.backend) {
        cov_2dzrqndzkl().b[30][0]++;
        cov_2dzrqndzkl().s[119]++;
        this.backend.destroy();
      } else {
        cov_2dzrqndzkl().b[30][1]++;
      }

      cov_2dzrqndzkl().s[120]++;
      this.backend = new this.Backend(this.params);
      cov_2dzrqndzkl().s[121]++;
      this.backend.init();
      cov_2dzrqndzkl().s[122]++;
      this.fireEvent('backend-created', this.backend);
      cov_2dzrqndzkl().s[123]++;
      this.backend.on('finish', function () {
        cov_2dzrqndzkl().f[25]++;
        cov_2dzrqndzkl().s[124]++;

        _this6.drawer.progress(_this6.backend.getPlayedPercents());

        cov_2dzrqndzkl().s[125]++;

        _this6.fireEvent('finish');
      });
      cov_2dzrqndzkl().s[126]++;
      this.backend.on('play', function () {
        cov_2dzrqndzkl().f[26]++;
        cov_2dzrqndzkl().s[127]++;
        return _this6.fireEvent('play');
      });
      cov_2dzrqndzkl().s[128]++;
      this.backend.on('pause', function () {
        cov_2dzrqndzkl().f[27]++;
        cov_2dzrqndzkl().s[129]++;
        return _this6.fireEvent('pause');
      });
      cov_2dzrqndzkl().s[130]++;
      this.backend.on('audioprocess', function (time) {
        cov_2dzrqndzkl().f[28]++;
        cov_2dzrqndzkl().s[131]++;

        _this6.drawer.progress(_this6.backend.getPlayedPercents());

        cov_2dzrqndzkl().s[132]++;

        _this6.fireEvent('audioprocess', time);
      }); // only needed for MediaElement and MediaElementWebAudio backend

      cov_2dzrqndzkl().s[133]++;

      if ((cov_2dzrqndzkl().b[32][0]++, this.params.backend === 'MediaElement') || (cov_2dzrqndzkl().b[32][1]++, this.params.backend === 'MediaElementWebAudio')) {
        cov_2dzrqndzkl().b[31][0]++;
        cov_2dzrqndzkl().s[134]++;
        this.backend.on('seek', function () {
          cov_2dzrqndzkl().f[29]++;
          cov_2dzrqndzkl().s[135]++;

          _this6.drawer.progress(_this6.backend.getPlayedPercents());
        });
        cov_2dzrqndzkl().s[136]++;
        this.backend.on('volume', function () {
          cov_2dzrqndzkl().f[30]++;
          var newVolume = (cov_2dzrqndzkl().s[137]++, _this6.getVolume());
          cov_2dzrqndzkl().s[138]++;

          _this6.fireEvent('volume', newVolume);

          cov_2dzrqndzkl().s[139]++;

          if (_this6.backend.isMuted !== _this6.isMuted) {
            cov_2dzrqndzkl().b[33][0]++;
            cov_2dzrqndzkl().s[140]++;
            _this6.isMuted = _this6.backend.isMuted;
            cov_2dzrqndzkl().s[141]++;

            _this6.fireEvent('mute', _this6.isMuted);
          } else {
            cov_2dzrqndzkl().b[33][1]++;
          }
        });
      } else {
        cov_2dzrqndzkl().b[31][1]++;
      }
    }
    /**
     * Create the peak cache
     *
     * @private
     */

  }, {
    key: "createPeakCache",
    value: function createPeakCache() {
      cov_2dzrqndzkl().f[31]++;
      cov_2dzrqndzkl().s[142]++;

      if (this.params.partialRender) {
        cov_2dzrqndzkl().b[34][0]++;
        cov_2dzrqndzkl().s[143]++;
        this.peakCache = new _peakcache.default();
      } else {
        cov_2dzrqndzkl().b[34][1]++;
      }
    }
    /**
     * Get the duration of the audio clip
     *
     * @example const duration = wavesurfer.getDuration();
     * @return {number} Duration in seconds
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      cov_2dzrqndzkl().f[32]++;
      cov_2dzrqndzkl().s[144]++;
      return this.backend.getDuration();
    }
    /**
     * Get the current playback position
     *
     * @example const currentTime = wavesurfer.getCurrentTime();
     * @return {number} Playback position in seconds
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      cov_2dzrqndzkl().f[33]++;
      cov_2dzrqndzkl().s[145]++;
      return this.backend.getCurrentTime();
    }
    /**
     * Set the current play time in seconds.
     *
     * @param {number} seconds A positive number in seconds. E.g. 10 means 10
     * seconds, 60 means 1 minute
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(seconds) {
      cov_2dzrqndzkl().f[34]++;
      cov_2dzrqndzkl().s[146]++;

      if (seconds >= this.getDuration()) {
        cov_2dzrqndzkl().b[35][0]++;
        cov_2dzrqndzkl().s[147]++;
        this.seekTo(1);
      } else {
        cov_2dzrqndzkl().b[35][1]++;
        cov_2dzrqndzkl().s[148]++;
        this.seekTo(seconds / this.getDuration());
      }
    }
    /**
     * Starts playback from the current position. Optional start and end
     * measured in seconds can be used to set the range of audio to play.
     *
     * @param {?number} start Position to start at
     * @param {?number} end Position to end at
     * @emits WaveSurfer#interaction
     * @return {Promise} Result of the backend play method
     * @example
     * // play from second 1 to 5
     * wavesurfer.play(1, 5);
     */

  }, {
    key: "play",
    value: function play(start, end) {
      var _this7 = this;

      cov_2dzrqndzkl().f[35]++;
      cov_2dzrqndzkl().s[149]++;

      if (this.params.ignoreSilenceMode) {
        cov_2dzrqndzkl().b[36][0]++;
        cov_2dzrqndzkl().s[150]++;
        // ignores device hardware silence mode
        util.ignoreSilenceMode();
      } else {
        cov_2dzrqndzkl().b[36][1]++;
      }

      cov_2dzrqndzkl().s[151]++;
      this.fireEvent('interaction', function () {
        cov_2dzrqndzkl().f[36]++;
        cov_2dzrqndzkl().s[152]++;
        return _this7.play(start, end);
      });
      cov_2dzrqndzkl().s[153]++;
      return this.backend.play(start, end);
    }
    /**
     * Set a point in seconds for playback to stop at.
     *
     * @param {number} position Position (in seconds) to stop at
     * @version 3.3.0
     */

  }, {
    key: "setPlayEnd",
    value: function setPlayEnd(position) {
      cov_2dzrqndzkl().f[37]++;
      cov_2dzrqndzkl().s[154]++;
      this.backend.setPlayEnd(position);
    }
    /**
     * Stops and pauses playback
     *
     * @example wavesurfer.pause();
     * @return {Promise} Result of the backend pause method
     */

  }, {
    key: "pause",
    value: function pause() {
      cov_2dzrqndzkl().f[38]++;
      cov_2dzrqndzkl().s[155]++;

      if (!this.backend.isPaused()) {
        cov_2dzrqndzkl().b[37][0]++;
        cov_2dzrqndzkl().s[156]++;
        return this.backend.pause();
      } else {
        cov_2dzrqndzkl().b[37][1]++;
      }
    }
    /**
     * Toggle playback
     *
     * @example wavesurfer.playPause();
     * @return {Promise} Result of the backend play or pause method
     */

  }, {
    key: "playPause",
    value: function playPause() {
      cov_2dzrqndzkl().f[39]++;
      cov_2dzrqndzkl().s[157]++;
      return this.backend.isPaused() ? (cov_2dzrqndzkl().b[38][0]++, this.play()) : (cov_2dzrqndzkl().b[38][1]++, this.pause());
    }
    /**
     * Get the current playback state
     *
     * @example const isPlaying = wavesurfer.isPlaying();
     * @return {boolean} False if paused, true if playing
     */

  }, {
    key: "isPlaying",
    value: function isPlaying() {
      cov_2dzrqndzkl().f[40]++;
      cov_2dzrqndzkl().s[158]++;
      return !this.backend.isPaused();
    }
    /**
     * Skip backward
     *
     * @param {?number} seconds Amount to skip back, if not specified `skipLength`
     * is used
     * @example wavesurfer.skipBackward();
     */

  }, {
    key: "skipBackward",
    value: function skipBackward(seconds) {
      cov_2dzrqndzkl().f[41]++;
      cov_2dzrqndzkl().s[159]++;
      this.skip((cov_2dzrqndzkl().b[39][0]++, -seconds) || (cov_2dzrqndzkl().b[39][1]++, -this.params.skipLength));
    }
    /**
     * Skip forward
     *
     * @param {?number} seconds Amount to skip back, if not specified `skipLength`
     * is used
     * @example wavesurfer.skipForward();
     */

  }, {
    key: "skipForward",
    value: function skipForward(seconds) {
      cov_2dzrqndzkl().f[42]++;
      cov_2dzrqndzkl().s[160]++;
      this.skip((cov_2dzrqndzkl().b[40][0]++, seconds) || (cov_2dzrqndzkl().b[40][1]++, this.params.skipLength));
    }
    /**
     * Skip a number of seconds from the current position (use a negative value
     * to go backwards).
     *
     * @param {number} offset Amount to skip back or forwards
     * @example
     * // go back 2 seconds
     * wavesurfer.skip(-2);
     */

  }, {
    key: "skip",
    value: function skip(offset) {
      cov_2dzrqndzkl().f[43]++;
      var duration = (cov_2dzrqndzkl().s[161]++, (cov_2dzrqndzkl().b[41][0]++, this.getDuration()) || (cov_2dzrqndzkl().b[41][1]++, 1));
      var position = (cov_2dzrqndzkl().s[162]++, (cov_2dzrqndzkl().b[42][0]++, this.getCurrentTime()) || (cov_2dzrqndzkl().b[42][1]++, 0));
      cov_2dzrqndzkl().s[163]++;
      position = Math.max(0, Math.min(duration, position + ((cov_2dzrqndzkl().b[43][0]++, offset) || (cov_2dzrqndzkl().b[43][1]++, 0))));
      cov_2dzrqndzkl().s[164]++;
      this.seekAndCenter(position / duration);
    }
    /**
     * Seeks to a position and centers the view
     *
     * @param {number} progress Between 0 (=beginning) and 1 (=end)
     * @example
     * // seek and go to the middle of the audio
     * wavesurfer.seekTo(0.5);
     */

  }, {
    key: "seekAndCenter",
    value: function seekAndCenter(progress) {
      cov_2dzrqndzkl().f[44]++;
      cov_2dzrqndzkl().s[165]++;
      this.seekTo(progress);
      cov_2dzrqndzkl().s[166]++;
      this.drawer.recenter(progress);
    }
    /**
     * Seeks to a position
     *
     * @param {number} progress Between 0 (=beginning) and 1 (=end)
     * @emits WaveSurfer#interaction
     * @emits WaveSurfer#seek
     * @example
     * // seek to the middle of the audio
     * wavesurfer.seekTo(0.5);
     */

  }, {
    key: "seekTo",
    value: function seekTo(progress) {
      var _this8 = this;

      cov_2dzrqndzkl().f[45]++;
      cov_2dzrqndzkl().s[167]++;

      // return an error if progress is not a number between 0 and 1
      if ((cov_2dzrqndzkl().b[45][0]++, typeof progress !== 'number') || (cov_2dzrqndzkl().b[45][1]++, !isFinite(progress)) || (cov_2dzrqndzkl().b[45][2]++, progress < 0) || (cov_2dzrqndzkl().b[45][3]++, progress > 1)) {
        cov_2dzrqndzkl().b[44][0]++;
        cov_2dzrqndzkl().s[168]++;
        throw new Error('Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!');
      } else {
        cov_2dzrqndzkl().b[44][1]++;
      }

      cov_2dzrqndzkl().s[169]++;
      this.fireEvent('interaction', function () {
        cov_2dzrqndzkl().f[46]++;
        cov_2dzrqndzkl().s[170]++;
        return _this8.seekTo(progress);
      });
      var isWebAudioBackend = (cov_2dzrqndzkl().s[171]++, this.params.backend === 'WebAudio');
      var paused = (cov_2dzrqndzkl().s[172]++, this.backend.isPaused());
      cov_2dzrqndzkl().s[173]++;

      if ((cov_2dzrqndzkl().b[47][0]++, isWebAudioBackend) && (cov_2dzrqndzkl().b[47][1]++, !paused)) {
        cov_2dzrqndzkl().b[46][0]++;
        cov_2dzrqndzkl().s[174]++;
        this.backend.pause();
      } else {
        cov_2dzrqndzkl().b[46][1]++;
      } // avoid small scrolls while paused seeking


      var oldScrollParent = (cov_2dzrqndzkl().s[175]++, this.params.scrollParent);
      cov_2dzrqndzkl().s[176]++;
      this.params.scrollParent = false;
      cov_2dzrqndzkl().s[177]++;
      this.backend.seekTo(progress * this.getDuration());
      cov_2dzrqndzkl().s[178]++;
      this.drawer.progress(progress);
      cov_2dzrqndzkl().s[179]++;

      if ((cov_2dzrqndzkl().b[49][0]++, isWebAudioBackend) && (cov_2dzrqndzkl().b[49][1]++, !paused)) {
        cov_2dzrqndzkl().b[48][0]++;
        cov_2dzrqndzkl().s[180]++;
        this.backend.play();
      } else {
        cov_2dzrqndzkl().b[48][1]++;
      }

      cov_2dzrqndzkl().s[181]++;
      this.params.scrollParent = oldScrollParent;
      cov_2dzrqndzkl().s[182]++;
      this.fireEvent('seek', progress);
    }
    /**
     * Stops and goes to the beginning.
     *
     * @example wavesurfer.stop();
     */

  }, {
    key: "stop",
    value: function stop() {
      cov_2dzrqndzkl().f[47]++;
      cov_2dzrqndzkl().s[183]++;
      this.pause();
      cov_2dzrqndzkl().s[184]++;
      this.seekTo(0);
      cov_2dzrqndzkl().s[185]++;
      this.drawer.progress(0);
    }
    /**
     * Sets the ID of the audio device to use for output and returns a Promise.
     *
     * @param {string} deviceId String value representing underlying output
     * device
     * @returns {Promise} `Promise` that resolves to `undefined` when there are
     * no errors detected.
     */

  }, {
    key: "setSinkId",
    value: function setSinkId(deviceId) {
      cov_2dzrqndzkl().f[48]++;
      cov_2dzrqndzkl().s[186]++;
      return this.backend.setSinkId(deviceId);
    }
    /**
     * Set the playback volume.
     *
     * @param {number} newVolume A value between 0 and 1, 0 being no
     * volume and 1 being full volume.
     * @emits WaveSurfer#volume
     */

  }, {
    key: "setVolume",
    value: function setVolume(newVolume) {
      cov_2dzrqndzkl().f[49]++;
      cov_2dzrqndzkl().s[187]++;
      this.backend.setVolume(newVolume);
      cov_2dzrqndzkl().s[188]++;
      this.fireEvent('volume', newVolume);
    }
    /**
     * Get the playback volume.
     *
     * @return {number} A value between 0 and 1, 0 being no
     * volume and 1 being full volume.
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      cov_2dzrqndzkl().f[50]++;
      cov_2dzrqndzkl().s[189]++;
      return this.backend.getVolume();
    }
    /**
     * Set the playback rate.
     *
     * @param {number} rate A positive number. E.g. 0.5 means half the normal
     * speed, 2 means double speed and so on.
     * @example wavesurfer.setPlaybackRate(2);
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      cov_2dzrqndzkl().f[51]++;
      cov_2dzrqndzkl().s[190]++;
      this.backend.setPlaybackRate(rate);
    }
    /**
     * Get the playback rate.
     *
     * @return {number} The current playback rate.
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      cov_2dzrqndzkl().f[52]++;
      cov_2dzrqndzkl().s[191]++;
      return this.backend.getPlaybackRate();
    }
    /**
     * Toggle the volume on and off. If not currently muted it will save the
     * current volume value and turn the volume off. If currently muted then it
     * will restore the volume to the saved value, and then rest the saved
     * value.
     *
     * @example wavesurfer.toggleMute();
     */

  }, {
    key: "toggleMute",
    value: function toggleMute() {
      cov_2dzrqndzkl().f[53]++;
      cov_2dzrqndzkl().s[192]++;
      this.setMute(!this.isMuted);
    }
    /**
     * Enable or disable muted audio
     *
     * @param {boolean} mute Specify `true` to mute audio.
     * @emits WaveSurfer#volume
     * @emits WaveSurfer#mute
     * @example
     * // unmute
     * wavesurfer.setMute(false);
     * console.log(wavesurfer.getMute()) // logs false
     */

  }, {
    key: "setMute",
    value: function setMute(mute) {
      cov_2dzrqndzkl().f[54]++;
      cov_2dzrqndzkl().s[193]++;

      // ignore all muting requests if the audio is already in that state
      if (mute === this.isMuted) {
        cov_2dzrqndzkl().b[50][0]++;
        cov_2dzrqndzkl().s[194]++;
        this.fireEvent('mute', this.isMuted);
        cov_2dzrqndzkl().s[195]++;
        return;
      } else {
        cov_2dzrqndzkl().b[50][1]++;
      }

      cov_2dzrqndzkl().s[196]++;

      if (this.backend.setMute) {
        cov_2dzrqndzkl().b[51][0]++;
        cov_2dzrqndzkl().s[197]++;
        // Backends such as the MediaElement backend have their own handling
        // of mute, let them handle it.
        this.backend.setMute(mute);
        cov_2dzrqndzkl().s[198]++;
        this.isMuted = mute;
      } else {
        cov_2dzrqndzkl().b[51][1]++;
        cov_2dzrqndzkl().s[199]++;

        if (mute) {
          cov_2dzrqndzkl().b[52][0]++;
          cov_2dzrqndzkl().s[200]++;
          // If currently not muted then save current volume,
          // turn off the volume and update the mute properties
          this.savedVolume = this.backend.getVolume();
          cov_2dzrqndzkl().s[201]++;
          this.backend.setVolume(0);
          cov_2dzrqndzkl().s[202]++;
          this.isMuted = true;
          cov_2dzrqndzkl().s[203]++;
          this.fireEvent('volume', 0);
        } else {
          cov_2dzrqndzkl().b[52][1]++;
          cov_2dzrqndzkl().s[204]++;
          // If currently muted then restore to the saved volume
          // and update the mute properties
          this.backend.setVolume(this.savedVolume);
          cov_2dzrqndzkl().s[205]++;
          this.isMuted = false;
          cov_2dzrqndzkl().s[206]++;
          this.fireEvent('volume', this.savedVolume);
        }
      }

      cov_2dzrqndzkl().s[207]++;
      this.fireEvent('mute', this.isMuted);
    }
    /**
     * Get the current mute status.
     *
     * @example const isMuted = wavesurfer.getMute();
     * @return {boolean} Current mute status
     */

  }, {
    key: "getMute",
    value: function getMute() {
      cov_2dzrqndzkl().f[55]++;
      cov_2dzrqndzkl().s[208]++;
      return this.isMuted;
    }
    /**
     * Get the list of current set filters as an array.
     *
     * Filters must be set with setFilters method first
     *
     * @return {array} List of enabled filters
     */

  }, {
    key: "getFilters",
    value: function getFilters() {
      cov_2dzrqndzkl().f[56]++;
      cov_2dzrqndzkl().s[209]++;
      return (cov_2dzrqndzkl().b[53][0]++, this.backend.filters) || (cov_2dzrqndzkl().b[53][1]++, []);
    }
    /**
     * Toggles `scrollParent` and redraws
     *
     * @example wavesurfer.toggleScroll();
     */

  }, {
    key: "toggleScroll",
    value: function toggleScroll() {
      cov_2dzrqndzkl().f[57]++;
      cov_2dzrqndzkl().s[210]++;
      this.params.scrollParent = !this.params.scrollParent;
      cov_2dzrqndzkl().s[211]++;
      this.drawBuffer();
    }
    /**
     * Toggle mouse interaction
     *
     * @example wavesurfer.toggleInteraction();
     */

  }, {
    key: "toggleInteraction",
    value: function toggleInteraction() {
      cov_2dzrqndzkl().f[58]++;
      cov_2dzrqndzkl().s[212]++;
      this.params.interact = !this.params.interact;
    }
    /**
     * Get the fill color of the waveform after the cursor.
     *
     * @param {?number} channelIdx Optional index of the channel to get its wave color if splitChannels is true
     * @return {string|object} A CSS color string, or an array of CSS color strings.
     */

  }, {
    key: "getWaveColor",
    value: function getWaveColor() {
      var channelIdx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2dzrqndzkl().b[54][0]++, null);
      cov_2dzrqndzkl().f[59]++;
      cov_2dzrqndzkl().s[213]++;

      if (this.params.splitChannelsOptions.channelColors[channelIdx]) {
        cov_2dzrqndzkl().b[55][0]++;
        cov_2dzrqndzkl().s[214]++;
        return this.params.splitChannelsOptions.channelColors[channelIdx].waveColor;
      } else {
        cov_2dzrqndzkl().b[55][1]++;
      }

      cov_2dzrqndzkl().s[215]++;
      return this.params.waveColor;
    }
    /**
     * Set the fill color of the waveform after the cursor.
     *
     * @param {string|object} color A CSS color string, or an array of CSS color strings.
     * @param {?number} channelIdx Optional index of the channel to set its wave color if splitChannels is true
     * @example wavesurfer.setWaveColor('#ddd');
     */

  }, {
    key: "setWaveColor",
    value: function setWaveColor(color) {
      var channelIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2dzrqndzkl().b[56][0]++, null);
      cov_2dzrqndzkl().f[60]++;
      cov_2dzrqndzkl().s[216]++;

      if (this.params.splitChannelsOptions.channelColors[channelIdx]) {
        cov_2dzrqndzkl().b[57][0]++;
        cov_2dzrqndzkl().s[217]++;
        this.params.splitChannelsOptions.channelColors[channelIdx].waveColor = color;
      } else {
        cov_2dzrqndzkl().b[57][1]++;
        cov_2dzrqndzkl().s[218]++;
        this.params.waveColor = color;
      }

      cov_2dzrqndzkl().s[219]++;
      this.drawBuffer();
    }
    /**
     * Get the fill color of the waveform behind the cursor.
     *
     * @param {?number} channelIdx Optional index of the channel to get its progress color if splitChannels is true
     * @return {string|object} A CSS color string, or an array of CSS color strings.
     */

  }, {
    key: "getProgressColor",
    value: function getProgressColor() {
      var channelIdx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2dzrqndzkl().b[58][0]++, null);
      cov_2dzrqndzkl().f[61]++;
      cov_2dzrqndzkl().s[220]++;

      if (this.params.splitChannelsOptions.channelColors[channelIdx]) {
        cov_2dzrqndzkl().b[59][0]++;
        cov_2dzrqndzkl().s[221]++;
        return this.params.splitChannelsOptions.channelColors[channelIdx].progressColor;
      } else {
        cov_2dzrqndzkl().b[59][1]++;
      }

      cov_2dzrqndzkl().s[222]++;
      return this.params.progressColor;
    }
    /**
     * Set the fill color of the waveform behind the cursor.
     *
     * @param {string|object} color A CSS color string, or an array of CSS color strings.
     * @param {?number} channelIdx Optional index of the channel to set its progress color if splitChannels is true
     * @example wavesurfer.setProgressColor('#400');
     */

  }, {
    key: "setProgressColor",
    value: function setProgressColor(color, channelIdx) {
      cov_2dzrqndzkl().f[62]++;
      cov_2dzrqndzkl().s[223]++;

      if (this.params.splitChannelsOptions.channelColors[channelIdx]) {
        cov_2dzrqndzkl().b[60][0]++;
        cov_2dzrqndzkl().s[224]++;
        this.params.splitChannelsOptions.channelColors[channelIdx].progressColor = color;
      } else {
        cov_2dzrqndzkl().b[60][1]++;
        cov_2dzrqndzkl().s[225]++;
        this.params.progressColor = color;
      }

      cov_2dzrqndzkl().s[226]++;
      this.drawBuffer();
    }
    /**
     * Get the background color of the waveform container.
     *
     * @return {string} A CSS color string.
     */

  }, {
    key: "getBackgroundColor",
    value: function getBackgroundColor() {
      cov_2dzrqndzkl().f[63]++;
      cov_2dzrqndzkl().s[227]++;
      return this.params.backgroundColor;
    }
    /**
     * Set the background color of the waveform container.
     *
     * @param {string} color A CSS color string.
     * @example wavesurfer.setBackgroundColor('#FF00FF');
     */

  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor(color) {
      cov_2dzrqndzkl().f[64]++;
      cov_2dzrqndzkl().s[228]++;
      this.params.backgroundColor = color;
      cov_2dzrqndzkl().s[229]++;
      util.style(this.container, {
        background: this.params.backgroundColor
      });
    }
    /**
     * Get the fill color of the cursor indicating the playhead
     * position.
     *
     * @return {string} A CSS color string.
     */

  }, {
    key: "getCursorColor",
    value: function getCursorColor() {
      cov_2dzrqndzkl().f[65]++;
      cov_2dzrqndzkl().s[230]++;
      return this.params.cursorColor;
    }
    /**
     * Set the fill color of the cursor indicating the playhead
     * position.
     *
     * @param {string} color A CSS color string.
     * @example wavesurfer.setCursorColor('#222');
     */

  }, {
    key: "setCursorColor",
    value: function setCursorColor(color) {
      cov_2dzrqndzkl().f[66]++;
      cov_2dzrqndzkl().s[231]++;
      this.params.cursorColor = color;
      cov_2dzrqndzkl().s[232]++;
      this.drawer.updateCursor();
    }
    /**
     * Get the height of the waveform.
     *
     * @return {number} Height measured in pixels.
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      cov_2dzrqndzkl().f[67]++;
      cov_2dzrqndzkl().s[233]++;
      return this.params.height;
    }
    /**
     * Set the height of the waveform.
     *
     * @param {number} height Height measured in pixels.
     * @example wavesurfer.setHeight(200);
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      cov_2dzrqndzkl().f[68]++;
      cov_2dzrqndzkl().s[234]++;
      this.params.height = height;
      cov_2dzrqndzkl().s[235]++;
      this.drawer.setHeight(height * this.params.pixelRatio);
      cov_2dzrqndzkl().s[236]++;
      this.drawBuffer();
    }
    /**
     * Hide channels from being drawn on the waveform if splitting channels.
     *
     * For example, if we want to draw only the peaks for the right stereo channel:
     *
     * const wavesurfer = new WaveSurfer.create({...splitChannels: true});
     * wavesurfer.load('stereo_audio.mp3');
     *
     * wavesurfer.setFilteredChannel([0]); <-- hide left channel peaks.
     *
     * @param {array} channelIndices Channels to be filtered out from drawing.
     * @version 4.0.0
     */

  }, {
    key: "setFilteredChannels",
    value: function setFilteredChannels(channelIndices) {
      cov_2dzrqndzkl().f[69]++;
      cov_2dzrqndzkl().s[237]++;
      this.params.splitChannelsOptions.filterChannels = channelIndices;
      cov_2dzrqndzkl().s[238]++;
      this.drawBuffer();
    }
    /**
     * Get the correct peaks for current wave view-port and render wave
     *
     * @private
     * @emits WaveSurfer#redraw
     */

  }, {
    key: "drawBuffer",
    value: function drawBuffer() {
      cov_2dzrqndzkl().f[70]++;
      var nominalWidth = (cov_2dzrqndzkl().s[239]++, Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio));
      var parentWidth = (cov_2dzrqndzkl().s[240]++, this.drawer.getWidth());
      var width = (cov_2dzrqndzkl().s[241]++, nominalWidth); // always start at 0 after zooming for scrolling : issue redraw left part

      var start = (cov_2dzrqndzkl().s[242]++, 0);
      var end = (cov_2dzrqndzkl().s[243]++, Math.max(start + parentWidth, width)); // Fill container

      cov_2dzrqndzkl().s[244]++;

      if ((cov_2dzrqndzkl().b[62][0]++, this.params.fillParent) && ((cov_2dzrqndzkl().b[62][1]++, !this.params.scrollParent) || (cov_2dzrqndzkl().b[62][2]++, nominalWidth < parentWidth))) {
        cov_2dzrqndzkl().b[61][0]++;
        cov_2dzrqndzkl().s[245]++;
        width = parentWidth;
        cov_2dzrqndzkl().s[246]++;
        start = 0;
        cov_2dzrqndzkl().s[247]++;
        end = width;
      } else {
        cov_2dzrqndzkl().b[61][1]++;
      }

      var peaks;
      cov_2dzrqndzkl().s[248]++;

      if (this.params.partialRender) {
        cov_2dzrqndzkl().b[63][0]++;
        var newRanges = (cov_2dzrqndzkl().s[249]++, this.peakCache.addRangeToPeakCache(width, start, end));
        var i;
        cov_2dzrqndzkl().s[250]++;

        for (i = 0; i < newRanges.length; i++) {
          cov_2dzrqndzkl().s[251]++;
          peaks = this.backend.getPeaks(width, newRanges[i][0], newRanges[i][1]);
          cov_2dzrqndzkl().s[252]++;
          this.drawer.drawPeaks(peaks, width, newRanges[i][0], newRanges[i][1]);
        }
      } else {
        cov_2dzrqndzkl().b[63][1]++;
        cov_2dzrqndzkl().s[253]++;
        peaks = this.backend.getPeaks(width, start, end);
        cov_2dzrqndzkl().s[254]++;
        this.drawer.drawPeaks(peaks, width, start, end);
      }

      cov_2dzrqndzkl().s[255]++;
      this.fireEvent('redraw', peaks, width);
    }
    /**
     * Horizontally zooms the waveform in and out. It also changes the parameter
     * `minPxPerSec` and enables the `scrollParent` option. Calling the function
     * with a falsey parameter will reset the zoom state.
     *
     * @param {?number} pxPerSec Number of horizontal pixels per second of
     * audio, if none is set the waveform returns to unzoomed state
     * @emits WaveSurfer#zoom
     * @example wavesurfer.zoom(20);
     */

  }, {
    key: "zoom",
    value: function zoom(pxPerSec) {
      cov_2dzrqndzkl().f[71]++;
      cov_2dzrqndzkl().s[256]++;

      if (!pxPerSec) {
        cov_2dzrqndzkl().b[64][0]++;
        cov_2dzrqndzkl().s[257]++;
        this.params.minPxPerSec = this.defaultParams.minPxPerSec;
        cov_2dzrqndzkl().s[258]++;
        this.params.scrollParent = false;
      } else {
        cov_2dzrqndzkl().b[64][1]++;
        cov_2dzrqndzkl().s[259]++;
        this.params.minPxPerSec = pxPerSec;
        cov_2dzrqndzkl().s[260]++;
        this.params.scrollParent = true;
      }

      cov_2dzrqndzkl().s[261]++;
      this.drawBuffer();
      cov_2dzrqndzkl().s[262]++;
      this.drawer.progress(this.backend.getPlayedPercents());
      cov_2dzrqndzkl().s[263]++;
      this.drawer.recenter(this.getCurrentTime() / this.getDuration());
      cov_2dzrqndzkl().s[264]++;
      this.fireEvent('zoom', pxPerSec);
    }
    /**
     * Decode buffer and load
     *
     * @private
     * @param {ArrayBuffer} arraybuffer Buffer to process
     */

  }, {
    key: "loadArrayBuffer",
    value: function loadArrayBuffer(arraybuffer) {
      var _this9 = this;

      cov_2dzrqndzkl().f[72]++;
      cov_2dzrqndzkl().s[265]++;
      this.decodeArrayBuffer(arraybuffer, function (data) {
        cov_2dzrqndzkl().f[73]++;
        cov_2dzrqndzkl().s[266]++;

        if (!_this9.isDestroyed) {
          cov_2dzrqndzkl().b[65][0]++;
          cov_2dzrqndzkl().s[267]++;

          _this9.loadDecodedBuffer(data);
        } else {
          cov_2dzrqndzkl().b[65][1]++;
        }
      });
    }
    /**
     * Directly load an externally decoded AudioBuffer
     *
     * @private
     * @param {AudioBuffer} buffer Buffer to process
     * @emits WaveSurfer#ready
     */

  }, {
    key: "loadDecodedBuffer",
    value: function loadDecodedBuffer(buffer) {
      cov_2dzrqndzkl().f[74]++;
      cov_2dzrqndzkl().s[268]++;
      this.backend.load(buffer);
      cov_2dzrqndzkl().s[269]++;
      this.drawBuffer();
      cov_2dzrqndzkl().s[270]++;
      this.isReady = true;
      cov_2dzrqndzkl().s[271]++;
      this.fireEvent('ready');
    }
    /**
     * Loads audio data from a Blob or File object
     *
     * @param {Blob|File} blob Audio data
     * @example
     */

  }, {
    key: "loadBlob",
    value: function loadBlob(blob) {
      var _this10 = this;

      cov_2dzrqndzkl().f[75]++;
      // Create file reader
      var reader = (cov_2dzrqndzkl().s[272]++, new FileReader());
      cov_2dzrqndzkl().s[273]++;
      reader.addEventListener('progress', function (e) {
        cov_2dzrqndzkl().f[76]++;
        cov_2dzrqndzkl().s[274]++;
        return _this10.onProgress(e);
      });
      cov_2dzrqndzkl().s[275]++;
      reader.addEventListener('load', function (e) {
        cov_2dzrqndzkl().f[77]++;
        cov_2dzrqndzkl().s[276]++;
        return _this10.loadArrayBuffer(e.target.result);
      });
      cov_2dzrqndzkl().s[277]++;
      reader.addEventListener('error', function () {
        cov_2dzrqndzkl().f[78]++;
        cov_2dzrqndzkl().s[278]++;
        return _this10.fireEvent('error', 'Error reading file');
      });
      cov_2dzrqndzkl().s[279]++;
      reader.readAsArrayBuffer(blob);
      cov_2dzrqndzkl().s[280]++;
      this.empty();
    }
    /**
     * Loads audio and re-renders the waveform.
     *
     * @param {string|HTMLMediaElement} url The url of the audio file or the
     * audio element with the audio
     * @param {number[]|Number.<Array[]>} peaks Wavesurfer does not have to decode
     * the audio to render the waveform if this is specified
     * @param {?string} preload (Use with backend `MediaElement` and `MediaElementWebAudio`)
     * `'none'|'metadata'|'auto'` Preload attribute for the media element
     * @param {?number} duration The duration of the audio. This is used to
     * render the peaks data in the correct size for the audio duration (as
     * befits the current `minPxPerSec` and zoom value) without having to decode
     * the audio.
     * @returns {void}
     * @throws Will throw an error if the `url` argument is empty.
     * @example
     * // uses fetch or media element to load file (depending on backend)
     * wavesurfer.load('http://example.com/demo.wav');
     *
     * // setting preload attribute with media element backend and supplying
     * // peaks
     * wavesurfer.load(
     *   'http://example.com/demo.wav',
     *   [0.0218, 0.0183, 0.0165, 0.0198, 0.2137, 0.2888],
     *   true
     * );
     */

  }, {
    key: "load",
    value: function load(url, peaks, preload, duration) {
      cov_2dzrqndzkl().f[79]++;
      cov_2dzrqndzkl().s[281]++;

      if (!url) {
        cov_2dzrqndzkl().b[66][0]++;
        cov_2dzrqndzkl().s[282]++;
        throw new Error('url parameter cannot be empty');
      } else {
        cov_2dzrqndzkl().b[66][1]++;
      }

      cov_2dzrqndzkl().s[283]++;
      this.empty();
      cov_2dzrqndzkl().s[284]++;

      if (preload) {
        cov_2dzrqndzkl().b[67][0]++;
        // check whether the preload attribute will be usable and if not log
        // a warning listing the reasons why not and nullify the variable
        var preloadIgnoreReasons = (cov_2dzrqndzkl().s[285]++, {
          "Preload is not 'auto', 'none' or 'metadata'": ['auto', 'metadata', 'none'].indexOf(preload) === -1,
          'Peaks are not provided': !peaks,
          "Backend is not of type 'MediaElement' or 'MediaElementWebAudio'": ['MediaElement', 'MediaElementWebAudio'].indexOf(this.params.backend) === -1,
          'Url is not of type string': typeof url !== 'string'
        });
        var activeReasons = (cov_2dzrqndzkl().s[286]++, Object.keys(preloadIgnoreReasons).filter(function (reason) {
          cov_2dzrqndzkl().f[80]++;
          cov_2dzrqndzkl().s[287]++;
          return preloadIgnoreReasons[reason];
        }));
        cov_2dzrqndzkl().s[288]++;

        if (activeReasons.length) {
          cov_2dzrqndzkl().b[68][0]++;
          cov_2dzrqndzkl().s[289]++;
          // eslint-disable-next-line no-console
          console.warn('Preload parameter of wavesurfer.load will be ignored because:\n\t- ' + activeReasons.join('\n\t- ')); // stop invalid values from being used

          cov_2dzrqndzkl().s[290]++;
          preload = null;
        } else {
          cov_2dzrqndzkl().b[68][1]++;
        }
      } else {
        cov_2dzrqndzkl().b[67][1]++;
      } // loadBuffer(url, peaks, duration) requires that url is a string
      // but users can pass in a HTMLMediaElement to WaveSurfer


      cov_2dzrqndzkl().s[291]++;

      if ((cov_2dzrqndzkl().b[70][0]++, this.params.backend === 'WebAudio') && (cov_2dzrqndzkl().b[70][1]++, url instanceof HTMLMediaElement)) {
        cov_2dzrqndzkl().b[69][0]++;
        cov_2dzrqndzkl().s[292]++;
        url = url.src;
      } else {
        cov_2dzrqndzkl().b[69][1]++;
      }

      cov_2dzrqndzkl().s[293]++;

      switch (this.params.backend) {
        case 'WebAudio':
          cov_2dzrqndzkl().b[71][0]++;
          cov_2dzrqndzkl().s[294]++;
          return this.loadBuffer(url, peaks, duration);

        case 'MediaElement':
          cov_2dzrqndzkl().b[71][1]++;

        case 'MediaElementWebAudio':
          cov_2dzrqndzkl().b[71][2]++;
          cov_2dzrqndzkl().s[295]++;
          return this.loadMediaElement(url, peaks, preload, duration);
      }
    }
    /**
     * Loads audio using Web Audio buffer backend.
     *
     * @private
     * @emits WaveSurfer#waveform-ready
     * @param {string} url URL of audio file
     * @param {number[]|Number.<Array[]>} peaks Peaks data
     * @param {?number} duration Optional duration of audio file
     * @returns {void}
     */

  }, {
    key: "loadBuffer",
    value: function loadBuffer(url, peaks, duration) {
      var _this11 = this;

      cov_2dzrqndzkl().f[81]++;
      cov_2dzrqndzkl().s[296]++;

      var load = function load(action) {
        cov_2dzrqndzkl().f[82]++;
        cov_2dzrqndzkl().s[297]++;

        if (action) {
          cov_2dzrqndzkl().b[72][0]++;
          cov_2dzrqndzkl().s[298]++;

          _this11.tmpEvents.push(_this11.once('ready', action));
        } else {
          cov_2dzrqndzkl().b[72][1]++;
        }

        cov_2dzrqndzkl().s[299]++;
        return _this11.getArrayBuffer(url, function (data) {
          cov_2dzrqndzkl().f[83]++;
          cov_2dzrqndzkl().s[300]++;
          return _this11.loadArrayBuffer(data);
        });
      };

      cov_2dzrqndzkl().s[301]++;

      if (peaks) {
        cov_2dzrqndzkl().b[73][0]++;
        cov_2dzrqndzkl().s[302]++;
        this.backend.setPeaks(peaks, duration);
        cov_2dzrqndzkl().s[303]++;
        this.drawBuffer();
        cov_2dzrqndzkl().s[304]++;
        this.fireEvent('waveform-ready');
        cov_2dzrqndzkl().s[305]++;
        this.tmpEvents.push(this.once('interaction', load));
      } else {
        cov_2dzrqndzkl().b[73][1]++;
        cov_2dzrqndzkl().s[306]++;
        return load();
      }
    }
    /**
     * Either create a media element, or load an existing media element.
     *
     * @private
     * @emits WaveSurfer#waveform-ready
     * @param {string|HTMLMediaElement} urlOrElt Either a path to a media file, or an
     * existing HTML5 Audio/Video Element
     * @param {number[]|Number.<Array[]>} peaks Array of peaks. Required to bypass web audio
     * dependency
     * @param {?boolean} preload Set to true if the preload attribute of the
     * audio element should be enabled
     * @param {?number} duration Optional duration of audio file
     */

  }, {
    key: "loadMediaElement",
    value: function loadMediaElement(urlOrElt, peaks, preload, duration) {
      var _this12 = this;

      cov_2dzrqndzkl().f[84]++;
      var url = (cov_2dzrqndzkl().s[307]++, urlOrElt);
      cov_2dzrqndzkl().s[308]++;

      if (typeof urlOrElt === 'string') {
        cov_2dzrqndzkl().b[74][0]++;
        cov_2dzrqndzkl().s[309]++;
        this.backend.load(url, this.mediaContainer, peaks, preload);
      } else {
        cov_2dzrqndzkl().b[74][1]++;
        var elt = (cov_2dzrqndzkl().s[310]++, urlOrElt);
        cov_2dzrqndzkl().s[311]++;
        this.backend.loadElt(elt, peaks); // If peaks are not provided,
        // url = element.src so we can get peaks with web audio

        cov_2dzrqndzkl().s[312]++;
        url = elt.src;
      }

      cov_2dzrqndzkl().s[313]++;
      this.tmpEvents.push(this.backend.once('canplay', function () {
        cov_2dzrqndzkl().f[85]++;
        cov_2dzrqndzkl().s[314]++;

        // ignore when backend was already destroyed
        if (!_this12.backend.destroyed) {
          cov_2dzrqndzkl().b[75][0]++;
          cov_2dzrqndzkl().s[315]++;

          _this12.drawBuffer();

          cov_2dzrqndzkl().s[316]++;
          _this12.isReady = true;
          cov_2dzrqndzkl().s[317]++;

          _this12.fireEvent('ready');
        } else {
          cov_2dzrqndzkl().b[75][1]++;
        }
      }), this.backend.once('error', function (err) {
        cov_2dzrqndzkl().f[86]++;
        cov_2dzrqndzkl().s[318]++;
        return _this12.fireEvent('error', err);
      })); // If peaks are provided, render them and fire the `waveform-ready` event.

      cov_2dzrqndzkl().s[319]++;

      if (peaks) {
        cov_2dzrqndzkl().b[76][0]++;
        cov_2dzrqndzkl().s[320]++;
        this.backend.setPeaks(peaks, duration);
        cov_2dzrqndzkl().s[321]++;
        this.drawBuffer();
        cov_2dzrqndzkl().s[322]++;
        this.fireEvent('waveform-ready');
      } else {
        cov_2dzrqndzkl().b[76][1]++;
      } // If no pre-decoded peaks are provided, or are provided with
      // forceDecode flag, attempt to download the audio file and decode it
      // with Web Audio.


      cov_2dzrqndzkl().s[323]++;

      if (((cov_2dzrqndzkl().b[78][0]++, !peaks) || (cov_2dzrqndzkl().b[78][1]++, this.params.forceDecode)) && (cov_2dzrqndzkl().b[78][2]++, this.backend.supportsWebAudio())) {
        cov_2dzrqndzkl().b[77][0]++;
        cov_2dzrqndzkl().s[324]++;
        this.getArrayBuffer(url, function (arraybuffer) {
          cov_2dzrqndzkl().f[87]++;
          cov_2dzrqndzkl().s[325]++;

          _this12.decodeArrayBuffer(arraybuffer, function (buffer) {
            cov_2dzrqndzkl().f[88]++;
            cov_2dzrqndzkl().s[326]++;
            _this12.backend.buffer = buffer;
            cov_2dzrqndzkl().s[327]++;

            _this12.backend.setPeaks(null);

            cov_2dzrqndzkl().s[328]++;

            _this12.drawBuffer();

            cov_2dzrqndzkl().s[329]++;

            _this12.fireEvent('waveform-ready');
          });
        });
      } else {
        cov_2dzrqndzkl().b[77][1]++;
      }
    }
    /**
     * Decode an array buffer and pass data to a callback
     *
     * @private
     * @param {Object} arraybuffer The array buffer to decode
     * @param {function} callback The function to call on complete
     */

  }, {
    key: "decodeArrayBuffer",
    value: function decodeArrayBuffer(arraybuffer, callback) {
      var _this13 = this;

      cov_2dzrqndzkl().f[89]++;
      cov_2dzrqndzkl().s[330]++;

      if (!this.isDestroyed) {
        cov_2dzrqndzkl().b[79][0]++;
        cov_2dzrqndzkl().s[331]++;
        this.arraybuffer = arraybuffer;
        cov_2dzrqndzkl().s[332]++;
        this.backend.decodeArrayBuffer(arraybuffer, function (data) {
          cov_2dzrqndzkl().f[90]++;
          cov_2dzrqndzkl().s[333]++;

          // Only use the decoded data if we haven't been destroyed or
          // another decode started in the meantime
          if ((cov_2dzrqndzkl().b[81][0]++, !_this13.isDestroyed) && (cov_2dzrqndzkl().b[81][1]++, _this13.arraybuffer == arraybuffer)) {
            cov_2dzrqndzkl().b[80][0]++;
            cov_2dzrqndzkl().s[334]++;
            callback(data);
            cov_2dzrqndzkl().s[335]++;
            _this13.arraybuffer = null;
          } else {
            cov_2dzrqndzkl().b[80][1]++;
          }
        }, function () {
          cov_2dzrqndzkl().f[91]++;
          cov_2dzrqndzkl().s[336]++;
          return _this13.fireEvent('error', 'Error decoding audiobuffer');
        });
      } else {
        cov_2dzrqndzkl().b[79][1]++;
      }
    }
    /**
     * Load an array buffer using fetch and pass the result to a callback
     *
     * @param {string} url The URL of the file object
     * @param {function} callback The function to call on complete
     * @returns {util.fetchFile} fetch call
     * @private
     */

  }, {
    key: "getArrayBuffer",
    value: function getArrayBuffer(url, callback) {
      var _this14 = this;

      cov_2dzrqndzkl().f[92]++;
      var options = (cov_2dzrqndzkl().s[337]++, Object.assign({
        url: url,
        responseType: 'arraybuffer'
      }, this.params.xhr));
      var request = (cov_2dzrqndzkl().s[338]++, util.fetchFile(options));
      cov_2dzrqndzkl().s[339]++;
      this.currentRequest = request;
      cov_2dzrqndzkl().s[340]++;
      this.tmpEvents.push(request.on('progress', function (e) {
        cov_2dzrqndzkl().f[93]++;
        cov_2dzrqndzkl().s[341]++;

        _this14.onProgress(e);
      }), request.on('success', function (data) {
        cov_2dzrqndzkl().f[94]++;
        cov_2dzrqndzkl().s[342]++;
        callback(data);
        cov_2dzrqndzkl().s[343]++;
        _this14.currentRequest = null;
      }), request.on('error', function (e) {
        cov_2dzrqndzkl().f[95]++;
        cov_2dzrqndzkl().s[344]++;

        _this14.fireEvent('error', e);

        cov_2dzrqndzkl().s[345]++;
        _this14.currentRequest = null;
      }));
      cov_2dzrqndzkl().s[346]++;
      return request;
    }
    /**
     * Called while the audio file is loading
     *
     * @private
     * @param {Event} e Progress event
     * @emits WaveSurfer#loading
     */

  }, {
    key: "onProgress",
    value: function onProgress(e) {
      cov_2dzrqndzkl().f[96]++;
      var percentComplete;
      cov_2dzrqndzkl().s[347]++;

      if (e.lengthComputable) {
        cov_2dzrqndzkl().b[82][0]++;
        cov_2dzrqndzkl().s[348]++;
        percentComplete = e.loaded / e.total;
      } else {
        cov_2dzrqndzkl().b[82][1]++;
        cov_2dzrqndzkl().s[349]++;
        // Approximate progress with an asymptotic
        // function, and assume downloads in the 1-3 MB range.
        percentComplete = e.loaded / (e.loaded + 1000000);
      }

      cov_2dzrqndzkl().s[350]++;
      this.fireEvent('loading', Math.round(percentComplete * 100), e.target);
    }
    /**
     * Exports PCM data into a JSON array and optionally opens in a new window
     * as valid JSON Blob instance.
     *
     * @param {number} length=1024 The scale in which to export the peaks
     * @param {number} accuracy=10000
     * @param {?boolean} noWindow Set to true to disable opening a new
     * window with the JSON
     * @param {number} start Start index
     * @param {number} end End index
     * @return {Promise} Promise that resolves with array of peaks
     */

  }, {
    key: "exportPCM",
    value: function exportPCM(length, accuracy, noWindow, start, end) {
      cov_2dzrqndzkl().f[97]++;
      cov_2dzrqndzkl().s[351]++;
      length = (cov_2dzrqndzkl().b[83][0]++, length) || (cov_2dzrqndzkl().b[83][1]++, 1024);
      cov_2dzrqndzkl().s[352]++;
      start = (cov_2dzrqndzkl().b[84][0]++, start) || (cov_2dzrqndzkl().b[84][1]++, 0);
      cov_2dzrqndzkl().s[353]++;
      accuracy = (cov_2dzrqndzkl().b[85][0]++, accuracy) || (cov_2dzrqndzkl().b[85][1]++, 10000);
      cov_2dzrqndzkl().s[354]++;
      noWindow = (cov_2dzrqndzkl().b[86][0]++, noWindow) || (cov_2dzrqndzkl().b[86][1]++, false);
      var peaks = (cov_2dzrqndzkl().s[355]++, this.backend.getPeaks(length, start, end));
      var arr = (cov_2dzrqndzkl().s[356]++, [].map.call(peaks, function (val) {
        cov_2dzrqndzkl().f[98]++;
        cov_2dzrqndzkl().s[357]++;
        return Math.round(val * accuracy) / accuracy;
      }));
      cov_2dzrqndzkl().s[358]++;
      return new Promise(function (resolve, reject) {
        cov_2dzrqndzkl().f[99]++;
        cov_2dzrqndzkl().s[359]++;

        if (!noWindow) {
          cov_2dzrqndzkl().b[87][0]++;
          var blobJSON = (cov_2dzrqndzkl().s[360]++, new Blob([JSON.stringify(arr)], {
            type: 'application/json;charset=utf-8'
          }));
          var objURL = (cov_2dzrqndzkl().s[361]++, URL.createObjectURL(blobJSON));
          cov_2dzrqndzkl().s[362]++;
          window.open(objURL);
          cov_2dzrqndzkl().s[363]++;
          URL.revokeObjectURL(objURL);
        } else {
          cov_2dzrqndzkl().b[87][1]++;
        }

        cov_2dzrqndzkl().s[364]++;
        resolve(arr);
      });
    }
    /**
     * Save waveform image as data URI.
     *
     * The default format is `'image/png'`. Other supported types are
     * `'image/jpeg'` and `'image/webp'`.
     *
     * @param {string} format='image/png' A string indicating the image format.
     * The default format type is `'image/png'`.
     * @param {number} quality=1 A number between 0 and 1 indicating the image
     * quality to use for image formats that use lossy compression such as
     * `'image/jpeg'`` and `'image/webp'`.
     * @param {string} type Image data type to return. Either 'dataURL' (default)
     * or 'blob'.
     * @return {string|string[]|Promise} When using `'dataURL'` type this returns
     * a single data URL or an array of data URLs, one for each canvas. When using
     * `'blob'` type this returns a `Promise` resolving with an array of `Blob`
     * instances, one for each canvas.
     */

  }, {
    key: "exportImage",
    value: function exportImage(format, quality, type) {
      cov_2dzrqndzkl().f[100]++;
      cov_2dzrqndzkl().s[365]++;

      if (!format) {
        cov_2dzrqndzkl().b[88][0]++;
        cov_2dzrqndzkl().s[366]++;
        format = 'image/png';
      } else {
        cov_2dzrqndzkl().b[88][1]++;
      }

      cov_2dzrqndzkl().s[367]++;

      if (!quality) {
        cov_2dzrqndzkl().b[89][0]++;
        cov_2dzrqndzkl().s[368]++;
        quality = 1;
      } else {
        cov_2dzrqndzkl().b[89][1]++;
      }

      cov_2dzrqndzkl().s[369]++;

      if (!type) {
        cov_2dzrqndzkl().b[90][0]++;
        cov_2dzrqndzkl().s[370]++;
        type = 'dataURL';
      } else {
        cov_2dzrqndzkl().b[90][1]++;
      }

      cov_2dzrqndzkl().s[371]++;
      return this.drawer.getImage(format, quality, type);
    }
    /**
     * Cancel any fetch request currently in progress
     */

  }, {
    key: "cancelAjax",
    value: function cancelAjax() {
      cov_2dzrqndzkl().f[101]++;
      cov_2dzrqndzkl().s[372]++;

      if ((cov_2dzrqndzkl().b[92][0]++, this.currentRequest) && (cov_2dzrqndzkl().b[92][1]++, this.currentRequest.controller)) {
        cov_2dzrqndzkl().b[91][0]++;
        cov_2dzrqndzkl().s[373]++;

        // If the current request has a ProgressHandler, then its ReadableStream might need to be cancelled too
        // See: Wavesurfer issue #2042
        // See Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1583815
        if (this.currentRequest._reader) {
          cov_2dzrqndzkl().b[93][0]++;
          cov_2dzrqndzkl().s[374]++;

          // Ignoring exceptions thrown by call to cancel()
          this.currentRequest._reader.cancel().catch(function (err) {
            cov_2dzrqndzkl().f[102]++;
          });
        } else {
          cov_2dzrqndzkl().b[93][1]++;
        }

        cov_2dzrqndzkl().s[375]++;
        this.currentRequest.controller.abort();
        cov_2dzrqndzkl().s[376]++;
        this.currentRequest = null;
      } else {
        cov_2dzrqndzkl().b[91][1]++;
      }
    }
    /**
     * @private
     */

  }, {
    key: "clearTmpEvents",
    value: function clearTmpEvents() {
      cov_2dzrqndzkl().f[103]++;
      cov_2dzrqndzkl().s[377]++;
      this.tmpEvents.forEach(function (e) {
        cov_2dzrqndzkl().f[104]++;
        cov_2dzrqndzkl().s[378]++;
        return e.un();
      });
    }
    /**
     * Display empty waveform.
     */

  }, {
    key: "empty",
    value: function empty() {
      cov_2dzrqndzkl().f[105]++;
      cov_2dzrqndzkl().s[379]++;

      if (!this.backend.isPaused()) {
        cov_2dzrqndzkl().b[94][0]++;
        cov_2dzrqndzkl().s[380]++;
        this.stop();
        cov_2dzrqndzkl().s[381]++;
        this.backend.disconnectSource();
      } else {
        cov_2dzrqndzkl().b[94][1]++;
      }

      cov_2dzrqndzkl().s[382]++;
      this.isReady = false;
      cov_2dzrqndzkl().s[383]++;
      this.cancelAjax();
      cov_2dzrqndzkl().s[384]++;
      this.clearTmpEvents(); // empty drawer

      cov_2dzrqndzkl().s[385]++;
      this.drawer.progress(0);
      cov_2dzrqndzkl().s[386]++;
      this.drawer.setWidth(0);
      cov_2dzrqndzkl().s[387]++;
      this.drawer.drawPeaks({
        length: this.drawer.getWidth()
      }, 0);
    }
    /**
     * Remove events, elements and disconnect WebAudio nodes.
     *
     * @emits WaveSurfer#destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      cov_2dzrqndzkl().f[106]++;
      cov_2dzrqndzkl().s[388]++;
      this.destroyAllPlugins();
      cov_2dzrqndzkl().s[389]++;
      this.fireEvent('destroy');
      cov_2dzrqndzkl().s[390]++;
      this.cancelAjax();
      cov_2dzrqndzkl().s[391]++;
      this.clearTmpEvents();
      cov_2dzrqndzkl().s[392]++;
      this.unAll();
      cov_2dzrqndzkl().s[393]++;

      if (this.params.responsive !== false) {
        cov_2dzrqndzkl().b[95][0]++;
        cov_2dzrqndzkl().s[394]++;
        window.removeEventListener('resize', this._onResize, true);
        cov_2dzrqndzkl().s[395]++;
        window.removeEventListener('orientationchange', this._onResize, true);
      } else {
        cov_2dzrqndzkl().b[95][1]++;
      }

      cov_2dzrqndzkl().s[396]++;

      if (this.backend) {
        cov_2dzrqndzkl().b[96][0]++;
        cov_2dzrqndzkl().s[397]++;
        this.backend.destroy(); // clears memory usage

        cov_2dzrqndzkl().s[398]++;
        this.backend = null;
      } else {
        cov_2dzrqndzkl().b[96][1]++;
      }

      cov_2dzrqndzkl().s[399]++;

      if (this.drawer) {
        cov_2dzrqndzkl().b[97][0]++;
        cov_2dzrqndzkl().s[400]++;
        this.drawer.destroy();
      } else {
        cov_2dzrqndzkl().b[97][1]++;
      }

      cov_2dzrqndzkl().s[401]++;
      this.isDestroyed = true;
      cov_2dzrqndzkl().s[402]++;
      this.isReady = false;
      cov_2dzrqndzkl().s[403]++;
      this.arraybuffer = null;
    }
  }], [{
    key: "create",
    value:
    /** @private */

    /** @private */

    /**
     * Instantiate this class, call its `init` function and returns it
     *
     * @param {WavesurferParams} params The wavesurfer parameters
     * @return {Object} WaveSurfer instance
     * @example const wavesurfer = WaveSurfer.create(params);
     */
    function create(params) {
      cov_2dzrqndzkl().f[4]++;
      var wavesurfer = (cov_2dzrqndzkl().s[2]++, new WaveSurfer(params));
      cov_2dzrqndzkl().s[3]++;
      return wavesurfer.init();
    }
    /**
     * The library version number is available as a static property of the
     * WaveSurfer class
     *
     * @type {String}
     * @example
     * console.log('Using wavesurfer.js ' + WaveSurfer.VERSION);
     */

  }]);

  return WaveSurfer;
}((util.Observer));

exports["default"] = WaveSurfer;

_defineProperty(WaveSurfer, "VERSION", (cov_2dzrqndzkl().s[4]++, "6.0.1"));

_defineProperty(WaveSurfer, "util", (cov_2dzrqndzkl().s[6]++, util));

module.exports = exports.default;

/***/ }),

/***/ "./src/webaudio.js":
/*!*************************!*\
  !*** ./src/webaudio.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function cov_2iw0codqnv() {
  var path = "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/webaudio.js";
  var hash = "6d42c9b20b564bed70701a1e17c6b750e02dc241";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/francesco.bonzi/Documents/audio_player/wavesurfer.js/src/webaudio.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 4,
          column: 25
        }
      },
      "1": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 23
        }
      },
      "2": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 6,
          column: 27
        }
      },
      "3": {
        start: {
          line: 15,
          column: 30
        },
        end: {
          line: 15,
          column: 33
        }
      },
      "4": {
        start: {
          line: 17,
          column: 19
        },
        end: {
          line: 17,
          column: 23
        }
      },
      "5": {
        start: {
          line: 19,
          column: 26
        },
        end: {
          line: 19,
          column: 30
        }
      },
      "6": {
        start: {
          line: 21,
          column: 21
        },
        end: {
          line: 58,
          column: 5
        }
      },
      "7": {
        start: {
          line: 24,
          column: 16
        },
        end: {
          line: 24,
          column: 41
        }
      },
      "8": {
        start: {
          line: 27,
          column: 33
        },
        end: {
          line: 27,
          column: 51
        }
      },
      "9": {
        start: {
          line: 28,
          column: 16
        },
        end: {
          line: 28,
          column: 61
        }
      },
      "10": {
        start: {
          line: 31,
          column: 16
        },
        end: {
          line: 31,
          column: 65
        }
      },
      "11": {
        start: {
          line: 36,
          column: 16
        },
        end: {
          line: 36,
          column: 44
        }
      },
      "12": {
        start: {
          line: 39,
          column: 33
        },
        end: {
          line: 39,
          column: 51
        }
      },
      "13": {
        start: {
          line: 40,
          column: 16
        },
        end: {
          line: 40,
          column: 61
        }
      },
      "14": {
        start: {
          line: 43,
          column: 16
        },
        end: {
          line: 43,
          column: 42
        }
      },
      "15": {
        start: {
          line: 48,
          column: 16
        },
        end: {
          line: 48,
          column: 44
        }
      },
      "16": {
        start: {
          line: 49,
          column: 16
        },
        end: {
          line: 49,
          column: 41
        }
      },
      "17": {
        start: {
          line: 52,
          column: 16
        },
        end: {
          line: 52,
          column: 25
        }
      },
      "18": {
        start: {
          line: 55,
          column: 16
        },
        end: {
          line: 55,
          column: 42
        }
      },
      "19": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 68
        }
      },
      "20": {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 78,
          column: 9
        }
      },
      "21": {
        start: {
          line: 76,
          column: 12
        },
        end: {
          line: 77,
          column: 45
        }
      },
      "22": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 45
        }
      },
      "23": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 93,
          column: 9
        }
      },
      "24": {
        start: {
          line: 91,
          column: 12
        },
        end: {
          line: 92,
          column: 68
        }
      },
      "25": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 52
        }
      },
      "26": {
        start: {
          line: 103,
          column: 8
        },
        end: {
          line: 103,
          column: 16
        }
      },
      "27": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 105,
          column: 29
        }
      },
      "28": {
        start: {
          line: 107,
          column: 8
        },
        end: {
          line: 109,
          column: 68
        }
      },
      "29": {
        start: {
          line: 111,
          column: 8
        },
        end: {
          line: 111,
          column: 44
        }
      },
      "30": {
        start: {
          line: 113,
          column: 8
        },
        end: {
          line: 113,
          column: 31
        }
      },
      "31": {
        start: {
          line: 115,
          column: 8
        },
        end: {
          line: 115,
          column: 35
        }
      },
      "32": {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 121,
          column: 10
        }
      },
      "33": {
        start: {
          line: 123,
          column: 8
        },
        end: {
          line: 123,
          column: 27
        }
      },
      "34": {
        start: {
          line: 125,
          column: 8
        },
        end: {
          line: 125,
          column: 26
        }
      },
      "35": {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 127,
          column: 29
        }
      },
      "36": {
        start: {
          line: 129,
          column: 8
        },
        end: {
          line: 129,
          column: 32
        }
      },
      "37": {
        start: {
          line: 131,
          column: 8
        },
        end: {
          line: 131,
          column: 30
        }
      },
      "38": {
        start: {
          line: 133,
          column: 8
        },
        end: {
          line: 133,
          column: 26
        }
      },
      "39": {
        start: {
          line: 135,
          column: 8
        },
        end: {
          line: 135,
          column: 30
        }
      },
      "40": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 137,
          column: 29
        }
      },
      "41": {
        start: {
          line: 139,
          column: 8
        },
        end: {
          line: 139,
          column: 31
        }
      },
      "42": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 141,
          column: 27
        }
      },
      "43": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 143,
          column: 29
        }
      },
      "44": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 145,
          column: 26
        }
      },
      "45": {
        start: {
          line: 147,
          column: 8
        },
        end: {
          line: 147,
          column: 48
        }
      },
      "46": {
        start: {
          line: 151,
          column: 8
        },
        end: {
          line: 151,
          column: 31
        }
      },
      "47": {
        start: {
          line: 158,
          column: 8
        },
        end: {
          line: 158,
          column: 32
        }
      },
      "48": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 159,
          column: 32
        }
      },
      "49": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 160,
          column: 34
        }
      },
      "50": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 162,
          column: 30
        }
      },
      "51": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 163,
          column: 52
        }
      },
      "52": {
        start: {
          line: 164,
          column: 8
        },
        end: {
          line: 164,
          column: 26
        }
      },
      "53": {
        start: {
          line: 169,
          column: 8
        },
        end: {
          line: 176,
          column: 9
        }
      },
      "54": {
        start: {
          line: 170,
          column: 12
        },
        end: {
          line: 172,
          column: 15
        }
      },
      "55": {
        start: {
          line: 171,
          column: 16
        },
        end: {
          line: 171,
          column: 46
        }
      },
      "56": {
        start: {
          line: 173,
          column: 12
        },
        end: {
          line: 173,
          column: 32
        }
      },
      "57": {
        start: {
          line: 175,
          column: 12
        },
        end: {
          line: 175,
          column: 49
        }
      },
      "58": {
        start: {
          line: 185,
          column: 8
        },
        end: {
          line: 188,
          column: 9
        }
      },
      "59": {
        start: {
          line: 186,
          column: 12
        },
        end: {
          line: 186,
          column: 44
        }
      },
      "60": {
        start: {
          line: 187,
          column: 12
        },
        end: {
          line: 187,
          column: 39
        }
      },
      "61": {
        start: {
          line: 197,
          column: 8
        },
        end: {
          line: 197,
          column: 33
        }
      },
      "62": {
        start: {
          line: 210,
          column: 8
        },
        end: {
          line: 210,
          column: 33
        }
      },
      "63": {
        start: {
          line: 213,
          column: 8
        },
        end: {
          line: 226,
          column: 9
        }
      },
      "64": {
        start: {
          line: 214,
          column: 12
        },
        end: {
          line: 214,
          column: 35
        }
      },
      "65": {
        start: {
          line: 217,
          column: 12
        },
        end: {
          line: 217,
          column: 39
        }
      },
      "66": {
        start: {
          line: 220,
          column: 12
        },
        end: {
          line: 225,
          column: 40
        }
      },
      "67": {
        start: {
          line: 222,
          column: 20
        },
        end: {
          line: 222,
          column: 39
        }
      },
      "68": {
        start: {
          line: 223,
          column: 20
        },
        end: {
          line: 223,
          column: 32
        }
      },
      "69": {
        start: {
          line: 230,
          column: 8
        },
        end: {
          line: 242,
          column: 9
        }
      },
      "70": {
        start: {
          line: 231,
          column: 12
        },
        end: {
          line: 231,
          column: 63
        }
      },
      "71": {
        start: {
          line: 233,
          column: 12
        },
        end: {
          line: 241,
          column: 13
        }
      },
      "72": {
        start: {
          line: 234,
          column: 16
        },
        end: {
          line: 236,
          column: 18
        }
      },
      "73": {
        start: {
          line: 238,
          column: 16
        },
        end: {
          line: 240,
          column: 18
        }
      },
      "74": {
        start: {
          line: 243,
          column: 8
        },
        end: {
          line: 243,
          column: 53
        }
      },
      "75": {
        start: {
          line: 248,
          column: 8
        },
        end: {
          line: 259,
          column: 10
        }
      },
      "76": {
        start: {
          line: 249,
          column: 25
        },
        end: {
          line: 249,
          column: 46
        }
      },
      "77": {
        start: {
          line: 251,
          column: 12
        },
        end: {
          line: 258,
          column: 13
        }
      },
      "78": {
        start: {
          line: 252,
          column: 16
        },
        end: {
          line: 252,
          column: 40
        }
      },
      "79": {
        start: {
          line: 253,
          column: 16
        },
        end: {
          line: 253,
          column: 40
        }
      },
      "80": {
        start: {
          line: 254,
          column: 19
        },
        end: {
          line: 258,
          column: 13
        }
      },
      "81": {
        start: {
          line: 255,
          column: 16
        },
        end: {
          line: 255,
          column: 29
        }
      },
      "82": {
        start: {
          line: 256,
          column: 19
        },
        end: {
          line: 258,
          column: 13
        }
      },
      "83": {
        start: {
          line: 257,
          column: 16
        },
        end: {
          line: 257,
          column: 53
        }
      },
      "84": {
        start: {
          line: 264,
          column: 8
        },
        end: {
          line: 264,
          column: 46
        }
      },
      "85": {
        start: {
          line: 268,
          column: 8
        },
        end: {
          line: 268,
          column: 49
        }
      },
      "86": {
        start: {
          line: 269,
          column: 8
        },
        end: {
          line: 269,
          column: 45
        }
      },
      "87": {
        start: {
          line: 278,
          column: 8
        },
        end: {
          line: 282,
          column: 9
        }
      },
      "88": {
        start: {
          line: 279,
          column: 12
        },
        end: {
          line: 279,
          column: 49
        }
      },
      "89": {
        start: {
          line: 281,
          column: 12
        },
        end: {
          line: 281,
          column: 53
        }
      },
      "90": {
        start: {
          line: 284,
          column: 8
        },
        end: {
          line: 284,
          column: 51
        }
      },
      "91": {
        start: {
          line: 295,
          column: 8
        },
        end: {
          line: 316,
          column: 9
        }
      },
      "92": {
        start: {
          line: 301,
          column: 24
        },
        end: {
          line: 301,
          column: 42
        }
      },
      "93": {
        start: {
          line: 302,
          column: 12
        },
        end: {
          line: 306,
          column: 13
        }
      },
      "94": {
        start: {
          line: 303,
          column: 16
        },
        end: {
          line: 305,
          column: 18
        }
      },
      "95": {
        start: {
          line: 307,
          column: 12
        },
        end: {
          line: 307,
          column: 34
        }
      },
      "96": {
        start: {
          line: 308,
          column: 25
        },
        end: {
          line: 308,
          column: 63
        }
      },
      "97": {
        start: {
          line: 309,
          column: 12
        },
        end: {
          line: 309,
          column: 39
        }
      },
      "98": {
        start: {
          line: 310,
          column: 12
        },
        end: {
          line: 310,
          column: 40
        }
      },
      "99": {
        start: {
          line: 311,
          column: 12
        },
        end: {
          line: 311,
          column: 42
        }
      },
      "100": {
        start: {
          line: 313,
          column: 12
        },
        end: {
          line: 313,
          column: 45
        }
      },
      "101": {
        start: {
          line: 315,
          column: 12
        },
        end: {
          line: 315,
          column: 78
        }
      },
      "102": {
        start: {
          line: 325,
          column: 8
        },
        end: {
          line: 325,
          column: 70
        }
      },
      "103": {
        start: {
          line: 334,
          column: 8
        },
        end: {
          line: 334,
          column: 40
        }
      },
      "104": {
        start: {
          line: 346,
          column: 8
        },
        end: {
          line: 350,
          column: 9
        }
      },
      "105": {
        start: {
          line: 347,
          column: 12
        },
        end: {
          line: 349,
          column: 14
        }
      },
      "106": {
        start: {
          line: 351,
          column: 8
        },
        end: {
          line: 365,
          column: 9
        }
      },
      "107": {
        start: {
          line: 354,
          column: 12
        },
        end: {
          line: 358,
          column: 14
        }
      },
      "108": {
        start: {
          line: 356,
          column: 24
        },
        end: {
          line: 356,
          column: 38
        }
      },
      "109": {
        start: {
          line: 360,
          column: 12
        },
        end: {
          line: 364,
          column: 14
        }
      },
      "110": {
        start: {
          line: 361,
          column: 26
        },
        end: {
          line: 361,
          column: 40
        }
      },
      "111": {
        start: {
          line: 363,
          column: 25
        },
        end: {
          line: 363,
          column: 37
        }
      },
      "112": {
        start: {
          line: 375,
          column: 8
        },
        end: {
          line: 377,
          column: 9
        }
      },
      "113": {
        start: {
          line: 376,
          column: 12
        },
        end: {
          line: 376,
          column: 45
        }
      },
      "114": {
        start: {
          line: 378,
          column: 8
        },
        end: {
          line: 378,
          column: 27
        }
      },
      "115": {
        start: {
          line: 388,
          column: 8
        },
        end: {
          line: 390,
          column: 9
        }
      },
      "116": {
        start: {
          line: 389,
          column: 12
        },
        end: {
          line: 389,
          column: 19
        }
      },
      "117": {
        start: {
          line: 392,
          column: 8
        },
        end: {
          line: 392,
          column: 29
        }
      },
      "118": {
        start: {
          line: 393,
          column: 8
        },
        end: {
          line: 393,
          column: 30
        }
      },
      "119": {
        start: {
          line: 396,
          column: 25
        },
        end: {
          line: 396,
          column: 71
        }
      },
      "120": {
        start: {
          line: 398,
          column: 8
        },
        end: {
          line: 402,
          column: 9
        }
      },
      "121": {
        start: {
          line: 399,
          column: 12
        },
        end: {
          line: 399,
          column: 36
        }
      },
      "122": {
        start: {
          line: 400,
          column: 12
        },
        end: {
          line: 400,
          column: 53
        }
      },
      "123": {
        start: {
          line: 401,
          column: 12
        },
        end: {
          line: 401,
          column: 57
        }
      },
      "124": {
        start: {
          line: 403,
          column: 8
        },
        end: {
          line: 403,
          column: 47
        }
      },
      "125": {
        start: {
          line: 404,
          column: 8
        },
        end: {
          line: 404,
          column: 51
        }
      },
      "126": {
        start: {
          line: 417,
          column: 8
        },
        end: {
          line: 419,
          column: 9
        }
      },
      "127": {
        start: {
          line: 418,
          column: 12
        },
        end: {
          line: 418,
          column: 30
        }
      },
      "128": {
        start: {
          line: 420,
          column: 8
        },
        end: {
          line: 422,
          column: 9
        }
      },
      "129": {
        start: {
          line: 421,
          column: 12
        },
        end: {
          line: 421,
          column: 22
        }
      },
      "130": {
        start: {
          line: 424,
          column: 8
        },
        end: {
          line: 424,
          column: 27
        }
      },
      "131": {
        start: {
          line: 425,
          column: 8
        },
        end: {
          line: 425,
          column: 34
        }
      },
      "132": {
        start: {
          line: 427,
          column: 8
        },
        end: {
          line: 427,
          column: 31
        }
      },
      "133": {
        start: {
          line: 429,
          column: 8
        },
        end: {
          line: 433,
          column: 9
        }
      },
      "134": {
        start: {
          line: 430,
          column: 12
        },
        end: {
          line: 432,
          column: 35
        }
      },
      "135": {
        start: {
          line: 442,
          column: 8
        },
        end: {
          line: 445,
          column: 9
        }
      },
      "136": {
        start: {
          line: 443,
          column: 30
        },
        end: {
          line: 443,
          column: 73
        }
      },
      "137": {
        start: {
          line: 444,
          column: 12
        },
        end: {
          line: 444,
          column: 43
        }
      },
      "138": {
        start: {
          line: 447,
          column: 27
        },
        end: {
          line: 447,
          column: 54
        }
      },
      "139": {
        start: {
          line: 448,
          column: 27
        },
        end: {
          line: 448,
          column: 51
        }
      },
      "140": {
        start: {
          line: 449,
          column: 25
        },
        end: {
          line: 449,
          column: 53
        }
      },
      "141": {
        start: {
          line: 452,
          column: 8
        },
        end: {
          line: 493,
          column: 9
        }
      },
      "142": {
        start: {
          line: 453,
          column: 26
        },
        end: {
          line: 453,
          column: 44
        }
      },
      "143": {
        start: {
          line: 454,
          column: 25
        },
        end: {
          line: 454,
          column: 54
        }
      },
      "144": {
        start: {
          line: 457,
          column: 12
        },
        end: {
          line: 492,
          column: 13
        }
      },
      "145": {
        start: {
          line: 458,
          column: 30
        },
        end: {
          line: 458,
          column: 48
        }
      },
      "146": {
        start: {
          line: 459,
          column: 28
        },
        end: {
          line: 459,
          column: 50
        }
      },
      "147": {
        start: {
          line: 466,
          column: 26
        },
        end: {
          line: 466,
          column: 37
        }
      },
      "148": {
        start: {
          line: 467,
          column: 26
        },
        end: {
          line: 467,
          column: 29
        }
      },
      "149": {
        start: {
          line: 470,
          column: 16
        },
        end: {
          line: 480,
          column: 17
        }
      },
      "150": {
        start: {
          line: 471,
          column: 34
        },
        end: {
          line: 471,
          column: 41
        }
      },
      "151": {
        start: {
          line: 473,
          column: 20
        },
        end: {
          line: 475,
          column: 21
        }
      },
      "152": {
        start: {
          line: 474,
          column: 24
        },
        end: {
          line: 474,
          column: 36
        }
      },
      "153": {
        start: {
          line: 477,
          column: 20
        },
        end: {
          line: 479,
          column: 21
        }
      },
      "154": {
        start: {
          line: 478,
          column: 24
        },
        end: {
          line: 478,
          column: 36
        }
      },
      "155": {
        start: {
          line: 482,
          column: 16
        },
        end: {
          line: 482,
          column: 35
        }
      },
      "156": {
        start: {
          line: 483,
          column: 16
        },
        end: {
          line: 483,
          column: 39
        }
      },
      "157": {
        start: {
          line: 485,
          column: 16
        },
        end: {
          line: 487,
          column: 17
        }
      },
      "158": {
        start: {
          line: 486,
          column: 20
        },
        end: {
          line: 486,
          column: 50
        }
      },
      "159": {
        start: {
          line: 489,
          column: 16
        },
        end: {
          line: 491,
          column: 17
        }
      },
      "160": {
        start: {
          line: 490,
          column: 20
        },
        end: {
          line: 490,
          column: 54
        }
      },
      "161": {
        start: {
          line: 495,
          column: 8
        },
        end: {
          line: 495,
          column: 78
        }
      },
      "162": {
        start: {
          line: 504,
          column: 8
        },
        end: {
          line: 504,
          column: 55
        }
      },
      "163": {
        start: {
          line: 509,
          column: 8
        },
        end: {
          line: 511,
          column: 9
        }
      },
      "164": {
        start: {
          line: 510,
          column: 12
        },
        end: {
          line: 510,
          column: 37
        }
      },
      "165": {
        start: {
          line: 517,
          column: 8
        },
        end: {
          line: 517,
          column: 33
        }
      },
      "166": {
        start: {
          line: 518,
          column: 8
        },
        end: {
          line: 518,
          column: 32
        }
      },
      "167": {
        start: {
          line: 519,
          column: 8
        },
        end: {
          line: 519,
          column: 35
        }
      },
      "168": {
        start: {
          line: 520,
          column: 8
        },
        end: {
          line: 520,
          column: 37
        }
      },
      "169": {
        start: {
          line: 521,
          column: 8
        },
        end: {
          line: 521,
          column: 35
        }
      },
      "170": {
        start: {
          line: 524,
          column: 8
        },
        end: {
          line: 543,
          column: 9
        }
      },
      "171": {
        start: {
          line: 526,
          column: 12
        },
        end: {
          line: 531,
          column: 13
        }
      },
      "172": {
        start: {
          line: 530,
          column: 16
        },
        end: {
          line: 530,
          column: 32
        }
      },
      "173": {
        start: {
          line: 533,
          column: 12
        },
        end: {
          line: 533,
          column: 27
        }
      },
      "174": {
        start: {
          line: 536,
          column: 12
        },
        end: {
          line: 540,
          column: 13
        }
      },
      "175": {
        start: {
          line: 537,
          column: 16
        },
        end: {
          line: 537,
          column: 53
        }
      },
      "176": {
        start: {
          line: 539,
          column: 16
        },
        end: {
          line: 539,
          column: 48
        }
      },
      "177": {
        start: {
          line: 542,
          column: 12
        },
        end: {
          line: 542,
          column: 56
        }
      },
      "178": {
        start: {
          line: 549,
          column: 8
        },
        end: {
          line: 551,
          column: 9
        }
      },
      "179": {
        start: {
          line: 550,
          column: 12
        },
        end: {
          line: 550,
          column: 25
        }
      },
      "180": {
        start: {
          line: 552,
          column: 8
        },
        end: {
          line: 552,
          column: 21
        }
      },
      "181": {
        start: {
          line: 553,
          column: 8
        },
        end: {
          line: 553,
          column: 27
        }
      },
      "182": {
        start: {
          line: 554,
          column: 8
        },
        end: {
          line: 554,
          column: 30
        }
      },
      "183": {
        start: {
          line: 556,
          column: 8
        },
        end: {
          line: 556,
          column: 31
        }
      },
      "184": {
        start: {
          line: 565,
          column: 8
        },
        end: {
          line: 565,
          column: 31
        }
      },
      "185": {
        start: {
          line: 566,
          column: 8
        },
        end: {
          line: 566,
          column: 44
        }
      },
      "186": {
        start: {
          line: 567,
          column: 8
        },
        end: {
          line: 567,
          column: 29
        }
      },
      "187": {
        start: {
          line: 568,
          column: 8
        },
        end: {
          line: 568,
          column: 28
        }
      },
      "188": {
        start: {
          line: 573,
          column: 8
        },
        end: {
          line: 573,
          column: 32
        }
      },
      "189": {
        start: {
          line: 574,
          column: 8
        },
        end: {
          line: 574,
          column: 51
        }
      },
      "190": {
        start: {
          line: 577,
          column: 8
        },
        end: {
          line: 577,
          column: 73
        }
      },
      "191": {
        start: {
          line: 578,
          column: 8
        },
        end: {
          line: 578,
          column: 67
        }
      },
      "192": {
        start: {
          line: 580,
          column: 8
        },
        end: {
          line: 580,
          column: 48
        }
      },
      "193": {
        start: {
          line: 581,
          column: 8
        },
        end: {
          line: 581,
          column: 41
        }
      },
      "194": {
        start: {
          line: 582,
          column: 8
        },
        end: {
          line: 582,
          column: 43
        }
      },
      "195": {
        start: {
          line: 591,
          column: 8
        },
        end: {
          line: 593,
          column: 9
        }
      },
      "196": {
        start: {
          line: 592,
          column: 12
        },
        end: {
          line: 592,
          column: 47
        }
      },
      "197": {
        start: {
          line: 602,
          column: 8
        },
        end: {
          line: 602,
          column: 51
        }
      },
      "198": {
        start: {
          line: 611,
          column: 8
        },
        end: {
          line: 613,
          column: 9
        }
      },
      "199": {
        start: {
          line: 612,
          column: 12
        },
        end: {
          line: 612,
          column: 41
        }
      },
      "200": {
        start: {
          line: 614,
          column: 8
        },
        end: {
          line: 616,
          column: 9
        }
      },
      "201": {
        start: {
          line: 615,
          column: 12
        },
        end: {
          line: 615,
          column: 21
        }
      },
      "202": {
        start: {
          line: 617,
          column: 8
        },
        end: {
          line: 617,
          column: 36
        }
      },
      "203": {
        start: {
          line: 629,
          column: 8
        },
        end: {
          line: 631,
          column: 9
        }
      },
      "204": {
        start: {
          line: 630,
          column: 12
        },
        end: {
          line: 630,
          column: 19
        }
      },
      "205": {
        start: {
          line: 633,
          column: 8
        },
        end: {
          line: 633,
          column: 35
        }
      },
      "206": {
        start: {
          line: 635,
          column: 8
        },
        end: {
          line: 640,
          column: 9
        }
      },
      "207": {
        start: {
          line: 636,
          column: 12
        },
        end: {
          line: 636,
          column: 42
        }
      },
      "208": {
        start: {
          line: 637,
          column: 12
        },
        end: {
          line: 639,
          column: 13
        }
      },
      "209": {
        start: {
          line: 638,
          column: 16
        },
        end: {
          line: 638,
          column: 26
        }
      },
      "210": {
        start: {
          line: 641,
          column: 8
        },
        end: {
          line: 643,
          column: 9
        }
      },
      "211": {
        start: {
          line: 642,
          column: 12
        },
        end: {
          line: 642,
          column: 37
        }
      },
      "212": {
        start: {
          line: 645,
          column: 8
        },
        end: {
          line: 645,
          column: 35
        }
      },
      "213": {
        start: {
          line: 646,
          column: 8
        },
        end: {
          line: 646,
          column: 44
        }
      },
      "214": {
        start: {
          line: 648,
          column: 8
        },
        end: {
          line: 650,
          column: 9
        }
      },
      "215": {
        start: {
          line: 649,
          column: 12
        },
        end: {
          line: 649,
          column: 34
        }
      },
      "216": {
        start: {
          line: 652,
          column: 8
        },
        end: {
          line: 655,
          column: 10
        }
      },
      "217": {
        start: {
          line: 664,
          column: 8
        },
        end: {
          line: 664,
          column: 73
        }
      },
      "218": {
        start: {
          line: 675,
          column: 8
        },
        end: {
          line: 677,
          column: 9
        }
      },
      "219": {
        start: {
          line: 676,
          column: 12
        },
        end: {
          line: 676,
          column: 19
        }
      },
      "220": {
        start: {
          line: 680,
          column: 8
        },
        end: {
          line: 680,
          column: 28
        }
      },
      "221": {
        start: {
          line: 682,
          column: 29
        },
        end: {
          line: 682,
          column: 52
        }
      },
      "222": {
        start: {
          line: 684,
          column: 8
        },
        end: {
          line: 684,
          column: 35
        }
      },
      "223": {
        start: {
          line: 685,
          column: 8
        },
        end: {
          line: 685,
          column: 31
        }
      },
      "224": {
        start: {
          line: 687,
          column: 8
        },
        end: {
          line: 687,
          column: 34
        }
      },
      "225": {
        start: {
          line: 689,
          column: 8
        },
        end: {
          line: 689,
          column: 36
        }
      },
      "226": {
        start: {
          line: 691,
          column: 8
        },
        end: {
          line: 691,
          column: 34
        }
      },
      "227": {
        start: {
          line: 693,
          column: 8
        },
        end: {
          line: 693,
          column: 31
        }
      },
      "228": {
        start: {
          line: 695,
          column: 8
        },
        end: {
          line: 695,
          column: 31
        }
      },
      "229": {
        start: {
          line: 702,
          column: 8
        },
        end: {
          line: 702,
          column: 35
        }
      },
      "230": {
        start: {
          line: 704,
          column: 8
        },
        end: {
          line: 704,
          column: 51
        }
      },
      "231": {
        start: {
          line: 705,
          column: 8
        },
        end: {
          line: 714,
          column: 9
        }
      },
      "232": {
        start: {
          line: 706,
          column: 12
        },
        end: {
          line: 706,
          column: 47
        }
      },
      "233": {
        start: {
          line: 716,
          column: 8
        },
        end: {
          line: 716,
          column: 30
        }
      },
      "234": {
        start: {
          line: 718,
          column: 8
        },
        end: {
          line: 718,
          column: 32
        }
      },
      "235": {
        start: {
          line: 728,
          column: 8
        },
        end: {
          line: 728,
          column: 52
        }
      },
      "236": {
        start: {
          line: 737,
          column: 8
        },
        end: {
          line: 737,
          column: 33
        }
      },
      "237": {
        start: {
          line: 746,
          column: 8
        },
        end: {
          line: 746,
          column: 39
        }
      },
      "238": {
        start: {
          line: 747,
          column: 8
        },
        end: {
          line: 750,
          column: 10
        }
      },
      "239": {
        start: {
          line: 760,
          column: 8
        },
        end: {
          line: 760,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 12
          },
          end: {
            line: 23,
            column: 13
          }
        },
        loc: {
          start: {
            line: 23,
            column: 19
          },
          end: {
            line: 25,
            column: 13
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 12
          },
          end: {
            line: 26,
            column: 13
          }
        },
        loc: {
          start: {
            line: 26,
            column: 32
          },
          end: {
            line: 29,
            column: 13
          }
        },
        line: 26
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 12
          },
          end: {
            line: 30,
            column: 13
          }
        },
        loc: {
          start: {
            line: 30,
            column: 29
          },
          end: {
            line: 32,
            column: 13
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 35,
            column: 12
          },
          end: {
            line: 35,
            column: 13
          }
        },
        loc: {
          start: {
            line: 35,
            column: 19
          },
          end: {
            line: 37,
            column: 13
          }
        },
        line: 35
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 38,
            column: 12
          },
          end: {
            line: 38,
            column: 13
          }
        },
        loc: {
          start: {
            line: 38,
            column: 32
          },
          end: {
            line: 41,
            column: 13
          }
        },
        line: 38
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 42,
            column: 12
          },
          end: {
            line: 42,
            column: 13
          }
        },
        loc: {
          start: {
            line: 42,
            column: 29
          },
          end: {
            line: 44,
            column: 13
          }
        },
        line: 42
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 47,
            column: 12
          },
          end: {
            line: 47,
            column: 13
          }
        },
        loc: {
          start: {
            line: 47,
            column: 19
          },
          end: {
            line: 50,
            column: 13
          }
        },
        line: 47
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 51,
            column: 12
          },
          end: {
            line: 51,
            column: 13
          }
        },
        loc: {
          start: {
            line: 51,
            column: 32
          },
          end: {
            line: 53,
            column: 13
          }
        },
        line: 51
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 54,
            column: 12
          },
          end: {
            line: 54,
            column: 13
          }
        },
        loc: {
          start: {
            line: 54,
            column: 29
          },
          end: {
            line: 56,
            column: 13
          }
        },
        line: 54
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        loc: {
          start: {
            line: 65,
            column: 23
          },
          end: {
            line: 67,
            column: 5
          }
        },
        line: 65
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        loc: {
          start: {
            line: 74,
            column: 22
          },
          end: {
            line: 80,
            column: 5
          }
        },
        line: 74
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        loc: {
          start: {
            line: 89,
            column: 39
          },
          end: {
            line: 95,
            column: 5
          }
        },
        line: 89
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        loc: {
          start: {
            line: 102,
            column: 24
          },
          end: {
            line: 152,
            column: 5
          }
        },
        line: 102
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        },
        loc: {
          start: {
            line: 157,
            column: 11
          },
          end: {
            line: 165,
            column: 5
          }
        },
        line: 157
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        },
        loc: {
          start: {
            line: 168,
            column: 24
          },
          end: {
            line: 177,
            column: 5
          }
        },
        line: 168
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 170,
            column: 33
          },
          end: {
            line: 170,
            column: 34
          }
        },
        loc: {
          start: {
            line: 170,
            column: 43
          },
          end: {
            line: 172,
            column: 13
          }
        },
        line: 170
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        loc: {
          start: {
            line: 184,
            column: 20
          },
          end: {
            line: 189,
            column: 5
          }
        },
        line: 184
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        loc: {
          start: {
            line: 196,
            column: 26
          },
          end: {
            line: 198,
            column: 5
          }
        },
        line: 196
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 5
          }
        },
        loc: {
          start: {
            line: 208,
            column: 24
          },
          end: {
            line: 227,
            column: 5
          }
        },
        line: 208
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 221,
            column: 24
          },
          end: {
            line: 221,
            column: 25
          }
        },
        loc: {
          start: {
            line: 221,
            column: 40
          },
          end: {
            line: 224,
            column: 17
          }
        },
        line: 221
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 229,
            column: 5
          }
        },
        loc: {
          start: {
            line: 229,
            column: 23
          },
          end: {
            line: 244,
            column: 5
          }
        },
        line: 229
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 247,
            column: 4
          },
          end: {
            line: 247,
            column: 5
          }
        },
        loc: {
          start: {
            line: 247,
            column: 24
          },
          end: {
            line: 260,
            column: 5
          }
        },
        line: 247
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 248,
            column: 41
          },
          end: {
            line: 248,
            column: 42
          }
        },
        loc: {
          start: {
            line: 248,
            column: 47
          },
          end: {
            line: 259,
            column: 9
          }
        },
        line: 248
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 263,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        },
        loc: {
          start: {
            line: 263,
            column: 27
          },
          end: {
            line: 265,
            column: 5
          }
        },
        line: 263
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 5
          }
        },
        loc: {
          start: {
            line: 267,
            column: 25
          },
          end: {
            line: 270,
            column: 5
          }
        },
        line: 267
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 276,
            column: 4
          },
          end: {
            line: 276,
            column: 5
          }
        },
        loc: {
          start: {
            line: 276,
            column: 23
          },
          end: {
            line: 285,
            column: 5
          }
        },
        line: 276
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 294,
            column: 4
          },
          end: {
            line: 294,
            column: 5
          }
        },
        loc: {
          start: {
            line: 294,
            column: 24
          },
          end: {
            line: 317,
            column: 5
          }
        },
        line: 294
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 324,
            column: 4
          },
          end: {
            line: 324,
            column: 5
          }
        },
        loc: {
          start: {
            line: 324,
            column: 21
          },
          end: {
            line: 326,
            column: 5
          }
        },
        line: 324
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 333,
            column: 4
          },
          end: {
            line: 333,
            column: 5
          }
        },
        loc: {
          start: {
            line: 333,
            column: 16
          },
          end: {
            line: 335,
            column: 5
          }
        },
        line: 333
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 345,
            column: 4
          },
          end: {
            line: 345,
            column: 5
          }
        },
        loc: {
          start: {
            line: 345,
            column: 54
          },
          end: {
            line: 366,
            column: 5
          }
        },
        line: 345
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 356,
            column: 16
          },
          end: {
            line: 356,
            column: 17
          }
        },
        loc: {
          start: {
            line: 356,
            column: 24
          },
          end: {
            line: 356,
            column: 38
          }
        },
        line: 356
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 361,
            column: 16
          },
          end: {
            line: 361,
            column: 17
          }
        },
        loc: {
          start: {
            line: 361,
            column: 26
          },
          end: {
            line: 361,
            column: 40
          }
        },
        line: 361
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 363,
            column: 16
          },
          end: {
            line: 363,
            column: 17
          }
        },
        loc: {
          start: {
            line: 363,
            column: 25
          },
          end: {
            line: 363,
            column: 37
          }
        },
        line: 363
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 374,
            column: 4
          },
          end: {
            line: 374,
            column: 5
          }
        },
        loc: {
          start: {
            line: 374,
            column: 30
          },
          end: {
            line: 379,
            column: 5
          }
        },
        line: 374
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 386,
            column: 4
          },
          end: {
            line: 386,
            column: 5
          }
        },
        loc: {
          start: {
            line: 386,
            column: 22
          },
          end: {
            line: 405,
            column: 5
          }
        },
        line: 386
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 416,
            column: 5
          }
        },
        loc: {
          start: {
            line: 416,
            column: 34
          },
          end: {
            line: 496,
            column: 5
          }
        },
        line: 416
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 503,
            column: 4
          },
          end: {
            line: 503,
            column: 5
          }
        },
        loc: {
          start: {
            line: 503,
            column: 24
          },
          end: {
            line: 505,
            column: 5
          }
        },
        line: 503
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 508,
            column: 4
          },
          end: {
            line: 508,
            column: 5
          }
        },
        loc: {
          start: {
            line: 508,
            column: 23
          },
          end: {
            line: 512,
            column: 5
          }
        },
        line: 508
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 516,
            column: 4
          },
          end: {
            line: 516,
            column: 5
          }
        },
        loc: {
          start: {
            line: 516,
            column: 22
          },
          end: {
            line: 544,
            column: 5
          }
        },
        line: 516
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 548,
            column: 4
          },
          end: {
            line: 548,
            column: 5
          }
        },
        loc: {
          start: {
            line: 548,
            column: 14
          },
          end: {
            line: 557,
            column: 5
          }
        },
        line: 548
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 564,
            column: 4
          },
          end: {
            line: 564,
            column: 5
          }
        },
        loc: {
          start: {
            line: 564,
            column: 17
          },
          end: {
            line: 569,
            column: 5
          }
        },
        line: 564
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 572,
            column: 4
          },
          end: {
            line: 572,
            column: 5
          }
        },
        loc: {
          start: {
            line: 572,
            column: 19
          },
          end: {
            line: 583,
            column: 5
          }
        },
        line: 572
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 590,
            column: 4
          },
          end: {
            line: 590,
            column: 5
          }
        },
        loc: {
          start: {
            line: 590,
            column: 25
          },
          end: {
            line: 594,
            column: 5
          }
        },
        line: 590
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 601,
            column: 4
          },
          end: {
            line: 601,
            column: 5
          }
        },
        loc: {
          start: {
            line: 601,
            column: 15
          },
          end: {
            line: 603,
            column: 5
          }
        },
        line: 601
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 610,
            column: 4
          },
          end: {
            line: 610,
            column: 5
          }
        },
        loc: {
          start: {
            line: 610,
            column: 18
          },
          end: {
            line: 618,
            column: 5
          }
        },
        line: 610
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 628,
            column: 4
          },
          end: {
            line: 628,
            column: 5
          }
        },
        loc: {
          start: {
            line: 628,
            column: 23
          },
          end: {
            line: 656,
            column: 5
          }
        },
        line: 628
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 663,
            column: 4
          },
          end: {
            line: 663,
            column: 5
          }
        },
        loc: {
          start: {
            line: 663,
            column: 20
          },
          end: {
            line: 665,
            column: 5
          }
        },
        line: 663
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 674,
            column: 4
          },
          end: {
            line: 674,
            column: 5
          }
        },
        loc: {
          start: {
            line: 674,
            column: 21
          },
          end: {
            line: 696,
            column: 5
          }
        },
        line: 674
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 701,
            column: 4
          },
          end: {
            line: 701,
            column: 5
          }
        },
        loc: {
          start: {
            line: 701,
            column: 12
          },
          end: {
            line: 719,
            column: 5
          }
        },
        line: 701
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 727,
            column: 4
          },
          end: {
            line: 727,
            column: 5
          }
        },
        loc: {
          start: {
            line: 727,
            column: 21
          },
          end: {
            line: 729,
            column: 5
          }
        },
        line: 727
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 736,
            column: 4
          },
          end: {
            line: 736,
            column: 5
          }
        },
        loc: {
          start: {
            line: 736,
            column: 22
          },
          end: {
            line: 738,
            column: 5
          }
        },
        line: 736
      },
      "51": {
        name: "(anonymous_51)",
        decl: {
          start: {
            line: 745,
            column: 4
          },
          end: {
            line: 745,
            column: 5
          }
        },
        loc: {
          start: {
            line: 745,
            column: 27
          },
          end: {
            line: 751,
            column: 5
          }
        },
        line: 745
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 759,
            column: 4
          },
          end: {
            line: 759,
            column: 5
          }
        },
        loc: {
          start: {
            line: 759,
            column: 20
          },
          end: {
            line: 761,
            column: 5
          }
        },
        line: 759
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 23
          },
          end: {
            line: 28,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 23
          },
          end: {
            line: 28,
            column: 55
          }
        }, {
          start: {
            line: 28,
            column: 59
          },
          end: {
            line: 28,
            column: 60
          }
        }],
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 23
          },
          end: {
            line: 40,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 40,
            column: 23
          },
          end: {
            line: 40,
            column: 55
          }
        }, {
          start: {
            line: 40,
            column: 59
          },
          end: {
            line: 40,
            column: 60
          }
        }],
        line: 40
      },
      "2": {
        loc: {
          start: {
            line: 66,
            column: 18
          },
          end: {
            line: 66,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 66,
            column: 18
          },
          end: {
            line: 66,
            column: 37
          }
        }, {
          start: {
            line: 66,
            column: 41
          },
          end: {
            line: 66,
            column: 66
          }
        }],
        line: 66
      },
      "3": {
        loc: {
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 78,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 78,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 75
      },
      "4": {
        loc: {
          start: {
            line: 76,
            column: 49
          },
          end: {
            line: 77,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 76,
            column: 49
          },
          end: {
            line: 76,
            column: 68
          }
        }, {
          start: {
            line: 77,
            column: 16
          },
          end: {
            line: 77,
            column: 41
          }
        }],
        line: 76
      },
      "5": {
        loc: {
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 90
      },
      "6": {
        loc: {
          start: {
            line: 91,
            column: 56
          },
          end: {
            line: 92,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 91,
            column: 56
          },
          end: {
            line: 91,
            column: 82
          }
        }, {
          start: {
            line: 92,
            column: 16
          },
          end: {
            line: 92,
            column: 48
          }
        }],
        line: 91
      },
      "7": {
        loc: {
          start: {
            line: 108,
            column: 12
          },
          end: {
            line: 109,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 108,
            column: 12
          },
          end: {
            line: 108,
            column: 31
          }
        }, {
          start: {
            line: 109,
            column: 13
          },
          end: {
            line: 109,
            column: 66
          }
        }],
        line: 108
      },
      "8": {
        loc: {
          start: {
            line: 109,
            column: 13
          },
          end: {
            line: 109,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 109,
            column: 39
          },
          end: {
            line: 109,
            column: 61
          }
        }, {
          start: {
            line: 109,
            column: 64
          },
          end: {
            line: 109,
            column: 66
          }
        }],
        line: 109
      },
      "9": {
        loc: {
          start: {
            line: 169,
            column: 8
          },
          end: {
            line: 176,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 169,
            column: 8
          },
          end: {
            line: 176,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 169
      },
      "10": {
        loc: {
          start: {
            line: 171,
            column: 16
          },
          end: {
            line: 171,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 171,
            column: 16
          },
          end: {
            line: 171,
            column: 22
          }
        }, {
          start: {
            line: 171,
            column: 26
          },
          end: {
            line: 171,
            column: 45
          }
        }],
        line: 171
      },
      "11": {
        loc: {
          start: {
            line: 185,
            column: 8
          },
          end: {
            line: 188,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 185,
            column: 8
          },
          end: {
            line: 188,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 185
      },
      "12": {
        loc: {
          start: {
            line: 213,
            column: 8
          },
          end: {
            line: 226,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 213,
            column: 8
          },
          end: {
            line: 226,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 213
      },
      "13": {
        loc: {
          start: {
            line: 213,
            column: 12
          },
          end: {
            line: 213,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 213,
            column: 12
          },
          end: {
            line: 213,
            column: 19
          }
        }, {
          start: {
            line: 213,
            column: 23
          },
          end: {
            line: 213,
            column: 37
          }
        }],
        line: 213
      },
      "14": {
        loc: {
          start: {
            line: 230,
            column: 8
          },
          end: {
            line: 242,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 230,
            column: 8
          },
          end: {
            line: 242,
            column: 9
          }
        }, {
          start: {
            line: 232,
            column: 15
          },
          end: {
            line: 242,
            column: 9
          }
        }],
        line: 230
      },
      "15": {
        loc: {
          start: {
            line: 233,
            column: 12
          },
          end: {
            line: 241,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 233,
            column: 12
          },
          end: {
            line: 241,
            column: 13
          }
        }, {
          start: {
            line: 237,
            column: 19
          },
          end: {
            line: 241,
            column: 13
          }
        }],
        line: 233
      },
      "16": {
        loc: {
          start: {
            line: 251,
            column: 12
          },
          end: {
            line: 258,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 251,
            column: 12
          },
          end: {
            line: 258,
            column: 13
          }
        }, {
          start: {
            line: 254,
            column: 19
          },
          end: {
            line: 258,
            column: 13
          }
        }],
        line: 251
      },
      "17": {
        loc: {
          start: {
            line: 254,
            column: 19
          },
          end: {
            line: 258,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 254,
            column: 19
          },
          end: {
            line: 258,
            column: 13
          }
        }, {
          start: {
            line: 256,
            column: 19
          },
          end: {
            line: 258,
            column: 13
          }
        }],
        line: 254
      },
      "18": {
        loc: {
          start: {
            line: 256,
            column: 19
          },
          end: {
            line: 258,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 256,
            column: 19
          },
          end: {
            line: 258,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 256
      },
      "19": {
        loc: {
          start: {
            line: 278,
            column: 8
          },
          end: {
            line: 282,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 278,
            column: 8
          },
          end: {
            line: 282,
            column: 9
          }
        }, {
          start: {
            line: 280,
            column: 15
          },
          end: {
            line: 282,
            column: 9
          }
        }],
        line: 278
      },
      "20": {
        loc: {
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 316,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 316,
            column: 9
          }
        }, {
          start: {
            line: 314,
            column: 15
          },
          end: {
            line: 316,
            column: 9
          }
        }],
        line: 295
      },
      "21": {
        loc: {
          start: {
            line: 302,
            column: 12
          },
          end: {
            line: 306,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 302,
            column: 12
          },
          end: {
            line: 306,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 302
      },
      "22": {
        loc: {
          start: {
            line: 346,
            column: 8
          },
          end: {
            line: 350,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 346,
            column: 8
          },
          end: {
            line: 350,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 346
      },
      "23": {
        loc: {
          start: {
            line: 348,
            column: 16
          },
          end: {
            line: 348,
            column: 74
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 348,
            column: 48
          },
          end: {
            line: 348,
            column: 66
          }
        }, {
          start: {
            line: 348,
            column: 69
          },
          end: {
            line: 348,
            column: 74
          }
        }],
        line: 348
      },
      "24": {
        loc: {
          start: {
            line: 348,
            column: 16
          },
          end: {
            line: 348,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 348,
            column: 16
          },
          end: {
            line: 348,
            column: 23
          }
        }, {
          start: {
            line: 348,
            column: 27
          },
          end: {
            line: 348,
            column: 45
          }
        }],
        line: 348
      },
      "25": {
        loc: {
          start: {
            line: 351,
            column: 8
          },
          end: {
            line: 365,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 351,
            column: 8
          },
          end: {
            line: 365,
            column: 9
          }
        }, {
          start: {
            line: 359,
            column: 15
          },
          end: {
            line: 365,
            column: 9
          }
        }],
        line: 351
      },
      "26": {
        loc: {
          start: {
            line: 375,
            column: 8
          },
          end: {
            line: 377,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 375,
            column: 8
          },
          end: {
            line: 377,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 375
      },
      "27": {
        loc: {
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 390,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 390,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 388
      },
      "28": {
        loc: {
          start: {
            line: 388,
            column: 12
          },
          end: {
            line: 388,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 388,
            column: 12
          },
          end: {
            line: 388,
            column: 28
          }
        }, {
          start: {
            line: 388,
            column: 32
          },
          end: {
            line: 388,
            column: 77
          }
        }],
        line: 388
      },
      "29": {
        loc: {
          start: {
            line: 396,
            column: 25
          },
          end: {
            line: 396,
            column: 71
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 396,
            column: 39
          },
          end: {
            line: 396,
            column: 67
          }
        }, {
          start: {
            line: 396,
            column: 70
          },
          end: {
            line: 396,
            column: 71
          }
        }],
        line: 396
      },
      "30": {
        loc: {
          start: {
            line: 417,
            column: 8
          },
          end: {
            line: 419,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 417,
            column: 8
          },
          end: {
            line: 419,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 417
      },
      "31": {
        loc: {
          start: {
            line: 420,
            column: 8
          },
          end: {
            line: 422,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 420,
            column: 8
          },
          end: {
            line: 422,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 420
      },
      "32": {
        loc: {
          start: {
            line: 424,
            column: 16
          },
          end: {
            line: 424,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 424,
            column: 16
          },
          end: {
            line: 424,
            column: 21
          }
        }, {
          start: {
            line: 424,
            column: 25
          },
          end: {
            line: 424,
            column: 26
          }
        }],
        line: 424
      },
      "33": {
        loc: {
          start: {
            line: 425,
            column: 15
          },
          end: {
            line: 425,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 425,
            column: 15
          },
          end: {
            line: 425,
            column: 19
          }
        }, {
          start: {
            line: 425,
            column: 23
          },
          end: {
            line: 425,
            column: 33
          }
        }],
        line: 425
      },
      "34": {
        loc: {
          start: {
            line: 429,
            column: 8
          },
          end: {
            line: 433,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 429,
            column: 8
          },
          end: {
            line: 433,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 429
      },
      "35": {
        loc: {
          start: {
            line: 430,
            column: 19
          },
          end: {
            line: 432,
            column: 34
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 431,
            column: 18
          },
          end: {
            line: 431,
            column: 33
          }
        }, {
          start: {
            line: 432,
            column: 18
          },
          end: {
            line: 432,
            column: 34
          }
        }],
        line: 430
      },
      "36": {
        loc: {
          start: {
            line: 442,
            column: 8
          },
          end: {
            line: 445,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 442,
            column: 8
          },
          end: {
            line: 445,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 442
      },
      "37": {
        loc: {
          start: {
            line: 448,
            column: 27
          },
          end: {
            line: 448,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 448,
            column: 27
          },
          end: {
            line: 448,
            column: 46
          }
        }, {
          start: {
            line: 448,
            column: 50
          },
          end: {
            line: 448,
            column: 51
          }
        }],
        line: 448
      },
      "38": {
        loc: {
          start: {
            line: 473,
            column: 20
          },
          end: {
            line: 475,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 473,
            column: 20
          },
          end: {
            line: 475,
            column: 21
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 473
      },
      "39": {
        loc: {
          start: {
            line: 477,
            column: 20
          },
          end: {
            line: 479,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 477,
            column: 20
          },
          end: {
            line: 479,
            column: 21
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 477
      },
      "40": {
        loc: {
          start: {
            line: 485,
            column: 16
          },
          end: {
            line: 487,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 485,
            column: 16
          },
          end: {
            line: 487,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 485
      },
      "41": {
        loc: {
          start: {
            line: 485,
            column: 20
          },
          end: {
            line: 485,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 485,
            column: 20
          },
          end: {
            line: 485,
            column: 26
          }
        }, {
          start: {
            line: 485,
            column: 30
          },
          end: {
            line: 485,
            column: 59
          }
        }],
        line: 485
      },
      "42": {
        loc: {
          start: {
            line: 489,
            column: 16
          },
          end: {
            line: 491,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 489,
            column: 16
          },
          end: {
            line: 491,
            column: 17
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 489
      },
      "43": {
        loc: {
          start: {
            line: 489,
            column: 20
          },
          end: {
            line: 489,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 489,
            column: 20
          },
          end: {
            line: 489,
            column: 26
          }
        }, {
          start: {
            line: 489,
            column: 30
          },
          end: {
            line: 489,
            column: 63
          }
        }],
        line: 489
      },
      "44": {
        loc: {
          start: {
            line: 495,
            column: 15
          },
          end: {
            line: 495,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 495,
            column: 43
          },
          end: {
            line: 495,
            column: 58
          }
        }, {
          start: {
            line: 495,
            column: 61
          },
          end: {
            line: 495,
            column: 77
          }
        }],
        line: 495
      },
      "45": {
        loc: {
          start: {
            line: 509,
            column: 8
          },
          end: {
            line: 511,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 509,
            column: 8
          },
          end: {
            line: 511,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 509
      },
      "46": {
        loc: {
          start: {
            line: 524,
            column: 8
          },
          end: {
            line: 543,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 524,
            column: 8
          },
          end: {
            line: 543,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 524
      },
      "47": {
        loc: {
          start: {
            line: 526,
            column: 12
          },
          end: {
            line: 531,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 526,
            column: 12
          },
          end: {
            line: 531,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 526
      },
      "48": {
        loc: {
          start: {
            line: 527,
            column: 16
          },
          end: {
            line: 528,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 527,
            column: 16
          },
          end: {
            line: 527,
            column: 51
          }
        }, {
          start: {
            line: 528,
            column: 16
          },
          end: {
            line: 528,
            column: 41
          }
        }],
        line: 527
      },
      "49": {
        loc: {
          start: {
            line: 536,
            column: 12
          },
          end: {
            line: 540,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 536,
            column: 12
          },
          end: {
            line: 540,
            column: 13
          }
        }, {
          start: {
            line: 538,
            column: 19
          },
          end: {
            line: 540,
            column: 13
          }
        }],
        line: 536
      },
      "50": {
        loc: {
          start: {
            line: 549,
            column: 8
          },
          end: {
            line: 551,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 549,
            column: 8
          },
          end: {
            line: 551,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 549
      },
      "51": {
        loc: {
          start: {
            line: 577,
            column: 28
          },
          end: {
            line: 577,
            column: 72
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 577,
            column: 28
          },
          end: {
            line: 577,
            column: 45
          }
        }, {
          start: {
            line: 577,
            column: 49
          },
          end: {
            line: 577,
            column: 72
          }
        }],
        line: 577
      },
      "52": {
        loc: {
          start: {
            line: 578,
            column: 27
          },
          end: {
            line: 578,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 578,
            column: 27
          },
          end: {
            line: 578,
            column: 43
          }
        }, {
          start: {
            line: 578,
            column: 47
          },
          end: {
            line: 578,
            column: 66
          }
        }],
        line: 578
      },
      "53": {
        loc: {
          start: {
            line: 591,
            column: 8
          },
          end: {
            line: 593,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 591,
            column: 8
          },
          end: {
            line: 593,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 591
      },
      "54": {
        loc: {
          start: {
            line: 592,
            column: 12
          },
          end: {
            line: 592,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 592,
            column: 12
          },
          end: {
            line: 592,
            column: 26
          }
        }, {
          start: {
            line: 592,
            column: 30
          },
          end: {
            line: 592,
            column: 46
          }
        }],
        line: 592
      },
      "55": {
        loc: {
          start: {
            line: 611,
            column: 8
          },
          end: {
            line: 613,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 611,
            column: 8
          },
          end: {
            line: 613,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 611
      },
      "56": {
        loc: {
          start: {
            line: 614,
            column: 8
          },
          end: {
            line: 616,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 614,
            column: 8
          },
          end: {
            line: 616,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 614
      },
      "57": {
        loc: {
          start: {
            line: 629,
            column: 8
          },
          end: {
            line: 631,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 629,
            column: 8
          },
          end: {
            line: 631,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 629
      },
      "58": {
        loc: {
          start: {
            line: 635,
            column: 8
          },
          end: {
            line: 640,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 635,
            column: 8
          },
          end: {
            line: 640,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 635
      },
      "59": {
        loc: {
          start: {
            line: 637,
            column: 12
          },
          end: {
            line: 639,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 637,
            column: 12
          },
          end: {
            line: 639,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 637
      },
      "60": {
        loc: {
          start: {
            line: 641,
            column: 8
          },
          end: {
            line: 643,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 641,
            column: 8
          },
          end: {
            line: 643,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 641
      },
      "61": {
        loc: {
          start: {
            line: 648,
            column: 8
          },
          end: {
            line: 650,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 648,
            column: 8
          },
          end: {
            line: 650,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 648
      },
      "62": {
        loc: {
          start: {
            line: 675,
            column: 8
          },
          end: {
            line: 677,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 675,
            column: 8
          },
          end: {
            line: 677,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 675
      },
      "63": {
        loc: {
          start: {
            line: 706,
            column: 12
          },
          end: {
            line: 706,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 706,
            column: 12
          },
          end: {
            line: 706,
            column: 23
          }
        }, {
          start: {
            line: 706,
            column: 27
          },
          end: {
            line: 706,
            column: 46
          }
        }],
        line: 706
      },
      "64": {
        loc: {
          start: {
            line: 746,
            column: 28
          },
          end: {
            line: 746,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 746,
            column: 28
          },
          end: {
            line: 746,
            column: 33
          }
        }, {
          start: {
            line: 746,
            column: 37
          },
          end: {
            line: 746,
            column: 38
          }
        }],
        line: 746
      },
      "65": {
        loc: {
          start: {
            line: 747,
            column: 8
          },
          end: {
            line: 750,
            column: 9
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 747,
            column: 8
          },
          end: {
            line: 747,
            column: 19
          }
        }, {
          start: {
            line: 747,
            column: 23
          },
          end: {
            line: 750,
            column: 9
          }
        }],
        line: 747
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6d42c9b20b564bed70701a1e17c6b750e02dc241"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2iw0codqnv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2iw0codqnv();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// using constants to prevent someone writing the string wrong
var PLAYING = (cov_2iw0codqnv().s[0]++, 'playing');
var PAUSED = (cov_2iw0codqnv().s[1]++, 'paused');
var FINISHED = (cov_2iw0codqnv().s[2]++, 'finished');
/**
 * WebAudio backend
 *
 * @extends {Observer}
 */

var WebAudio = /*#__PURE__*/function (_util$Observer) {
  _inherits(WebAudio, _util$Observer);

  var _super = _createSuper(WebAudio);

  /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */
  function WebAudio(params) {
    var _ref, _this$states;

    var _this;

    _classCallCheck(this, WebAudio);

    cov_2iw0codqnv().f[12]++;
    cov_2iw0codqnv().s[26]++;
    _this = _super.call(this);
    /** @private */

    _defineProperty(_assertThisInitialized(_this), "audioContext", (cov_2iw0codqnv().s[4]++, null));

    _defineProperty(_assertThisInitialized(_this), "offlineAudioContext", (cov_2iw0codqnv().s[5]++, null));

    _defineProperty(_assertThisInitialized(_this), "stateBehaviors", (cov_2iw0codqnv().s[6]++, (_ref = {}, _defineProperty(_ref, PLAYING, {
      init: function init() {
        cov_2iw0codqnv().f[0]++;
        cov_2iw0codqnv().s[7]++;
        this.addOnAudioProcess();
      },
      getPlayedPercents: function getPlayedPercents() {
        cov_2iw0codqnv().f[1]++;
        var duration = (cov_2iw0codqnv().s[8]++, this.getDuration());
        cov_2iw0codqnv().s[9]++;
        return (cov_2iw0codqnv().b[0][0]++, this.getCurrentTime() / duration) || (cov_2iw0codqnv().b[0][1]++, 0);
      },
      getCurrentTime: function getCurrentTime() {
        cov_2iw0codqnv().f[2]++;
        cov_2iw0codqnv().s[10]++;
        return this.startPosition + this.getPlayedTime();
      }
    }), _defineProperty(_ref, PAUSED, {
      init: function init() {
        cov_2iw0codqnv().f[3]++;
        cov_2iw0codqnv().s[11]++;
        this.removeOnAudioProcess();
      },
      getPlayedPercents: function getPlayedPercents() {
        cov_2iw0codqnv().f[4]++;
        var duration = (cov_2iw0codqnv().s[12]++, this.getDuration());
        cov_2iw0codqnv().s[13]++;
        return (cov_2iw0codqnv().b[1][0]++, this.getCurrentTime() / duration) || (cov_2iw0codqnv().b[1][1]++, 0);
      },
      getCurrentTime: function getCurrentTime() {
        cov_2iw0codqnv().f[5]++;
        cov_2iw0codqnv().s[14]++;
        return this.startPosition;
      }
    }), _defineProperty(_ref, FINISHED, {
      init: function init() {
        cov_2iw0codqnv().f[6]++;
        cov_2iw0codqnv().s[15]++;
      },
        return 1;