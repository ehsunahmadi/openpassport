import React from 'react';
import { YStack, Text, XStack, Separator, ScrollView } from 'tamagui';
import useUserStore from '../stores/userStore';
import { textBlack, separatorColor } from '../utils/colors';
import { parsePassportData } from '../utils/parsePassportData';

const UserInfo: React.FC = () => {
    const { passportData } = useUserStore();
    const passportMetaData = passportData ? parsePassportData(passportData) : null;

    const InfoRow = ({ label, value }: { label: string; value: string | number }) => (
        <XStack py="$2" justifyContent="space-between">
            <Text color={textBlack} fontSize="$5">{label}</Text>
            <Text color={textBlack} fontSize="$5">{value}</Text>
        </XStack>
    );

    return (
        <ScrollView>
            <YStack f={1} p="$0" gap="$2" jc="flex-start" py="$2" >
                <Text fontSize="$8" color={textBlack} mb="$4">Passport Data Info</Text>
                <Separator borderColor={separatorColor} />

                <InfoRow label="Data Groups" value={passportMetaData?.dataGroups || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="DG1 Hash Function" value={passportMetaData?.dg1HashFunction || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="DG1 Hash Offset" value={passportMetaData?.dg1HashOffset || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="eContent Size" value={passportMetaData?.eContentSize || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="eContent Hash Function" value={passportMetaData?.eContentHashFunction || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="eContent Hash Offset" value={passportMetaData?.eContentHashOffset || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="Signed Attributes Size" value={passportMetaData?.signedAttrSize || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="Signed Attributes Hash Function" value={passportMetaData?.signedAttrHashFunction || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="Signature Algorithm" value={passportMetaData?.signatureAlgorithm || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="Signature Algorithm Details" value={passportMetaData?.curveOrExponent || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="Signature Algorithm Bits" value={passportMetaData?.signatureAlgorithmBits || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="CSCA Found" value={passportMetaData?.cscaFound ? 'Yes' : 'No'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="CSCA Hash Function" value={passportMetaData?.cscaHashFunction || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="CSCA Signature Algorithm" value={passportMetaData?.cscaSignature || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="CSCA Signature Algorithm Details" value={passportMetaData?.cscaCurveOrExponent || 'None'} />
                <Separator borderColor={separatorColor} />

                <InfoRow label="CSCA Signature Algorithm Bits" value={passportMetaData?.cscaSignatureAlgorithmBits || 'None'} />
                <Separator borderColor={separatorColor} />
            </YStack>
        </ScrollView>
    );
};

export default UserInfo;