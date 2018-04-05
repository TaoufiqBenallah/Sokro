/**
 * Created by user on 21/11/2017.
 */

app.controller("showsupController",function ($scope,$interval) {

    $scope.visible = true
    $scope.sh = false
    angular.element(window).on("resize",function () {
        var largeur = window.innerWidth
        if(largeur<1020){
            $scope.visible = false
            $scope.sh = true
        }
        else {
            $scope.visible = true
            $scope.sh = false
        }
    })

    $scope.showMenu = function () {
        if($scope.visible == false){
            $scope.visible = true
            angular.element(document.querySelector(".menu-container"))[0].style.background = "#31353e"

        }else {
            $scope.visible = false
            angular.element(document.querySelector(".menu-container"))[0].style.background = "transparent";
        }
    }

    $scope.seen = false
    $scope.src = "profil.jpg"
    $scope.back = "transparent"

    $scope.whileHovering = function () {
        $scope.seen = true
        $scope.src = "profil-added.jpg"
        $scope.back = "#999999"
    }

    $scope.whileLeaving = function () {
        $scope.seen = false
        $scope.src = "profil.jpg"
        $scope.back = "transparent"
    }
})

app.controller("caroselController",function ($scope,$interval,darkViewsProvider) {


    $scope.views = darkViewsProvider.getDarkViews()


    var left = 0;
    var i = $scope.views.length

    var j = -20*(i-1)
    j = -20*(i-5)

    $scope.caroseller = $interval(function () {

        if(left>j){
            left = left - 20
        }else {
            left = 0
        }

        angular.element(document.querySelector("#max-carosel"))[0].style.left = ""+left+"%"
    },5000)


    $scope.droiteClick = function () {
        $interval.cancel($scope.caroseller)

        if(left>j){
            left = left - 20
        }else {
            left=0
        }
        angular.element(document.querySelector("#max-carosel"))[0].style.left = ""+left+"%"

    }

    $scope.leftClick = function () {
        $interval.cancel($scope.caroseller)
        if(left>=0){
            left = j
        }
        else {
            left = left + 20
        }
        angular.element(document.querySelector("#max-carosel"))[0].style.left = ""+left+"%"
    }

    $scope.mouseEntering = function () {
        this.view.visibility = "visible"
        this.view.background = "rgba(0, 0, 0, 0.44);"
    }

    $scope.mouseLeaving = function () {
        this.view.visibility = "hidden"
        this.view.background = "rgba(0, 0, 0, 0);"
    }

    alert(window.innerWidth)

})

app.controller("vueController",function ($scope,darkViewsProvider) {
    $scope.vues = darkViewsProvider.getVues()


    $scope.changeBack = function () {
        this.vue.visibility = "visible"
        this.vue.background = "rgba(0, 0, 0, 0.6);"
    }

    $scope.backBack = function () {
        this.vue.visibility = "hidden"
        this.vue.background = "rgba(0, 0, 0, 0);"
    }


})


app.controller("qualityController",function ($scope,darkViewsProvider) {
    $scope.qualities = darkViewsProvider.getQualities()
    $scope.changeColor = function () {
        this.quality.color = "goldenrod"
        this.quality.margin = "3%"
        this.quality.background = "goldenrod"
    }

    $scope.backColor = function () {

        this.quality.background = "transparent"
        this.quality.margin = "0%"
        this.quality.color = "white"
    }

})


app.controller("genreQuality",function ($scope,darkViewsProvider) {
    $scope.genres = darkViewsProvider.getGenres()

    $scope.changeThing = function () {
        this.genre.color = "goldenrod"
        this.genre.margin = "3%"
        this.genre.background = "goldenrod"
    }

    $scope.backThing = function () {

        this.genre.background = "transparent"
        this.genre.margin = "0%"
        this.genre.color = "white"
    }
})

app.controller("yearController",function ($scope,darkViewsProvider) {
    $scope.years = darkViewsProvider.getYears()

    $scope.changeThiing = function () {
        this.year.color = "goldenrod"
        this.year.margin = "3%"
        this.year.background = "goldenrod"
    }

    $scope.backThiing = function () {

        this.year.background = "transparent"
        this.year.margin = "0%"
        this.year.color = "white"
    }
})




