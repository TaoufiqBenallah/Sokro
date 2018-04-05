/**
 * Created by user on 21/11/2017.
 */


var listDarkViews = [
    {"src":"movie1.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie2.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie3.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie4.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie1.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie6.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie3.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie7.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie2.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie3.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"}
]

var listeDarkVues = [
    {"src":"movie6.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie1.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie2.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie3.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie4.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie1.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie6.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie3.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie7.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie2.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie6.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie3.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie7.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie2.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie6.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie3.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie7.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie2.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie3.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"},
    {"src":"movie1.jpg","visibility":"hidden","background":"rgba(0,0,0,0)"}
]

var listQualities = [
    {"background":"transparent","title":"","margin":"","color":"white","data":"DVDRIP"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"BDRIP"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"R6"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"HD 720P"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"HD 1080P"}
]

var listYears = [
    {"background":"transparent","title":"","margin":"","color":"white","data":"2011"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"2012"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"2013"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"2014"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"2015"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"2016"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"2017"}
]


var listGenres = [
    {"background":"transparent","title":"","margin":"","color":"white","data":"Action"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Animation"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Aventure"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Biopic"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Histoique"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Policier"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Médical"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Guerre"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Romance"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Westren"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Comédie"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Comédie Dramatique"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Comédie Musicale"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Epouvante-Horreur"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Famille"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Fantasqiue"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Histoique"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Policier"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Médical"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Guerre"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Romance"},
    {"background":"transparent","title":"","margin":"","color":"white","data":"Westren"},
]


app.service("darkViewsProvider",function () {
    this.getDarkViews = function () {
        return listDarkViews;
    }
    this.getVues = function () {
        return listeDarkVues
    }

    this.getQualities = function () {
        return listQualities
    }

    this.getGenres = function () {
        return listGenres
    }

    this.getYears = function () {
        return listYears
    }
})