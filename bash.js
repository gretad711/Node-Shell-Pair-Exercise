process.stdout.write('prompt > ');
process.stdin.on('data', (data)=>{
    // const cmd = data.toString().trim()
    let cmd;
    if(data.toString().trim() === 'pwd'){
        cmd = process.cwd();
    }
    else {
        cmd = data.toString().trim()
    }


process.stdout.write('You typed: ' + cmd); 
process.stdout.write('\nprompt > ');
});
