import * as tf from '@tensorflow/tfjs';

const model = async () => {
	await tf.ready();
	console.log("Tensorflow Model Ready");
}

export default model;
