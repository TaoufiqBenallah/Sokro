/**
 * Created by user on 21/11/2017.
 */

app.directive("listViewsDirective",function () {
    return {
        template : '<div class="abs"><img ng-src="assets/images/{{view.src}}" alt="">'
        +'</div> <div class="abs" style="background: {{view.background}};">'
        +'<div style="visibility: {{view.visibility}}; width:100%; height:100%;" class="dark"> <div class="centered-img"> <img src="assets/images/paly-icon.png" alt=""> </div> </div> </div>'
    }
})

app.directive("listeViewsDirective",function () {
    return {
        template : '<div class="absolut"> <img ng-src="assets/images/{{vue.src}}" alt=""> </div> <div style="visibility: {{vue.visibility}};background:{{vue.background}};" class="absolut"> <div class="cnter"> <img src="assets/images/paly-icon.png" alt=""> </div> </div>'
    }
})

app.directive("listDirectiveQuality",function () {
    return {
        template: '<div style="margin-left:{{quality.margin}};" class="symbol"> <div class="symb"> <div style="background:{{quality.background}}" class="sim"></div> </div> </div> <div class="dataText"> <p style="color:{{quality.color}};">{{quality.data}}</p> </div>'
    }
})

app.directive("listDirectiveYear",function () {
    return {
        template: '<div style="margin-left:{{year.margin}};" class="symbol-s"> <div class="symb-s"> <div style="background:{{year.background}}" class="sim-s"></div> </div> </div> <div class="dataText-s"> <p style="color:{{year.color}};">{{year.data}}</p> </div>'
    }
})

app.directive("listGenreQuality",function () {
    return {
        template: '<div style="margin-left:{{genre.margin}};" class="symbol-s"> <div class="symb-s"> <div style="background:{{genre.background}}" class="sim-s"></div> </div> </div> <div class="dataText-s"> <p style="color:{{genre.color}};">{{genre.data}}</p> </div>'
    }
})
