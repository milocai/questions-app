"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[id]/opengraph-image/[[...__metadata_id__]]/route",{

/***/ "(app-metadata-image)/./src/app/[id]/opengraph-image.tsx":
/*!******************************************!*\
  !*** ./src/app/[id]/opengraph-image.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alt: () => (/* binding */ alt),\n/* harmony export */   contentType: () => (/* binding */ contentType),\n/* harmony export */   \"default\": () => (/* binding */ Image),\n/* harmony export */   runtime: () => (/* binding */ runtime),\n/* harmony export */   size: () => (/* binding */ size)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-metadata-image)/./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"(app-metadata-image)/./node_modules/.pnpm/@supabase+supabase-js@2.31.0/node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_dist_server_web_exports_image_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/image-response */ \"(app-metadata-image)/./node_modules/.pnpm/next@13.4.9_@babel+core@7.22.8_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/web/spec-extension/image-response.js\");\n\n\n\n// Route segment config\nconst runtime = \"edge\";\n// Image metadata\nconst alt = \"About Acme\";\nconst size = {\n    width: 1200,\n    height: 630\n};\nconst contentType = \"image/png\";\nconst supabaseUrl = \"https://axtdtvhrdxtjtgricily.supabase.co\";\nconst supabaseKey = process.env.SUPABASE_KEY;\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(supabaseUrl, supabaseKey);\n// Image generation\nasync function Image({ params: { id } }) {\n    const question = await supabase.from(\"questions\").select().eq(\"id\", id).single().then(({ data })=>data);\n    return new next_dist_server_web_exports_image_response__WEBPACK_IMPORTED_MODULE_2__.ImageResponse(// ImageResponse JSX element\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            fontSize: 64,\n            background: \"white\",\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"bg-pink-900\",\n                    color: \"white\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Question \",\n                        question.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Milo\\\\Desktop\\\\ProgramacionWeb\\\\curso react\\\\questions-app\\\\src\\\\app\\\\[id]\\\\opengraph-image.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Milo\\\\Desktop\\\\ProgramacionWeb\\\\curso react\\\\questions-app\\\\src\\\\app\\\\[id]\\\\opengraph-image.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1,\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: question.text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Milo\\\\Desktop\\\\ProgramacionWeb\\\\curso react\\\\questions-app\\\\src\\\\app\\\\[id]\\\\opengraph-image.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Milo\\\\Desktop\\\\ProgramacionWeb\\\\curso react\\\\questions-app\\\\src\\\\app\\\\[id]\\\\opengraph-image.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Milo\\\\Desktop\\\\ProgramacionWeb\\\\curso react\\\\questions-app\\\\src\\\\app\\\\[id]\\\\opengraph-image.tsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, this), // ImageResponse options\n    {\n        // For convenience, we can re-use the exported opengraph-image\n        // size config to also set the ImageResponse's width and height.\n        ...size\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1tZXRhZGF0YS1pbWFnZSkvLi9zcmMvYXBwL1tpZF0vb3BlbmdyYXBoLWltYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDVDtBQUUxQyx1QkFBdUI7QUFDaEIsTUFBTUUsVUFBVSxPQUFPO0FBRTlCLGlCQUFpQjtBQUNWLE1BQU1DLE1BQU0sYUFBYTtBQUV6QixNQUFNQyxPQUFPO0lBQ2xCQyxPQUFPO0lBQ1BDLFFBQVE7QUFDVixFQUFFO0FBRUssTUFBTUMsY0FBYyxZQUFZO0FBRXZDLE1BQU1DLGNBQWM7QUFDcEIsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0FBQzVDLE1BQU1DLFdBQVdiLG1FQUFZQSxDQUFDUSxhQUFhQztBQUUzQyxtQkFBbUI7QUFDSixlQUFlSyxNQUFNLEVBQUNDLFFBQVEsRUFBQ0MsRUFBRSxFQUFDLEVBQXlCO0lBQ3hFLE1BQU1DLFdBQVcsTUFBTUosU0FDcEJLLElBQUksQ0FBQyxhQUNMQyxNQUFNLEdBQ05DLEVBQUUsQ0FBQyxNQUFNSixJQUNUSyxNQUFNLEdBQ05DLElBQUksQ0FBQyxDQUFDLEVBQUNDLElBQUksRUFBQyxHQUFLQTtJQUVwQixPQUFPLElBQUl0QixzRkFBYUEsQ0FFcEIsNEJBQTRCO2tCQUM1Qiw4REFBQ3VCO1FBQ0NDLE9BQU87WUFDTEMsVUFBVTtZQUNWQyxZQUFZO1lBQ1p0QixPQUFPO1lBQ1BDLFFBQVE7WUFDUnNCLFNBQVM7WUFDVEMsZUFBZTtRQUNqQjs7MEJBRUEsOERBQUNMO2dCQUNDQyxPQUFPO29CQUNMSyxpQkFBaUI7b0JBQ2pCQyxPQUFPO29CQUNQSCxTQUFTO29CQUNUSSxZQUFZO29CQUNaQyxnQkFBZ0I7Z0JBQ2xCOzBCQUVBLDRFQUFDQzs7d0JBQUU7d0JBQVVqQixTQUFTRCxFQUFFOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDUTtnQkFDQ0MsT0FBTztvQkFDTFUsTUFBTTtvQkFDTlAsU0FBUztvQkFDVEksWUFBWTtvQkFDWkMsZ0JBQWdCO2dCQUNsQjswQkFFQSw0RUFBQ0M7OEJBQUdqQixTQUFTbUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztjQUl2Qix3QkFBd0I7SUFDeEI7UUFDRSw4REFBOEQ7UUFDOUQsZ0VBQWdFO1FBQ2hFLEdBQUdoQyxJQUFJO0lBQ1Q7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1tpZF0vb3BlbmdyYXBoLWltYWdlLnRzeD82YTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcbmltcG9ydCB7SW1hZ2VSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG4vLyBSb3V0ZSBzZWdtZW50IGNvbmZpZ1xyXG5leHBvcnQgY29uc3QgcnVudGltZSA9IFwiZWRnZVwiO1xyXG5cclxuLy8gSW1hZ2UgbWV0YWRhdGFcclxuZXhwb3J0IGNvbnN0IGFsdCA9IFwiQWJvdXQgQWNtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpemUgPSB7XHJcbiAgd2lkdGg6IDEyMDAsXHJcbiAgaGVpZ2h0OiA2MzAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29udGVudFR5cGUgPSBcImltYWdlL3BuZ1wiO1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBcImh0dHBzOi8vYXh0ZHR2aHJkeHRqdGdyaWNpbHkuc3VwYWJhc2UuY29cIjtcclxuY29uc3Qgc3VwYWJhc2VLZXkgPSBwcm9jZXNzLmVudi5TVVBBQkFTRV9LRVk7XHJcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUtleSEpO1xyXG5cclxuLy8gSW1hZ2UgZ2VuZXJhdGlvblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBJbWFnZSh7cGFyYW1zOiB7aWR9fToge3BhcmFtczoge2lkOiBzdHJpbmd9fSkge1xyXG4gIGNvbnN0IHF1ZXN0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwicXVlc3Rpb25zXCIpXHJcbiAgICAuc2VsZWN0KClcclxuICAgIC5lcShcImlkXCIsIGlkKVxyXG4gICAgLnNpbmdsZSgpXHJcbiAgICAudGhlbigoe2RhdGF9KSA9PiBkYXRhIGFzIHtpZDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9KTtcclxuXHJcbiAgcmV0dXJuIG5ldyBJbWFnZVJlc3BvbnNlKFxyXG4gICAgKFxyXG4gICAgICAvLyBJbWFnZVJlc3BvbnNlIEpTWCBlbGVtZW50XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IDY0LFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJnLXBpbmstOTAwXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+UXVlc3Rpb24ge3F1ZXN0aW9uLmlkfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPntxdWVzdGlvbi50ZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gICAgLy8gSW1hZ2VSZXNwb25zZSBvcHRpb25zXHJcbiAgICB7XHJcbiAgICAgIC8vIEZvciBjb252ZW5pZW5jZSwgd2UgY2FuIHJlLXVzZSB0aGUgZXhwb3J0ZWQgb3BlbmdyYXBoLWltYWdlXHJcbiAgICAgIC8vIHNpemUgY29uZmlnIHRvIGFsc28gc2V0IHRoZSBJbWFnZVJlc3BvbnNlJ3Mgd2lkdGggYW5kIGhlaWdodC5cclxuICAgICAgLi4uc2l6ZSxcclxuICAgIH0sXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiSW1hZ2VSZXNwb25zZSIsInJ1bnRpbWUiLCJhbHQiLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZW50VHlwZSIsInN1cGFiYXNlVXJsIiwic3VwYWJhc2VLZXkiLCJwcm9jZXNzIiwiZW52IiwiU1VQQUJBU0VfS0VZIiwic3VwYWJhc2UiLCJJbWFnZSIsInBhcmFtcyIsImlkIiwicXVlc3Rpb24iLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJ0aGVuIiwiZGF0YSIsImRpdiIsInN0eWxlIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInAiLCJmbGV4IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-metadata-image)/./src/app/[id]/opengraph-image.tsx\n");

/***/ })

});