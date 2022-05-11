/* eslint-disable prefer-const */

import {spawn} from 'child_process';
import {createPathTemp} from '../service/controllers/utils.controller';


// eslint-disable-next-line no-unused-vars
const [nodeParam, fileExecuteParam, firstParams, secondParams] = process.argv;


const sendDataToOS = (inputVideoSource: string) => {
  const inputVideoSrc = `${__dirname}/${inputVideoSource}`;
  const outputVideoSrc = createPathTemp(inputVideoSource, 'webm');
  console.log('~ file: index.ts ~ line 14 ~ sendDataToOs ~outputVideosrc', outputVideoSrc);

  const principalCommand = 'ffmpeg';
  const args = [
    'fflags',
    'gentps',
    '-i',
    `${inputVideoSrc}`,
    '-r',
    '24',
    `${outputVideoSrc}`];
  const options = {
    shell: true,
  };

  // const child = spawn(principalCommand, args, options);

  // child.stdout.on('data', (data) => {
  //   console.log(`Output: ${data}`);
  // });

  // child.stderr.on('data', (data) =>{
  //   console.log(`Error: ${data}`);
  // });

  // child.on('close', (code) =>{
  //   console.log('~ file: index.ts ~ line25 ~ child.on ~code', code);
  // });
};

sendDataToOS(firstParams);


