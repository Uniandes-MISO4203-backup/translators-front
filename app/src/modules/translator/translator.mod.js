(function (ng) {
    var mod = ng.module('translatorModule', ['ngCrud']);

    mod.constant('translatorContext', 'translators');

    mod.constant('translatorModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }, {
                name: 'picture',
                displayName: 'Picture',
                type: 'String',
                required: true
            }, {
                name: 'birthDate',
                displayName: 'Birth Date',
                type: 'Date',
                required: true
            },
            {
                name: 'email',
                displayName: 'email',
                type: 'String',
                required: true
            }],
        childs: [{
                name: 'education',
                displayName: 'Education',
                //template: '', //override generic template
                ctrl: 'TranslatoreducationCtrl',
                owned: true
            }, {
                name: 'languages',
                displayName: 'Languages',
                //template: '', //override generic template
                ctrl: 'TranslatorlanguagesCtrl',
                owned: false
            }, {
                name: 'knowledgeAreas',
                displayName: 'Knowledge Areas',
                //template: '', //override generic template
                ctrl: 'TranslatorknowledgeAreasCtrl',
                owned: false
            },{
                name: 'resume',
                displayName: 'Resumé',
                template: 'src/modules/resume/resume.tpl.html', //override generic template
                ctrl: 'resumeCtrl',
                owned: false
            },{
                name: 'trajectories',
                displayName: 'Professional Trajectory',
                //template: 'src/modules/trajectory/trajectory.tpl.html', //override generic template
                ctrl: 'TranslatorTrajectoryCtrl',
                owned: false
            }



        ]});
})(window.angular);
