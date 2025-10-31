var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3498 = root || request.c( 'UnityEngine.JointSpring' )
  var i3499 = data
  i3498.spring = i3499[0]
  i3498.damper = i3499[1]
  i3498.targetPosition = i3499[2]
  return i3498
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3500 = root || request.c( 'UnityEngine.JointMotor' )
  var i3501 = data
  i3500.m_TargetVelocity = i3501[0]
  i3500.m_Force = i3501[1]
  i3500.m_FreeSpin = i3501[2]
  return i3500
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3502 = root || request.c( 'UnityEngine.JointLimits' )
  var i3503 = data
  i3502.m_Min = i3503[0]
  i3502.m_Max = i3503[1]
  i3502.m_Bounciness = i3503[2]
  i3502.m_BounceMinVelocity = i3503[3]
  i3502.m_ContactDistance = i3503[4]
  i3502.minBounce = i3503[5]
  i3502.maxBounce = i3503[6]
  return i3502
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3504 = root || request.c( 'UnityEngine.JointDrive' )
  var i3505 = data
  i3504.m_PositionSpring = i3505[0]
  i3504.m_PositionDamper = i3505[1]
  i3504.m_MaximumForce = i3505[2]
  i3504.m_UseAcceleration = i3505[3]
  return i3504
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3506 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3507 = data
  i3506.m_Spring = i3507[0]
  i3506.m_Damper = i3507[1]
  return i3506
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3508 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3509 = data
  i3508.m_Limit = i3509[0]
  i3508.m_Bounciness = i3509[1]
  i3508.m_ContactDistance = i3509[2]
  return i3508
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3510 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3511 = data
  i3510.m_ExtremumSlip = i3511[0]
  i3510.m_ExtremumValue = i3511[1]
  i3510.m_AsymptoteSlip = i3511[2]
  i3510.m_AsymptoteValue = i3511[3]
  i3510.m_Stiffness = i3511[4]
  return i3510
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3512 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3513 = data
  i3512.m_LowerAngle = i3513[0]
  i3512.m_UpperAngle = i3513[1]
  return i3512
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3515 = data
  i3514.m_MotorSpeed = i3515[0]
  i3514.m_MaximumMotorTorque = i3515[1]
  return i3514
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3517 = data
  i3516.m_DampingRatio = i3517[0]
  i3516.m_Frequency = i3517[1]
  i3516.m_Angle = i3517[2]
  return i3516
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3519 = data
  i3518.m_LowerTranslation = i3519[0]
  i3518.m_UpperTranslation = i3519[1]
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3521 = data
  i3520.name = i3521[0]
  i3520.width = i3521[1]
  i3520.height = i3521[2]
  i3520.mipmapCount = i3521[3]
  i3520.anisoLevel = i3521[4]
  i3520.filterMode = i3521[5]
  i3520.hdr = !!i3521[6]
  i3520.format = i3521[7]
  i3520.wrapMode = i3521[8]
  i3520.alphaIsTransparency = !!i3521[9]
  i3520.alphaSource = i3521[10]
  i3520.graphicsFormat = i3521[11]
  i3520.sRGBTexture = !!i3521[12]
  i3520.desiredColorSpace = i3521[13]
  i3520.wrapU = i3521[14]
  i3520.wrapV = i3521[15]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3522 = root || new pc.UnityMaterial()
  var i3523 = data
  i3522.name = i3523[0]
  request.r(i3523[1], i3523[2], 0, i3522, 'shader')
  i3522.renderQueue = i3523[3]
  i3522.enableInstancing = !!i3523[4]
  var i3525 = i3523[5]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3525[i + 0]) );
  }
  i3522.floatParameters = i3524
  var i3527 = i3523[6]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3527[i + 0]) );
  }
  i3522.colorParameters = i3526
  var i3529 = i3523[7]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 1) {
    i3528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3529[i + 0]) );
  }
  i3522.vectorParameters = i3528
  var i3531 = i3523[8]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 1) {
    i3530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3531[i + 0]) );
  }
  i3522.textureParameters = i3530
  var i3533 = i3523[9]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3533[i + 0]) );
  }
  i3522.materialFlags = i3532
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3537 = data
  i3536.name = i3537[0]
  i3536.value = i3537[1]
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3541 = data
  i3540.name = i3541[0]
  i3540.value = new pc.Color(i3541[1], i3541[2], i3541[3], i3541[4])
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3545 = data
  i3544.name = i3545[0]
  i3544.value = new pc.Vec4( i3545[1], i3545[2], i3545[3], i3545[4] )
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3549 = data
  i3548.name = i3549[0]
  request.r(i3549[1], i3549[2], 0, i3548, 'value')
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3553 = data
  i3552.name = i3553[0]
  i3552.enabled = !!i3553[1]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3555 = data
  i3554.name = i3555[0]
  i3554.index = i3555[1]
  i3554.startup = !!i3555[2]
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3557 = data
  i3556.position = new pc.Vec3( i3557[0], i3557[1], i3557[2] )
  i3556.scale = new pc.Vec3( i3557[3], i3557[4], i3557[5] )
  i3556.rotation = new pc.Quat(i3557[6], i3557[7], i3557[8], i3557[9])
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3559 = data
  i3558.aspect = i3559[0]
  i3558.orthographic = !!i3559[1]
  i3558.orthographicSize = i3559[2]
  i3558.backgroundColor = new pc.Color(i3559[3], i3559[4], i3559[5], i3559[6])
  i3558.nearClipPlane = i3559[7]
  i3558.farClipPlane = i3559[8]
  i3558.fieldOfView = i3559[9]
  i3558.depth = i3559[10]
  i3558.clearFlags = i3559[11]
  i3558.cullingMask = i3559[12]
  i3558.rect = i3559[13]
  request.r(i3559[14], i3559[15], 0, i3558, 'targetTexture')
  i3558.usePhysicalProperties = !!i3559[16]
  i3558.focalLength = i3559[17]
  i3558.sensorSize = new pc.Vec2( i3559[18], i3559[19] )
  i3558.lensShift = new pc.Vec2( i3559[20], i3559[21] )
  i3558.gateFit = i3559[22]
  i3558.commandBufferCount = i3559[23]
  i3558.cameraType = i3559[24]
  i3558.enabled = !!i3559[25]
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3561 = data
  i3560.name = i3561[0]
  i3560.tagId = i3561[1]
  i3560.enabled = !!i3561[2]
  i3560.isStatic = !!i3561[3]
  i3560.layer = i3561[4]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3563 = data
  i3562.pivot = new pc.Vec2( i3563[0], i3563[1] )
  i3562.anchorMin = new pc.Vec2( i3563[2], i3563[3] )
  i3562.anchorMax = new pc.Vec2( i3563[4], i3563[5] )
  i3562.sizeDelta = new pc.Vec2( i3563[6], i3563[7] )
  i3562.anchoredPosition3D = new pc.Vec3( i3563[8], i3563[9], i3563[10] )
  i3562.rotation = new pc.Quat(i3563[11], i3563[12], i3563[13], i3563[14])
  i3562.scale = new pc.Vec3( i3563[15], i3563[16], i3563[17] )
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3565 = data
  i3564.planeDistance = i3565[0]
  i3564.referencePixelsPerUnit = i3565[1]
  i3564.isFallbackOverlay = !!i3565[2]
  i3564.renderMode = i3565[3]
  i3564.renderOrder = i3565[4]
  i3564.sortingLayerName = i3565[5]
  i3564.sortingOrder = i3565[6]
  i3564.scaleFactor = i3565[7]
  request.r(i3565[8], i3565[9], 0, i3564, 'worldCamera')
  i3564.overrideSorting = !!i3565[10]
  i3564.pixelPerfect = !!i3565[11]
  i3564.targetDisplay = i3565[12]
  i3564.overridePixelPerfect = !!i3565[13]
  i3564.enabled = !!i3565[14]
  return i3564
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3566 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3567 = data
  i3566.m_UiScaleMode = i3567[0]
  i3566.m_ReferencePixelsPerUnit = i3567[1]
  i3566.m_ScaleFactor = i3567[2]
  i3566.m_ReferenceResolution = new pc.Vec2( i3567[3], i3567[4] )
  i3566.m_ScreenMatchMode = i3567[5]
  i3566.m_MatchWidthOrHeight = i3567[6]
  i3566.m_PhysicalUnit = i3567[7]
  i3566.m_FallbackScreenDPI = i3567[8]
  i3566.m_DefaultSpriteDPI = i3567[9]
  i3566.m_DynamicPixelsPerUnit = i3567[10]
  i3566.m_PresetInfoIsWorld = !!i3567[11]
  return i3566
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3569 = data
  i3568.m_IgnoreReversedGraphics = !!i3569[0]
  i3568.m_BlockingObjects = i3569[1]
  i3568.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3569[2] )
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3571 = data
  i3570.cullTransparentMesh = !!i3571[0]
  return i3570
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3572 = root || request.c( 'UnityEngine.UI.Image' )
  var i3573 = data
  request.r(i3573[0], i3573[1], 0, i3572, 'm_Sprite')
  i3572.m_Type = i3573[2]
  i3572.m_PreserveAspect = !!i3573[3]
  i3572.m_FillCenter = !!i3573[4]
  i3572.m_FillMethod = i3573[5]
  i3572.m_FillAmount = i3573[6]
  i3572.m_FillClockwise = !!i3573[7]
  i3572.m_FillOrigin = i3573[8]
  i3572.m_UseSpriteMesh = !!i3573[9]
  i3572.m_PixelsPerUnitMultiplier = i3573[10]
  i3572.m_Maskable = !!i3573[11]
  request.r(i3573[12], i3573[13], 0, i3572, 'm_Material')
  i3572.m_Color = new pc.Color(i3573[14], i3573[15], i3573[16], i3573[17])
  i3572.m_RaycastTarget = !!i3573[18]
  i3572.m_RaycastPadding = new pc.Vec4( i3573[19], i3573[20], i3573[21], i3573[22] )
  return i3572
}

