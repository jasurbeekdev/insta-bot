import fs from 'fs';
import path from 'path';

const read = (dir) =>
	JSON.parse(fs.readFileSync(path.normalize(`${process.cwd()}/model/${dir}`)));

const write = (dir, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(
			path.normalize(`${process.cwd()}/model/${dir}`),
			JSON.stringify(data, null, 4),
			(err) => {
				if (err) reject(err);
				resolve(data);
			}
		);
	});
};

export { read, write };
