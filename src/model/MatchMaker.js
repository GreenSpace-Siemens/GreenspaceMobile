import * as tf from '@tensorflow/tfjs';

class MatchMaker {
	#data;

 	constructor(jobs) {
		this.onWaitReady();

		console.log("=====Assessing Jobs:=====");
		console.log(jobs);
		console.log();

		this.#data = this.processData(jobs);

 		console.log("=====Created MatchMaker Object=====");
		console.log(this.#data);
 	}

	async onWaitReady() {
		await tf.ready();
	}

	processData(jobs) {
		let data = [1, 2, 3];

		return tf.tensor(data);
	}
}

export default MatchMaker;
