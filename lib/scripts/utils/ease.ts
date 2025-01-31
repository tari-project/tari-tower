// from https://github.com/kaelzhang/easing-functions/

const Ease = () => {
	function quartInOut(e) {
		if ((e *= 2) < 1) return 0.5 * e * e * e * e;
		return -0.5 * ((e -= 2) * e * e * e - 2);
	}
	function sineOut(e) {
		return Math.sin((e * Math.PI) / 2);
	}
	function backIn(e) {
		const t = 1.70158;
		return e * e * ((t + 1) * e - t);
	}
	function backOut(e, t = 1.70158) {
		return --e * e * ((t + 1) * e + t) + 1;
	}
	function backInOut(e) {
		const t = 1.70158 * 1.525;
		if ((e *= 2) < 1) return 0.5 * e * e * ((t + 1) * e - t);
		return 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
	}

	return {
		quartInOut,
		sineOut,
		backIn,
		backOut,
		backInOut,
	};
};

function cubicBezier(x, x1, y1, x2, y2) {
	if (x === 0) return 0;
	if (x === 1) return 1;

	// Helper function to calculate a point on a cubic Bezier curve
	function bezier(t, p0, p1, p2, p3) {
		const cX = 3 * (p1 - p0);
		const bX = 3 * (p2 - p1) - cX;
		const aX = p3 - p0 - cX - bX;

		return ((aX * t + bX) * t + cX) * t + p0;
	}

	// Since the x-coordinate needs to be found, we perform a binary search to find t
	function solveBezier(x, x1, x2, epsilon = 1e-6) {
		let t0 = 0;
		let t1 = 1;
		let t = x;

		while (t0 < t1) {
			const xEstimate = bezier(t, 0, x1, x2, 1);
			if (Math.abs(xEstimate - x) < epsilon) {
				return t;
			}
			if (xEstimate < x) {
				t0 = t;
			} else {
				t1 = t;
			}
			t = (t0 + t1) / 2;
		}

		return t;
	}

	// Find the corresponding t for the given x using the x1, x2 values
	const t = solveBezier(x, x1, x2);

	// Calculate the y value using the y1, y2 values
	return bezier(t, 0, y1, y2, 1);
}

export function customEasing(x) {
	return cubicBezier(x, 0.3, 0, 0, 1);
}

const ease = Ease();
export default ease;
