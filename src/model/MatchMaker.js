import * as tf from '@tensorflow/tfjs';
import * as KMeans from 'tf-kmeans';

// MatchMaker is model that clusters the job seekers' skills to the job requirements
class MatchMaker {
	#data;
	#kmeans;
	#transformedData;
	
	// Preprocesses the jobs data and creates the Kmeans ML model
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
		console.log();
		
		// Create model
		this.createModel();
 	}

	// Ensures TensorFlow is ready to be used
	async onWaitReady() {
		await tf.ready();
	}

	// Transforms the skills data to meaningful numerical data.
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

	// Processes all existing training data for the model to use.
	processData(jobs) {
		let data = [];
		
		console.log('=====Skills Data Received=====');
		this.#transformedData = new Map();
		jobs.forEach((job) => {
			const skillsData = job['description']['Skill Requirements'];
			console.log(skillsData);
			data.push(this.transform(skillsData, this.#transformedData, this.#transformedData.size));
		});

		console.log();

		return data;
	}

	createModel() {
		this.#kmeans = new KMeans.default({
			maxIter: 30,
			distanceFunction: KMeans.default.EuclideanDistance
		});

		console.log('=====Created KMeans model=====');
		console.log(this.#kmeans);
		console.log();
	}

	// Trains the Kmeans model and returns the clusters as predictions
	train(skills) {
		console.log('=====Received and Transformed User Skills=====');
		console.log(skills);

		const userSkills = this.transform(skills, this.#transformedData, this.#transformedData.size);
		console.log(userSkills)

		console.log()

		console.log('=====Tensor Created=====');
		let tensor = tf.tensor(this.#data);
		
		tensor.print();
		console.log();

		console.log('=====Training Model and Receiving Predictions=====');
		const predictions = this.#kmeans.Train(tensor);		
		console.log(predictions);
		console.log();

		console.log('=====Results=====');
		console.log('Assigned to ', predictions.arraySync());
		console.log('Centroids used are ', this.#kmeans.Centroids().arraySync());
		console.log('Prediction for given value is');
		
		tensor = tf.tensor(userSkills);
		
		this.#kmeans.Predict(tensor).print();

		return [1,2,3,4,4];
	}
}

export default MatchMaker;
