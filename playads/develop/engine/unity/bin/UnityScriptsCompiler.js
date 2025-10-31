if ( TRACE ) { TRACE( JSON.parse( '["DelayExecuter#Awake","DelayExecuter#Execute","DelayExecuter#Execute$1","DelayExecuter#ExecuteCoroutine","DelayExecuter#TurnOn","DelayExecuter#TurnOff","DelayExecuter#DelayExecute","DelayExecuter#Delay","ShakeCam#init","ShakeCam#Update","ShakeCam#Shake","SimpleFloating#init","SimpleFloating#Awake","SimpleFloating#Update","SimpleFloating#SetAnimOffset","SimpleFloating#Reset","TouchDownUp#OnPointerDown","TouchDownUp#OnPointerUp"]' ) ); }
/**
 * @version 1.0.9435.29551
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*DelayExecuter start.*/
    /**
     * Выполняет команду после задержки
     *
     * @public
     * @class DelayExecuter
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("DelayExecuter", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            delay: 0,
            execute: null,
            autoExecute: false,
            turnedOff: false,
            unscaledTime: false,
            debug: false
        },
        methods: {
            /*DelayExecuter.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DelayExecuter#Awake", this ); }

                if (this.autoExecute) {
                    if (this.delay > 0) {
                        this.ExecuteCoroutine();
                    } else {
                        if (this.turnedOff === false) {
                            this.execute != null ? this.execute.Invoke() : null;
                        }
                    }
                }
            },
            /*DelayExecuter.Awake end.*/

            /*DelayExecuter.Execute start.*/
            Execute: function () {
if ( TRACE ) { TRACE( "DelayExecuter#Execute", this ); }

                if (this.turnedOff) {
                    return;
                }

                this.DelayExecute(this.delay, Bridge.fn.bind(this, function () {

                    if (!this.turnedOff) {
                        this.execute != null ? this.execute.Invoke() : null;
                    }
                }));
            },
            /*DelayExecuter.Execute end.*/

            /*DelayExecuter.Execute$1 start.*/
            Execute$1: function (delay) {
if ( TRACE ) { TRACE( "DelayExecuter#Execute$1", this ); }

                this.DelayExecute(delay, Bridge.fn.bind(this, function () {

                    if (!this.turnedOff) {
                        this.execute != null ? this.execute.Invoke() : null;
                    }
                }));
            },
            /*DelayExecuter.Execute$1 end.*/

            /*DelayExecuter.ExecuteCoroutine start.*/
            ExecuteCoroutine: function () {
if ( TRACE ) { TRACE( "DelayExecuter#ExecuteCoroutine", this ); }

                if (this.turnedOff) {
                    return;
                }

                this.StartCoroutine$1(this.Delay(this.delay, Bridge.fn.bind(this, function () {

                    if (!this.turnedOff) {
                        this.execute != null ? this.execute.Invoke() : null;
                    }
                })));
            },
            /*DelayExecuter.ExecuteCoroutine end.*/

            /*DelayExecuter.TurnOn start.*/
            TurnOn: function () {
if ( TRACE ) { TRACE( "DelayExecuter#TurnOn", this ); }

                this.turnedOff = false;
            },
            /*DelayExecuter.TurnOn end.*/

            /*DelayExecuter.TurnOff start.*/
            TurnOff: function () {
if ( TRACE ) { TRACE( "DelayExecuter#TurnOff", this ); }

                this.turnedOff = true;
            },
            /*DelayExecuter.TurnOff end.*/

            /*DelayExecuter.DelayExecute start.*/
            DelayExecute: function (time, onDelay) {
if ( TRACE ) { TRACE( "DelayExecuter#DelayExecute", this ); }

                if (time !== 0) {
                    /* LeanTween.delayedCall(gameObject, time, () =>
                    {
                       if (!turnedOff)
                       {
                           onDelay?.Invoke();
                       }

                    }).setIgnoreTimeScale(unscaledTime);*/
                    this.StartCoroutine$1(this.Delay(time, onDelay));
                } else {
                    if (!this.turnedOff) {
                        !Bridge.staticEquals(onDelay, null) ? onDelay() : null;
                    }
                }
            },
            /*DelayExecuter.DelayExecute end.*/

            /*DelayExecuter.Delay start.*/
            Delay: function (time, onDelay) {
if ( TRACE ) { TRACE( "DelayExecuter#Delay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //Debug.Log($"Delay:{gameObject}, time:{time}");
                                        if (time > 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 1: {
                                    t = 0;
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ( t <= 1 ) {
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 8;
                                    continue;
                                }
                                case 3: {
                                    if (this.turnedOff) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 4: {
                                    return false;
                                }
                                case 5: {
                                    $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    t += (this.unscaledTime ? UnityEngine.Time.unscaledTime : UnityEngine.Time.deltaTime) / time;
                                    $step = 2;
                                    continue;
                                }
                                case 8: {
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    !Bridge.staticEquals(onDelay, null) ? onDelay() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DelayExecuter.Delay end.*/


        },
        overloads: {
            "Execute(float)": "Execute$1"
        }
    });
    /*DelayExecuter end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ShakeCam start.*/
    Bridge.define("ShakeCam", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            originPosition: null,
            originRotation: null,
            shake_decay: 0,
            shake_intensity: 0,
            isShake: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ShakeCam#init", this ); }

                this.originPosition = new UnityEngine.Vector3();
                this.originRotation = new UnityEngine.Quaternion();
            }
        },
        methods: {
            /*ShakeCam.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ShakeCam#Update", this ); }

                if (!this.isShake) {
                    return;
                }

                if (this.shake_intensity > 0) {
                    this.transform.rotation = new pc.Quat( this.originRotation.x + UnityEngine.Random.Range$1(-this.shake_intensity, this.shake_intensity) * 0.1, this.originRotation.y + UnityEngine.Random.Range$1(-this.shake_intensity, this.shake_intensity) * 0.1, this.originRotation.z + UnityEngine.Random.Range$1(-this.shake_intensity, this.shake_intensity) * 0.1, this.originRotation.w + UnityEngine.Random.Range$1(-this.shake_intensity, this.shake_intensity) * 0.1 );

                    this.shake_intensity -= this.shake_decay * UnityEngine.Time.deltaTime;
                } else {
                    if (this.isShake) {
                        this.isShake = false;
                        this.transform.rotation = this.originRotation.$clone();
                    }
                }
            },
            /*ShakeCam.Update end.*/

            /*ShakeCam.Shake start.*/
            Shake: function (intensity, shakeDekay) {
if ( TRACE ) { TRACE( "ShakeCam#Shake", this ); }

                this.originRotation = this.transform.rotation.$clone();
                this.shake_intensity = intensity;
                this.shake_decay = shakeDekay;
                this.isShake = true;
            },
            /*ShakeCam.Shake end.*/


        }
    });
    /*ShakeCam end.*/

    /*SimpleFloating start.*/
    Bridge.define("SimpleFloating", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            animPos: false,
            posAmplitude: null,
            posSpeed: null,
            animRot: false,
            rotAmplitude: null,
            rotSpeed: null,
            animScale: false,
            scaleAmplitude: null,
            scaleSpeed: null,
            origPos: null,
            origRot: null,
            origScale: null,
            startAnimOffset: 0,
            time: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleFloating#init", this ); }

                this.posAmplitude = new UnityEngine.Vector3();
                this.posSpeed = new UnityEngine.Vector3();
                this.rotAmplitude = new UnityEngine.Vector3();
                this.rotSpeed = new UnityEngine.Vector3();
                this.scaleAmplitude = new UnityEngine.Vector3();
                this.scaleSpeed = new UnityEngine.Vector3();
                this.origPos = new UnityEngine.Vector3();
                this.origRot = new UnityEngine.Vector3();
                this.origScale = new UnityEngine.Vector3();
                this.animPos = true;
                this.posAmplitude = new pc.Vec3( 1, 1, 1 );
                this.posSpeed = new pc.Vec3( 1, 1, 1 );
                this.animRot = true;
                this.rotAmplitude = new pc.Vec3( 1, 1, 1 ).clone().scale( 20 );
                this.rotSpeed = new pc.Vec3( 1, 1, 1 );
                this.animScale = false;
                this.scaleAmplitude = new pc.Vec3( 1, 1, 1 ).clone().scale( 0.1 );
                this.scaleSpeed = new pc.Vec3( 1, 1, 1 );
                this.startAnimOffset = 0;
            }
        },
        methods: {
            /*SimpleFloating.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleFloating#Awake", this ); }

                this.origPos = this.transform.localPosition.$clone();
                this.origRot = this.transform.eulerAngles.$clone();
                this.origScale = this.transform.localScale.$clone();
                this.startAnimOffset = UnityEngine.Random.Range$1(0.0, 540.0); // so that the xyz anims are already offset from each other since the start
            },
            /*SimpleFloating.Awake end.*/

            /*SimpleFloating.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SimpleFloating#Update", this ); }

                this.time += UnityEngine.Time.deltaTime;

                /* position */
                if (this.animPos) {
                    var pos = new UnityEngine.Vector3();
                    pos.x = this.origPos.x + this.posAmplitude.x * Math.sin(this.posSpeed.x * this.time + this.startAnimOffset);
                    pos.y = this.origPos.y + this.posAmplitude.y * Math.sin(this.posSpeed.y * this.time + this.startAnimOffset);
                    pos.z = this.origPos.z + this.posAmplitude.z * Math.sin(this.posSpeed.z * this.time + this.startAnimOffset);
                    this.transform.localPosition = pos.$clone();
                }

                /* rotation */
                if (this.animRot) {
                    var rot = new UnityEngine.Vector3();
                    rot.x = this.origRot.x + this.rotAmplitude.x * Math.sin(this.rotSpeed.x * this.time + this.startAnimOffset);
                    rot.y = this.origRot.y + this.rotAmplitude.y * Math.sin(this.rotSpeed.y * this.time + this.startAnimOffset);
                    rot.z = this.origRot.z + this.rotAmplitude.z * Math.sin(this.rotSpeed.z * this.time + this.startAnimOffset);
                    this.transform.eulerAngles = rot.$clone();
                }

                /* scale */
                if (this.animScale) {
                    var scale = new UnityEngine.Vector3();
                    scale.x = this.origScale.x * (1 + this.scaleAmplitude.x * Math.sin(this.scaleSpeed.x * this.time + this.startAnimOffset));
                    scale.y = this.origScale.y * (1 + this.scaleAmplitude.y * Math.sin(this.scaleSpeed.y * this.time + this.startAnimOffset));
                    scale.z = this.origScale.z * (1 + this.scaleAmplitude.z * Math.sin(this.scaleSpeed.z * this.time + this.startAnimOffset));
                    this.transform.localScale = scale.$clone();
                }
            },
            /*SimpleFloating.Update end.*/

            /*SimpleFloating.SetAnimOffset start.*/
            SetAnimOffset: function (offset) {
if ( TRACE ) { TRACE( "SimpleFloating#SetAnimOffset", this ); }

                this.startAnimOffset = offset;
            },
            /*SimpleFloating.SetAnimOffset end.*/

            /*SimpleFloating.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "SimpleFloating#Reset", this ); }

                this.time = 0;
            },
            /*SimpleFloating.Reset end.*/


        }
    });
    /*SimpleFloating end.*/

    /*TouchDownUp start.*/
    Bridge.define("TouchDownUp", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            disableMultitouch: false,
            onDown: null,
            onUp: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*TouchDownUp.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "TouchDownUp#OnPointerDown", this ); }

                if (this.disableMultitouch) {
                    if (eventData.pointerId > 0) {
                        return;
                    }
                }

                this.onDown != null ? this.onDown.Invoke() : null;
            },
            /*TouchDownUp.OnPointerDown end.*/

            /*TouchDownUp.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "TouchDownUp#OnPointerUp", this ); }

                if (this.disableMultitouch) {
                    if (eventData.pointerId > 0) {
                        return;
                    }
                }
                this.onUp != null ? this.onUp.Invoke() : null;
            },
            /*TouchDownUp.OnPointerUp end.*/


        }
    });
    /*TouchDownUp end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine.Events","UnityEngine","UnityEngine.EventSystems"];

    /*DelayExecuter start.*/
    $m("DelayExecuter", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Delay","t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0},{"n":"onDelay","pt":Function,"ps":1}],"sn":"Delay","rt":$n[1].IEnumerator,"p":[$n[0].Single,Function]},{"a":1,"n":"DelayExecute","t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0},{"n":"onDelay","pt":Function,"ps":1}],"sn":"DelayExecute","rt":$n[0].Void,"p":[$n[0].Single,Function]},{"a":2,"n":"Execute","t":8,"sn":"Execute","rt":$n[0].Void},{"a":2,"n":"Execute","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"Execute$1","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"ExecuteCoroutine","t":8,"sn":"ExecuteCoroutine","rt":$n[0].Void},{"a":2,"n":"TurnOff","t":8,"sn":"TurnOff","rt":$n[0].Void},{"a":2,"n":"TurnOn","t":8,"sn":"TurnOn","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoExecute","t":4,"rt":$n[0].Boolean,"sn":"autoExecute","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"debug","t":4,"rt":$n[0].Boolean,"sn":"debug","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"execute","t":4,"rt":$n[2].UnityEvent,"sn":"execute"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"turnedOff","t":4,"rt":$n[0].Boolean,"sn":"turnedOff","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"unscaledTime","t":4,"rt":$n[0].Boolean,"sn":"unscaledTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DelayExecuter end.*/

    /*ShakeCam start.*/
    $m("ShakeCam", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Shake","t":8,"pi":[{"n":"intensity","pt":$n[0].Single,"ps":0},{"n":"shakeDekay","pt":$n[0].Single,"ps":1}],"sn":"Shake","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"isShake","t":4,"rt":$n[0].Boolean,"sn":"isShake","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"originPosition","t":4,"rt":$n[3].Vector3,"sn":"originPosition"},{"a":1,"n":"originRotation","t":4,"rt":$n[3].Quaternion,"sn":"originRotation"},{"a":1,"n":"shake_decay","t":4,"rt":$n[0].Single,"sn":"shake_decay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"shake_intensity","t":4,"rt":$n[0].Single,"sn":"shake_intensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ShakeCam end.*/

    /*SimpleFloating start.*/
    $m("SimpleFloating", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"SetAnimOffset","t":8,"pi":[{"n":"offset","pt":$n[0].Single,"ps":0}],"sn":"SetAnimOffset","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"animPos","t":4,"rt":$n[0].Boolean,"sn":"animPos","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"animRot","t":4,"rt":$n[0].Boolean,"sn":"animRot","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"animScale","t":4,"rt":$n[0].Boolean,"sn":"animScale","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"origPos","t":4,"rt":$n[3].Vector3,"sn":"origPos"},{"a":1,"n":"origRot","t":4,"rt":$n[3].Vector3,"sn":"origRot"},{"a":1,"n":"origScale","t":4,"rt":$n[3].Vector3,"sn":"origScale"},{"a":2,"n":"posAmplitude","t":4,"rt":$n[3].Vector3,"sn":"posAmplitude"},{"a":2,"n":"posSpeed","t":4,"rt":$n[3].Vector3,"sn":"posSpeed"},{"a":2,"n":"rotAmplitude","t":4,"rt":$n[3].Vector3,"sn":"rotAmplitude"},{"a":2,"n":"rotSpeed","t":4,"rt":$n[3].Vector3,"sn":"rotSpeed"},{"a":2,"n":"scaleAmplitude","t":4,"rt":$n[3].Vector3,"sn":"scaleAmplitude"},{"a":2,"n":"scaleSpeed","t":4,"rt":$n[3].Vector3,"sn":"scaleSpeed"},{"a":1,"n":"startAnimOffset","t":4,"rt":$n[0].Single,"sn":"startAnimOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleFloating end.*/

    /*TouchDownUp start.*/
    $m("TouchDownUp", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"disableMultitouch","t":4,"rt":$n[0].Boolean,"sn":"disableMultitouch","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onDown","t":4,"rt":$n[2].UnityEvent,"sn":"onDown"},{"a":2,"n":"onUp","t":4,"rt":$n[2].UnityEvent,"sn":"onUp"}]}; }, $n);
    /*TouchDownUp end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
