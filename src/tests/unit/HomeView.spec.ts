import { mount } from '@vue/test-utils';
import HomeView from '../../views/HomeView.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { describe, it, expect, vi } from 'vitest';

describe('HomeView.vue', () => {
    it('redirects to /login when the GO! button is clicked', async () => {
        const history = createMemoryHistory();
        const router = createRouter({ history, routes: [] });

        const wrapper = mount(HomeView, {
            global: {
                plugins: [router],
            },
        });

        const routerPushSpy = vi.spyOn(router, 'push');

        await wrapper.find('.custom-button').trigger('click');

        await wrapper.vm.$nextTick();

        expect(routerPushSpy).toHaveBeenCalledWith('/login');
    });
});
