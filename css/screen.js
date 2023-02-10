*{
    box-sizing: border-box;
    background-color: wheat;
}

.container{
    max-width: 44em;
    margin: 0 auto;
}

h2{
    font-size: 1.4em;
    padding: 1em 0.8em;
    text-align: center;
}

form{
    padding: 0.8em;
}

form ol {
    display: flex;
    flex-direction: column;
}

form ol li{
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
}

form ol li label{
    margin-bottom: 0.4em;
}

form ol li input {
    background-color: #CFEDFF;
    border: 1px solid #444b53;
    border-radius: 8px;
    font-family: auto;
    font-size: 16px;
    height: 48px;
    margin-bottom: 1em;
    padding: 0 12px;
    box-sizing: border-box;
    vertical-align: middle;
}

li input:hover, li input:focus-within, li input:focus, li select:hover, li select:focus-within, li select:focus {
    background-color: #B1E2FF;
}

form ol li input:focus-visible {
    outline: 0;
}

form ol li button{
    padding: 0 2em;
    background: inherit;
    background-color: #0e72ed;
    margin: auto;
    color: #fff;
    border: 0;
    border-radius: 0.3em;
    cursor: pointer;
    height: 3em;
    width: max-content;
}