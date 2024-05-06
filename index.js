function longestSubstring(text) {
		const characters = text.split("");
    let pointer = 1;
    let longestWord = "";
    let currentWord = "";
    while (pointer < characters.length) {
    	const character = characters[pointer - 1];
    	if (currentWord.indexOf(character) < 0) {
      	currentWord += character;        
      	pointer += 1;
      }	else {
      	currentWord = currentWord.substring(1);
      }
      
      if (currentWord.length > longestWord.length) 
      	longestWord = currentWord;
        
    }
    
    console.log(`Word: ${text} - response: ${longestWord}`);
}

longestSubstring("bbbbb");
longestSubstring("abcabcbb");
longestSubstring("pwwkew");
longestSubstring("abccdefggabcdef")

