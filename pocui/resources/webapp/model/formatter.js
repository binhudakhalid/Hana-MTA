sap.ui.define([
	"sap/m/Text"
	], function (Text) {
		"use strict";

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},
			priceState: function (iPrice) {
			if (iPrice < 50) {
				return "Success";
			} else if (iPrice >= 100 && iPrice < 250) {
				return "None";
			} else if (iPrice >= 250 && iPrice < 2000) {
				return "Warning";
			} else {
				return "Error";
			}
		}
		};

	}
);