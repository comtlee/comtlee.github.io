"use strict";
exports.id = "component---src-pages-info-tsx";
exports.ids = ["component---src-pages-info-tsx"];
exports.modules = {

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStyled)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-element-c16c303e.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js");








var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser = typeof document !== 'undefined';

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.registerStyles)(cache, serialized, isStringTag);
  var rules = (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_5__.useInsertionEffectAlwaysWithSyncFallback)(function () {
    return (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.insertStyles)(cache, serialized, isStringTag);
  });

  if (!isBrowser && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( true && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( true && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.w)(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.T);
      }

      if (typeof props.className === 'string') {
        className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.getRegisteredStyles)(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};




/***/ }),

/***/ "./src/pages/info.tsx?export=default":
/*!*******************************************!*\
  !*** ./src/pages/info.tsx?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}


const globalStyles =  false ? 0 : {
  name: "1cqp32y-globalStyles",
  styles: "*{margin:0;padding:0;box-sizing:border-box;font-size:20px;};label:globalStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5nLWEvRGVza3RvcC9ibG9nL3NyYy9wYWdlcy9pbmZvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQndCIiwiZmlsZSI6Ii9Vc2Vycy9zYW5nLWEvRGVza3RvcC9ibG9nL3NyYy9wYWdlcy9pbmZvLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbnR5cGUgSW5mb1BhZ2VQcm9wcyA9IHtcbiAgZGF0YToge1xuICAgIHNpdGU6IHtcbiAgICAgIHNpdGVNZXRhZGF0YToge1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBhdXRob3I6IHN0cmluZztcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuYDtcblxuY29uc3QgVGV4dFN0eWxlID0gY3NzYFxuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBncmF5O1xuYDtcblxuY29uc3QgVGV4dDEgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZTogYm9vbGVhbiB9PmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246ICR7KHsgZGlzYWJsZSB9KSA9PiAoZGlzYWJsZSA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnKX07XG5gO1xuXG5jb25zdCBUZXh0MiA9IHN0eWxlZCgnZGl2Jyk8eyBkaXNhYmxlOiBib29sZWFuIH0+KCh7IGRpc2FibGUgfSkgPT4gKHtcbiAgZm9udFNpemU6ICcxNXB4JyxcbiAgY29sb3I6ICdibHVlJyxcbiAgdGV4dERlY29yYXRpb246IGRpc2FibGUgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJyxcbn0pKTtcblxuY29uc3QgSW5mb1BhZ2U6IEZ1bmN0aW9uQ29tcG9uZW50PEluZm9QYWdlUHJvcHM+ID0gZnVuY3Rpb24gKHtcbiAgZGF0YToge1xuICAgIHNpdGU6IHtcbiAgICAgIHNpdGVNZXRhZGF0YTogeyB0aXRsZSwgZGVzY3JpcHRpb24sIGF1dGhvciB9LFxuICAgIH0sXG4gIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG4gICAgICA8ZGl2IGNzcz17VGV4dFN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICA8VGV4dDEgZGlzYWJsZT17dHJ1ZX0+e2Rlc2NyaXB0aW9ufTwvVGV4dDE+XG4gICAgICA8VGV4dDIgZGlzYWJsZT17dHJ1ZX0+e2F1dGhvcn08L1RleHQyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb1BhZ2U7XG5cbmV4cG9ydCBjb25zdCBtZXRhZGF0YVF1ZXJ5ID0gZ3JhcGhxbGBcbiAge1xuICAgIHNpdGUge1xuICAgICAgc2l0ZU1ldGFkYXRhIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgYXV0aG9yXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const TextStyle =  false ? 0 : {
  name: "krcutg-TextStyle",
  styles: "font-size:18px;font-weight:700;color:gray;label:TextStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5nLWEvRGVza3RvcC9ibG9nL3NyYy9wYWdlcy9pbmZvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnFCIiwiZmlsZSI6Ii9Vc2Vycy9zYW5nLWEvRGVza3RvcC9ibG9nL3NyYy9wYWdlcy9pbmZvLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbnR5cGUgSW5mb1BhZ2VQcm9wcyA9IHtcbiAgZGF0YToge1xuICAgIHNpdGU6IHtcbiAgICAgIHNpdGVNZXRhZGF0YToge1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBhdXRob3I6IHN0cmluZztcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuYDtcblxuY29uc3QgVGV4dFN0eWxlID0gY3NzYFxuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBncmF5O1xuYDtcblxuY29uc3QgVGV4dDEgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZTogYm9vbGVhbiB9PmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246ICR7KHsgZGlzYWJsZSB9KSA9PiAoZGlzYWJsZSA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnKX07XG5gO1xuXG5jb25zdCBUZXh0MiA9IHN0eWxlZCgnZGl2Jyk8eyBkaXNhYmxlOiBib29sZWFuIH0+KCh7IGRpc2FibGUgfSkgPT4gKHtcbiAgZm9udFNpemU6ICcxNXB4JyxcbiAgY29sb3I6ICdibHVlJyxcbiAgdGV4dERlY29yYXRpb246IGRpc2FibGUgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJyxcbn0pKTtcblxuY29uc3QgSW5mb1BhZ2U6IEZ1bmN0aW9uQ29tcG9uZW50PEluZm9QYWdlUHJvcHM+ID0gZnVuY3Rpb24gKHtcbiAgZGF0YToge1xuICAgIHNpdGU6IHtcbiAgICAgIHNpdGVNZXRhZGF0YTogeyB0aXRsZSwgZGVzY3JpcHRpb24sIGF1dGhvciB9LFxuICAgIH0sXG4gIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG4gICAgICA8ZGl2IGNzcz17VGV4dFN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICA8VGV4dDEgZGlzYWJsZT17dHJ1ZX0+e2Rlc2NyaXB0aW9ufTwvVGV4dDE+XG4gICAgICA8VGV4dDIgZGlzYWJsZT17dHJ1ZX0+e2F1dGhvcn08L1RleHQyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb1BhZ2U7XG5cbmV4cG9ydCBjb25zdCBtZXRhZGF0YVF1ZXJ5ID0gZ3JhcGhxbGBcbiAge1xuICAgIHNpdGUge1xuICAgICAgc2l0ZU1ldGFkYXRhIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgYXV0aG9yXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const Text1 = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e2gs5in1",
  label: "Text1"
})("font-size:20px;font-weight:700;text-decoration:", ({
  disable
}) => disable ? 'line-through' : 'none', ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5nLWEvRGVza3RvcC9ibG9nL3NyYy9wYWdlcy9pbmZvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQzhDIiwiZmlsZSI6Ii9Vc2Vycy9zYW5nLWEvRGVza3RvcC9ibG9nL3NyYy9wYWdlcy9pbmZvLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbnR5cGUgSW5mb1BhZ2VQcm9wcyA9IHtcbiAgZGF0YToge1xuICAgIHNpdGU6IHtcbiAgICAgIHNpdGVNZXRhZGF0YToge1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBhdXRob3I6IHN0cmluZztcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuYDtcblxuY29uc3QgVGV4dFN0eWxlID0gY3NzYFxuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBncmF5O1xuYDtcblxuY29uc3QgVGV4dDEgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZTogYm9vbGVhbiB9PmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246ICR7KHsgZGlzYWJsZSB9KSA9PiAoZGlzYWJsZSA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnKX07XG5gO1xuXG5jb25zdCBUZXh0MiA9IHN0eWxlZCgnZGl2Jyk8eyBkaXNhYmxlOiBib29sZWFuIH0+KCh7IGRpc2FibGUgfSkgPT4gKHtcbiAgZm9udFNpemU6ICcxNXB4JyxcbiAgY29sb3I6ICdibHVlJyxcbiAgdGV4dERlY29yYXRpb246IGRpc2FibGUgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJyxcbn0pKTtcblxuY29uc3QgSW5mb1BhZ2U6IEZ1bmN0aW9uQ29tcG9uZW50PEluZm9QYWdlUHJvcHM+ID0gZnVuY3Rpb24gKHtcbiAgZGF0YToge1xuICAgIHNpdGU6IHtcbiAgICAgIHNpdGVNZXRhZGF0YTogeyB0aXRsZSwgZGVzY3JpcHRpb24sIGF1dGhvciB9LFxuICAgIH0sXG4gIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG4gICAgICA8ZGl2IGNzcz17VGV4dFN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICA8VGV4dDEgZGlzYWJsZT17dHJ1ZX0+e2Rlc2NyaXB0aW9ufTwvVGV4dDE+XG4gICAgICA8VGV4dDIgZGlzYWJsZT17dHJ1ZX0+e2F1dGhvcn08L1RleHQyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb1BhZ2U7XG5cbmV4cG9ydCBjb25zdCBtZXRhZGF0YVF1ZXJ5ID0gZ3JhcGhxbGBcbiAge1xuICAgIHNpdGUge1xuICAgICAgc2l0ZU1ldGFkYXRhIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgYXV0aG9yXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl19 */"));
const Text2 = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "e2gs5in0",
  label: "Text2"
})(({
  disable
}) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none'
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5nLWEvRGVza3RvcC9ibG9nL3NyYy9wYWdlcy9pbmZvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2MiLCJmaWxlIjoiL1VzZXJzL3NhbmctYS9EZXNrdG9wL2Jsb2cvc3JjL3BhZ2VzL2luZm8udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxudHlwZSBJbmZvUGFnZVByb3BzID0ge1xuICBkYXRhOiB7XG4gICAgc2l0ZToge1xuICAgICAgc2l0ZU1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgIGF1dGhvcjogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufTtcblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzYFxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBUZXh0U3R5bGUgPSBjc3NgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGdyYXk7XG5gO1xuXG5jb25zdCBUZXh0MSA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlOiBib29sZWFuIH0+YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogJHsoeyBkaXNhYmxlIH0pID0+IChkaXNhYmxlID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZScpfTtcbmA7XG5cbmNvbnN0IFRleHQyID0gc3R5bGVkKCdkaXYnKTx7IGRpc2FibGU6IGJvb2xlYW4gfT4oKHsgZGlzYWJsZSB9KSA9PiAoe1xuICBmb250U2l6ZTogJzE1cHgnLFxuICBjb2xvcjogJ2JsdWUnLFxuICB0ZXh0RGVjb3JhdGlvbjogZGlzYWJsZSA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnLFxufSkpO1xuXG5jb25zdCBJbmZvUGFnZTogRnVuY3Rpb25Db21wb25lbnQ8SW5mb1BhZ2VQcm9wcz4gPSBmdW5jdGlvbiAoe1xuICBkYXRhOiB7XG4gICAgc2l0ZToge1xuICAgICAgc2l0ZU1ldGFkYXRhOiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYXV0aG9yIH0sXG4gICAgfSxcbiAgfSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cbiAgICAgIDxkaXYgY3NzPXtUZXh0U3R5bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgIDxUZXh0MSBkaXNhYmxlPXt0cnVlfT57ZGVzY3JpcHRpb259PC9UZXh0MT5cbiAgICAgIDxUZXh0MiBkaXNhYmxlPXt0cnVlfT57YXV0aG9yfTwvVGV4dDI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvUGFnZTtcblxuZXhwb3J0IGNvbnN0IG1ldGFkYXRhUXVlcnkgPSBncmFwaHFsYFxuICB7XG4gICAgc2l0ZSB7XG4gICAgICBzaXRlTWV0YWRhdGEge1xuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBhdXRob3JcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXX0= */");
const InfoPage = function ({
  data: {
    site: {
      siteMetadata: {
        title,
        description,
        author
      }
    }
  }
}) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
    styles: globalStyles
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    css: TextStyle
  }, title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text1, {
    disable: true
  }, description), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text2, {
    disable: true
  }, author));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoPage);
const metadataQuery = "1003640200";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-info-tsx.js.map