import { createContext } from "react";

function LoginPage() {
  return (
      
      <div style={{width: 1440, height: 1024, position: 'relative', background: 'white', overflow: 'hidden'}}>
  <div style={{left: 400, top: 82, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
    <div style={{width: 64, height: 64, background: '#C4C4C4', borderRadius: 9999}} />
    <div style={{paddingLeft: 56, paddingRight: 56, paddingTop: 40, paddingBottom: 40, overflow: 'hidden', borderRadius: 24, outline: '1px rgba(102, 102, 102, 0.50) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
      <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 48, display: 'flex'}}>
        <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#333333', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Sign in</div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
          <div data-property-1="Generic Text field" style={{width: 528, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 27, position: 'relative'}}>
              <div style={{left: 0, top: 0, position: 'absolute', color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Email or mobile phone number</div>
            </div>
            <div style={{alignSelf: 'stretch', height: 56, position: 'relative', borderRadius: 12, outline: '1px rgba(102, 102, 102, 0.35) solid', outlineOffset: '-1px'}} />
          </div>
          <div data-property-1="Generic Text field" style={{width: 528, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 27, position: 'relative'}}>
              <div style={{left: 0, top: 0, position: 'absolute', color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Your password</div>
              <div data-property-1="Hide" style={{width: 24, height: 24, left: 446.14, top: 3, position: 'absolute', overflow: 'hidden'}}>
                <div style={{width: 17.10, height: 16, left: 2.91, top: 4.01, position: 'absolute', background: 'rgba(102, 102, 102, 0.80)'}} />
                <div style={{width: 11.30, height: 9.23, left: 9.80, top: 8.75, position: 'absolute', background: 'rgba(102, 102, 102, 0.80)'}} />
              </div>
              <div style={{left: 478.14, top: 0, position: 'absolute', textAlign: 'right', color: 'rgba(102, 102, 102, 0.80)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Hide</div>
            </div>
            <div style={{alignSelf: 'stretch', height: 56, position: 'relative', borderRadius: 12, outline: '1px rgba(102, 102, 102, 0.35) solid', outlineOffset: '-1px'}} />
          </div>
          <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 528, height: 64, position: 'relative', opacity: 0.25, background: '#111111', overflow: 'hidden', borderRadius: 40}}>
              <div style={{left: 231.50, top: 15, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 22, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Log in</div>
              </div>
            </div>
            <div style={{paddingTop: 8, paddingBottom: 8, paddingRight: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
              <div><span style="color: '#333333', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">By continuing, you agree to the </span><span style="color: '#111111', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'">Terms of use</span><span style="color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'"> </span><span style="color: '#333333', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'">and</span><span style="color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'"> </span><span style="color: '#111111', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'">Privacy Policy.</span><span style="color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'"> </span></div>
            </div>
          </div>
        </div>
        <div style={{width: 528, height: 24, position: 'relative'}}>
          <div style={{left: 354, top: 0, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Forget your password</div>
          <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Other issue with sign in</div>
        </div>
      </div>
    </div>
    <div style={{width: 640, justifyContent: 'flex-start', alignItems: 'center', gap: 23, display: 'inline-flex'}}>
      <div style={{flex: '1 1 0', height: 2, background: 'rgba(102, 102, 102, 0.25)'}} />
      <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#666666', fontSize: 22, fontFamily: 'Avenir', fontWeight: '400', wordWrap: 'break-word'}}>New to our community</div>
      <div style={{flex: '1 1 0', height: 2, background: 'rgba(102, 102, 102, 0.25)'}} />
    </div>
    <div style={{width: 640, height: 64, position: 'relative', overflow: 'hidden', borderRadius: 40, outline: '1px #111111 solid', outlineOffset: '-1px'}}>
      <div style={{left: 225.50, top: 16.50, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#111111', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Create an account</div>
      </div>
    </div>
  </div>
  <div data-property-1="Footer simple 1" style={{width: 1440, height: 56, left: 0, top: 968, position: 'absolute', background: 'white', overflow: 'hidden'}}>
    <div style={{left: 445.50, top: 18, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 40, display: 'inline-flex'}}>
      <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Help Center</div>
      <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Terms of Service</div>
      <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Privacy Policy</div>
      <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>@2022yanliudesign</div>
    </div>
    <div style={{width: 1440, height: 1, left: 0, top: 0, position: 'absolute', background: 'rgba(102, 102, 102, 0.25)'}} />
  </div>
</div>
  );
}

export default LoginPage;
