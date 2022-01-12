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
		console.log();
 	}

	async onWaitReady() {
		await tf.ready();
	}

	processData(jobs) {
		let data = [];
		
		return tf.tensor([1,2,3]);
	}
}

export default MatchMaker;
