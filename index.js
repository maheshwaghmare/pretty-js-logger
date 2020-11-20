/**
 * Log
 *
 * @since 0.0.1
 *
 * @param {string} message
 * @param {mixed} payload
 * @param {string} color
 */
export const log = (message = '', payload = '', color = '#9E9E9E') => {

    // // Disable logger on production.
	// if (process.env.NODE_ENV === `production`) {
	//     return;
	// }

	// Not have log message then return.
	if (!message) {
		return;
	}

	// Print the log.
	console.log(
		`%c ${message}  `,
		`color: ${color}; font-weight: lighter;`,
		payload
	);
};

/**
 * Info
 *
 * @since 0.0.1
 *
 * @param {string} message
 * @param {mixed} payload
 */
export const info = (message = '', payload = '') =>
	log(message, payload, '#03A9F4');

/**
 * Success
 *
 * @since 0.0.1
 *
 * @param {string} message
 * @param {mixed} payload
 */
export const success = (message = '', payload = '') =>
	log(message, payload, '#4CAF50');

/**
 * Error
 *
 * @since 0.0.1
 *
 * @param {string} message
 * @param {mixed} payload
 */
export const error = (message = '', payload = '') =>
	log(message, payload, '#F20404');

/**
 * Warning
 *
 * @since 0.0.1
 *
 * @param {string} message
 * @param {mixed} payload
 */
export const warn = (message = '', payload = '') =>
	log(message, payload, '#FF9800');