Deserializers["ShakeCam"] = function (request, data, root) {
  var i3574 = root || request.c( 'ShakeCam' )
  var i3575 = data
  return i3574
}

Deserializers["SimpleFloating"] = function (request, data, root) {
  var i3576 = root || request.c( 'SimpleFloating' )
  var i3577 = data
  i3576.animPos = !!i3577[0]
  i3576.posAmplitude = new pc.Vec3( i3577[1], i3577[2], i3577[3] )
  i3576.posSpeed = new pc.Vec3( i3577[4], i3577[5], i3577[6] )
  i3576.animRot = !!i3577[7]
  i3576.rotAmplitude = new pc.Vec3( i3577[8], i3577[9], i3577[10] )
  i3576.rotSpeed = new pc.Vec3( i3577[11], i3577[12], i3577[13] )
  i3576.animScale = !!i3577[14]
  i3576.scaleAmplitude = new pc.Vec3( i3577[15], i3577[16], i3577[17] )
  i3576.scaleSpeed = new pc.Vec3( i3577[18], i3577[19], i3577[20] )
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3579 = data
  i3578.usedByComposite = !!i3579[0]
  i3578.autoTiling = !!i3579[1]
  var i3581 = i3579[2]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
  var i3583 = i3581[i + 0]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 2) {
    i3582.push( new pc.Vec2( i3583[i + 0], i3583[i + 1] ) );
  }
    i3580.push( i3582 );
  }
  i3578.points = i3580
  i3578.enabled = !!i3579[3]
  i3578.isTrigger = !!i3579[4]
  i3578.usedByEffector = !!i3579[5]
  i3578.density = i3579[6]
  i3578.offset = new pc.Vec2( i3579[7], i3579[8] )
  request.r(i3579[9], i3579[10], 0, i3578, 'material')
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3591 = data
  i3590.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3591[0], i3590.main)
  i3590.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3591[1], i3590.colorBySpeed)
  i3590.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3591[2], i3590.colorOverLifetime)
  i3590.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3591[3], i3590.emission)
  i3590.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3591[4], i3590.rotationBySpeed)
  i3590.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3591[5], i3590.rotationOverLifetime)
  i3590.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3591[6], i3590.shape)
  i3590.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3591[7], i3590.sizeBySpeed)
  i3590.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3591[8], i3590.sizeOverLifetime)
  i3590.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3591[9], i3590.textureSheetAnimation)
  i3590.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3591[10], i3590.velocityOverLifetime)
  i3590.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3591[11], i3590.noise)
  i3590.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3591[12], i3590.inheritVelocity)
  i3590.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3591[13], i3590.forceOverLifetime)
  i3590.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3591[14], i3590.limitVelocityOverLifetime)
  i3590.useAutoRandomSeed = !!i3591[15]
  i3590.randomSeed = i3591[16]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3592 = root || new pc.ParticleSystemMain()
  var i3593 = data
  i3592.duration = i3593[0]
  i3592.loop = !!i3593[1]
  i3592.prewarm = !!i3593[2]
  i3592.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[3], i3592.startDelay)
  i3592.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[4], i3592.startLifetime)
  i3592.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[5], i3592.startSpeed)
  i3592.startSize3D = !!i3593[6]
  i3592.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[7], i3592.startSizeX)
  i3592.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[8], i3592.startSizeY)
  i3592.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[9], i3592.startSizeZ)
  i3592.startRotation3D = !!i3593[10]
  i3592.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[11], i3592.startRotationX)
  i3592.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[12], i3592.startRotationY)
  i3592.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[13], i3592.startRotationZ)
  i3592.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3593[14], i3592.startColor)
  i3592.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[15], i3592.gravityModifier)
  i3592.simulationSpace = i3593[16]
  request.r(i3593[17], i3593[18], 0, i3592, 'customSimulationSpace')
  i3592.simulationSpeed = i3593[19]
  i3592.useUnscaledTime = !!i3593[20]
  i3592.scalingMode = i3593[21]
  i3592.playOnAwake = !!i3593[22]
  i3592.maxParticles = i3593[23]
  i3592.emitterVelocityMode = i3593[24]
  i3592.stopAction = i3593[25]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3594 = root || new pc.MinMaxCurve()
  var i3595 = data
  i3594.mode = i3595[0]
  i3594.curveMin = new pc.AnimationCurve( { keys_flow: i3595[1] } )
  i3594.curveMax = new pc.AnimationCurve( { keys_flow: i3595[2] } )
  i3594.curveMultiplier = i3595[3]
  i3594.constantMin = i3595[4]
  i3594.constantMax = i3595[5]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3596 = root || new pc.MinMaxGradient()
  var i3597 = data
  i3596.mode = i3597[0]
  i3596.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3597[1], i3596.gradientMin)
  i3596.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3597[2], i3596.gradientMax)
  i3596.colorMin = new pc.Color(i3597[3], i3597[4], i3597[5], i3597[6])
  i3596.colorMax = new pc.Color(i3597[7], i3597[8], i3597[9], i3597[10])
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3599 = data
  i3598.mode = i3599[0]
  var i3601 = i3599[1]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3601[i + 0]) );
  }
  i3598.colorKeys = i3600
  var i3603 = i3599[2]
  var i3602 = []
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3603[i + 0]) );
  }
  i3598.alphaKeys = i3602
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3607 = data
  i3606.color = new pc.Color(i3607[0], i3607[1], i3607[2], i3607[3])
  i3606.time = i3607[4]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3611 = data
  i3610.alpha = i3611[0]
  i3610.time = i3611[1]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3612 = root || new pc.ParticleSystemColorBySpeed()
  var i3613 = data
  i3612.enabled = !!i3613[0]
  i3612.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3613[1], i3612.color)
  i3612.range = new pc.Vec2( i3613[2], i3613[3] )
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3614 = root || new pc.ParticleSystemColorOverLifetime()
  var i3615 = data
  i3614.enabled = !!i3615[0]
  i3614.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3615[1], i3614.color)
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3616 = root || new pc.ParticleSystemEmitter()
  var i3617 = data
  i3616.enabled = !!i3617[0]
  i3616.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[1], i3616.rateOverTime)
  i3616.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[2], i3616.rateOverDistance)
  var i3619 = i3617[3]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3619[i + 0]) );
  }
  i3616.bursts = i3618
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3622 = root || new pc.ParticleSystemBurst()
  var i3623 = data
  i3622.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3623[0], i3622.count)
  i3622.cycleCount = i3623[1]
  i3622.minCount = i3623[2]
  i3622.maxCount = i3623[3]
  i3622.repeatInterval = i3623[4]
  i3622.time = i3623[5]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3624 = root || new pc.ParticleSystemRotationBySpeed()
  var i3625 = data
  i3624.enabled = !!i3625[0]
  i3624.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[1], i3624.x)
  i3624.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[2], i3624.y)
  i3624.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[3], i3624.z)
  i3624.separateAxes = !!i3625[4]
  i3624.range = new pc.Vec2( i3625[5], i3625[6] )
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3626 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3627 = data
  i3626.enabled = !!i3627[0]
  i3626.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[1], i3626.x)
  i3626.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[2], i3626.y)
  i3626.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[3], i3626.z)
  i3626.separateAxes = !!i3627[4]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3628 = root || new pc.ParticleSystemShape()
  var i3629 = data
  i3628.enabled = !!i3629[0]
  i3628.shapeType = i3629[1]
  i3628.randomDirectionAmount = i3629[2]
  i3628.sphericalDirectionAmount = i3629[3]
  i3628.randomPositionAmount = i3629[4]
  i3628.alignToDirection = !!i3629[5]
  i3628.radius = i3629[6]
  i3628.radiusMode = i3629[7]
  i3628.radiusSpread = i3629[8]
  i3628.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[9], i3628.radiusSpeed)
  i3628.radiusThickness = i3629[10]
  i3628.angle = i3629[11]
  i3628.length = i3629[12]
  i3628.boxThickness = new pc.Vec3( i3629[13], i3629[14], i3629[15] )
  i3628.meshShapeType = i3629[16]
  request.r(i3629[17], i3629[18], 0, i3628, 'mesh')
  request.r(i3629[19], i3629[20], 0, i3628, 'meshRenderer')
  request.r(i3629[21], i3629[22], 0, i3628, 'skinnedMeshRenderer')
  i3628.useMeshMaterialIndex = !!i3629[23]
  i3628.meshMaterialIndex = i3629[24]
  i3628.useMeshColors = !!i3629[25]
  i3628.normalOffset = i3629[26]
  i3628.arc = i3629[27]
  i3628.arcMode = i3629[28]
  i3628.arcSpread = i3629[29]
  i3628.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[30], i3628.arcSpeed)
  i3628.donutRadius = i3629[31]
  i3628.position = new pc.Vec3( i3629[32], i3629[33], i3629[34] )
  i3628.rotation = new pc.Vec3( i3629[35], i3629[36], i3629[37] )
  i3628.scale = new pc.Vec3( i3629[38], i3629[39], i3629[40] )
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3630 = root || new pc.ParticleSystemSizeBySpeed()
  var i3631 = data
  i3630.enabled = !!i3631[0]
  i3630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[1], i3630.x)
  i3630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[2], i3630.y)
  i3630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[3], i3630.z)
  i3630.separateAxes = !!i3631[4]
  i3630.range = new pc.Vec2( i3631[5], i3631[6] )
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3632 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3633 = data
  i3632.enabled = !!i3633[0]
  i3632.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3633[1], i3632.x)
  i3632.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3633[2], i3632.y)
  i3632.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3633[3], i3632.z)
  i3632.separateAxes = !!i3633[4]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3634 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3635 = data
  i3634.enabled = !!i3635[0]
  i3634.mode = i3635[1]
  i3634.animation = i3635[2]
  i3634.numTilesX = i3635[3]
  i3634.numTilesY = i3635[4]
  i3634.useRandomRow = !!i3635[5]
  i3634.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3635[6], i3634.frameOverTime)
  i3634.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3635[7], i3634.startFrame)
  i3634.cycleCount = i3635[8]
  i3634.rowIndex = i3635[9]
  i3634.flipU = i3635[10]
  i3634.flipV = i3635[11]
  i3634.spriteCount = i3635[12]
  var i3637 = i3635[13]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 2) {
  request.r(i3637[i + 0], i3637[i + 1], 2, i3636, '')
  }
  i3634.sprites = i3636
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3640 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3641 = data
  i3640.enabled = !!i3641[0]
  i3640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[1], i3640.x)
  i3640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[2], i3640.y)
  i3640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[3], i3640.z)
  i3640.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[4], i3640.radial)
  i3640.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[5], i3640.speedModifier)
  i3640.space = i3641[6]
  i3640.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[7], i3640.orbitalX)
  i3640.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[8], i3640.orbitalY)
  i3640.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[9], i3640.orbitalZ)
  i3640.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[10], i3640.orbitalOffsetX)
  i3640.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[11], i3640.orbitalOffsetY)
  i3640.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[12], i3640.orbitalOffsetZ)
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3642 = root || new pc.ParticleSystemNoise()
  var i3643 = data
  i3642.enabled = !!i3643[0]
  i3642.separateAxes = !!i3643[1]
  i3642.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[2], i3642.strengthX)
  i3642.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[3], i3642.strengthY)
  i3642.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[4], i3642.strengthZ)
  i3642.frequency = i3643[5]
  i3642.damping = !!i3643[6]
  i3642.octaveCount = i3643[7]
  i3642.octaveMultiplier = i3643[8]
  i3642.octaveScale = i3643[9]
  i3642.quality = i3643[10]
  i3642.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[11], i3642.scrollSpeed)
  i3642.scrollSpeedMultiplier = i3643[12]
  i3642.remapEnabled = !!i3643[13]
  i3642.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[14], i3642.remapX)
  i3642.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[15], i3642.remapY)
  i3642.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[16], i3642.remapZ)
  i3642.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[17], i3642.positionAmount)
  i3642.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[18], i3642.rotationAmount)
  i3642.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[19], i3642.sizeAmount)
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3644 = root || new pc.ParticleSystemInheritVelocity()
  var i3645 = data
  i3644.enabled = !!i3645[0]
  i3644.mode = i3645[1]
  i3644.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[2], i3644.curve)
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3646 = root || new pc.ParticleSystemForceOverLifetime()
  var i3647 = data
  i3646.enabled = !!i3647[0]
  i3646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[1], i3646.x)
  i3646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[2], i3646.y)
  i3646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[3], i3646.z)
  i3646.space = i3647[4]
  i3646.randomized = !!i3647[5]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3648 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3649 = data
  i3648.enabled = !!i3649[0]
  i3648.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[1], i3648.limit)
  i3648.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[2], i3648.limitX)
  i3648.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[3], i3648.limitY)
  i3648.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[4], i3648.limitZ)
  i3648.dampen = i3649[5]
  i3648.separateAxes = !!i3649[6]
  i3648.space = i3649[7]
  i3648.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[8], i3648.drag)
  i3648.multiplyDragByParticleSize = !!i3649[9]
  i3648.multiplyDragByParticleVelocity = !!i3649[10]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3651 = data
  request.r(i3651[0], i3651[1], 0, i3650, 'mesh')
  i3650.meshCount = i3651[2]
  i3650.activeVertexStreamsCount = i3651[3]
  i3650.alignment = i3651[4]
  i3650.renderMode = i3651[5]
  i3650.sortMode = i3651[6]
  i3650.lengthScale = i3651[7]
  i3650.velocityScale = i3651[8]
  i3650.cameraVelocityScale = i3651[9]
  i3650.normalDirection = i3651[10]
  i3650.sortingFudge = i3651[11]
  i3650.minParticleSize = i3651[12]
  i3650.maxParticleSize = i3651[13]
  i3650.pivot = new pc.Vec3( i3651[14], i3651[15], i3651[16] )
  request.r(i3651[17], i3651[18], 0, i3650, 'trailMaterial')
  i3650.applyActiveColorSpace = !!i3651[19]
  i3650.enabled = !!i3651[20]
  request.r(i3651[21], i3651[22], 0, i3650, 'sharedMaterial')
  var i3653 = i3651[23]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 2) {
  request.r(i3653[i + 0], i3653[i + 1], 2, i3652, '')
  }
  i3650.sharedMaterials = i3652
  i3650.receiveShadows = !!i3651[24]
  i3650.shadowCastingMode = i3651[25]
  i3650.sortingLayerID = i3651[26]
  i3650.sortingOrder = i3651[27]
  i3650.lightmapIndex = i3651[28]
  i3650.lightmapSceneIndex = i3651[29]
  i3650.lightmapScaleOffset = new pc.Vec4( i3651[30], i3651[31], i3651[32], i3651[33] )
  i3650.lightProbeUsage = i3651[34]
  i3650.reflectionProbeUsage = i3651[35]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3657 = data
  request.r(i3657[0], i3657[1], 0, i3656, 'clip')
  request.r(i3657[2], i3657[3], 0, i3656, 'outputAudioMixerGroup')
  i3656.playOnAwake = !!i3657[4]
  i3656.loop = !!i3657[5]
  i3656.time = i3657[6]
  i3656.volume = i3657[7]
  i3656.pitch = i3657[8]
  i3656.enabled = !!i3657[9]
  return i3656
}

