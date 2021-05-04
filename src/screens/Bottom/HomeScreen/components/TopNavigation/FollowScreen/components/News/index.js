import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {theme} from '../../../../../../../../../theme';
import {getSize} from '../../../../../../../../../utils/responsive';
import Block from '../../../../../../../../components/Block';
import Text from '../../../../../../../../components/Text';
import {navigate} from '../../../../../../../../navigation/RootNavigation';
import {routes} from '../../../../../../../../navigation/routes';
import Actions from '../../../../../../../../redux/actions';
import styles from './styles';

const news = React.memo(({group_id}) => {
  const dispatch = useDispatch();
  const newsbyGroup = useSelector(state => state.newsbyGroup.data);
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      dispatch({
        type: Actions.GET_NEWS_BY_GROUP,
        params: {
          group_id,
        },
      });
    }, [dispatch, group_id]),
  );

  return (
    <Block paddingHorizontal={getSize.m(12)} marginBottom={getSize.m(10)}>
      {newsbyGroup?.length > 0 ? (
        <>
          <Pressable
            onPress={() => navigation.navigate(routes.PROMOTION_DETAILS)}>
            <Image
              source={{uri: newsbyGroup[0].picture}}
              style={styles.bannernews}
            />
            <Text numberOfLines={2} size={getSize.s(20)} fontType="bold">
              {newsbyGroup[0].title}
            </Text>
            <Block row marginTop={getSize.m(10)} space="between">
              <Block row alignCenter>
                <Text center size={12}>
                  Cập nhật {''}
                  <Text color={theme.colors.placeholder}>.</Text>
                </Text>
                <Text size={12} marginLeft={5} color={theme.colors.placeholder}>
                  {newsbyGroup[0].date_update}
                </Text>
              </Block>
              <Pressable onPress={() => navigate(routes.NEWS_DETAILS)}>
                <Text color={'blue'} size={12}>
                  xem tất cả
                </Text>
              </Pressable>
            </Block>
          </Pressable>
        </>
      ) : null}
    </Block>
  );
});

export default news;
