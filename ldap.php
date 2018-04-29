<?php

$ldap_dn = "uid= ".$_POST["username"].",dc = example, dc=com";
$ldap_password = "uid= ".$_POST["userpass"];

$ldap_con = ldap_connect("ldap.forumsys.com");
ldap_set_option($ldap_con, LDAP_OP_PROTOCOL_VERSION, 3);

if(ldap_bind($ldap_con, $ldap_dn, $ldap_password)){
    echo "Authenticated";
}
else{
    echo "Not Authenticated";
}
?>