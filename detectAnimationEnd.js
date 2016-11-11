/**
 * detectAnimationEnd
 * This Function will return an object that has keys {transition, animation}. Each
 * will have its associated "end" event. Just pluck the one you want to use.
 * Of course, if nothing matches. You will get back an empty object. You need to
 * make sure you test for this in your code.
 * * * * * * * * * * * * * * * * * * * * * * * *
 * @function effectEventEndDetect
 * @param {array} effects - Array of objects to facilitate behavior matching
 * @param {method} effectTypes - returns an object of specified type: animation/transition
 * @return {object}
 */

function detectAnimationEnd(effect) {
	const el = document.createElement('__testelement__');

	const effects = [
		{
			lower: 'transition',
			upper: 'Transition'
		},
		{
			lower: 'animation',
			upper: 'Animation'
		}
	]

	const effectTypes = effect => ({
		[effect.lower]: `${effect.lower}end`,
		[`O${effect.upper}`]: `o${effect.upper}End`,
		[`Moz${effect.upper}`]: `${effect.lower}end`,
		[`Webkit${effect.upper}`]: `webkit${effect.upper}End`
	})


	const effectsObject = effects.reduce((p,c) => {
		Object.entries(effectTypes(c)).forEach(([k,v]) => {
			if (el.style[k] !== undefined) {
				p[c.lower] = v;
				p.enabled = true;
			}
		})
		return p;
	}, { enabled: false });

	return (effect in effectsObj) ? effectsObj[effect] : effectsObj;
};

export default detectAnimationEnd;
