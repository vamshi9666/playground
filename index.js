var rootDom = document.getElementbyId('root');

for ( var i = 0; i < 300; i++ ){
	const temp = document.createElement('div')
	temp.style.border = '1px solid #000000'
	rootDom.appendChild(temp)
}