Deserializers["TouchDownUp"] = function (request, data, root) {
  var i3658 = root || request.c( 'TouchDownUp' )
  var i3659 = data
  i3658.disableMultitouch = !!i3659[0]
  i3658.onDown = request.d('UnityEngine.Events.UnityEvent', i3659[1], i3658.onDown)
  i3658.onUp = request.d('UnityEngine.Events.UnityEvent', i3659[2], i3658.onUp)
  return i3658
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3661 = data
  i3660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3661[0], i3660.m_PersistentCalls)
  return i3660
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3663 = data
  var i3665 = i3663[0]
  var i3664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.add(request.d('UnityEngine.Events.PersistentCall', i3665[i + 0]));
  }
  i3662.m_Calls = i3664
  return i3662
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3669 = data
  request.r(i3669[0], i3669[1], 0, i3668, 'm_Target')
  i3668.m_TargetAssemblyTypeName = i3669[2]
  i3668.m_MethodName = i3669[3]
  i3668.m_Mode = i3669[4]
  i3668.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3669[5], i3668.m_Arguments)
  i3668.m_CallState = i3669[6]
  return i3668
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3671 = data
  request.r(i3671[0], i3671[1], 0, i3670, 'm_ObjectArgument')
  i3670.m_ObjectArgumentAssemblyTypeName = i3671[2]
  i3670.m_IntArgument = i3671[3]
  i3670.m_FloatArgument = i3671[4]
  i3670.m_StringArgument = i3671[5]
  i3670.m_BoolArgument = !!i3671[6]
  return i3670
}

