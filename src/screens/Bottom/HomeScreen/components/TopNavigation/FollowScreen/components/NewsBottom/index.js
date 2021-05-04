import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSize} from '../../../../../../../../../utils/responsive';
import Block from '../../../../../../../../components/Block';
import Actions from '../../../../../../../../redux/actions';
import styles from './styles';
const NewsBottom = ({group_id}) => {
  const dispatch = useDispatch();
  const newsbyGroup = useSelector(state => state.newsbyGroup.data);
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
    <Block row paddingHorizontal={getSize.m(12)}>
      {newsbyGroup?.length > 0 ? (
        <>
          <Block flex height={'100%'}>
            <Image
              source={{uri: newsbyGroup[1].picture}}
              style={styles.imgbanner}
              resizeMode="cover"
            />
          </Block>
          <Block width={getSize.s(2)} height={'100%'} />
          <Block column flex>
            <Block flex>
              <Image
                source={{uri: newsbyGroup[2].picture}}
                style={styles.imgbannerpicter1}
              />
            </Block>
            <Block width={'100%'} height={getSize.s(2)} />
            {newsbyGroup.length > 3 && (
              <Block backgroundColor={'red'} flex>
                <Image
                  source={{uri: newsbyGroup[3].picture}}
                  style={styles.imgbannerpicter1}
                />
              </Block>
            )}
          </Block>
        </>
      ) : null}
    </Block>
  );
};

export default NewsBottom;
