//https://teachablemachine.withgoogle.com/models/U45rD7Nw8/


function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/U45rD7Nw8/model.json', modelReady);
}

function modelReady(){
    Classifier.classify(gotResults);
}