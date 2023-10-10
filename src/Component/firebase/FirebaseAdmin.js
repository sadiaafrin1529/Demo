import { initializeApp } from 'firebase-admin/app';

const firebaseServiceAccount= {
    type: "service_account",
    project_id: "demoproject-a69c6",
    private_key_id: "9557c6d9e1a9507c49d122c4e8929a2347addcbd",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCNZY021aBZ6tzX\nnAzTA7g0ysNZHlgofXDNu3jsjLdEXK85GWgE0Ogs+WwT5R92FvsaqFRLMd5rFZE6\nm/eRLLCVdkSwEsSWEtmLAScZhsEYRSc+Fp5eyQtH6DQqFh3zD93oAINSnHTg5aqV\nsG+xPXQQxtTbDCWa+ehlPtNBEBo9ip/oMyvdqHABvJ8VlT1h3lP0P3DjYOMxkfan\n2wa/SSKV55xu4roqL70kdcM4DzRxwLw1Qc9LwYMIjDv90lvxF2upuihtDVwgnwo5\n1+snantKlotvriHcRG1cpOLKUhPDt7GdsF/STr3TLrchhWDjB3Jz+54VEQw8bET9\n9cegmALRAgMBAAECggEARjsysRHa2860csOn+wfV7yLndNSFpVbpOMbtgVFDlkkT\nH6Fm8T1ylSQucpNT1SwE/XCurcrPVxEXWa0ugoVYEGT2KR6pVoF2XHzuFtfAAXYX\nz9ccQqhJWiYUAvOJXLl810ep8taTl0F8QW2pjLehdtPL1iFqbFfE/sT92UtOPVJo\nmALGSfQiP++hQsqBQ9hfIa478voHoPlCnu00AXmGxAa0F6dZwQ0YMbhp/idnRMFA\nm3YIANaKOQ/DeJC6LpIjbMET1z6dGMBFHbJLPlDFVEidkfKmwx4Q0VdZWOmfC0wf\nRxgxRA7hVSSWBAqDRDq6HX8ViYSS5EZKZPn9kNgoIQKBgQDDidliSe5vdQqnjE+f\n685Ly2tomxU2b2KZ31+OZMJtbiRclzztzqJckIOI3WLC8XgvNTDocc+i1s+KQ9OI\nbZrxDaifSQ/TLHtBxZp9qwxHr6/I76ycH0xlRf1z8HNpiT4+xivQkNjcApm4mIrX\nfCoF5cCChY7ezDMimHnYpfPzkwKBgQC5HgaAbtbo7LAyJ1jVyGe2KlviRbtkEYNz\nfm7dN2BT6I2lJeLwuBveiuG3D/ucQBs1w21L1p8uhrgg9QoQ/KBDAHHql8wMw9eM\nEmmGBIv5jtaDYFuscsEjlj5oPjIG/SuqbuURZJDUghSvsq/cxhIYwF1PNXYAEfe2\nqSVXxc92iwKBgQCQuuuH8KjnHn5wXU5iVCsxtrMdjgw5amBU/BzCTJoMXUXUsqyK\naDOMx/pTx2leWVRXvMsigXrqUIz1Dhb4GAhi+3Uf0PhBmd7xY81hzsUcGlHGLIBa\nXmAxZYif1A3Yw5iq5gtwKIYa8mHNXDsIHAMOsmu3MBv7lLEUnj8xuEPEuQKBgQCD\nI4UhmOPAMGSFsyAYmpb2Er3y5slgk5OWztuE9UTVTGqDsvo444RCvAo4oCbzwupD\nxQT5c7piwGdSWaTe8cgqjvckZJLV/CsHfMeqfDAZA5ptiWaIHOc76aSePmk8UD+N\nxm+aSa7cDKbQ7PnuoZaSWDwB7/J/DDt6+AqPSn+1DwKBgHmfUT7HXA6x6uFgmCwh\nNU07aCChNDXPefk1ccMqdWa+jYHVumkrgyEtfIp7C6AyAef53UOcSatfQ+RsbOl0\n/WFm+yvNUNgZxDvpJOL4mk0CJKwU8MnntCsDmZfmtsKnvOz/aWWk7Rx7qUxEVitx\ndS4oBg7grSxz1oteO3spMmR4\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-vajjw@demoproject-a69c6.iam.gserviceaccount.com",
    client_id: "103833480964929695042",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vajjw%40demoproject-a69c6.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  }
  
export const app = initializeApp(firebaseServiceAccount);