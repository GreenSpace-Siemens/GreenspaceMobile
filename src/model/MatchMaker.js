import * as tf from '@tensorflow/tfjs';

class MatchMaker {
	#data;

 	constructor(jobs) {
		// Waiting for TensorFlow to be ready.
		this.onWaitReady();

		// Retrieved jobs from database
		console.log("=====Assessing Jobs:=====");
		console.log(jobs);
		console.log();

		// Data Preprocessing
		this.#data = this.processData(jobs);

 		console.log("=====Data Processed=====");
		console.log(this.#data);
		
		// Create model
		
 	}

	async onWaitReady() {
		await tf.ready();
	}

	transform(skills, map, val)
	{
		const res = [];

		for (let skill of skills) {
			let s = skill.toLowerCase();
			
			if (!map.has(s)) {
				map.set(s, val++)
			}

			res.push(map.get(s));
		};

		return res;
	}

	processData(jobs) {
		let data = [];

		let transformedData = new Map();
		jobs.forEach((job) => {
			data.push(this.transform(job['description']['Skill Requirements'], transformedData, transformedData.size));
		});

		return data;
	}
}

export default MatchMaker;