Deserializers["DelayExecuter"] = function (request, data, root) {
  var i3672 = root || request.c( 'DelayExecuter' )
  var i3673 = data
  i3672.delay = i3673[0]
  i3672.execute = request.d('UnityEngine.Events.UnityEvent', i3673[1], i3672.execute)
  i3672.debug = !!i3673[2]
  i3672.autoExecute = !!i3673[3]
  i3672.turnedOff = !!i3673[4]
  i3672.unscaledTime = !!i3673[5]
  return i3672
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3675 = data
  request.r(i3675[0], i3675[1], 0, i3674, 'm_FirstSelected')
  i3674.m_sendNavigationEvents = !!i3675[2]
  i3674.m_DragThreshold = i3675[3]
  return i3674
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3676 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3677 = data
  i3676.m_HorizontalAxis = i3677[0]
  i3676.m_VerticalAxis = i3677[1]
  i3676.m_SubmitButton = i3677[2]
  i3676.m_CancelButton = i3677[3]
  i3676.m_InputActionsPerSecond = i3677[4]
  i3676.m_RepeatDelay = i3677[5]
  i3676.m_ForceModuleActive = !!i3677[6]
  i3676.m_SendPointerHoverToParent = !!i3677[7]
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3679 = data
  i3678.ambientIntensity = i3679[0]
  i3678.reflectionIntensity = i3679[1]
  i3678.ambientMode = i3679[2]
  i3678.ambientLight = new pc.Color(i3679[3], i3679[4], i3679[5], i3679[6])
  i3678.ambientSkyColor = new pc.Color(i3679[7], i3679[8], i3679[9], i3679[10])
  i3678.ambientGroundColor = new pc.Color(i3679[11], i3679[12], i3679[13], i3679[14])
  i3678.ambientEquatorColor = new pc.Color(i3679[15], i3679[16], i3679[17], i3679[18])
  i3678.fogColor = new pc.Color(i3679[19], i3679[20], i3679[21], i3679[22])
  i3678.fogEndDistance = i3679[23]
  i3678.fogStartDistance = i3679[24]
  i3678.fogDensity = i3679[25]
  i3678.fog = !!i3679[26]
  request.r(i3679[27], i3679[28], 0, i3678, 'skybox')
  i3678.fogMode = i3679[29]
  var i3681 = i3679[30]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 1) {
    i3680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3681[i + 0]) );
  }
  i3678.lightmaps = i3680
  i3678.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3679[31], i3678.lightProbes)
  i3678.lightmapsMode = i3679[32]
  i3678.mixedBakeMode = i3679[33]
  i3678.environmentLightingMode = i3679[34]
  i3678.ambientProbe = new pc.SphericalHarmonicsL2(i3679[35])
  i3678.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3679[36])
  i3678.useReferenceAmbientProbe = !!i3679[37]
  request.r(i3679[38], i3679[39], 0, i3678, 'customReflection')
  request.r(i3679[40], i3679[41], 0, i3678, 'defaultReflection')
  i3678.defaultReflectionMode = i3679[42]
  i3678.defaultReflectionResolution = i3679[43]
  i3678.sunLightObjectId = i3679[44]
  i3678.pixelLightCount = i3679[45]
  i3678.defaultReflectionHDR = !!i3679[46]
  i3678.hasLightDataAsset = !!i3679[47]
  i3678.hasManualGenerate = !!i3679[48]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3685 = data
  request.r(i3685[0], i3685[1], 0, i3684, 'lightmapColor')
  request.r(i3685[2], i3685[3], 0, i3684, 'lightmapDirection')
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3686 = root || new UnityEngine.LightProbes()
  var i3687 = data
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3695 = data
  var i3697 = i3695[0]
  var i3696 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3697[i + 0]));
  }
  i3694.ShaderCompilationErrors = i3696
  i3694.name = i3695[1]
  i3694.guid = i3695[2]
  var i3699 = i3695[3]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.push( i3699[i + 0] );
  }
  i3694.shaderDefinedKeywords = i3698
  var i3701 = i3695[4]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3701[i + 0]) );
  }
  i3694.passes = i3700
  var i3703 = i3695[5]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3703[i + 0]) );
  }
  i3694.usePasses = i3702
  var i3705 = i3695[6]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3705[i + 0]) );
  }
  i3694.defaultParameterValues = i3704
  request.r(i3695[7], i3695[8], 0, i3694, 'unityFallbackShader')
  i3694.readDepth = !!i3695[9]
  i3694.isCreatedByShaderGraph = !!i3695[10]
  i3694.disableBatching = !!i3695[11]
  i3694.compiled = !!i3695[12]
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3709 = data
  i3708.shaderName = i3709[0]
  i3708.errorMessage = i3709[1]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3714 = root || new pc.UnityShaderPass()
  var i3715 = data
  i3714.id = i3715[0]
  i3714.subShaderIndex = i3715[1]
  i3714.name = i3715[2]
  i3714.passType = i3715[3]
  i3714.grabPassTextureName = i3715[4]
  i3714.usePass = !!i3715[5]
  i3714.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[6], i3714.zTest)
  i3714.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[7], i3714.zWrite)
  i3714.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[8], i3714.culling)
  i3714.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3715[9], i3714.blending)
  i3714.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3715[10], i3714.alphaBlending)
  i3714.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[11], i3714.colorWriteMask)
  i3714.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[12], i3714.offsetUnits)
  i3714.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[13], i3714.offsetFactor)
  i3714.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[14], i3714.stencilRef)
  i3714.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[15], i3714.stencilReadMask)
  i3714.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3715[16], i3714.stencilWriteMask)
  i3714.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3715[17], i3714.stencilOp)
  i3714.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3715[18], i3714.stencilOpFront)
  i3714.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3715[19], i3714.stencilOpBack)
  var i3717 = i3715[20]
  var i3716 = []
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3717[i + 0]) );
  }
  i3714.tags = i3716
  var i3719 = i3715[21]
  var i3718 = []
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.push( i3719[i + 0] );
  }
  i3714.passDefinedKeywords = i3718
  var i3721 = i3715[22]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3721[i + 0]) );
  }
  i3714.passDefinedKeywordGroups = i3720
  var i3723 = i3715[23]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 1) {
    i3722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3723[i + 0]) );
  }
  i3714.variants = i3722
  var i3725 = i3715[24]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3725[i + 0]) );
  }
  i3714.excludedVariants = i3724
  i3714.hasDepthReader = !!i3715[25]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3727 = data
  i3726.val = i3727[0]
  i3726.name = i3727[1]
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3729 = data
  i3728.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3729[0], i3728.src)
  i3728.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3729[1], i3728.dst)
  i3728.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3729[2], i3728.op)
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3731 = data
  i3730.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3731[0], i3730.pass)
  i3730.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3731[1], i3730.fail)
  i3730.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3731[2], i3730.zFail)
  i3730.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3731[3], i3730.comp)
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3735 = data
  i3734.name = i3735[0]
  i3734.value = i3735[1]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3739 = data
  var i3741 = i3739[0]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( i3741[i + 0] );
  }
  i3738.keywords = i3740
  i3738.hasDiscard = !!i3739[1]
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3745 = data
  i3744.passId = i3745[0]
  i3744.subShaderIndex = i3745[1]
  var i3747 = i3745[2]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.push( i3747[i + 0] );
  }
  i3744.keywords = i3746
  i3744.vertexProgram = i3745[3]
  i3744.fragmentProgram = i3745[4]
  i3744.exportedForWebGl2 = !!i3745[5]
  i3744.readDepth = !!i3745[6]
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3751 = data
  request.r(i3751[0], i3751[1], 0, i3750, 'shader')
  i3750.pass = i3751[2]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3755 = data
  i3754.name = i3755[0]
  i3754.type = i3755[1]
  i3754.value = new pc.Vec4( i3755[2], i3755[3], i3755[4], i3755[5] )
  i3754.textureValue = i3755[6]
  i3754.shaderPropertyFlag = i3755[7]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3757 = data
  i3756.name = i3757[0]
  request.r(i3757[1], i3757[2], 0, i3756, 'texture')
  i3756.aabb = i3757[3]
  i3756.vertices = i3757[4]
  i3756.triangles = i3757[5]
  i3756.textureRect = UnityEngine.Rect.MinMaxRect(i3757[6], i3757[7], i3757[8], i3757[9])
  i3756.packedRect = UnityEngine.Rect.MinMaxRect(i3757[10], i3757[11], i3757[12], i3757[13])
  i3756.border = new pc.Vec4( i3757[14], i3757[15], i3757[16], i3757[17] )
  i3756.transparency = i3757[18]
  i3756.bounds = i3757[19]
  i3756.pixelsPerUnit = i3757[20]
  i3756.textureWidth = i3757[21]
  i3756.textureHeight = i3757[22]
  i3756.nativeSize = new pc.Vec2( i3757[23], i3757[24] )
  i3756.pivot = new pc.Vec2( i3757[25], i3757[26] )
  i3756.textureRectOffset = new pc.Vec2( i3757[27], i3757[28] )
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3759 = data
  i3758.name = i3759[0]
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3761 = data
  var i3763 = i3761[0]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3763[i + 0]) );
  }
  i3760.files = i3762
  i3760.componentToPrefabIds = i3761[1]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3767 = data
  i3766.path = i3767[0]
  request.r(i3767[1], i3767[2], 0, i3766, 'unityObject')
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3769 = data
  var i3771 = i3769[0]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 1) {
    i3770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3771[i + 0]) );
  }
  i3768.scriptsExecutionOrder = i3770
  var i3773 = i3769[1]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 1) {
    i3772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3773[i + 0]) );
  }
  i3768.sortingLayers = i3772
  var i3775 = i3769[2]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3775[i + 0]) );
  }
  i3768.cullingLayers = i3774
  i3768.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3769[3], i3768.timeSettings)
  i3768.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3769[4], i3768.physicsSettings)
  i3768.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3769[5], i3768.physics2DSettings)
  i3768.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3769[6], i3768.qualitySettings)
  i3768.enableRealtimeShadows = !!i3769[7]
  i3768.enableAutoInstancing = !!i3769[8]
  i3768.enableStaticBatching = !!i3769[9]
  i3768.enableDynamicBatching = !!i3769[10]
  i3768.lightmapEncodingQuality = i3769[11]
  i3768.desiredColorSpace = i3769[12]
  var i3777 = i3769[13]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( i3777[i + 0] );
  }
  i3768.allTags = i3776
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3781 = data
  i3780.name = i3781[0]
  i3780.value = i3781[1]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3785 = data
  i3784.id = i3785[0]
  i3784.name = i3785[1]
  i3784.value = i3785[2]
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3789 = data
  i3788.id = i3789[0]
  i3788.name = i3789[1]
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3791 = data
  i3790.fixedDeltaTime = i3791[0]
  i3790.maximumDeltaTime = i3791[1]
  i3790.timeScale = i3791[2]
  i3790.maximumParticleTimestep = i3791[3]
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3793 = data
  i3792.gravity = new pc.Vec3( i3793[0], i3793[1], i3793[2] )
  i3792.defaultSolverIterations = i3793[3]
  i3792.bounceThreshold = i3793[4]
  i3792.autoSyncTransforms = !!i3793[5]
  i3792.autoSimulation = !!i3793[6]
  var i3795 = i3793[7]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3795[i + 0]) );
  }
  i3792.collisionMatrix = i3794
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3799 = data
  i3798.enabled = !!i3799[0]
  i3798.layerId = i3799[1]
  i3798.otherLayerId = i3799[2]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3801 = data
  request.r(i3801[0], i3801[1], 0, i3800, 'material')
  i3800.gravity = new pc.Vec2( i3801[2], i3801[3] )
  i3800.positionIterations = i3801[4]
  i3800.velocityIterations = i3801[5]
  i3800.velocityThreshold = i3801[6]
  i3800.maxLinearCorrection = i3801[7]
  i3800.maxAngularCorrection = i3801[8]
  i3800.maxTranslationSpeed = i3801[9]
  i3800.maxRotationSpeed = i3801[10]
  i3800.baumgarteScale = i3801[11]
  i3800.baumgarteTOIScale = i3801[12]
  i3800.timeToSleep = i3801[13]
  i3800.linearSleepTolerance = i3801[14]
  i3800.angularSleepTolerance = i3801[15]
  i3800.defaultContactOffset = i3801[16]
  i3800.autoSimulation = !!i3801[17]
  i3800.queriesHitTriggers = !!i3801[18]
  i3800.queriesStartInColliders = !!i3801[19]
  i3800.callbacksOnDisable = !!i3801[20]
  i3800.reuseCollisionCallbacks = !!i3801[21]
  i3800.autoSyncTransforms = !!i3801[22]
  var i3803 = i3801[23]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3803[i + 0]) );
  }
  i3800.collisionMatrix = i3802
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3807 = data
  i3806.enabled = !!i3807[0]
  i3806.layerId = i3807[1]
  i3806.otherLayerId = i3807[2]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3809 = data
  var i3811 = i3809[0]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 1) {
    i3810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3811[i + 0]) );
  }
  i3808.qualityLevels = i3810
  var i3813 = i3809[1]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.push( i3813[i + 0] );
  }
  i3808.names = i3812
  i3808.shadows = i3809[2]
  i3808.anisotropicFiltering = i3809[3]
  i3808.antiAliasing = i3809[4]
  i3808.lodBias = i3809[5]
  i3808.shadowCascades = i3809[6]
  i3808.shadowDistance = i3809[7]
  i3808.shadowmaskMode = i3809[8]
  i3808.shadowProjection = i3809[9]
  i3808.shadowResolution = i3809[10]
  i3808.softParticles = !!i3809[11]
  i3808.softVegetation = !!i3809[12]
  i3808.activeColorSpace = i3809[13]
  i3808.desiredColorSpace = i3809[14]
  i3808.masterTextureLimit = i3809[15]
  i3808.maxQueuedFrames = i3809[16]
  i3808.particleRaycastBudget = i3809[17]
  i3808.pixelLightCount = i3809[18]
  i3808.realtimeReflectionProbes = !!i3809[19]
  i3808.shadowCascade2Split = i3809[20]
  i3808.shadowCascade4Split = new pc.Vec3( i3809[21], i3809[22], i3809[23] )
  i3808.streamingMipmapsActive = !!i3809[24]
  i3808.vSyncCount = i3809[25]
  i3808.asyncUploadBufferSize = i3809[26]
  i3808.asyncUploadTimeSlice = i3809[27]
  i3808.billboardsFaceCameraPosition = !!i3809[28]
  i3808.shadowNearPlaneOffset = i3809[29]
  i3808.streamingMipmapsMemoryBudget = i3809[30]
  i3808.maximumLODLevel = i3809[31]
  i3808.streamingMipmapsAddAllCameras = !!i3809[32]
  i3808.streamingMipmapsMaxLevelReduction = i3809[33]
  i3808.streamingMipmapsRenderersPerFrame = i3809[34]
  i3808.resolutionScalingFixedDPIFactor = i3809[35]
  i3808.streamingMipmapsMaxFileIORequests = i3809[36]
  i3808.currentQualityLevel = i3809[37]
  return i3808
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[34],"35":[3],"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[37],"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[45],"52":[45],"53":[45],"54":[45],"55":[45],"56":[45],"57":[45],"58":[3],"59":[60],"61":[62],"63":[62],"6":[5],"64":[65],"66":[67],"68":[5],"69":[5],"9":[6],"11":[10,5],"70":[5],"8":[6],"71":[5],"72":[5],"73":[5],"74":[5],"75":[5],"76":[5],"77":[5],"78":[5],"79":[5],"80":[10,5],"81":[5],"82":[5],"83":[5],"84":[5],"85":[10,5],"86":[5],"87":[24],"88":[24],"25":[24],"89":[24],"90":[3],"91":[3],"92":[65],"93":[94],"95":[3],"96":[65]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ShakeCam","SimpleFloating","UnityEngine.PolygonCollider2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","TouchDownUp","DelayExecuter","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "LunaTest";

Deserializers.lunaInitializationTime = "10/31/2025 12:39:05";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "34141";

Deserializers.projectId = "1fd82ccc5f46b004fb8093627416cce5";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1640";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2932";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "5e7fd69d-5c2b-4c24-bf1a-c0b8f6793941";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

