//@ts-nocheck
import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./feegrant/v1beta1/feegrant";
import * as _28 from "./feegrant/v1beta1/genesis";
import * as _29 from "./feegrant/v1beta1/query";
import * as _30 from "./feegrant/v1beta1/tx";
import * as _31 from "./gov/v1beta1/genesis";
import * as _32 from "./gov/v1beta1/gov";
import * as _33 from "./gov/v1beta1/query";
import * as _34 from "./gov/v1beta1/tx";
import * as _35 from "./mint/v1beta1/genesis";
import * as _36 from "./mint/v1beta1/mint";
import * as _37 from "./mint/v1beta1/query";
import * as _38 from "./params/v1beta1/params";
import * as _39 from "./params/v1beta1/query";
import * as _40 from "./staking/v1beta1/authz";
import * as _41 from "./staking/v1beta1/genesis";
import * as _42 from "./staking/v1beta1/query";
import * as _43 from "./staking/v1beta1/staking";
import * as _44 from "./staking/v1beta1/tx";
import * as _45 from "./staking/v2beta1/authz";
import * as _46 from "./staking/v2beta1/genesis";
import * as _47 from "./staking/v2beta1/query";
import * as _48 from "./staking/v2beta1/staking";
import * as _49 from "./staking/v2beta1/tx";
import * as _50 from "./staking/v2beta1/whitelist";
import * as _51 from "./tx/signing/v1beta1/signing";
import * as _52 from "./tx/v1beta1/service";
import * as _53 from "./tx/v1beta1/tx";
import * as _54 from "./upgrade/v1beta1/query";
import * as _55 from "./upgrade/v1beta1/upgrade";
import * as _56 from "./vesting/v1beta1/tx";
import * as _57 from "./vesting/v1beta1/vesting";
import * as _75 from "./authz/v1beta1/tx.amino";
import * as _76 from "./bank/v1beta1/tx.amino";
import * as _77 from "./distribution/v1beta1/tx.amino";
import * as _78 from "./feegrant/v1beta1/tx.amino";
import * as _79 from "./gov/v1beta1/tx.amino";
import * as _80 from "./staking/v1beta1/tx.amino";
import * as _81 from "./staking/v2beta1/tx.amino";
import * as _82 from "./vesting/v1beta1/tx.amino";
import * as _83 from "./authz/v1beta1/tx.registry";
import * as _84 from "./bank/v1beta1/tx.registry";
import * as _85 from "./distribution/v1beta1/tx.registry";
import * as _86 from "./feegrant/v1beta1/tx.registry";
import * as _87 from "./gov/v1beta1/tx.registry";
import * as _88 from "./staking/v1beta1/tx.registry";
import * as _89 from "./staking/v2beta1/tx.registry";
import * as _90 from "./vesting/v1beta1/tx.registry";
import * as _91 from "./auth/v1beta1/query.rpc.Query";
import * as _92 from "./authz/v1beta1/query.rpc.Query";
import * as _93 from "./bank/v1beta1/query.rpc.Query";
import * as _94 from "./distribution/v1beta1/query.rpc.Query";
import * as _95 from "./feegrant/v1beta1/query.rpc.Query";
import * as _96 from "./gov/v1beta1/query.rpc.Query";
import * as _97 from "./mint/v1beta1/query.rpc.Query";
import * as _98 from "./params/v1beta1/query.rpc.Query";
import * as _99 from "./staking/v1beta1/query.rpc.Query";
import * as _100 from "./staking/v2beta1/query.rpc.Query";
import * as _101 from "./tx/v1beta1/service.rpc.Service";
import * as _102 from "./upgrade/v1beta1/query.rpc.Query";
import * as _103 from "./authz/v1beta1/tx.rpc.msg";
import * as _104 from "./bank/v1beta1/tx.rpc.msg";
import * as _105 from "./distribution/v1beta1/tx.rpc.msg";
import * as _106 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _107 from "./gov/v1beta1/tx.rpc.msg";
import * as _108 from "./staking/v1beta1/tx.rpc.msg";
import * as _109 from "./staking/v2beta1/tx.rpc.msg";
import * as _110 from "./vesting/v1beta1/tx.rpc.msg";
import * as _111 from "./rpc.query";
import * as _112 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._91
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._75,
      ..._83,
      ..._92,
      ..._103
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._76,
      ..._84,
      ..._93,
      ..._104
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._15
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export const multisig = {
      ..._20
    };
    export const secp256k1 = {
      ..._21
    };
    export const secp256r1 = {
      ..._22
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._77,
      ..._85,
      ..._94,
      ..._105
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._78,
      ..._86,
      ..._95,
      ..._106
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._79,
      ..._87,
      ..._96,
      ..._107
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._97
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._98
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._80,
      ..._88,
      ..._99,
      ..._108
    };
    export const v2beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._81,
      ..._89,
      ..._100,
      ..._109
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._51
      };
    }
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._101
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._102
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._82,
      ..._90,
      ..._110
    };
  }
  export const ClientFactory = {
    ..._111,
    ..._112
  };
}