/**
 * Created with CRMeAndroidApps.
 * User: eduardcomabig
 * Date: 2014-03-25
 * Time: 07:28 AM
 * To change this template use Tools | Templates.
 */
head.js("bower_components/jquery/dist/jquery.min.js", //
    "bower_components/bootstrap/dist/js/bootstrap.min.js", //
    "bower_components/bootstrap/dist/css/bootstrap.css", "bower_components/bootstrap/dist/css/bootstrap-theme.css", //
    "bower_components/rwm-phoenix/dist/phoenix.js"); //
head.ready(function readyF() {
    $(".row").hide();
    $("#login").fadeIn();
    $("#back").click(function() {
        $("#user").val("");
        $("#pin").val("");
        $("#cnm").val("");
        $("#vp").val("");
        $(".row").hide();
        $("#login").fadeIn();
    });
    $("#submit").click(function() {
        if($("#user").val() == "") {
            alert("Empty user!");
            return;
        }
        if($("#pin").val() == "") {
            alert("Empty pin!");
            return;
        }
        var _user = $("#user").val();
        var _pin = $("#pin").val();
        phoenix.userId = 'debug'; //Do NOT store your API Key on a script.
        phoenix.apiKey = 'F7F7F40AAFE6A2C4C5E741E14983B386F1333F06';
        phoenix.send({
            cgrp: '$members',
            cmnd: 'login',
            prms: {
                'cid': _user,
                'pin': _pin,
            }
        }, function callbackF(data) {
            //alert(data);
            var d = JSON.parse(data);
            if(d.exitCode === 0) alert(JSON.stringify(d.response['error']));
            else {
                $("#cnm").val(JSON.stringify(d.response['cnm']));
                $("#vp").val(JSON.stringify(d.response['VisBal']));
                $(".row").hide();
                $("#info").fadeIn();
            }
            //alert(JSON.stringify(d.response['cid']));
            //alert(JSON.stringify(d.response['cti']));
            //alert(JSON.stringify(d.response['cnm']));
            //alert(JSON.stringify(d.response['ctc']));
            //alert(JSON.stringify(d.response['ctd']));
            //alert(JSON.stringify(d.response['VisBal']));
            //alert(JSON.stringify(d.response['HidBal']));
            //alert(JSON.stringify(d.response['LptBal']));
            //alert(JSON.stringify(d.response['NecBal']));
            //alert(JSON.stringify(d.response['CecBal']));
        });
    });
});