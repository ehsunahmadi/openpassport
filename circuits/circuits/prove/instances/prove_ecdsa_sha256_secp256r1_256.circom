pragma circom 2.1.9;

include "../openpassport_prove.circom";

component main { public [  scope, user_identifier, current_date] } = OPENPASSPORT_PROVE(8, 64, 4, 384, 192, 20);