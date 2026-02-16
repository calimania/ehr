var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { MemoryStorage, indexSearchParameterBundle, indexStructureDefinitionBundle } from '@medplum/core';
import { SEARCH_PARAMETER_BUNDLE_FILES, readJson } from '@medplum/definitions';
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'node:util';
var Request = /** @class */ (function () {
    function Request(input, init) {
        if (init === void 0) { init = {}; }
        var _a, _b, _c, _d;
        this.url = typeof input === 'string' ? input : ((_a = input === null || input === void 0 ? void 0 : input.url) !== null && _a !== void 0 ? _a : '');
        this.method = ((_b = init.method) !== null && _b !== void 0 ? _b : 'GET').toUpperCase();
        this.headers = ((_c = init.headers) !== null && _c !== void 0 ? _c : {});
        this.body = init.body;
        this.signal = (_d = init.signal) !== null && _d !== void 0 ? _d : null;
    }
    Request.prototype.clone = function () {
        return new Request(this.url, {
            method: this.method,
            headers: __assign({}, this.headers),
            body: this.body,
            signal: this.signal,
        });
    };
    return Request;
}());
Object.defineProperty(globalThis.window, 'Request', { value: Request });
Object.defineProperty(globalThis.window, 'TextDecoder', { value: TextDecoder });
Object.defineProperty(globalThis.window, 'TextEncoder', { value: TextEncoder });
var getComputedStyle = window.getComputedStyle;
window.getComputedStyle = function (elt) { return getComputedStyle(elt); };
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(function (query) { return ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }); }),
});
var ResizeObserver = /** @class */ (function () {
    function ResizeObserver() {
    }
    ResizeObserver.prototype.observe = function () { };
    ResizeObserver.prototype.unobserve = function () { };
    ResizeObserver.prototype.disconnect = function () { };
    return ResizeObserver;
}());
window.ResizeObserver = ResizeObserver;
// jsdom does not implement scrollIntoView
// See: https://github.com/jsdom/jsdom/issues/1695#issuecomment-449931788
Element.prototype.scrollIntoView = jest.fn();
indexStructureDefinitionBundle(readJson('fhir/r4/profiles-types.json'));
indexStructureDefinitionBundle(readJson('fhir/r4/profiles-resources.json'));
indexStructureDefinitionBundle(readJson('fhir/r4/profiles-medplum.json'));
for (var _i = 0, SEARCH_PARAMETER_BUNDLE_FILES_1 = SEARCH_PARAMETER_BUNDLE_FILES; _i < SEARCH_PARAMETER_BUNDLE_FILES_1.length; _i++) {
    var filename = SEARCH_PARAMETER_BUNDLE_FILES_1[_i];
    indexSearchParameterBundle(readJson(filename));
}
Object.defineProperty(globalThis.window, 'sessionStorage', { value: new MemoryStorage() });
